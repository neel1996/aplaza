import { DataFileConnector } from "./dataFileConnector/DataFileConnector";
import { DatabaseConnector } from "./dbConnector/DatabaseConnector";
import { getStorageMode, storageMode } from "./storageConfig";

export class StorageConnectionFactory {
  storageMode: storageMode;
  constructor() {
    this.storageMode = getStorageMode();
  }

  getStorageConnector(): DataFileConnector | DatabaseConnector {
    if (this.storageMode === "dataFile") {
      return new DataFileConnector();
    } else if (this.storageMode === "database") {
      return new DatabaseConnector();
    }
  }
}
