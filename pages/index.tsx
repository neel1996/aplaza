import AddProjectButtonComponent from "../components/AddProject/AddProjectButtonComponent";
import HeaderSummary from "../components/Header/HeaderSummary";
import ProjectComponent from "../components/ProjectComponent/ProjectComponent";

export default function Home() {
  return (
    <div>
      <HeaderSummary></HeaderSummary>
      <ProjectComponent></ProjectComponent>
      <AddProjectButtonComponent></AddProjectButtonComponent>
    </div>
  );
}
