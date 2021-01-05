import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { StorageConnectionFactory } from "./data/storageConnectorFactory/StorageConnectorFactory";

export default async function markProjectAsComplete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectId: string = req.body.projectId;
  const storageConnector = new StorageConnectionFactory().getStorageConnector();
  const projectToBeUpdated = await storageConnector.getProject(projectId);

  if (projectToBeUpdated && projectToBeUpdated.projectId) {
    projectToBeUpdated.projectCompleted = true;
    const updateStatus = await storageConnector.updateProject(
      projectId,
      projectToBeUpdated
    );

    if (updateStatus) {
      res.statusCode = 200;
      res.json({
        message: `${updateStatus.projectId} has been marked as completed`,
      });
    } else {
      res.statusCode = 404;
      res.json({
        message: `${projectId} could not be located!`,
      });
    }
  }
}
