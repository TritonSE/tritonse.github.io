import React from "react";

import PageWrapper from "./PageWrapper";
import TableOfContents from "../components/TableOfContents";

export default function ProjectLayout(props) {
  return (
    <PageWrapper
      {...props}
      render={({ pageContext: { frontmatter }, metadata: { tableOfContents }, children }) => (
        <>
          {/* TODO position the table of contents and page content */}
          <TableOfContents items={tableOfContents.items} />
          <header>
            <h1>{frontmatter.title}</h1>
            <em>{frontmatter.subtitle}</em>
          </header>
          {children}
        </>
      )}
    />
  );
}
