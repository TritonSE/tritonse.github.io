import Image from "next/legacy/image";
import React from "react";

import { getImage, staticLoader } from "../images";

import type { ImageKey } from "../images";
import type { ImageProps } from "next/legacy/image";

export type CustomImageProps = {
  imageKey: ImageKey;
} & Omit<ImageProps, "src">;

export default function CustomImage({ imageKey, ...props }: CustomImageProps) {
  const image = getImage(imageKey);
  const sizeProps: Partial<ImageProps> = {};
  if (typeof props.height === "number") {
    sizeProps.width = image.width * (props.height / image.height);
  } else if (props.layout !== "fill") {
    sizeProps.width = image.width;
    sizeProps.height = image.height;
  }
  return <Image src={imageKey} loader={staticLoader} {...sizeProps} {...props} />;
}
