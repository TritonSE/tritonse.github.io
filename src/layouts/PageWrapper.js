import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

import PageContext from "../components/PageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allPagesContext } from "../util/context";
import { normalizePagePath } from "../util/strings";
import "../styles/common.scss";

function makeGlobalContext(data) {
  const globalContext = {};
  globalContext.allPages = allPagesContext(data);
  globalContext.allProjects = globalContext.allPages.filter(
    (page) => page.path[0] === "projects" && page.path.length > 1
  );
  return globalContext;
}

let cachedGlobalContext = null;
function getGlobalContext(data) {
  if (cachedGlobalContext === null) {
    cachedGlobalContext = makeGlobalContext(data);
  }
  return cachedGlobalContext;
}

/**
 * Wrap the page content with common components and inject a prop with the
 * page's MDX metadata.
 * @param props
 * @param {function} props.render Take the page props (including the injected
 * metadata prop) and return the page content
 */
export default function PageWrapper({ children, location }) {
  const globalContext = getGlobalContext(
    useStaticQuery(graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                subtitle
                thumbnail
                github
              }
              tableOfContents
              fileAbsolutePath
            }
          }
        }
      }
    `)
  );

  const pathname = normalizePagePath(location.pathname);
  const thisPage = globalContext.allPages.filter((page) => page.pathname === pathname)[0];
  const title = thisPage.frontmatter.title;

  return (
    <PageContext.Provider value={{ location, thisPage, ...globalContext }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `${title} — ` : ""}Triton Software Engineering</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </PageContext.Provider>
  );
}
