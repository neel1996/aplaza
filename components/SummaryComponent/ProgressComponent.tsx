import axios from "axios";
import React, { useEffect, useState } from "react";
import "axios";

export default function ProgressComponent() {
  const [totalProjects, setTotalProjects] = useState(0);
  const [overdueProjects, setOverdueProjects] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);

  useEffect(() => {
    axios({
      url: "/api/projectcount",
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      const {
        totalProjectCount,
        overdueProjectCount,
        completedProjectCount,
      } = res.data;

      setTotalProjects(totalProjectCount);
      setOverdueProjects(overdueProjectCount);
      setCompletedProjects(completedProjectCount);
    });
  }, []);

  return (
    <div className="flex flex-wrap my-20 mx-auto justify-between w-full p-5 border-b-2 border-dashed border-gray-300">
      <div className="mx-auto my-6 font-sans font-semibold text-3xl text-justify text-gray-600">
        <span className="mx-2 border-b-4 border-indigo-300">
          {totalProjects}
        </span>
        Total projects
      </div>
      <div className="mx-auto my-6 font-sans font-semibold text-3xl text-justify text-gray-600">
        <span className="mx-2 border-b-4 border-gray-500">
          {overdueProjects}
        </span>
        Projects Overdue
      </div>
      <div className="mx-auto my-6 font-sans font-semibold text-3xl text-justify text-gray-600">
        <span className="mx-2 border-b-4 border-green-400">
          {completedProjects}
        </span>
        Projects completed
      </div>
    </div>
  );
}
