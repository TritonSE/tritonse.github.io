import Image, { ImageProps } from "next/image";
import React from "react";

import { getImage, ImageKey, staticLoader } from "../images";

export type CustomImageProps = {
  imageKey: ImageKey;
} & Omit<ImageProps, "src">;

export default function CustomImage({ imageKey, ...props }: CustomImageProps) {
  const image = getImage(imageKey);
  const sizeProps =
    props.layout === "intrinsic" || props.layout === "fill"
      ? {}
      : {
          width: image.width,
          height: image.height,
        };
  return <Image src={imageKey} loader={staticLoader} {...sizeProps} {...props} />;
}
