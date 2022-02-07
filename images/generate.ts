/* eslint-disable no-console */

import fs from "fs";
import path from "path";

import sharp from "sharp";

import nextConfig from "../next.config";

import { getMaxWidth } from "./config";
import { addWidthToImagePath } from "./util";

const imageSizes = [...nextConfig.images.imageSizes, ...nextConfig.images.deviceSizes] as number[];

const templateFile = path.join(__dirname, "index-template.ts");
const codegenFile = path.join(__dirname, "index.ts");
const publicDir = path.join(__dirname, "../public");
const optimizedDir = path.join(publicDir, "assets/images");

const imageExtensions = [".jpg", ".png"];

async function forEachFile(dir: string, handler: (absPath: string) => Promise<unknown>) {
  const promises: Promise<unknown>[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      promises.push(forEachFile(absPath, handler));
    } else if (entry.isFile()) {
      promises.push(handler(absPath));
    }
  }
  return Promise.all(promises);
}

type Images = {
  [key: string]: {
    relPath: string;
    originalWidth: number;
    originalHeight: number;
    maxWidth: number;
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

async function findImages() {
  const images: Images = {};
  await forEachFile(__dirname, async (absPath) => {
    const extension = path.extname(absPath);
    if (!imageExtensions.includes(extension)) {
      return;
    }
    const [width, height] = await imageDimensions(absPath);
    const relPath = path.relative(__dirname, absPath).replace(/\\/g, "/");
    images[relPath.slice(0, -extension.length)] = {
      relPath,
      originalWidth: width,
      originalHeight: height,
      maxWidth: getMaxWidth(relPath, width),
    };
  });
  return images;
}

function sizeMap(maxWidth: number) {
  const sizes: { [key: number]: number } = {};
  let maxSize;
  for (const size of imageSizes) {
    if (size < maxWidth) {
      sizes[size] = size;
      continue;
    }
    // Use the same size for all sizes larger than the original size.
    if (maxSize === undefined) {
      maxSize = size;
    }
    sizes[size] = maxSize;
  }
  return sizes;
}

function staticPath(relPath: string) {
  return "/" + path.join(path.relative(publicDir, optimizedDir), relPath.replace(/[/]/g, "__"));
}

function generateCode(images: Images) {
  console.log(`Reading: ${templateFile}`);
  const templateLines = fs.readFileSync(templateFile, { encoding: "utf8" }).split(/\r?\n/);

  const replaceIndex = templateLines.findIndex((line) => line.includes("// generate"));
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
        ([key, { relPath: relativePath, originalWidth, originalHeight, maxWidth }]) =>
          `  ${JSON.stringify(
            key
          )}: { width: ${originalWidth}, height: ${originalHeight}, sizeMap: ${JSON.stringify(
            sizeMap(maxWidth)
          )}, require: require(${JSON.stringify(
            "./" + relativePath
          )}), staticPath: ${JSON.stringify(staticPath(relativePath))} },`
      )
      .sort(),
    ...templateLines.slice(replaceIndex + 1),
  ];

  console.log(`Writing: ${codegenFile}`);
  fs.writeFileSync(codegenFile, lines.join("\n"));
}

async function optimizeImages(images: Images) {
  console.log("Optimizing images...");
  await fs.promises.mkdir(optimizedDir, { recursive: true });

  const outputFiles = new Set();
  await Promise.all(
    Object.values(images).map(async ({ relPath, maxWidth }) => {
      const mtime = fs.statSync(path.join(__dirname, relPath)).mtime;
      return Promise.all(
        Array.from(new Set(Object.values(sizeMap(maxWidth)))).map(async (newWidth) => {
          const outputFile = path.join(
            publicDir,
            addWidthToImagePath(staticPath(relPath), newWidth)
          );
          outputFiles.add(outputFile);

          try {
            if (fs.statSync(outputFile).mtime > mtime) {
              // File is up to date.
              return;
            }
          } catch (e) {
            console.error(e);
            // File does not exist. Do nothing.
          }

          const absPath = path.join(__dirname, relPath);
          console.log(`Optimizing: ${absPath}`);
          await sharp(absPath)
            .resize({ width: newWidth })
            .jpeg({ mozjpeg: true })
            .toFile(outputFile);
        })
      );
    })
  );

  // Delete extraneous files.
  await forEachFile(optimizedDir, async (absPath) => {
    if (!outputFiles.has(absPath)) {
      console.log(`Deleting: ${absPath}`);
      await fs.promises.rm(absPath);
    }
  });
}

async function main() {
  const images = await findImages();
  await generateCode(images);
  await optimizeImages(images);
}

main();
