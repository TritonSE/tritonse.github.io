/**
 * String manipulation functions.
 */

export function removeFileExtension(filename) {
  return filename.replace(/\.[^/]+$/, "");
}

export function normalizePagePath(path) {
  if (path !== "/") {
    path = path.replace(/[/]$/, "");
  }
  path = removeFileExtension(path);
  return path;
}

export function nameToFilename(name) {
  return name.toLowerCase().replace(/ /g, "_");
}
