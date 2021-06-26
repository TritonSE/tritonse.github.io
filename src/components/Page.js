import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Page({ title, children, location }) {
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
