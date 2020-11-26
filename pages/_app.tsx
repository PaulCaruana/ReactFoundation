import React from "react";
import "../styles/tailwind.css"
import type { AppProps /*, AppContext */ } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp