import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./InvolvedCard.css";
import Card from "react-bootstrap/Card";
import marketing7 from "../images/content/photoshoot-marketing-7.jpg";
import DynamicImage from "./DynamicImage";

export default function InvolvedCard({ imgPath, children, title }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <DynamicImage paths={[imgPath]} alt="InvolvedImage" />
          <Card.Text style={{ color: "black" }}>{children}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}