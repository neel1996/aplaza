import React from "react";
import Header from "../pages/Header";

export default function HeaderSummary() {
  return (
    <div className="header-summary w-full h-auto p-10">
      <style>
        {`
            .header-summary{
                background: radial-gradient(ellipse at 50% 0%, #f7f7f7 0%, #fbfbff 59%, #ffffff 58.84%);
            }
        `}
      </style>
      <Header></Header>
    </div>
  );
}
