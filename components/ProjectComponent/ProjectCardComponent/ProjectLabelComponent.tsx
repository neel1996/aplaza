import React from "react";

export default function ProjectLabelComponent(props: {
  projectName: string;
  projectDescription: string;
}) {
  return (
    <div>
      <div className="font-sans font-semibold text-gray-700 text-3xl">
        {props.projectName}
      </div>
      <div className="font-sans font-light text-gray-600 my-2 truncate">
        {props.projectDescription}
      </div>
    </div>
  );
}
