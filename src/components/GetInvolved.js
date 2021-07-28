import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./GetInvolved.css";
import InvolvedCard from "./InvolvedCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function GetInvolved() {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  return (
    <>
      <h2>
        <b>Get Involved</b>
      </h2>
      <Container style={{ display: "flex" }}>
        <Row style={{ margin: "auto" }}>
          <Col xs={10} md={6}>
            <InvolvedCard imgPath="../images/icons/tse-bulb.png" title="Students">
              We recruit student developers and designers every academic year during the fall. Learn
              how to join!
            </InvolvedCard>
          </Col>
          <Col xs={5} md={6}>
            <InvolvedCard imgPath="../images/icons/tse-bulb.png" title="Non Profits">
              We’re always looking for opportunities to help non profits operate with ease. Learn
              how to partner with us!
            </InvolvedCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}
