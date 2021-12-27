import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ProfileCardGroup({ title, profiles }: { title?: string, profiles: React.ReactNode[] }) {
  if (profiles.length === 0) {
    return <></>;
  }

  return (
    <>
      {title && <h3>{title}</h3>}
      <Row>
        {profiles.map((profile, index) => (
          <Col xs={3} key={index}>
            {profile}
          </Col>
        ))}
      </Row>
    </>
  )
}
