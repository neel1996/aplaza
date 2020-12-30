export type storageMode = "database" | "dataFile";

export function getStorageMode(): storageMode {
  // For using JSON data file, enable the following return statement
  return "dataFile";

  // For using postgresql database, enable the following return statement
  // return "database";
}
