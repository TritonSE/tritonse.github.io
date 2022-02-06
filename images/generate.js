/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const templateFile = path.join(__dirname, "index-template.ts");
const outFile = path.join(__dirname, "index.ts");

const imageExtensions = [".jpg", ".png"];

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
const templateLines = fs.readFileSync(templateFile, { encoding: "utf8" }).split(/\r?\n/);
const replaceIndex = templateLines.indexOf("  // Generated imports go here.");
const lines = [
  [
    "// Do not edit. Automatically generated from",
    path.basename(templateFile),
    "by",
    path.basename(__filename),
  ].join(" "),
  "/* eslint-disable */",
  ...templateLines.slice(1, replaceIndex),
  ...Object.entries(images).map(
    ([key, relPath]) => `  ${JSON.stringify(key)}: require(${JSON.stringify("./" + relPath)}),`
  ),
  ...templateLines.slice(replaceIndex + 1),
];
fs.writeFileSync(outFile, lines.join("\n"));
