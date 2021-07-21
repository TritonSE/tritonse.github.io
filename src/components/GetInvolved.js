import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./GetInvolved.css";

export default function GetInvolved() {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  return (
    <>
      <h3>Get Involved</h3>
      <StaticImage
        src="../images/icons/tse-bulb.png"
        alt="Logo"
        height={47}
        imgClassName="get-involved"
      />
    </>
  );
}
