/* eslint-disable no-console */

import fs from "fs";
import path from "path";

import sharp from "sharp";

import config, { getMaxWidth } from "./config";
import { getOptimizedImagePath } from "./util";

const codegenFile = path.join(__dirname, "all-images.ts");
const publicDir = path.join(__dirname, "../public");
const optimizedDir = path.join(publicDir, config.staticPrefix);

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
    width: number;
    height: number;
    sizes: number[];
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

function getSizes(maxSize: number) {
  // Generate up to one size larger than the image's original size.
  const sizes: number[] = [];
  for (const size of config.sizes) {
    sizes.push(size);
    if (size >= maxSize) {
      break;
    }
  }
  return sizes;
}

async function findImages() {
  const images: Images = {};
  await forEachFile(__dirname, async (absPath) => {
    const extension = path.extname(absPath);
    if (!config.extensions.includes(extension)) {
      return;
    }
    const [width, height] = await imageDimensions(absPath);
    const relPath = path.relative(__dirname, absPath).replace(/\\/g, "/");
    images[relPath.slice(0, -extension.length)] = {
      relPath,
      width,
      height,
      sizes: getSizes(getMaxWidth(relPath, width)),
    };
  });
  return images;
}

function generateCode(images: Images) {
  const lines = [
    `// Do not edit. Automatically generated by ${path.basename(__filename)}`,
    "const allImages = {",
    ...Object.entries(images)
      .map(
        ([key, { relPath, width, height, sizes }]) =>
          `  ${JSON.stringify(key)}: { width: ${width}, height: ${height}, maxSize: ${
            sizes[sizes.length - 1]
          }, extension: ${JSON.stringify(path.extname(relPath))} },`
      )
      .sort(),
    "} as const;",
    "export default allImages;",
  ];

  fs.writeFileSync(codegenFile, lines.map((line) => line + "\n").join(""));
  console.log(`Generated: ${codegenFile}`);
}

async function optimizeImages(images: Images) {
  await fs.promises.mkdir(optimizedDir, { recursive: true });

  const outputFiles = new Set();
  await Promise.all(
    Object.values(images).map(async ({ relPath, sizes }) => {
      const mtime = fs.statSync(path.join(__dirname, relPath)).mtime;

      return Promise.all(
        sizes.map(async (size) => {
          const outputFile = path.join(optimizedDir, getOptimizedImagePath(relPath, size));
          outputFiles.add(outputFile);

          try {
            if (fs.statSync(outputFile).mtime > mtime) {
              // File is up to date.
              return;
            }
          } catch (e) {
            // File does not exist. Do nothing.
          }

          await sharp(path.join(__dirname, relPath))
            .rotate()
            .resize(size)
            .jpeg({ mozjpeg: true, force: false })
            .toFile(outputFile);
          console.log(`Optimized: ${outputFile}`);
        })
      );
    })
  );

  // Delete extraneous files.
  await forEachFile(optimizedDir, async (absPath) => {
    if (!outputFiles.has(absPath)) {
      await fs.promises.rm(absPath);
      console.log(`Deleted: ${absPath}`);
    }
  });
}

async function main() {
  const images = await findImages();
  await generateCode(images);
  await optimizeImages(images);
  console.log("Finished code generation and image optimization.");
}

main();