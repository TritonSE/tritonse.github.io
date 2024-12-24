import type { AppProps } from "next/app";
import React from "react";
import { Alert } from "react-bootstrap";
import "../styles/common.scss";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import recruitment from "../data/recruitment";

import styles from "./_app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      {recruitment.acceptingApplications ? (
        <Alert variant="warning" className={styles.applicationAlert}>
          <h4 className={styles.applicationText}>
            Applications are now open until {recruitment.deadline}! Apply{" "}
            <a href={recruitment.applicationUrl}>here</a>
          </h4>
        </Alert>
      ) : null}
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
