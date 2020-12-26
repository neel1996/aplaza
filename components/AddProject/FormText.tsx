import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FormText(props: {
  inputName: string;
  placeHolder: string;
  pinIcon: IconDefinition;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { inputName, placeHolder, pinIcon } = props;

  library.add(fas);
  return (
    <div className="flex w-1/2 justify-between items-center align-middle rounded-lg shadow-sm bg-white border border-blue-100 my-2">
      <div className="w-1/12 mx-auto my-auto rounded-l-lg text-center text-blue-500 p-4 border bg-white text-xl">
        <FontAwesomeIcon icon={pinIcon}></FontAwesomeIcon>
      </div>
      <div className="w-11/12 h-full bg-white rounded-r-lg">
        <input
          className="w-11/12 h-full p-4 outline-none border-none font-sans font-light text-xl text-gray-700"
          type="text"
          name={inputName}
          id={inputName}
          placeholder={placeHolder}
          onChange={(e) => {
            props.setState(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}

export function formTextGenerator(
  inputName: string,
  placeHolder: string,
  pinIcon: any
) {}
