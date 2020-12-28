import { Client, QueryResult } from "pg";
import { ProjectDataInterface } from "../../ProjectDataInterface";
import { projectDataType } from "../../projectDataType";
import { projectIdGenerator } from "../projectIdGenerator";
import { DatabaseConnectorInterface } from "./DatabaseConnectorInterface";
import { DBDataSerializer } from "./DBDataSerializer";
import { PG_TABLE_NAME } from "./postgresConnectionConfig";
import { PostgresClient } from "./PostgresDBClient";
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
          SELECT * FROM ${this.pgTable}
        `
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
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
    } = newData;
    const projectId: string = projectIdGenerator();
    const newValue = [
      projectId,
      projectName,
      projectDescription,
      projectDueDate,
      projectRepoURL,
      false,
    ];
    const query = `INSERT INTO ${PG_TABLE_NAME}(project_id, project_name, project_description, project_due_date, project_repo_url, is_project_complete) 
    VALUES($1, $2, $3, $4, $5, $6)`;

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

  getProject(projectId: string): Promise<projectDataType> {
    throw new Error("Method not implemented.");
  }

  updateProject(projectId: string): Promise<projectDataType> {
    throw new Error("Method not implemented.");
  }
  deleteProject(projectId: string): Promise<projectDataType> {
    throw new Error("Method not implemented.");
  }
}
