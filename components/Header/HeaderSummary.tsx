import React, { useEffect, useState } from "react";
import Header from "./Header";
import SummaryComponent from "../SummaryComponent/SummaryComponent";

export default function HeaderSummary() {
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const route = window.location.pathname;
    if (route === "/") {
      setShowSummary(true);
    }
  }, []);

  return (
    <div className="header-summary w-full h-auto xl:p-10 lg:p-8 p-5">
      <style>
        {`
            .header-summary{
                background: radial-gradient(ellipse at 50% 0%, #f8fafc 0%, #f8fafc 70%, rgba(0,0,0,0) 58.84%);
            }
        `}
      </style>
      <Header></Header>
      {showSummary ? <SummaryComponent></SummaryComponent> : null}
    </div>
  );
}
