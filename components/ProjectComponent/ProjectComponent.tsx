import React, { useEffect, useMemo, useState } from "react";
import ProjectCardComponent from "./ProjectCardComponent/ProjectCardComponent";
import axios from "axios";

export default function ProjectComponent() {
  const [projectData, setProjectData] = useState<
    {
      projectId: string;
      projectName: string;
      projectDescription: string;
      projectDueDate: string;
      projectRepoURL: string;
      projectCompleted: boolean;
    }[]
  >([]);

  useEffect(() => {
    axios
      .get("/api/getprojects", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        const projectData = res.data;
        setProjectData([...projectData]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="my-4 mx-6">
      <div className="font-sans font-semibold text-3xl text-gray-800 mb-10">
        Saved Projects
      </div>
      {projectData &&
        projectData.map((data) => {
          return (
            <ProjectCardComponent
              {...data}
              key={data.projectId}
            ></ProjectCardComponent>
          );
        })}
    </div>
  );
}
