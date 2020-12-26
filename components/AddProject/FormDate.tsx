import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DatePicker from "react-datepicker";
import { fas, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function FormDate(props: {
  setState: React.Dispatch<React.SetStateAction<string>>;
}) {
  library.add(fas);

  return (
    <div className="flex w-1/2 justify-between items-center align-middle rounded-lg shadow-sm bg-white border border-blue-100 my-2">
      <div className="w-1/12 mx-auto my-auto rounded-l-lg text-center text-blue-500 p-4 border bg-white text-xl">
        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
      </div>
      <div className="w-11/12 h-full bg-white rounded-r-lg">
        <input
          className="mx-4 outline-none w-11/12 font-sans font-light text-xl text-gray-600"
          type="date"
          name="due-date"
          id="due-date"
          onChange={(e) => {
            props.setState(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}
