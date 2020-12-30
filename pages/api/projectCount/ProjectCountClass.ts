import { projectDataType } from "../ProjectDataType";
import { ProjectCountInterface } from "./ProjectCountInterface";
import { ProjectCountStatType } from "./ProjectCountStatType";
import { differenceInCalendarDays } from "date-fns";

export default class ProjectCountClass implements ProjectCountInterface {
  projectData: projectDataType[];
  constructor(projectData) {
    this.projectData = projectData;
  }

  /**
   * returns the number of completed projects based on the completion indicator
   * received from the Data store
   */
  getCompletedProjectCount(): number {
    let projectData = this.projectData;
    let completedCount = 0;

    projectData.forEach((project) => {
      if (project.projectCompleted) {
        completedCount++;
      }
    });

    return completedCount;
  }

  /**
   * returns the number of projects that have crossed the due date
   */
  getOverDueProjectCount(): number {
    let projectData = this.projectData;
    let overdueCount = 0;

    projectData.forEach((project) => {
      let now = new Date();
      let compareDate = new Date(project.projectDueDate);
      let diff = differenceInCalendarDays(compareDate, now);
      if (diff < 0) {
        overdueCount++;
      }
    });

    return overdueCount;
  }

  /**
   * returns the total number of projects available in the data store
   */
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
