import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./GetInvolved.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InvolvedCard from "./InvolvedCard";

export default function GetInvolved() {
  return (
    <>
      <h2>
        <b>Get Involved</b>
      </h2>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <InvolvedCard imgPath="../images/icons/tse-bulb.png" title="Students">
              We recruit student developers and designers every academic year during the fall. Learn
              how to join!
            </InvolvedCard>
          </Col>
          <Col xs lg="4">
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
