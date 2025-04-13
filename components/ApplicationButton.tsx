import React from "react";
import Container from "react-bootstrap/Container";

import recruitment from "../data/recruitment";

import styles from "./ApplicationButton.module.scss";
import GoldButton from "./GoldButton";

/**
 * A button that directs users to apply to TSE
 */
export default function ApplicationButton() {
  return (
    <Container style={{ marginTop: "1.5em", display: "flex", justifyContent: "center" }}>
      <GoldButton className={styles.button} href={recruitment.applicationUrl} openInNewTab>
        Apply here!
      </GoldButton>
    </Container>
  );
}
