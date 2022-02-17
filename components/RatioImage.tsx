import React from "react";
import Ratio from "react-bootstrap/Ratio";

import CustomImage, { CustomImageProps } from "./CustomImage";

interface RatioImageProps extends CustomImageProps {
  aspectRatio: [number, number];
}

export default function RatioImage({ aspectRatio, ...props }: RatioImageProps) {
  return (
    <Ratio aspectRatio={(aspectRatio[1] / aspectRatio[0]) * 100}>
      <div>
        <CustomImage layout="fill" objectFit="cover" {...props} />
      </div>
    </Ratio>
  );
}
