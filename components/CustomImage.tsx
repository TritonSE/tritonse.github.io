import process from "process";

import Image, { ImageProps } from "next/image";
import React from "react";

import { getImage, ImageKey, staticLoader } from "../images";

export type CustomImageProps = {
  imageKey: ImageKey;
} & Omit<ImageProps, "src">;

export default function CustomImage({ imageKey, ...props }: CustomImageProps) {
  const image = getImage(imageKey);
  const loadFromRequire = process.env.NODE_ENV === "development"; // TODO also account for fast build

  // if (process.env.NODE_ENV === "development") {
  //   // require() and image dimensions in index.ts
  //   image =
  // } else if (process.env.NODE_ENV === "production") {
  //   // static URL and image dimensions in index.ts
  // } else if (false /* fast build */) {
  //   // require() and image dimensions in index.ts
  // }
  const sizeProps =
    props.layout === "intrinsic" || props.layout === "fill"
      ? {}
      : {
          width: image.width,
          height: image.height,
        };

  const imageProps = loadFromRequire
    ? {
        src: image.require,
      }
    : {
        src: imageKey,
        loader: staticLoader,
      };

  return <Image {...sizeProps} {...imageProps} {...props} />;
}

/*
const staticLoader: ImageLoader = ({ src, width }) => { getOptimizedImage(src, width); };
const 
const wrappedLoader = process.env.NODE_ENV === "production" ? { loader: staticLoader } : {};

export default function CustomImage({ imageKey, layout, ...props }: CustomImageProps) {
  const image = getOptimizedImage(imageKey);
  const dims = (layout === "responsive" || layout === "fill") ? { width: image.width, height: image.height } : {};
  return (
    <Image
      src={image.src}
      {...{...dims, ...wrappedLoader, layout, ...props}}
    />
  );
}
*/
