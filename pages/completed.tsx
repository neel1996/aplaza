import React from "react";
import CompletedComponent from "../components/CompletedComponent/CompletedComponent";
import HeaderSummary from "../components/Header/HeaderSummary";

export default function completed() {
  return (
    <div>
      <HeaderSummary></HeaderSummary>
      <CompletedComponent></CompletedComponent>
    </div>
  );
}
