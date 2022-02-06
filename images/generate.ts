import fs from "fs";
import path from "path";

import sharp from "sharp";

const templateFile = path.join(__dirname, "index-template.ts");
const outFile = path.join(__dirname, "index.ts");

const imageExtensions = [".jpg", ".png"];

type Images = {
  [key: string]: {
    relativePath: string;
    width: number;
    height: number;
  };
};

async function imageDimensions(absPath: string) {
  const metadata = await sharp(absPath).metadata();

  if (metadata.width === undefined || metadata.height === undefined) {
    throw new Error(`Could not determine image dimensions: ${absPath}`);
  }

  // Return correct width and height, accounting for EXIF rotation
  // https://github.com/lovell/sharp/issues/1280#issuecomment-400959573
  if (metadata.orientation === undefined || metadata.orientation < 5) {
    return [metadata.width, metadata.height];
  }
  return [metadata.height, metadata.width];
}

async function processImage(absPath: string, images: Images) {
  const extension = path.extname(absPath);
  if (!imageExtensions.includes(extension)) {
    return;
  }
  const [width, height] = await imageDimensions(absPath);
  const relativePath = path.relative(__dirname, absPath).replace(/\\/g, "/");
  images[relativePath.slice(0, -extension.length)] = { relativePath, width, height };
}

async function findImagesRecursive(dir: string, images: Images) {
  const promises: Promise<unknown>[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      promises.push(findImagesRecursive(absPath, images));
    } else if (entry.isFile()) {
      promises.push(processImage(absPath, images));
    }
  }
  return Promise.all(promises);
}

async function findImages() {
  const images = {};
  await findImagesRecursive(__dirname, images);
  return images;
}

function generateCode(images: Images) {
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
    ...Object.entries(images)
      .map(
        ([key, { relativePath, width, height }]) =>
          `  ${JSON.stringify(key)}: { data: require(${JSON.stringify(
            "./" + relativePath
          )}), width: ${width}, height: ${height} },`
      )
      .sort(),
    ...templateLines.slice(replaceIndex + 1),
  ];
  fs.writeFileSync(outFile, lines.join("\n"));
}

async function main() {
  const images = await findImages();
  generateCode(images);
}

main();
