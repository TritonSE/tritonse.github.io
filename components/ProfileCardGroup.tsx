import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ProfileCardGroup({
  title,
  profiles,
}: {
  title?: string;
  profiles: React.ReactNode[];
}) {
  if (profiles.length === 0) {
    return <></>;
  }

  return (
    <>
      {title && (
        <h3 className="mb-3 mt-5" style={{ fontWeight: 600 }}>
          {title}
        </h3>
      )}
      <Row style={{ marginLeft: "-1.75rem", marginRight: "-1.75rem" }}>
        {profiles.map((profile, index) => (
          <Col xs={6} md={4} lg={3} key={index}>
            {profile}
          </Col>
        ))}
      </Row>
    </>
  );
}
