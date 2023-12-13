import type { AppProps } from "next/app";

import React from "react";
import "../styles/common.scss";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import styles from "./_app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
