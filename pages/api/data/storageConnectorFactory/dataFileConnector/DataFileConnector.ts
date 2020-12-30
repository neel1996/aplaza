import fs from "fs";
import { projectDataType } from "../../../ProjectDataType";
import { ProjectDataInterface } from "../../ProjectDataInterface";
import { DataFileConnectorInterface } from "./DataFileConnectorInterface";
import { DATA_FILE_PATH } from "./dataFilePath";
import { projectIdGenerator } from "../projectIdGenerator";

export class DataFileConnector
  implements DataFileConnectorInterface, ProjectDataInterface {
  constructor() {}

  dataFilePath: string = DATA_FILE_PATH;

  /**
   * Reads the data file and returns the stringified file content
   * @returns string
   * @param void
   */
  async readDataFile(): Promise<string> {
    const fileData = await fs.promises
      .readFile(this.dataFilePath)
      .then((res) => {
        return res.toString("utf-8");
      })
      .catch((err) => {
        console.log(err);
      });

    if (fileData) {
      return fileData;
    } else {
      return "";
    }
  }

  writeDataFile(newData: string): void {
    fs.writeFileSync(this.dataFilePath, newData);
  }

  /**
   * getAllProjectData returns all the projects available in the JSON data file
   * @param void
   * @returns All the projects as array
   */
  async getAllProjectData(): Promise<projectDataType[]> {
    let fileData = await this.readDataFile();
    let parsedData: projectDataType[];
    try {
      parsedData = JSON.parse(fileData);
      return parsedData;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  /**
   * This method returns the project data based on the supplied projectId
   * @param projectId
   * @returns the project data
   */
  async getProject(projectId: string): Promise<projectDataType> {
    let allProjectData = await this.getAllProjectData();
    let project = allProjectData.find((project: projectDataType) => {
      if (projectId === project.projectId) {
        return true;
      }
    });
    return project;
  }

  /**
   * adds a new project to the data file
   * @param newProject
   * @returns A message with the newly added project name
   */
  async addProject(newProject: projectDataType): Promise<string> {
    let allProjectData = await this.getAllProjectData();
    newProject.projectId = projectIdGenerator();
    newProject.projectCompleted = false;

    allProjectData.push(newProject);

    let stringifiedData = JSON.stringify(allProjectData, null, 2);
    this.writeDataFile(stringifiedData);
    return `New project with ${newProject.projectName} has been added to the data store`;
  }

  async updateProject(projectId: string): Promise<projectDataType> {
    throw new Error("Method not implemented.");
  }

  /**
   * deletes a project from the data file based on the projectId
   * @param projectId
   * @returns the deleted project data
   */
  async deleteProject(projectId: string): Promise<projectDataType> {
    let allProjectData = await this.getAllProjectData();
    let deletedProject: projectDataType;

    let updatedProjectData = allProjectData.filter(
      (project: projectDataType) => {
        if (projectId === project.projectId) {
          return false;
        }
        return true;
      }
    );

    this.writeDataFile(JSON.stringify(updatedProjectData));
    return deletedProject;
  }
}
