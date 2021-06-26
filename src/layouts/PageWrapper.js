import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PageWrapper({ title, children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{title ? title + " — " : ""}Triton Software Engineering</title>
      </Helmet>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}
