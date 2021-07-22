import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./GetInvolved.css";
import Card from "react-bootstrap/Card";

export default function InvolvedCard({ imgPath, children }) {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  console.log(imgPath);
  return (
    <>
      <Card className="custom-card">
        <Card.Body>
          <StaticImage
            src="../images/icons/tse-bulb.png"
            alt="InvolvedImage"
            height={250}
            width={250}
            imgClassName="get-involved"
          />
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
