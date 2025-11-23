import path from "node:path";

import allImages from "./all-images";
import config from "./config";
import { getOptimizedImagePath } from "./util";

import type { ImageLoader } from "next/image";

export type ImageWrapper = {
  width: number;
  height: number;
  maxSize: number;
  extension: string;
};

export type ImageKey = keyof typeof allImages;

function isImageKey(key: string): key is ImageKey {
  return Object.prototype.hasOwnProperty.call(allImages, key);
}

function getImage(key: ImageKey): ImageWrapper {
  return allImages[key];
}

function firstValidImageKey(...keys: (string | null)[]) {
  for (const key of keys) {
    if (key !== null && isImageKey(key)) {
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
    getOptimizedImagePath(src + image.extension, Math.min(width, image.maxSize)),
  );
};

export { firstValidImageKey, getImage, isImageKey, staticLoader };
