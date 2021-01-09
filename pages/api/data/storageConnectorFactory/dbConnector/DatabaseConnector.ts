import { Client, QueryResult } from "pg";
import { ProjectDataInterface } from "../../ProjectDataInterface";
import { projectDataType } from "../../../ProjectDataType";
import { projectIdGenerator } from "../projectIdGenerator";
import { DatabaseConnectorInterface } from "./DatabaseConnectorInterface";
import { DBDataSerializer } from "./DBDataSerializer";
import { PG_TABLE_NAME } from "./postgresConnectionConfig";
import { PostgresClient } from "./PostgresDBClient";
import format from "date-fns/format";
export class DatabaseConnector
  implements DatabaseConnectorInterface, ProjectDataInterface {
  pgClient: Client;
  pgTable: string;

  constructor() {
    this.pgTable = PG_TABLE_NAME;
    const client = new PostgresClient().getPGClient();
    this.pgClient = client;
    this.pgClient.connect();
  }

  /**
   * Reads the data from the Database
   */
  async readFromDB(): Promise<QueryResult<any>> {
    return await this.pgClient
      .query(
        `
          SELECT project_id, project_name, project_description, project_due_date, project_repo_url, project_cloud_provider, is_project_complete FROM ${this.pgTable}
        `
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw Error(err);
      });
  }

  /**
   * Writes the project Data to the Database
   * @param newData
   */
  async writeToDB(newData: projectDataType): Promise<string | Error> {
    const {
      projectName,
      projectDescription,
      projectDueDate,
      projectRepoURL,
      projectCloudOption,
    } = newData;
    const projectId: string = projectIdGenerator();
    const newValue = [
      projectId,
      projectName,
      projectDescription,
      projectDueDate,
      projectRepoURL,
      projectCloudOption,
      false,
    ];
    const query = `INSERT INTO ${PG_TABLE_NAME}(project_id, project_name, project_description, project_due_date, project_repo_url, project_cloud_provider, is_project_complete) 
    VALUES($1, $2, $3, $4, $5, $6, $7)`;

    return await this.pgClient
      .query(query, newValue)
      .then((res) => {
        if (res.rowCount) {
          return `New`;
        }
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });
  }

  async getAllProjectData(): Promise<projectDataType[]> {
    const dbData = await this.readFromDB();

    if (dbData.rowCount) {
      const serializedData = new DBDataSerializer(dbData.rows).serializeData();
      return serializedData;
    }
    return null;
  }

  /**
   * Adds a new project to the Database
   * @param newProject
   */
  async addProject(newProject: projectDataType): Promise<string> {
    return await this.writeToDB(newProject)
      .then((res) => {
        return res.toString();
      })
      .catch((err) => {
        console.error(err);
        throw Error("Error occurred while writing to DB!");
      });
  }

  /**
   * Fetches and returns the required project from the Database
   * @param projectId
   */
  async getProject(projectId: string): Promise<projectDataType> {
    const allProjectData = await this.getAllProjectData();

    const selectedProject = allProjectData.filter((projectData) => {
      if (projectId === projectData.projectId) {
        return true;
      } else {
        return false;
      }
    });

    if (selectedProject && selectedProject[0]) {
      return selectedProject[0];
    } else {
      return null;
    }
  }

  /**
   * Updates a project from the Database
   * @param projectId
   * @param updatedProjectPayload
   */
  async updateProject(
    projectId: string,
    updatedProjectPayload: projectDataType
  ): Promise<projectDataType> {
    const convertedData = new DBDataSerializer([]).deSerializeData(
      updatedProjectPayload
    );

    const selectedProject = await this.getProject(projectId);

    if (selectedProject && selectedProject.projectId === projectId) {
      const formattedDueDate = format(
        new Date(convertedData.project_due_date),
        "yyyy-MM-dd"
      );

      const query = `UPDATE ${PG_TABLE_NAME} SET 
                      project_name='${convertedData.project_name}',
                      project_description='${convertedData.project_description}',
                      project_due_date='${formattedDueDate}',
                      project_repo_url='${convertedData.project_repo_url}',
                      is_project_complete=${convertedData.is_project_complete},
                      project_cloud_provider='${convertedData.project_cloud_provider}'
                     WHERE project_id='${projectId}'`;

      return await this.pgClient
        .query(query)
        .then((res) => {
          if (res.rows) {
            return selectedProject;
          }
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    }
  }

  /**
   * Deletes a project from the DB
   * @param projectId
   */
  async deleteProject(projectId: string): Promise<projectDataType> {
    const allProjectData = await this.getAllProjectData();
    let deletedProject;

    const isProjectPresent: boolean = allProjectData.some((projectData) => {
      if (projectId === projectData.projectId) {
        deletedProject = projectData;
        return true;
      }
    });

    if (isProjectPresent && projectId) {
      const query = `DELETE FROM ${PG_TABLE_NAME} WHERE project_id='${projectId}'`;
      return await this.pgClient
        .query(query)
        .then((res) => {
          return deletedProject;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    }
  }
}
