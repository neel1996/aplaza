import React from "react";
import Header from "../pages/Header";
import SummaryComponent from "./SummaryComponent/SummaryComponent";

export default function HeaderSummary() {
  return (
    <div className="header-summary w-full h-auto p-10">
      <style>
        {`
            .header-summary{
                background: radial-gradient(ellipse at 50% 0%, #f8fafc 0%, #f8fafc 70%, #ffffff 58.84%);
            }
        `}
      </style>
      <Header></Header>
      <SummaryComponent></SummaryComponent>
    </div>
  );
}
