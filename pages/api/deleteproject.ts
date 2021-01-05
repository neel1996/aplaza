import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";
export default async function deleteProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectId: string = req.body.projectId;
  const storageConnector = new StorageConnectionFactory().getStorageConnector();
  const deletedProject = await storageConnector.deleteProject(projectId);

  if (deletedProject && deletedProject.projectId) {
    res.statusCode = 204;
    res.json({
      projectId: projectId,
      message: "Project deleted from the data store",
    });
  } else {
    res.statusCode = 404;
    res.json({
      message: "Project could not be located in the datastore",
    });
  }
}
