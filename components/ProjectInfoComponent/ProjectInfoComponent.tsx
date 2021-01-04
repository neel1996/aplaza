import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectStatusComponent from "../ProjectComponent/ProjectCardComponent/ProjectDueDateComponent/ProjectStatusComponent";
import DeleteProjectComponent from "./DeleteProjectComponent";
import { projectDataType } from "./ProjectDataTypeDefenition";
import { ProjectInfoData } from "./projectInfoData";

export default function ProjectInfoComponent(props: { projectId: string }) {
  const [projectData, setProjectData] = useState<projectDataType>({
    projectId: "",
    projectCompleted: false,
    projectDescription: "",
    projectName: "",
    projectDueDate: "",
    projectRepoURL: "",
  });
  const [initiateDelete, setInitiateDelete] = useState(false);
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

  function setDeletePopUpState(status: false) {
    setInitiateDelete(status);
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
            <ProjectStatusComponent
              projectDueDate={projectData.projectDueDate}
            ></ProjectStatusComponent>
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
              className="w-1/2 cursor-pointer rounded-bl-lg text-base xl:text-xl lg:text-xl text-white p-4 bg-gradient-to-t from-pink-400 to-pink-500 shadow-inner hover:to-pink-400 font-sans font-semibold text-center"
              onClick={(e) => {
                setInitiateDelete(true);
              }}
            >
              DELETE
            </div>
            <div className="w-1/2 cursor-pointer rounded-br-lg text-base xl:text-xl lg:text-xl text-white p-4 bg-gradient-to-t from-green-400 to-green-500 shadow-inner hover:to-green-400 font-sans font-semibold text-center">
              MARK AS COMPLETE
            </div>
          </div>
        </>
      )}

      {initiateDelete && projectData.projectId ? (
        <DeleteProjectComponent
          projectId={projectData.projectId}
          setDeleteStatus={setDeletePopUpState}
        ></DeleteProjectComponent>
      ) : null}
    </div>
  );
}
