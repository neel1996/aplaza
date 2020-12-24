import Head from "next/head";
import { useContext } from "react";
import AddProjectButtonComponent from "../components/AddProject/AddProjectButtonComponent";
import AddProjectFormComponent from "../components/AddProject/AddProjectFormComponent";
import { AplazaContext } from "../components/context";
import HeaderSummary from "../components/Header/HeaderSummary";

export default function Home() {
  const { state } = useContext(AplazaContext);
  return (
    <div>
      <HeaderSummary></HeaderSummary>
      <AddProjectButtonComponent></AddProjectButtonComponent>
    </div>
  );
}
