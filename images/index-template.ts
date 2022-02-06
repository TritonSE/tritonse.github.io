// Template for generating index.ts.

interface ImageWrapper {
  data: unknown;
  width: number;
  height: number;
}

const constImages = {
  // Generated imports go here.
} as const;
export type ImageKey = keyof typeof constImages;

const allImages: { [key: string]: ImageWrapper } = constImages;

function isImageKey(key: string): key is ImageKey {
  return Object.prototype.hasOwnProperty.call(allImages, key);
}

function getImage(key: ImageKey) {
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

export { isImageKey, getImage, firstValidImageKey };
