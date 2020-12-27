export type dbConfigType = {
  dbHostName: string;
  dbPort: number;
  dbUserName: string;
  dbPassword: string;
};

export interface DatabaseConnectorInterface {
  databaseConfig: dbConfigType;
  readFromDB(): string;
  writeToDB(newData: string): void;
}
