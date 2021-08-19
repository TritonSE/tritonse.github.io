import { deepCopy } from "./objects";
import { removeFileExtension } from "./strings";

export function allPagesContext(data) {
  // Make deep copies of each page object.
  const pages = data.allMdx.edges.map((edge) => deepCopy(edge.node));

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
    page.path.push(removeFileExtension(page.path.pop()));

    // Give index pages the path of their containing directory.
    if (page.path[page.path.length - 1] === "index") {
      page.path.pop();
    }

    page.pathname = `/${page.path.join("/")}`;
  }

  return pages;
}
