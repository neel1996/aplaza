import { projectDataType } from "../../../ProjectDataType";

export class DBDataSerializer {
  rawDbData: any[];
  constructor(rawDbData) {
    this.rawDbData = rawDbData;
  }

  /**
   * converts the Data read from the DB to the actual project datatype
   */
  public serializeData(): projectDataType[] {
    const serializedData = this.rawDbData.map((data) => {
      const {
        project_id,
        project_name,
        project_description,
        project_due_date,
        project_repo_url,
        project_cloud_provider,
        is_project_complete,
      } = data;

      return {
        projectId: project_id,
        projectName: project_name,
        projectDescription: project_description,
        projectDueDate: project_due_date,
        projectRepoURL: project_repo_url,
        projectCloudOption: project_cloud_provider,
        projectCompleted: is_project_complete,
      };
    });

    return serializedData;
  }

  /**
   * converts project data type to the type compatible with the PG Database
   * @param data
   */
  public deSerializeData(data: projectDataType) {
    const {
      projectId,
      projectName,
      projectDescription,
      projectDueDate,
      projectRepoURL,
      projectCloudOption,
      projectCompleted,
    } = data;

    return {
      project_id: projectId,
      project_name: projectName,
      project_description: projectDescription,
      project_due_date: projectDueDate,
      project_repo_url: projectRepoURL,
      project_cloud_provider: projectCloudOption,
      is_project_complete: projectCompleted,
    };
  }
}
