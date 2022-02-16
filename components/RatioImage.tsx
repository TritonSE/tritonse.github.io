import React from "react";
import Ratio from "react-bootstrap/Ratio";

import CustomImage, { CustomImageProps } from "./CustomImage";

interface RatioImageProps extends CustomImageProps {
  aspectRatio: [number, number];
  className?: string;
}

export default function RatioImage({ aspectRatio, className, ...props }: RatioImageProps) {
  return (
    <Ratio aspectRatio={(aspectRatio[1] / aspectRatio[0]) * 100}>
      <div className={className}>
        <CustomImage layout="fill" objectFit="cover" {...props} />
      </div>
    </Ratio>
  );
}

RatioImage.defaultProps = { className: undefined };
