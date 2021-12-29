import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

export type ImageWithFallbackProps = {
  paths: string[];
} & Omit<ImageProps, "src">;

export default function ImageWithFallback({ paths, ...props }: ImageWithFallbackProps) {
  const srcs = [] as string[];
  for (const path of paths) {
    for (const extension of ["png", "jpg"]) {
      srcs.push(`/images/${path}.${extension}`);
    }
  }

  const [index, setIndex] = useState(0);

  return (
    <Image
      {...props}
      src={srcs[index]}
      onError={() => {
        if (index === srcs.length - 1) {
          throw Error(`Could not load any of the candidate images: ${JSON.stringify(srcs)}`);
        }
        setIndex(index + 1);
      }}
    />
  );
}
