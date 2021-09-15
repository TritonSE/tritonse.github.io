import React from "react";

import Card from "react-bootstrap/Card";
import ArrowLink from "./ArrowLink";

export default function RecruitmentCard() {
  return (
    <Card style={{ width: "24rem", marginLeft: "65px" }}>
      <Card.Body>
        <Card.Title style={{ color: "black" }}>
          <b>We&apos;re Recruiting!</b>
        </Card.Title>
        <Card.Text style={{ color: "black" }}>
          Want real world project experience? <br /> Apply to be a TSE developer or designer!
        </Card.Text>
        <Card.Text style={{ color: "black" }}>
          <em>*You must be a UCSD undergraduate to apply</em>
        </Card.Text>
        <footer style={{ color: "black" }}>
          <ArrowLink dark to="/students">
            <b>Learn more</b>
          </ArrowLink>
        </footer>
      </Card.Body>
    </Card>
  );
}
