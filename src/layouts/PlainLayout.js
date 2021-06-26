import React from "react";

import PageWrapper from "./PageWrapper";

export default function PlainLayout({ pageContext: { frontmatter }, children }) {
  return (
    <PageWrapper title={frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      {children}
    </PageWrapper>
  );
}
