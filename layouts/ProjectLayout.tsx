import React from "react";
// import slugify from "slugify";
// import { MDXProvider } from "@mdx-js/react";
import PlainLayout from "./PlainLayout";
import type { PlainMetadata } from "./PlainLayout";

/*
// TODO: identify headings for table of contents
function CustomH2({ children }: { children: React.ReactNode }) {
  return (
    <h2>
      {children}
    </h2>
  );
}
*/

export default function ProjectLayout({ metadata, children }: { metadata: PlainMetadata, children: React.ReactNode }) {
  return (
    <PlainLayout metadata={metadata}>
      {/* <MDXProvider components={{h2: CustomH2}}> */}
        {children}
      {/* </MDXProvider> */}
    </PlainLayout>
  );
}
