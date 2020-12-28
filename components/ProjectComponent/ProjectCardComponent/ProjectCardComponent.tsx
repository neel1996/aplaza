import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import ProjectLogoComponent from "./ProjectLogoComponent";
import ProjectLabelComponent from "./ProjectLabelComponent";
import ProjectDetailsComponent from "./ProjectDetailsComponent";

export default function ProjectCardComponent() {
  library.add(faGitAlt, faCloud, faHourglassHalf);

  return (
    <div className="bg-indigo-400 border-l-8 border-indigo-700 shadow-md rounded-lg mx-6 xl:w-1/2 w-2/3 my-10 transition-all cursor-pointer hover:shadow-xl">
      <div className="flex justify-between items-center">
        <ProjectLogoComponent></ProjectLogoComponent>
        <ProjectDetailsComponent></ProjectDetailsComponent>
      </div>
    </div>
  );
}
