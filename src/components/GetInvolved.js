import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./GetInvolved.css";
import InvolvedCard from "./InvolvedCard";

export default function GetInvolved() {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  return (
    <>
      <h3>Get Involved</h3>
      <InvolvedCard imgPath="../images/icons/tse-bulb.png">
        We recruit student developers and designers every academic year during the fall. Learn how
        to join!
      </InvolvedCard>
    </>
  );
}
