import React from "react";
import AddProjectForm from "../../components/AddProject/AddProjectForm";
import Header from "../../components/Header/Header";
import HeaderSummary from "../../components/Header/HeaderSummary";

export default function index() {
  return (
    <>
      <HeaderSummary></HeaderSummary>
      <div className="text-5xl mx-6 my-10 text-gray-600 font-sans font-light">
        Add a new project
      </div>
      <div className="w-5/6">
        <AddProjectForm></AddProjectForm>
      </div>
      <div
        className="ml-56 fixed right-0 top-0 mt-44"
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
