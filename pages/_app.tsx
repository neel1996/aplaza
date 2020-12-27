import Head from "next/head";
import { useReducer } from "react";
import { AplazaContext, initialState } from "../components/context";
import { reducer } from "../global/reducer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AplazaContext.Provider value={{ state, dispatch }}>
      <Head>
        <title>Aplaza - An AIO utility for tracking your projects</title>
      </Head>
      <style jsx global>
        {`
          ::selection {
            background: #788fa7;
            color: #ffffff;
          }
        `}
      </style>
      <Component {...pageProps}></Component>
    </AplazaContext.Provider>
  );
}

export default MyApp;
