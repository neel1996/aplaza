import fs from "fs";
import path from "path";
import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";
import ProjectCountClass from "./projectCount/ProjectCountClass";

export default function getProjectCount(req, res) {
  const storageConnectionFactory = new StorageConnectionFactory().getStorageConnector();
  let allProjectData = storageConnectionFactory.getAllProjectData();

  const projectCountStat = new ProjectCountClass(
    allProjectData
  ).getProjectCountStatus();
  res.json(projectCountStat);
}
