import Link from "next/link";
import React, { useMemo } from "react";
import ProjectDetailsComponent from "./ProjectDetailsComponent";
import ProjectLogoComponent from "./ProjectLogoComponent";

export default function ProjectCardComponent(props: {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectDueDate: string;
  projectRepoURL: string;
  projectCompleted: boolean;
  route: string;
}) {
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
    <Link href={`/project/${props.projectId}?ref=${props.route}`}>
      <div className="bg-indigo-400 border-l-8 border-indigo-700 shadow-md rounded-lg mx-4 xl:w-1/2 lg:w-2/3 md:w-3/4 w-11/12 my-10 transition-all cursor-pointer hover:shadow-xl">
        <div
          className="flex justify-between items-center"
          key={props.projectId}
        >
          {props.projectName && props.projectName[0] ? (
            <ProjectLogoComponent
              projectInitial={props.projectName[0]}
            ></ProjectLogoComponent>
          ) : null}

          {memoizedProjectDetailsComponent}
        </div>
      </div>
    </Link>
  );
}
