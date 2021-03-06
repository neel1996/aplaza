import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function PopupActionComponent(props: {
  projectId: string;
  setParentStatus: (status: boolean) => void;
  apiRoute: string;
  labelText: string;
  actionText: string;
  successMessage: string;
  failureMessage: string;
  colorRange: string[];
}) {
  type apiStatusType = "success" | "failed" | "nil";
  const [status, setStatus] = useState<apiStatusType>("nil");
  const router = useRouter();

  function projectDeleteHandler(projectId) {
    axios
      .delete(props.apiRoute, {
        data: { projectId },
      })
      .then((res) => {
        setStatus("success");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        setStatus("failed");
      });
  }

  const colorRange = props.colorRange;

  return (
    <div className="w-full h-full fixed top-0 bottom-0 left-0 right-0 z-40 bg-opacity-95 bg-gray-500 flex justify-center items-center align-middle mx-auto my-auto">
      <div className="block mx-auto my-auto w-11/12 xl:w-3/4 lg:w-3/4 justify-center bg-white rounded-lg shadow">
        {status === "failed" ? (
          <div className="w-3/4 mx-auto my-4 p-3 rounded border-2 border-dashed border-red-400 bg-red-100 text-red-600 font-sans text-center font-semibold">
            {props.failureMessage}
          </div>
        ) : null}
        {status === "success" ? (
          <div className="w-3/4 mx-auto my-10 p-3 rounded border-2 border-dashed border-green-400 bg-greeb-100 text-green-600 font-sans text-center font-semibold">
            {props.successMessage}
          </div>
        ) : (
          <div>
            <div className="font-sans font-semibold text-gray-600 text-2xl my-20 text-center">
              {props.labelText}
            </div>
            <div className="mt-10 flex w-full mx-auto justify-between">
              <div
                className="w-1/2 cursor-pointer rounded-bl-lg text-xl text-gray-700 p-4 bg-gradient-to-t from-gray-100 to-gray-200 shadow-inner hover:from-gray-200 font-sans font-semibold text-center"
                onClick={(e) => {
                  props.setParentStatus(false);
                }}
              >
                CANCEL
              </div>
              <div
                className={`w-1/2 cursor-pointer rounded-br-lg text-xl text-white p-4 bg-gradient-to-t ${colorRange[0]} ${colorRange[1]} shadow-inner hover:${colorRange[2]} font-sans font-semibold text-center`}
                onClick={(e) => {
                  projectDeleteHandler(props.projectId);
                }}
              >
                {props.actionText}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
