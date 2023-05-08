import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { useClientOnly } from "src/hooks/useClientOnly";
import "src/lib/init";
import "src/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const isMounted = useClientOnly();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
        <meta name="theme-color" content="#1C64F2" />
      </Head>
      {isMounted ? <Component {...pageProps} /> : null}
    </>
  );
}

export default App;
