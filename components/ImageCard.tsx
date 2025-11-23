import classNames from "classnames";
import React from "react";

import styles from "./ImageCard.module.scss";
import ResponsiveImage from "./ResponsiveImage";

import type { ImageKey } from "../images";
import type { ResponsiveImageSizes } from "./ResponsiveImage";

type ImageCardProps = {
  imageKey: ImageKey;
  sizes: ResponsiveImageSizes;
  rotationAngleDegrees: number;
  className?: string;
  priority?: boolean;
};

/**
 * A component to display a rotated image on a white background
 */
export default function ImageCard({
  imageKey,
  sizes,
  rotationAngleDegrees,
  className,
  priority,
}: ImageCardProps) {
  return (
    <div
      className={classNames(styles.whiteBackground, className)}
      style={{
        transform: `rotate(${rotationAngleDegrees}deg)`,
      }}
    >
      <ResponsiveImage imageKey={imageKey} sizes={sizes} priority={priority} />
    </div>
  );
}

ImageCard.defaultProps = {
  className: undefined,
  priority: undefined,
};
