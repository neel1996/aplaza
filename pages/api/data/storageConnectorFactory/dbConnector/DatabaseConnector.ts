import { ProjectDataInterface } from "../../ProjectDataInterface";
import { projectDataType } from "../../projectDataType";
import {
  DatabaseConnectorInterface,
  dbConfigType,
} from "./DatabaseConnectorInterface";

export class DatabaseConnector
  implements DatabaseConnectorInterface, ProjectDataInterface {
  constructor() {}

  databaseConfig: dbConfigType;

  readFromDB(): string {
    throw new Error("Method not implemented.");
  }
  writeToDB(newData: string): void {
    throw new Error("Method not implemented.");
  }
  getAllProjectData(): projectDataType[] {
    throw new Error("Method not implemented.");
  }
  getProject(projectId: string): projectDataType {
    throw new Error("Method not implemented.");
  }
  addProject(newProject: projectDataType): string {
    throw new Error("Method not implemented.");
  }
  updateProject(projectId: string): projectDataType {
    throw new Error("Method not implemented.");
  }
  deleteProject(projectId: string): projectDataType {
    throw new Error("Method not implemented.");
  }
}
