import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";
import { projectDataType } from "./ProjectDataType";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const storageConnector = new StorageConnectionFactory().getStorageConnector();
  let projects: projectDataType[] = await storageConnector.getAllProjectData();

  if (projects && projects.length) {
    res.json(projects);
  } else {
    res.json({
      message: "No projects present in Data store",
    });
  }
}
