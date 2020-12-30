import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { projectFormData } from "../projectFormData";
import { projectDataCodes, ProjectFormDataType } from "../ProjectFormDataType";
import { ProjectRequestDataType } from "../projectRequestDataType";
import FormDate from "./FormDate";
import FormText from "./FormText";

export default function AddProjectForm(props: {
  setError: React.Dispatch<
    React.SetStateAction<{ status: boolean; message: string }>
  >;
  setSuccess: React.Dispatch<
    React.SetStateAction<{ status: boolean; message: string }>
  >;
}) {
  library.add(fas);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectRepoURL, setProjectRepoURL] = useState("");
  const [projectDueDate, setProjectDueDate] = useState(new Date().toString());

  function inputPicker(type: projectDataCodes, formData: ProjectFormDataType) {
    if (type === "name" || type === "description" || type === "repo") {
      let stateSetterProp: React.Dispatch<React.SetStateAction<string>>;

      if (type === "name") {
        stateSetterProp = setProjectName;
      } else if (type === "description") {
        stateSetterProp = setProjectDescription;
      } else if (type === "repo") {
        stateSetterProp = setProjectRepoURL;
      }

      const { name, options } = formData;
      const { pinIcon, placeHolder, maxLength, required } = options;

      return (
        <FormText
          inputName={name}
          placeHolder={placeHolder}
          pinIcon={pinIcon}
          maxLength={maxLength}
          required={required}
          setState={stateSetterProp}
          clearParentPropStates={clearParentPropStates}
        ></FormText>
      );
    } else if (type === "due-date") {
      return (
        <FormDate
          setState={setProjectDueDate}
          clearParentPropStates={clearParentPropStates}
        ></FormDate>
      );
    }
  }

  function clearParentPropStates() {
    props.setError({
      status: false,
      message: "",
    });
    props.setSuccess({
      status: false,
      message: "",
    });
  }

  function clearLocalStates() {
    setProjectName("");
    setProjectDescription("");
    setProjectDueDate("");
    setProjectRepoURL("");
  }

  function submitNewProject(e: FormEvent) {
    e.preventDefault();
    clearParentPropStates();

    const formElement: HTMLFormElement = e.currentTarget.parentElement
      .parentElement as HTMLFormElement;

    if (projectName && projectDescription && projectDueDate) {
      formElement.reset();

      const projectData: ProjectRequestDataType = {
        projectName,
        projectDescription,
        projectDueDate,
        projectRepoURL,
      };
      axios
        .post("/api/addproject", projectData, {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          props.setSuccess({
            status: true,
            message: "Project stored successfully",
          });
          clearLocalStates();
        })
        .catch((err) => {
          console.log(err);
          props.setError({
            status: true,
            message: "Something went wrong. Please try again!",
          });
          clearParentPropStates();
          clearLocalStates();
        });
    } else {
      props.setError({
        status: true,
        message: "Required fields are missing",
      });
      clearLocalStates();
      return;
    }
  }

  return (
    <form className="my-4 mx-10 xl:mx-20 lg:mx-20 w-full" method="post">
      {projectFormData.map((formItem) => {
        const { label, name } = formItem;

        return (
          <div className="my-6" key={formItem.label}>
            <label
              htmlFor={name}
              className="text-2xl font-light font-sans text-gray-700"
            >
              {label}
            </label>
            {formItem.showHintLabel ? (
              <div className="flex items-center align-middle justify-between w-1/2">
                <div className="flex justify-center items-center text-xl w-8 h-8 rounded-full my-auto mx-auto text-center border border-dashed border-purple-500 text-purple-600 font-sans font-bold">
                  !
                </div>
                <div className="w-11/12 mx-2 my-4 italic font-light font-sans text-purple-600">
                  {formItem.hintData}
                </div>
              </div>
            ) : null}
            {inputPicker(name, formItem)}
          </div>
        );
      })}
      <div>
        <input
          type="submit"
          value="SAVE PROJECT"
          className="w-5/6 xl:w-1/2 lg:w-2/3 md:w-3/4 my-2 font-sans text-center font-semibold text-2xl text-white bg-gradient-to-t from-indigo-500 to-indigo-300 p-3 rounded-lg shadow cursor-pointer hover:to-indigo-400 outline-none"
          onClick={submitNewProject}
        />
      </div>
    </form>
  );
}
