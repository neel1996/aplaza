import AddProjectButtonComponent from "../components/AddProject/AddProjectButtonComponent";
import HeaderSummary from "../components/Header/HeaderSummary";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderSummary></HeaderSummary>
      <AddProjectButtonComponent></AddProjectButtonComponent>
    </>
  );
}

export default MyApp;
