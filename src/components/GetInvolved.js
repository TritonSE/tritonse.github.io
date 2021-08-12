import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./GetInvolved.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function GetInvolved() {
  return (
    <div className="get-involved-body">
      <h2 style={{ marginLeft: "80px", color: "black" }}>
        <b>Get Involved</b>
      </h2>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Card style={{ width: "18rem" }}>
              <StaticImage
                src="../images/content/photoshoot-marketing-7.jpg"
                height={250}
                width={250}
                imgClassName="get-involved"
                alt="InvolvedImage"
              />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Students</Card.Title>
                <Card.Text style={{ color: "black" }}>
                  We recruit student developers and designers every academic year during the fall.
                  Learn how to join!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="4">
            <Card style={{ width: "18rem" }}>
              <StaticImage
                src="../images/content/photoshoot-marketing-15.jpg"
                height={250}
                width={250}
                imgClassName="get-involved"
                alt="InvolvedImage"
              />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Non Profits</Card.Title>
                <Card.Text style={{ color: "black" }}>
                  We’re always looking for opportunities to help non profits operate with ease.
                  Learn how to partner with us!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
