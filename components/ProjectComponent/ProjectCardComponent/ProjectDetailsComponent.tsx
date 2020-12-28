import React from "react";
import ProjectInfraComponent from "./ProjectInfraComponent";
import ProjectLabelComponent from "./ProjectLabelComponent";
import ProjectTimeComponent from "./ProjectTimeComponent";

export default function ProjectDetailsComponent() {
  return (
    <div className="block h-auto w-5/6 px-4 bg-white my-auto rounded-r-lg py-2">
      <ProjectLabelComponent></ProjectLabelComponent>
      <ProjectTimeComponent></ProjectTimeComponent>
      <ProjectInfraComponent></ProjectInfraComponent>
    </div>
  );
}
