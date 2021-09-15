import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./HoverCard.css";
import Card from "react-bootstrap/Card";

import { clients } from "../data";
import DynamicImage from "./DynamicImage";
import { nameToFilename } from "../util/strings";

export default function HoverCard({ imgPath, children, title, isGetInvolved }) {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  console.log(imgPath);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <DynamicImage
          paths={[`clients/${nameToFilename(title)}`, "clients/anonymous"]}
          height={250}
          width={250}
          alt="projectimage"
        />

        {/* <StaticImage
          src="../images/icons/tse-bulb.png"
          alt="InvolvedImage"
          height={250}
          width={250}
          imgClassName={isGetInvolved ? "get-involved" : ""}
        /> */}
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <Card.Text style={{ color: "black" }}>{children}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
