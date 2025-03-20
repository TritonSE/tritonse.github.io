import React from "react";
import Col, { ColProps } from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export interface ProfileCardGroupProps {
  title?: string;
  profiles: React.ReactNode[];
  width?: 3 | 4;
}

export default function ProfileCardGroup({ title, profiles, width }: ProfileCardGroupProps) {
  if (profiles.length === 0) {
    return null;
  }

  const colSizes: Partial<ColProps> = {
    xs: 12,
    sm: 6,
    md: 4,
  };
  if (width === 4) {
    colSizes.lg = 3;
  }

  return (
    <>
      {title && (
        <h3 className="mb-3 mt-5" style={{ fontWeight: 600 }}>
          {title}
        </h3>
      )}
      <Row className="align-items-stretch" style={{ rowGap: 35 }}>
        {profiles.map((profile, index) => (
          <Col key={index} {...colSizes}>
            {profile}
          </Col>
        ))}
      </Row>
    </>
  );
}

ProfileCardGroup.defaultProps = { title: undefined, width: 4 };
