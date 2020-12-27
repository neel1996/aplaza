export interface DataFileConnectorInterface {
  dataFilePath: string;
  readDataFile(): Promise<string>;
  writeDataFile(newData: string): void;
}
