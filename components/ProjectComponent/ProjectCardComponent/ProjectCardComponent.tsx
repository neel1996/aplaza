import { library } from "@fortawesome/fontawesome-svg-core";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useMemo, useState } from "react";
import ProjectDetailsComponent from "./ProjectDetailsComponent";
import ProjectLogoComponent from "./ProjectLogoComponent";

export default function ProjectCardComponent(props: {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectDueDate: string;
  projectRepoURL: string;
  projectCompleted: boolean;
}) {
  library.add(faGitAlt, faCloud, faHourglassHalf);
  useEffect(() => {}, [props]);

  const memoizedProjectDetailsComponent = useMemo(() => {
    return (
      <ProjectDetailsComponent
        projectId={props.projectId}
        projectName={props.projectName}
        projectDescription={props.projectDescription}
        projectCompleted={props.projectCompleted}
        projectDueDate={props.projectDueDate}
        projectRepoURL={props.projectRepoURL}
      ></ProjectDetailsComponent>
    );
  }, [props]);

  return (
    <div className="bg-indigo-400 border-l-8 border-indigo-700 shadow-md rounded-lg mx-4 xl:w-1/2 lg:w-2/3 md:w-3/4 w-11/12 my-10 transition-all cursor-pointer hover:shadow-xl">
      <div className="flex justify-between items-center" key={props.projectId}>
        <ProjectLogoComponent
          projectInitial={props.projectName && props.projectName[0]}
        ></ProjectLogoComponent>
        {memoizedProjectDetailsComponent}
      </div>
    </div>
  );
}
