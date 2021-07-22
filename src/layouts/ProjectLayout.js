import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PageWrapper from "./PageWrapper";
import TableOfContents from "../components/TableOfContents";

export default function ProjectLayout(props) {
  return (
    <PageWrapper
      {...props}
      render={({ pageContext: { frontmatter }, metadata: { tableOfContents }, children }) => (
        <>
          {/* TODO position the table of contents and page content */}
          <Row>
            <Col xs={3} className="d-none d-md-block" style={{ backgroundColor: "#00121e" }}>
              <TableOfContents items={tableOfContents.items} />
            </Col>
            <Col xs={9}>
              <header>
                <h1>{frontmatter.title}</h1>
                <em>{frontmatter.subtitle}</em>
              </header>
              {children}
            </Col>
          </Row>
        </>
      )}
    />
  );
}
