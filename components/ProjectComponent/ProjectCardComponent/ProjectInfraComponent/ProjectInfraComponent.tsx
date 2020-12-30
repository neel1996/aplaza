import { library } from "@fortawesome/fontawesome-svg-core";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProjectRepositoryComponent from "./ProjectRepositoryComponent";

export default function ProjectInfraComponent(props: {
  projectRepoURL: string;
}) {
  library.add(faGitAlt, faCloud);

  return (
    <div className="my-4 text-center flex items-center justify-start gap-10">
      <ProjectRepositoryComponent
        repoURL={props.projectRepoURL}
      ></ProjectRepositoryComponent>
      <div className="cloud mx-1 flex items-center">
        <div className="text-2xl font-sans text-gray-400 mx-1">
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
        </div>
        <div className="font-sans text-gray-400">{`{{AWS}}`}</div>
      </div>
    </div>
  );
}
