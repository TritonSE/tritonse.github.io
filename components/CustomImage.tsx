import process from "process";

import Image, { ImageLoader, ImageProps } from "next/image";
import React from "react";

import { getImage, ImageKey } from "../images";

export type CustomImageProps = {
  imageKey: ImageKey;
} & Omit<ImageProps, "src">;

const loader: ImageLoader = ({ src }) => src;
const wrappedLoader = process.env.NODE_ENV === "production" ? { loader } : {};

export default function CustomImage({ imageKey: key, ...props }: CustomImageProps) {
  const image = getImage(key);
  return (
    <Image
      src={image.data}
      width={image.width}
      height={image.height}
      {...wrappedLoader}
      {...props}
    />
  );
}
