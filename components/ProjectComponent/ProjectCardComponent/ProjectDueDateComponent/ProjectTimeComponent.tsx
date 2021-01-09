import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, differenceInCalendarDays } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import ProjectStatusComponent from "./ProjectStatusComponent";
import { useRouter } from "next/router";

export default function ProjectTimeComponent(props: {
  projectDueDate: string;
}) {
  const router = useRouter();
  const [showStatus, setShowStatus] = useState<boolean>(false);

  useEffect(() => {
    if (router.pathname === "/completed") {
      setShowStatus(false);
    } else {
      setShowStatus(true);
    }
  }, [props.projectDueDate]);

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
        <div className="xl:text-2xl lg:text-2xl text-base font-sans text-gray-400 mx-1">
          <FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
        </div>
        <div className="font-sans text-gray-400 xl:text-base lg:text-base text-sm">
          {format(new Date(props.projectDueDate), "dd MMMM yyyy")}
        </div>
      </div>
      {showStatus ? memoizedStatusComponent : null}
    </div>
  );
}
