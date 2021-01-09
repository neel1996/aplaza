import React from "react";
import ProjectCloudComponent from "./ProjectCloudComponent";
import ProjectRepositoryComponent from "./ProjectRepositoryComponent";

export default function ProjectInfraComponent(props: {
  projectRepoURL: string;
  projectCloudOption: string;
}) {
  return (
    <div className="my-4 text-center flex items-center justify-start gap-10">
      <ProjectRepositoryComponent
        repoURL={props.projectRepoURL}
      ></ProjectRepositoryComponent>
      {props.projectCloudOption ? (
        <ProjectCloudComponent
          projectCloudOption={props.projectCloudOption}
        ></ProjectCloudComponent>
      ) : null}
    </div>
  );
}
