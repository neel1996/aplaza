import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DatePicker from "react-datepicker";
import { fas, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function FormDate(props: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  clearParentPropStates: () => void;
}) {
  library.add(fas);

  function onEventInvoke() {
    props.clearParentPropStates();
  }

  return (
    <div className="flex w-11/12 xl:w-1/2 lg:w-2/3 md:w-3/4 justify-between items-center align-middle rounded-lg shadow-sm bg-white border border-blue-100 my-2">
      <div className="w-1/6 xl:w-1/12 lg:w-1/12 mx-auto my-auto rounded-l-lg text-center text-blue-500 p-4 border bg-white text-xl">
        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
      </div>
      <div className="w-11/12 h-full bg-white rounded-r-lg">
        <input
          className="mx-4 outline-none w-11/12 font-sans font-light text-base xl:text-xl lg:text-xl text-gray-600"
          type="date"
          name="due-date"
          id="due-date"
          required={true}
          onChange={(e) => {
            props.setState(e.currentTarget.value);
          }}
          onClick={onEventInvoke}
          onMouseDown={onEventInvoke}
          onFocus={onEventInvoke}
        />
      </div>
    </div>
  );
}
