import React from "react";
import ProjectCardComponent from "./ProjectCardComponent/ProjectCardComponent";

export default function ProjectComponent() {
  return (
    <div className="my-4 mx-6">
      <div className="font-sans font-semibold text-3xl text-gray-800 mb-10">
        Saved Projects
      </div>
      <ProjectCardComponent></ProjectCardComponent>
    </div>
  );
}
