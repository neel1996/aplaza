import React from "react";
import ProjectInfraComponent from "./ProjectInfraComponent";
import ProjectLabelComponent from "./ProjectLabelComponent";
import ProjectTimeComponent from "./ProjectDueDateComponent/ProjectTimeComponent";

export default function ProjectDetailsComponent(props: {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectDueDate: string;
  projectRepoURL: string;
  projectCompleted: boolean;
}) {
  return (
    <div className="block h-auto w-5/6 px-4 bg-white my-auto rounded-r-lg py-2">
      <ProjectLabelComponent
        projectName={props.projectName}
        projectDescription={props.projectDescription}
      ></ProjectLabelComponent>
      <ProjectTimeComponent
        projectDueDate={props.projectDueDate}
      ></ProjectTimeComponent>
      <ProjectInfraComponent></ProjectInfraComponent>
    </div>
  );
}
