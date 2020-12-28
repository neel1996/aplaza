import { projectDataType } from "./../../projectDataType";
export type dbConfigType = {
  dbHostName: string;
  dbPort: number;
  dbUserName: string;
  dbPassword: string;
};
export interface DatabaseConnectorInterface {
  readFromDB(): Promise<any>;
  writeToDB(newData: projectDataType): Promise<string | Error>;
}
