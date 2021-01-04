import React from "react";

export default function ProjectLogoComponent(props: {
  projectInitial: string;
}) {
  return (
    <div className="px-10 py-20 mx-auto project-initial xl:w-1/5 lg:w-1/5 w-1/4 hidden xl:block lg:block rounded-l-lg text-5xl text-center text-white">
      {props.projectInitial ? props.projectInitial.toUpperCase() : ""}
    </div>
  );
}
