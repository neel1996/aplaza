import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";
import { projectDataType } from "./data/projectDataType";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const storageConnector = new StorageConnectionFactory().getStorageConnector();
  let projects: projectDataType[] = await storageConnector.getAllProjectData();
  res.json(projects);
}
