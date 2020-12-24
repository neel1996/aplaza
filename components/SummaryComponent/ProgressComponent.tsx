import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProgressComponent() {
  const [projectCountStat, setProjectCountStat] = useState({
    totalProjects: 0,
    overdueProjects: 0,
    completedProjects: 0,
  });

  const countLabels = [
    "Total projects",
    "Projects Overdue",
    "Projects completed",
  ];

  useEffect(() => {
    axios({
      url: "/api/projectcount",
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      setProjectCountStat({
        ...res.data,
      });
    });
  }, []);

  return (
    <div className="flex flex-wrap my-20 mx-auto justify-between w-3/4 shadow-lg rounded-lg bg-white p-5 border-b-2 border-dashed border-gray-300">
      {projectCountStat &&
        Object.keys(projectCountStat).map((item, idx) => {
          const limitIndex = idx + 1;
          return (
            <div key={item}>
              <div className="mx-auto flex justify-between my-6 font-sans font-semibold text-3xl text-justify text-gray-600 border-dashed">
                <div className="mx-2 border-b-4 border-indigo-300">
                  {projectCountStat[item]}
                </div>
                <div className="font-light">{countLabels[idx]}</div>
              </div>
              {limitIndex < countLabels.length ? (
                <div className="block border-r shadow-inner border-dashed border-gray-400"></div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
}
