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
          imageKey="content/beach-photoshoot-cred"
          href="/students"
          linkText="Learn how to join!"
        >
          {markdown`
We recruit developers and designers every academic year during the fall.
          `}
        </GetInvolvedCard>
      </Col>
      <Col {...colSizes}>
        <GetInvolvedCard
          title="Nonprofits"
          imageKey="content/beach-photoshoot-f3"
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
