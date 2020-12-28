import React, { useState } from "react";
import HeaderSummary from "../Header/HeaderSummary";
import AddProjectForm from "./AddProjectFormComponent/AddProjectForm";
import ModalComponent from "./ModalComponent/ModalComponent";

export default function AddProjectComponent() {
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const [success, setSuccess] = useState({
    status: false,
    message: "",
  });

  return (
    <>
      <style jsx>
        {`
          @media only screen and (max-width: 1280px) {
            #bannerIllustration {
              display: none;
            }
          }
        `}
      </style>
      <HeaderSummary></HeaderSummary>
      <div className="flex flex-col w-1/2 my-10">
        <div className="w-11/12 text-5xl mx-6 my-2 text-gray-600 font-sans font-light">
          Add a new project
        </div>
        {error.status ? (
          <ModalComponent
            status="error"
            message={error.message}
            parentStateSetter={setError}
          ></ModalComponent>
        ) : null}
        {success.status ? (
          <ModalComponent
            status="success"
            message={success.message}
            parentStateSetter={setSuccess}
          ></ModalComponent>
        ) : null}
      </div>

      <div className="xl:w-5/6 lg:w-5/6 w-11/12">
        <AddProjectForm
          setError={setError}
          setSuccess={setSuccess}
        ></AddProjectForm>
      </div>
      <div
        id="bannerIllustration"
        className="ml-56 fixed right-0 top-0 mt-48 hidden xl:block lg:block"
        style={{
          background: `url("/assets/il_1_banner.svg")`,
          width: "40em",
          height: "40em",
          opacity: "0.8",
          backgroundSize: "100% 100%",
        }}
      ></div>
    </>
  );
}
