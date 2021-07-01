import React from "react";

import PageWrapper from "./PageWrapper";
import TableOfContents from "../components/TableOfContents";
import { pageMetadata } from "../util/pageMetadata";

export default function ProjectLayout({ pageContext: { frontmatter }, children, data, location }) {
  const metadata = pageMetadata(data, location);
  return (
    <PageWrapper title={frontmatter.title}>
      <TableOfContents items={metadata.tableOfContents.items || []} />
      {/* TODO position the table of contents and page content */}
      <div>
        <header>
          <h1>{frontmatter.title}</h1>
          <em>{frontmatter.subtitle}</em>
        </header>
        {children}
      </div>
    </PageWrapper>
  );
}
