// Template for generating index.ts.
import path from "path";

import { ImageLoader } from "next/image";

import config from "./config";
import { getOptimizedImagePath } from "./util";

export interface ImageWrapper {
  width: number;
  height: number;
  maxSize: number;
  ext: string;
}

const allImages = {
  "": { width: 0, height: 0, maxSize: 0, require: null, ext: "" }, // generate
} as const;

export type ImageKey = keyof typeof allImages;

function isImageKey(key: string): key is ImageKey {
  return Object.prototype.hasOwnProperty.call(allImages, key);
}

function getImage(key: ImageKey): ImageWrapper {
  return allImages[key];
}

function firstValidImageKey(...keys: string[]) {
  for (const key of keys) {
    if (isImageKey(key)) {
      return key;
    }
  }
  throw new Error(`No image found matching key(s): ${JSON.stringify(keys)}`);
}

const staticLoader: ImageLoader = ({ src, width }) => {
  const image = getImage(firstValidImageKey(src));
  return path.join(
    "/",
    config.staticPrefix,
    getOptimizedImagePath(src + image.ext, Math.min(width, image.maxSize))
  );
};

export { isImageKey, getImage, firstValidImageKey, staticLoader };
