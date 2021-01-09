import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectCardComponent from "../ProjectComponent/ProjectCardComponent/ProjectCardComponent";

export default function CompletedComponent() {
  type projectStateType = {
    projectId: string;
    projectName: string;
    projectDescription: string;
    projectDueDate: string;
    projectRepoURL: string;
    projectCompleted: boolean;
  }[];
  const [projectData, setProjectData] = useState<projectStateType>([]);

  type requestStatusType = "loading" | "error" | "done";
  const [requestStatus, setRequestStatus] = useState<requestStatusType>(
    "loading"
  );
  const [noneComplete, setNoneComplete] = useState(false);

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
        const projectData: projectStateType = res.data;
        setRequestStatus("done");
        let isAnyComplete: boolean = false;
        isAnyComplete = projectData.some((item) => {
          if (item.projectCompleted) {
            return true;
          }
        });

        setNoneComplete(!isAnyComplete);
        setProjectData([...projectData]);
      })
      .catch((err) => {
        setRequestStatus("error");
        console.log(err);
      });
  }, []);

  return (
    <div className="my-20 mx-6 pb-24">
      {requestStatus !== "loading" &&
      projectData &&
      projectData.length &&
      !noneComplete ? (
        <>
          <div className="mx-4 font-sans font-semibold text-3xl text-gray-800 mb-10">
            Completed Projects
          </div>
          {projectData.map((data) => {
            if (data.projectCompleted) {
              return (
                <ProjectCardComponent
                  {...data}
                  route="completed"
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
            : "No projects have been marked as complete"}
          {requestStatus === "error"
            ? "Error occurred while fetching projects"
            : null}
        </div>
      )}
    </div>
  );
}
