import { projectDataType } from "./ProjectDataType";
import { NextApiRequest, NextApiResponse } from "next";
import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";

export default async function getProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { projectId } = req.query;
  const storageConnector = new StorageConnectionFactory().getStorageConnector();
  let project: projectDataType = await storageConnector.getProject(
    projectId.toString()
  );
  res.json(project);
}
