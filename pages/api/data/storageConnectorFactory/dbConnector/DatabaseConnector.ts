import { DBDataSerializer } from "./DBDataSerializer";
import { PG_TABLE_NAME } from "./postgresConnectionConfig";
import { Client, QueryResult } from "pg";
import { PostgresClient } from "./PostgresDBClient";
import { ProjectDataInterface } from "../../ProjectDataInterface";
import { projectDataType } from "../../projectDataType";
import {
  DatabaseConnectorInterface,
  dbConfigType,
} from "./DatabaseConnectorInterface";

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

  writeToDB(newData: string): void {
    throw new Error("Method not implemented.");
  }

  async getAllProjectData(): Promise<projectDataType[]> {
    const dbData = await this.readFromDB();

    if (dbData.rowCount) {
      const serializedData = new DBDataSerializer(dbData.rows).serializeData();
      return serializedData;
    }
    return null;
  }

  getProject(projectId: string): Promise<projectDataType> {
    throw new Error("Method not implemented.");
  }
  addProject(newProject: projectDataType): Promise<string> {
    throw new Error("Method not implemented.");
  }
  updateProject(projectId: string): Promise<projectDataType> {
    throw new Error("Method not implemented.");
  }
  deleteProject(projectId: string): Promise<projectDataType> {
    throw new Error("Method not implemented.");
  }
}
