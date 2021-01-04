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

  if (project && project.projectId) {
    res.statusCode = 200;
    res.json(project);
  } else {
    res.statusCode = 404;
    res.json({
      message: `${projectId} could not be found in the data store`,
    });
  }
}
