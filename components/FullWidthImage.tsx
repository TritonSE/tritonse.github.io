import React from "react";

import ImageWithFallback from "./ImageWithFallback";

interface FullWidthImageProps {
  path: string;
}

export default function FullWidthImage({ path }: FullWidthImageProps) {
  return (
    <div style={{ position: "relative", minHeight: "60vh" }}>
      <ImageWithFallback paths={[path]} layout="fill" objectFit="cover" />
    </div>
  );
}
