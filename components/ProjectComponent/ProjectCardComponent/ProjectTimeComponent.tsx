import { library } from "@fortawesome/fontawesome-svg-core";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProjectTimeComponent() {
  library.add(faHourglassHalf);

  return (
    <div className="timer flex items-center justify-start">
      <div className="flex justify-start items-center my-4">
        <div className="text-2xl font-sans text-gray-400 mx-1">
          <FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
        </div>
        <div className="font-sans text-gray-400">01 Jan 2021</div>
      </div>
      <div className="mx-4 p-2 rounded-lg shadow border border-dashed border-pink-500 text-pink-600 font-sans font-semibold bg-pink-100">
        Overdue
      </div>
      <div className="mx-4 p-2 rounded-lg shadow border border-dashed border-yellow-500 text-yellow-600 font-sans font-semibold bg-yellow-100">
        In-progress
      </div>
    </div>
  );
}
