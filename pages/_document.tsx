import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";

class AplazaDocument extends Document {
  render() {
    return (
      <Html>
        <body className="bg-blue-50">
          <Head></Head>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default AplazaDocument;
