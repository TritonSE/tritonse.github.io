/**
 * String manipulation functions.
 */

export function removeFileExtension(filename) {
  return filename.replace(/\..*$/, "");
}

export function nameToFilename(name) {
  return name.toLowerCase().replace(/ /g, "_");
}
