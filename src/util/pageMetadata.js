/**
 * It seems rather difficult for the layout component of an MDX page to access
 * metadata about its own rendered Markdown (e.g. table of contents). This is
 * because pages do not have access to their own GraphQL attributes, which would
 * otherwise be used to query for their own metadata. Hardcoding an attribute
 * value might work, but would be difficult to maintain.
 * 
 * The workaround implemented here makes MDX pages query every other MDX page
 * in their page queries. After getting the metadata for all pages, the location
 * prop of each page is used to find the metadata specific to each page.
 */

import { graphql } from "gatsby";

let pages = null;

function parsePageMetadata(data) {
  // Make deep copies of each page object.
  pages = data.allMdx.edges.map((edge) => JSON.parse(JSON.stringify(edge.node)));

  // Split paths into components.
  for (const page of pages) {
    page.path = page.fileAbsolutePath.split("/");
  }

  // Remove the longest common prefix to convert absolute paths into relative paths.
  const minPathLength = Math.min(...pages.map((node) => node.path.length));
  for (const page of pages) {
    page.path.splice(0, minPathLength - 1);
  }

  for (const page of pages) {
    // Remove the file extension from the filename, which is the last path component.
    page.path.push(page.path.pop().replace(/\..*$/, ""));

    // Give index pages the path of their containing directory.
    if (page.path[page.path.length - 1] === "index") {
      page.path.pop();
    }

    page.pathname = "/" + page.path.join("/");
  }
}

/**
 * Retrieve metadata for the requested page.
 * @param data The GraphQL result containing page data from allMdx.
 * @param location The location of the page to retrieve.
 * @returns The page's metadata.
 */
function pageMetadata(data, location) {
  if (pages === null) {
    parsePageMetadata(data);
  }

  for (const page of pages) {
    if (page.pathname === location.pathname) {
      return page;
    }
  }

  throw new Error(`No page with pathname '${location.pathname}'`);
}

export { pageMetadata };

export const query = graphql`
  fragment MdxMetadata on Mdx {
    tableOfContents
    fileAbsolutePath
  }
`;
