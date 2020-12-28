import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";
import ProjectCountClass from "./projectCount/ProjectCountClass";

export default async function getProjectCount(req, res) {
  const storageConnectionFactory = new StorageConnectionFactory().getStorageConnector();
  let allProjectData = await storageConnectionFactory.getAllProjectData();

  const projectCountStat = new ProjectCountClass(
    allProjectData
  ).getProjectCountStatus();
  res.json(projectCountStat);
}
