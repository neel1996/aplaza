import fs from "fs";
import { projectDataType } from "../../projectDataType";
import { ProjectDataInterface } from "../../ProjectDataInterface";
import { DataFileConnectorInterface } from "./DataFileConnectorInterface";
import { DATA_FILE_PATH } from "./dataFilePath";

export class DataFileConnector
  implements DataFileConnectorInterface, ProjectDataInterface {
  constructor() {}

  dataFilePath: string = DATA_FILE_PATH;

  /**
   * Reads the data file and returns the stringified file content
   * @returns string
   * @param void
   */
  readDataFile(): string {
    const fileData: string = fs
      .readFileSync(this.dataFilePath)
      .toString("utf-8");
    return fileData;
  }

  writeDataFile(newData: string): void {
    fs.writeFileSync(this.dataFilePath, newData);
  }

  /**
   * getAllProjectData returns all the projects available in the JSON data file
   * @param void
   * @returns All the projects as array
   */
  getAllProjectData(): projectDataType[] {
    let fileData = this.readDataFile();
    let parsedData: projectDataType[] = JSON.parse(fileData);
    return parsedData;
  }

  /**
   * This method returns the project data based on the supplied projectId
   * @param projectId
   * @returns the project data
   */
  getProject(projectId: string): projectDataType {
    let allProjectData = this.getAllProjectData();
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
  addProject(newProject: projectDataType): string {
    let allProjectData = this.getAllProjectData();
    allProjectData.push(newProject);

    let stringifiedData = JSON.stringify(allProjectData);
    this.writeDataFile(stringifiedData);
    return `New project with ${newProject.projectName} has been added to the data store`;
  }

  updateProject(projectId: string): projectDataType {
    throw new Error("Method not implemented.");
  }

  /**
   * deletes a project from the data file based on the projectId
   * @param projectId
   * @returns the deleted project data
   */
  deleteProject(projectId: string): projectDataType {
    let allProjectData = this.getAllProjectData();
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
