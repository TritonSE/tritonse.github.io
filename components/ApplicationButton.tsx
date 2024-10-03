import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import recruitment from "../data/recruitment";

/**
 * A button that directs users to apply to TSE
 */
export default function ApplicationButton() {
  return (
    <Container style={{ marginTop: "1.5em", display: "flex", justifyContent: "center" }}>
      <Button href={recruitment.applicationUrl} size="lg" variant="warning">
        Click here to apply!
      </Button>
    </Container>
  );
}
