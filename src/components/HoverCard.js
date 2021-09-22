import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./HoverCard.css";
import Card from "react-bootstrap/Card";

import { clients } from "../data";
import DynamicImage from "./DynamicImage";
import { nameToFilename } from "../util/strings";

export default function HoverCard({ imgPath, children, title, isGetInvolved, altText }) {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  console.log(imgPath);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div className="image-control">
          <DynamicImage paths={imgPath} height={250} width={250} alt={altText} />
        </div>

        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <Card.Text style={{ color: "black" }}>{children}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
