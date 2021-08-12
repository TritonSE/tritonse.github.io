import React from "react";

import Card from "react-bootstrap/Card";
import ArrowLink from "./ArrowLink";

export default function RecruitmentCard() {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  return (
    <Card style={{ width: "24rem", marginLeft: "65px" }}>
      <Card.Body>
        <Card.Title style={{ color: "black" }}>
          <b>We're Recruiting!</b>
        </Card.Title>
        <Card.Text style={{ color: "black" }}>
          Want real world project experience? <br /> Apply to be a TSE developer or designer!
        </Card.Text>
        <Card.Text style={{ color: "black" }}>
          <em>*You must be a UCSD undergraduate to apply</em>
        </Card.Text>
        <footer style={{ color: "black" }}>
          <ArrowLink style={{ color: "black !important" }} to="/students">
            <b>Learn more</b>
          </ArrowLink>
        </footer>
      </Card.Body>
    </Card>
  );
}
