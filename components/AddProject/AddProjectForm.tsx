import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import FormDate from "./FormDate";
import FormText from "./FormText";
import { projectDataCodes, ProjectDataType } from "./projectDataTypes";
import { projectFormData } from "./projectFormData";

export default function AddProjectForm() {
  library.add(fas);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date().toString());

  function inputPicker(type: projectDataCodes, formData: ProjectDataType) {
    if (type === "name" || type === "description" || type === "repo") {
      return (
        <FormText
          inputName={formData.name}
          placeHolder={formData.options.placeHolder}
          pinIcon={formData.options.pinIcon}
          setState={setProjectName}
        ></FormText>
      );
    } else if (type === "due-date") {
      return <FormDate setState={setDueDate}></FormDate>;
    }
  }

  return (
    <form className="my-4 mx-20 w-full">
      {projectFormData.map((formItem) => {
        const { label, name } = formItem;

        return (
          <div className="my-6">
            <label
              htmlFor={name}
              className="text-2xl font-light font-sans text-gray-700"
            >
              {label}
            </label>
            {formItem.showHintLabel ? (
              <div className="flex items-center align-middle justify-evenly w-1/4">
                <div className="flex justify-center items-center text-xl w-8 h-8 rounded-full my-auto mx-auto text-center border border-dashed border-purple-500 text-purple-600 font-sans font-bold">
                  !
                </div>
                <div className="my-4 italic font-light font-sans text-purple-600">
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
          className="w-1/2 my-2 font-sans text-center font-semibold text-2xl text-white bg-gradient-to-t from-indigo-500 to-indigo-300 p-3 rounded-lg shadow cursor-pointer hover:to-indigo-400 outline-none"
        />
      </div>
    </form>
  );
}
