/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const imageExtensions = [".jpg", ".png"];
const outFile = "index.ts";

// Recursively find all images in the current directory.
const images = {};
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(absPath);
    } else if (entry.isFile()) {
      const extension = path.extname(absPath);
      if (imageExtensions.includes(extension)) {
        const relPath = path.relative(__dirname, absPath).replace(/\\/g, "/");
        images[relPath.slice(0, -extension.length)] = relPath;
      }
    }
  }
}
walk(__dirname);

// Generate the TypeScript source file.
const lines = ["/* eslint-disable */", "const allImages = {"];
for (const [key, relPath] of Object.entries(images)) {
  lines.push(`  ${JSON.stringify(key)}: require(${JSON.stringify("./" + relPath)}),`);
}
lines.push(
  "} as const;",
  "export type ImageKey = keyof typeof allImages;",
  "function isImageKey(key: string): key is ImageKey { return Object.prototype.hasOwnProperty.call(allImages, key); }",
  "export { allImages, isImageKey };"
);

// Write the file.
fs.writeFileSync(path.join(__dirname, outFile), lines.join("\n"));
