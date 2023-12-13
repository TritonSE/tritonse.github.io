import React from "react";

import { ImageKey } from "../images";

import CustomImage from "./CustomImage";

export type LogosProps = {
  logos: {
    imageKey: ImageKey;
    url: string | null;
  }[];
};

export default function Logos({ logos }: LogosProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {logos.map(({ imageKey, url }) => {
        const image = <CustomImage imageKey={imageKey} height={100} />;
        return (
          <div key={imageKey} className="m-4">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {image}
              </a>
            ) : (
              image
            )}
          </div>
        );
      })}
    </div>
  );
}
