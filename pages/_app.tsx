import { useReducer } from "react";
import AddProjectButtonComponent from "../components/AddProject/AddProjectButtonComponent";
import { AplazaContext, initialState } from "../components/context";
import HeaderSummary from "../components/Header/HeaderSummary";
import { reducer } from "../global/reducer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AplazaContext.Provider value={{ state, dispatch }}>
      <style jsx global>
        {
          `
            ::selection{
              background: #788fa7;
              color: #FFFFFF;
            }
          `
        }
      </style>
      <Component {...pageProps}></Component>
    </AplazaContext.Provider>
  );
}

export default MyApp;
