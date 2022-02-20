import React from "react";

import { ImageKey } from "../images";

import CustomImage from "./CustomImage";

export interface LogosProps {
  logos: {
    imageKey: ImageKey;
    url: string;
  }[];
}

export default function Logos({ logos }: LogosProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {logos.map(({ imageKey, url }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={imageKey} className="m-4">
          <CustomImage imageKey={imageKey} height={100} />
        </a>
      ))}
    </div>
  );
}
