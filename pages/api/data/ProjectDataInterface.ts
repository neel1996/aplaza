import { projectDataType } from "./projectDataType";

export interface ProjectDataInterface {
  getAllProjectData(): projectDataType[];
  getProject(projectId: string): projectDataType;
  addProject(newProject: projectDataType): string;
  updateProject(projectId: string): projectDataType;
  deleteProject(projectId: string): projectDataType;
}
