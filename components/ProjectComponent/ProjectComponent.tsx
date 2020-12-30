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
  type requestStatusType = "loading" | "error" | "done";
  const [requestStatus, setRequestStatus] = useState<requestStatusType>(
    "loading"
  );

  useEffect(() => {
    setRequestStatus("loading");
    axios
      .get("/api/getprojects", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        const projectData = res.data;
        setRequestStatus("done");
        setProjectData([...projectData]);
      })
      .catch((err) => {
        setRequestStatus("error");
        console.log(err);
      });
  });

  return (
    <div className="my-4 mx-6">
      {projectData && projectData.length ? (
        <>
          <div className="mx-4 font-sans font-semibold text-3xl text-gray-800 mb-10">
            Saved Projects
          </div>
          {projectData.map((data) => {
            if (!data.projectCompleted) {
              return (
                <ProjectCardComponent
                  {...data}
                  key={data.projectId}
                ></ProjectCardComponent>
              );
            }
            return null;
          })}
        </>
      ) : (
        <div className="my-4 mx-auto text-center w-3/4 p-6 rounded-lg shadow-md bg-white text-gray-800 text-xl font-semibold font-sans border-b-2 border-dashed border-gray-500">
          {requestStatus === "loading" ? (
            "There are no projects in the data store"
          ) : (
            <>
              {requestStatus === "error"
                ? "Error occurred while fetching projects"
                : null}
            </>
          )}
        </div>
      )}
    </div>
  );
}
