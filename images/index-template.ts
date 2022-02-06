// Template for generating index.ts.

const allImages = {
  // Generated imports go here.
} as const;

export type ImageKey = keyof typeof allImages;

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
