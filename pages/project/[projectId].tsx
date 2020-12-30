import { useRouter } from "next/router";
import React from "react";
import HeaderSummary from "../../components/Header/HeaderSummary";
import ProjectInfoComponent from "../../components/ProjectInfoComponent/ProjectInfoComponent";

export default function ProjectPage() {
  const router = useRouter();

  return (
    <div>
      <HeaderSummary></HeaderSummary>
      <ProjectInfoComponent
        projectId={router.query.projectId && router.query.projectId.toString()}
      ></ProjectInfoComponent>
    </div>
  );
}
