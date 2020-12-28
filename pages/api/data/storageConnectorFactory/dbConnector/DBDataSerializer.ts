import { projectDataType } from "../../projectDataType";

export class DBDataSerializer {
  rawDbData: any[];
  constructor(rawDbData) {
    this.rawDbData = rawDbData;
  }

  public serializeData(): projectDataType[] {
    const serializedData = this.rawDbData.map((data) => {
      const {
        project_id,
        project_name,
        project_description,
        project_due_date,
        project_repo_url,
      } = data;

      return {
        projectId: project_id,
        projectName: project_name,
        projectDescription: project_description,
        projectDueDate: project_due_date,
        projectRepoURL: project_repo_url,
        projectCompleted: false,
      };
    });

    return serializedData;
  }
}