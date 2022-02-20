import Image, { ImageProps } from "next/image";
import React from "react";

import { getImage, ImageKey, staticLoader } from "../images";

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
