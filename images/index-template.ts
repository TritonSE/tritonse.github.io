// Template for generating index.ts.
import { ImageLoader } from "next/image";

import { addWidthToImagePath } from "./util";

export interface ImageWrapper {
  require: unknown;
  staticPath: string;
  width: number;
  height: number;
  sizeMap: { [key: number]: number };
}

const allImages = {
  "": { require: null, staticPath: "", width: 0, height: 0, sizeMap: {} }, // generate
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
  return addWidthToImagePath(image.staticPath, image.sizeMap[width]);
};

export { isImageKey, getImage, firstValidImageKey, staticLoader };
