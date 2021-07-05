import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { removeFileExtension } from "../util/strings";
import { deepCopy } from "../util/objects";
import "./PageWrapper.scss";

// Look up each page by its pathname.
let pages = null;

function initialize(data) {
  if (pages !== null) {
    return;
  }

  // Make deep copies of each page object.
  const pageList = data.allMdx.edges.map((edge) => deepCopy(edge.node));

  // Split paths into components.
  for (const page of pageList) {
    page.path = page.fileAbsolutePath.split("/");
  }

  // Remove the longest common prefix to convert absolute paths into relative paths.
  const minPathLength = Math.min(...pageList.map((node) => node.path.length));
  for (const page of pageList) {
    page.path.splice(0, minPathLength - 1);
  }

  for (const page of pageList) {
    // Remove the file extension from the filename, which is the last path component.
    page.path.push(removeFileExtension(page.path.pop()));

    // Give index pages the path of their containing directory.
    if (page.path[page.path.length - 1] === "index") {
      page.path.pop();
    }

    page.pathname = `/${page.path.join("/")}`;
  }

  pages = Object.fromEntries(pageList.map((page) => [page.pathname, page]));
}

/**
 * Wrap the page content with common components and inject a prop with the
 * page's MDX metadata.
 * @param props
 * @param {function} props.render Take the page props (including the injected
 * metadata prop) and return the page content
 */
export default function PageWrapper(props) {
  initialize(
    useStaticQuery(graphql`
      query {
        allMdx {
          edges {
            node {
              tableOfContents
              fileAbsolutePath
            }
          }
        }
      }
    `)
  );

  const title = props.pageContext.frontmatter.title;
  const metadata = pages[props.location.pathname];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `${title} — ` : ""}Triton Software Engineering</title>
      </Helmet>
      <Navbar />
      <main>{props.render({ ...props, metadata })}</main>
      <Footer />
    </>
  );
}
