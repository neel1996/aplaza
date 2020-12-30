import { NextApiRequest, NextApiResponse } from "next";
import { projectDataType } from "./ProjectDataType";
import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";

export default async function addNewProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectData: projectDataType = req.body;
  const storageConnector = new StorageConnectionFactory().getStorageConnector();
  const result = await storageConnector.addProject(projectData);
  res.json({
    message: result,
  });
}
