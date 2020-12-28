import { library } from "@fortawesome/fontawesome-svg-core";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProjectInfraComponent() {
  library.add(faGitAlt, faCloud);

  return (
    <div className="my-4 text-center flex items-center justify-start gap-10">
      <div className="repo flex items-center">
        <div className="text-2xl font-sans text-gray-400 mx-1">
          <FontAwesomeIcon icon={faGitAlt}></FontAwesomeIcon>
        </div>
        <div className="font-sans text-gray-400">github</div>
      </div>
      <div className="cloud mx-1 flex items-center">
        <div className="text-2xl font-sans text-gray-400 mx-1">
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
        </div>
        <div className="font-sans text-gray-400">AWS</div>
      </div>
    </div>
  );
}
