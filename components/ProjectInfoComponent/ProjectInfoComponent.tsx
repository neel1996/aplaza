import React, { useEffect, useState } from "react";
import axios from "axios";
import { projectDataType } from "../../pages/api/data/ProjectDataType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ProjectStatusComponent from "../ProjectComponent/ProjectCardComponent/ProjectDueDateComponent/ProjectStatusComponent";

export default function ProjectInfoComponent(props: { projectId: string }) {
  const [projectData, setProjectData] = useState<projectDataType>({
    projectId: "",
    projectCompleted: false,
    projectDescription: "",
    projectName: "",
    projectDueDate: "",
    projectRepoURL: "",
  });

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
        });
    }
  }, [props.projectId]);
  return (
    <div className="my-10 mx-auto w-3/4 h-full pt-10 rounded-lg bg-white shadow-lg border border-blue-100">
      <div className="mx-10 project-title flex w-1/3">
        <div className="text-4xl font-semibold font-sans text-gray-700">
          {projectData.projectName}
        </div>
        <ProjectStatusComponent
          projectDueDate={projectData.projectDueDate}
        ></ProjectStatusComponent>
      </div>
      <div className="mx-14 my-10">
        <div className="flex items-center justify-start w-full my-6">
          <div className="flex items-center w-1/3 text-blue-300 text-3xl">
            <div>
              <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            </div>
            <div className="mx-4 font-semibold font-sans border-b text-xl">
              DESCRIPTION
            </div>
          </div>
          <div className="w-4/5 text-2xl font-light font-sans text-gray-800">
            {projectData.projectDescription}
          </div>
        </div>
        <div className="flex items-center justify-start w-full my-6">
          <div className="flex items-center w-1/3 text-blue-300 text-3xl">
            <div>
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
            </div>
            <div className="mx-4 font-semibold font-sans border-b text-xl">
              DUE DATE
            </div>
          </div>
          <div className="w-4/5 text-2xl font-light font-sans text-gray-800">
            {projectData.projectDueDate}
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full mx-auto justify-between">
        <div className="w-1/2 cursor-pointer rounded-bl-lg text-xl text-white p-4 bg-gradient-to-t from-pink-400 to-pink-500 shadow-inner hover:to-pink-400 font-sans font-semibold text-center">
          DELETE
        </div>
        <div className="w-1/2 cursor-pointer rounded-br-lg text-xl text-white p-4 bg-gradient-to-t from-green-400 to-green-500 shadow-inner hover:to-green-400 font-sans font-semibold text-center">
          MARK AS COMPLETED
        </div>
      </div>
    </div>
  );
}
