import "../styles/globals.css";
import Header from "./Header";
import Home from "./home";
import "../styles/globals.css";
import HeaderSummary from "../components/HeaderSummary";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderSummary></HeaderSummary>
      <Home></Home>
    </>
  );
}

export default MyApp;
