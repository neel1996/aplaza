export interface DataFileConnectorInterface {
  dataFilePath: string;
  readDataFile(): string;
  writeDataFile(newData: string): void;
}
