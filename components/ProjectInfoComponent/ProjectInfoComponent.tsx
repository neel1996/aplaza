import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectStatusComponent from "../ProjectComponent/ProjectCardComponent/ProjectDueDateComponent/ProjectStatusComponent";
import PopupActionComponent from "./PopupActionComponent";
import { projectDataType } from "./ProjectDataTypeDefenition";
import { ProjectInfoData } from "./projectInfoData";

export default function ProjectInfoComponent(props: {
  projectId: string;
  routeRef: string;
}) {
  const [projectData, setProjectData] = useState<projectDataType>({
    projectId: "",
    projectCompleted: false,
    projectDescription: "",
    projectName: "",
    projectDueDate: "",
    projectRepoURL: "",
  });
  const [initiateDelete, setInitiateDelete] = useState(false);
  const [initiateComplete, setInitiateComplete] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (props.projectId) {
      axios
        .get(`/api/getproject?projectId=${props.projectId}`, {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          if (res.data) {
            setProjectData(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          setFetchError(true);
        });
    }
  }, [props.projectId]);

  function setPopUpState(status: false) {
    setInitiateDelete(status);
    setInitiateComplete(status);
  }

  return (
    <div className="my-10 mx-auto w-11/12 xl:w-3/4 lg:w-3/4 h-full rounded-lg bg-white shadow-lg border border-blue-100">
      {fetchError ? (
        <div className="text-center p-10 mx-auto font-semibold font-sans text-pink-300 text-2xl border-2 border-dashed border-pink-500 rounded-lg">
          {props.projectId} could not be found in the data store!
        </div>
      ) : (
        <>
          <div className="mx-4 my-10 xl:mx-10 lg:mx-10 project-title flex w-full xl:w-1/3 lg:w-1/3">
            <div className="text-4xl font-semibold font-sans text-gray-700">
              {projectData.projectName}
            </div>
            {props.routeRef !== "completed" ? (
              <ProjectStatusComponent
                projectDueDate={projectData.projectDueDate}
              ></ProjectStatusComponent>
            ) : null}
          </div>
          <div className="mx-5 xl:mx-14 lg:mx-14 md:mx-10 my-10">
            {projectData &&
              ProjectInfoData &&
              ProjectInfoData.map((infoData) => {
                const { icon, label, key } = infoData;

                return (
                  <div
                    className="block xl:flex lg:flex items-center justify-start w-full my-6"
                    key={key}
                  >
                    <div className="flex items-center w-full xl:w-1/3 lg:w-1/3 text-blue-300 text-3xl">
                      <div>
                        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                      </div>
                      <div className="mx-4 font-semibold font-sans border-b text-xl">
                        {label}
                      </div>
                    </div>
                    <div className="w-full xl:w-4/5 lg:w-4/5 my-3 xl:my-0 lg:my-0 text-xl xl:text-2xl font-light font-sans text-gray-800">
                      {projectData[key]}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="mt-10 flex w-full mx-auto justify-between items-center">
            <div
              className={`${
                props.routeRef === "completed" ? "w-full" : "w-1/2"
              } cursor-pointer rounded-bl-lg text-base xl:text-xl lg:text-xl text-white p-4 bg-gradient-to-t from-pink-400 to-pink-500 shadow-inner hover:to-pink-400 font-sans font-semibold text-center`}
              onClick={(e) => {
                setInitiateDelete(true);
              }}
            >
              DELETE
            </div>
            {props.routeRef !== "completed" ? (
              <div
                className="w-1/2 cursor-pointer rounded-br-lg text-base xl:text-xl lg:text-xl text-white p-4 bg-gradient-to-t from-green-400 to-green-500 shadow-inner hover:to-green-400 font-sans font-semibold text-center"
                onClick={(e) => {
                  setInitiateComplete(true);
                }}
              >
                COMPLETED ?
              </div>
            ) : null}
          </div>
        </>
      )}

      {initiateDelete && projectData.projectId ? (
        <PopupActionComponent
          projectId={projectData.projectId}
          setParentStatus={setPopUpState}
          labelText="Are you sure you want to delete the project?"
          apiRoute={"/api/deleteproject"}
          failureMessage="Deletion Failed!"
          successMessage="Project has been removed"
          actionText="DELETE"
          colorRange={["from-red-400", "to-red-500", "to-red-400"]}
        ></PopupActionComponent>
      ) : null}
      {initiateComplete ? (
        <PopupActionComponent
          projectId={projectData.projectId}
          setParentStatus={setPopUpState}
          labelText="Are you sure you want to mark the project as complete?"
          apiRoute={"/api/completeproject"}
          failureMessage="Status Update Failed!"
          successMessage="Project has been marked as complete"
          actionText="COMPLETE"
          colorRange={["from-green-400", "to-green-500", "to-green-400"]}
        ></PopupActionComponent>
      ) : null}
    </div>
  );
}
