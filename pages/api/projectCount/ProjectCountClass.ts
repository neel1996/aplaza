import { projectDataType } from "../data/projectDataType";
import { ProjectCountInterface } from "./ProjectCountInterface";
import { ProjectCountStatType } from "./ProjectCountStatType";

export default class ProjectCountClass implements ProjectCountInterface {
  projectData: projectDataType[];
  constructor(projectData) {
    this.projectData = projectData;
  }

  getCompletedProjectCount(): number {
    // TODO: Include logic to count number of completed projects
    return 0;
  }
  getOverDueProjectCount(): number {
    // TODO: Include logic to count number of projects exceeding due date
    return 0;
  }
  getTotalProjectCount(): number {
    return this.projectData ? this.projectData.length : 0;
  }

  public getProjectCountStatus(): ProjectCountStatType {
    let projectCountStat: ProjectCountStatType = {
      totalProjects: this.getTotalProjectCount(),
      overdueProjects: this.getOverDueProjectCount(),
      completedProjects: this.getCompletedProjectCount(),
    };

    return projectCountStat;
  }
}
