import React from "react";
import Page from "./Page";

/**
 * Convert frontmatter to props.
 */
export default function PageWrapper({ pageContext: { frontmatter }, children, location }) {
  return (
    <Page location={location} {...frontmatter}>
      {children}
    </Page>
  );
}
