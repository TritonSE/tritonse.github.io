import Image, { ImageProps } from "next/image";
import React from "react";

import images from "../images";

const allImages: { [k: string]: unknown } = images;

export type ImageWithFallbackProps = {
  paths: string[];
} & Omit<ImageProps, "src">;

export default function ImageWithFallback({ paths, ...props }: ImageWithFallbackProps) {
  let src;
  for (const path of paths) {
    if (path in images) {
      src = allImages[path];
      break;
    }
  }

  if (src === undefined) {
    throw Error(`Could not load any of the candidate images: ${JSON.stringify(paths)}`);
  }

  return <Image {...props} src={src} />;
}
