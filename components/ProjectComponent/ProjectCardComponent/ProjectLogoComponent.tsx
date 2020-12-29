import React from "react";

export default function ProjectLogoComponent(props: {
  projectInitial: string;
}) {
  return (
    <div className="px-10 py-20 mx-auto project-initial w-1/5 rounded-l-lg text-5xl text-center text-white">
      {props.projectInitial.toUpperCase()}
    </div>
  );
}
