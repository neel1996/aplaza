import { differenceInCalendarDays } from "date-fns";
import React from "react";

export default function ProjectStatusComponent(props: {
  projectDueDate: string;
}) {
  const now = new Date();
  const diff = differenceInCalendarDays(new Date(props.projectDueDate), now);

  return (
    <>
      {diff >= 0 ? (
        <div className="mx-4 p-2 rounded-lg shadow border border-dashed border-yellow-500 text-yellow-600 font-sans font-semibold bg-yellow-100 xl:text-base lg:text-base text-sm">
          In-progress
        </div>
      ) : (
        <div className="mx-4 p-2 rounded-lg shadow border border-dashed border-pink-500 text-pink-600 font-sans font-semibold bg-pink-100 xl:text-base lg:text-base text-sm">
          Overdue
        </div>
      )}
    </>
  );
}
