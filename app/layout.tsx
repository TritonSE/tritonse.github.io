import { Metadata } from "next";
import React from "react";
import { Alert } from "react-bootstrap";

import ThemeContainer from "../components/ThemeContainer";

import "../styles/common.scss";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import recruitment from "../data/recruitment";

import styles from "./layout.module.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Generated with https://realfavicongenerator.net */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0c2b35" />
        <meta name="msapplication-TileColor" content="#0c2b35" />
        <meta name="theme-color" content="#0c2b35" />
      </head>
      <body>
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
            <ThemeContainer>{children}</ThemeContainer>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Triton Software Engineering",
};
