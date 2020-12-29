import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, differenceInCalendarDays } from "date-fns";
import React, { useMemo } from "react";
import ProjectStatusComponent from "./ProjectStatusComponent";

export default function ProjectTimeComponent(props: {
  projectDueDate: string;
}) {
  const memoizedStatusComponent = useMemo(() => {
    return (
      <ProjectStatusComponent
        projectDueDate={props.projectDueDate}
      ></ProjectStatusComponent>
    );
  }, [props.projectDueDate]);

  return (
    <div className="timer flex items-center justify-start">
      <div className="flex justify-start items-center my-4">
        <div className="text-2xl font-sans text-gray-400 mx-1">
          <FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
        </div>
        <div className="font-sans text-gray-400">
          {format(new Date(props.projectDueDate), "dd MMMM yyyy")}
        </div>
      </div>
      {memoizedStatusComponent}
    </div>
  );
}
