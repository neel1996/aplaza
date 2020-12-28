import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FormText(props: {
  inputName: string;
  placeHolder: string;
  maxLength: number;
  required: boolean;
  pinIcon: IconDefinition;
  setState: React.Dispatch<React.SetStateAction<string>>;
  clearParentPropStates: () => void;
}) {
  const { inputName, placeHolder, pinIcon, maxLength, required } = props;
  library.add(fas);

  function onEventInvoke() {
    props.clearParentPropStates();
  }

  return (
    <div className="flex w-5/6 xl:w-1/2 lg:w-2/3 md:w-3/4 justify-between items-center align-middle rounded-lg shadow-sm bg-white border border-blue-100 my-2">
      <div className="w-1/12 mx-auto my-auto rounded-l-lg text-center text-blue-500 p-4 border bg-white text-xl">
        <FontAwesomeIcon icon={pinIcon}></FontAwesomeIcon>
      </div>
      <div className="w-11/12 h-full bg-white rounded-r-lg">
        <input
          className="w-11/12 h-full p-4 outline-none border-none font-sans font-light text-xl text-gray-700"
          type="text"
          name={inputName}
          id={inputName}
          maxLength={maxLength}
          placeholder={placeHolder}
          required={required ? true : false}
          onChange={(e) => {
            props.setState(e.currentTarget.value);
            if (e.currentTarget.value.length > maxLength) {
              e.currentTarget.value = e.currentTarget.value.substr(
                0,
                maxLength
              );
            }
          }}
          onClick={onEventInvoke}
          onMouseDown={onEventInvoke}
          onFocus={onEventInvoke}
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
