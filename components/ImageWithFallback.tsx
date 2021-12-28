import { useState } from "react";
import Image from "next/image";

export interface ImageWithFallbackProps {
  paths: string[],
  alt: string,
  [key: string]: any,
}

export default function ImageWithFallback({ paths, alt, ...props }: ImageWithFallbackProps) {
  const srcs = [] as string[];
  for (const path of paths) {
    for (const extension of ["png", "jpg"]) {
      srcs.push(`/images/${path}.${extension}`);
    }
  }

  const [index, setIndex] = useState(0);

  return (
    <Image
      alt={alt}
      src={srcs[index]}
      onError={() => {
        if (index == srcs.length - 1) {
          throw Error(`Could not load any of the candidate images: ${JSON.stringify(srcs)}`);
        }
        setIndex(index + 1);
      }}
      {...props}
    />
  );
}
