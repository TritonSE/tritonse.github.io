import classNames from "classnames";
import React from "react";

import { ImageKey } from "../images";

import styles from "./ImageCard.module.scss";
import ResponsiveImage, { ResponsiveImageSizes } from "./ResponsiveImage";

interface ImageCardProps {
  imageKey: ImageKey;
  sizes: ResponsiveImageSizes;
  rotationAngleDegrees: number;
  className?: string;
}

/**
 * A component to display a rotated image on a white background
 */
export default function ImageCard({
  imageKey,
  sizes,
  rotationAngleDegrees,
  className,
}: ImageCardProps) {
  return (
    <div
      className={classNames(styles.whiteBackground, className)}
      style={{
        transform: `rotate(${rotationAngleDegrees}deg)`,
      }}
    >
      <ResponsiveImage imageKey={imageKey} sizes={sizes} />
    </div>
  );
}

ImageCard.defaultProps = {
  className: undefined,
};
