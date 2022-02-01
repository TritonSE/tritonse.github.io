import process from "process";

import Image, { ImageLoader, ImageProps } from "next/image";
import React from "react";

import { allImages, isImageKey } from "../images";

export type ImageWithFallbackProps = {
  paths: string[];
} & Omit<ImageProps, "src">;

const loader: ImageLoader = ({ src }) => src;
const wrappedLoader = process.env.NODE_ENV === "production" ? { loader } : {};

export default function ImageWithFallback({ paths, ...props }: ImageWithFallbackProps) {
  let src;
  for (const path of paths) {
    if (isImageKey(path)) {
      src = allImages[path];
      break;
    }
  }

  if (src === undefined) {
    throw Error(`Could not load any of the candidate images: ${JSON.stringify(paths)}`);
  }

  return <Image {...props} {...wrappedLoader} src={src} />;
}
