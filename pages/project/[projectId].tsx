import { useRouter } from "next/router";
import React from "react";
import HeaderSummary from "../../components/Header/HeaderSummary";
import ProjectInfoComponent from "../../components/ProjectInfoComponent/ProjectInfoComponent";

export default function ProjectPage() {
  const router = useRouter();

  return (
    <div>
      <HeaderSummary></HeaderSummary>
      {router.query.projectId && router.query.ref ? (
        <ProjectInfoComponent
          projectId={router.query.projectId.toString()}
          routeRef={router.query.ref.toString()}
        ></ProjectInfoComponent>
      ) : null}
    </div>
  );
}
