import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import markdown from "../util/markdown";

import GetInvolvedCard from "./GetInvolvedCard";

export default function GetInvolvedCards() {
  const colSizes = {
    xs: 12,
    lg: 6,
  };
  return (
    <Row>
      <Col {...colSizes}>
        <GetInvolvedCard
          title="Students"
          imageKey="content/photoshoot-marketing-7"
          href="/students"
          linkText="Learn how to join!"
        >
          {markdown`
We recruit student product managers, designers, and developers every academic year during the fall.
          `}
        </GetInvolvedCard>
      </Col>
      <Col {...colSizes}>
        <GetInvolvedCard
          title="Nonprofits"
          imageKey="content/photoshoot-marketing-15"
          href="/nonprofits"
          linkText="Learn how to partner with us!"
        >
          {markdown`
We are always looking for opportunities to help nonprofits operate with ease.
          `}
        </GetInvolvedCard>
      </Col>
    </Row>
  );
}
