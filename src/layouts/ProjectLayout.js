import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import PageWrapper from "./PageWrapper";
import TableOfContents from "../components/TableOfContents";

export default function ProjectLayout(props) {
  return (
    <PageWrapper
      {...props}
      render={({ pageContext: { frontmatter }, metadata: { tableOfContents }, children }) => (
        <Container>
          <Row>
            <Col xs={3} className="d-none d-md-block" />
            <Col md={9} xs={12}>
              <header>
                <h1>{frontmatter.title}</h1>
                <p>
                  <em>{frontmatter.subtitle}</em>
                </p>
              </header>
            </Col>
          </Row>
          <Row>
            <Col xs={3} className="d-none d-md-block">
              <div style={{ position: "sticky", top: "0px" }}>
                <TableOfContents items={tableOfContents.items} />
              </div>
            </Col>
            <Col md={9} xs={12}>
              {children}
            </Col>
          </Row>
        </Container>
      )}
    />
  );
}
