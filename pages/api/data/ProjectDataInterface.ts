import { projectDataType } from "./projectDataType";

export interface ProjectDataInterface {
  getAllProjectData(): Promise<projectDataType[]>;
  getProject(projectId: string): Promise<projectDataType>;
  addProject(newProject: projectDataType): Promise<string>;
  updateProject(projectId: string): Promise<projectDataType>;
  deleteProject(projectId: string): Promise<projectDataType>;
}
