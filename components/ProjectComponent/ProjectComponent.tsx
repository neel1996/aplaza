import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectCardComponent from "./ProjectCardComponent/ProjectCardComponent";

export default function ProjectComponent() {
  type projectStateType = {
    projectId: string;
    projectName: string;
    projectDescription: string;
    projectDueDate: string;
    projectRepoURL: string;
    projectCloudOption: string;
    projectCompleted: boolean;
  }[];
  const [projectData, setProjectData] = useState<projectStateType>([]);

  type requestStatusType = "loading" | "error" | "done";
  const [requestStatus, setRequestStatus] = useState<requestStatusType>(
    "loading"
  );
  const [allComplete, setAllComplete] = useState(false);

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
        if (res.data && res.data.message) {
          setRequestStatus("done");
          setProjectData([]);
        } else {
          const projectData: projectStateType = res.data;
          setRequestStatus("done");
          const isAllComplete = projectData.every((item) => {
            if (item.projectCompleted) {
              return true;
            } else {
              return false;
            }
          });

          setAllComplete(isAllComplete);
          setProjectData([...projectData]);
        }
      })
      .catch((err) => {
        setRequestStatus("error");
        console.log(err);
      });
  }, []);

  return (
    <div className="my-4 mx-6 pb-24">
      {requestStatus !== "loading" &&
      projectData &&
      projectData.length &&
      !allComplete ? (
        <>
          <div className="mx-4 font-sans font-semibold text-3xl text-gray-800 mb-10">
            Saved Projects
          </div>
          {projectData.map((data) => {
            if (!data.projectCompleted) {
              return (
                <ProjectCardComponent
                  {...data}
                  route="project"
                  key={data.projectId}
                ></ProjectCardComponent>
              );
            }
            return null;
          })}
        </>
      ) : (
        <div className="my-4 mx-auto text-center w-3/4 p-6 rounded-lg shadow-md bg-white text-gray-800 text-xl font-semibold font-sans border-b-2 border-dashed border-gray-500">
          {requestStatus === "loading" ? "Loading..." : null}
          {requestStatus !== "loading" && projectData.length === 0
            ? "There are no projects in the data store"
            : "Click on COMPLETED to see all the projects marked as completed"}
          {requestStatus === "error"
            ? "Error occurred while fetching projects"
            : null}
        </div>
      )}
    </div>
  );
}
