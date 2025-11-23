import classNames from "classnames";
import React from "react";

import CustomImage from "./CustomImage";
import styles from "./ResponsiveImage.module.scss";

import type { ImageKey } from "../images";

export type ImageSize = {
  width: number;
  height: number;
};

export type ResponsiveImageSizes = {
  desktop: ImageSize;
  tablet: ImageSize;
  mobile: ImageSize;
};

type ResponsiveImageProps = {
  imageKey: ImageKey;
  sizes: ResponsiveImageSizes;
  className?: string;
  priority?: boolean;
};

/**
 * A component to display an image with different width/heights depending on the screen size.
 */
export default function ResponsiveImage({
  imageKey,
  sizes,
  className,
  priority,
}: ResponsiveImageProps) {
  return (
    <>
      <div className={classNames(styles.desktop, className)}>
        <CustomImage
          imageKey={imageKey}
          alt="Logo"
          width={sizes.desktop.width}
          height={sizes.desktop.height}
          priority={priority}
        />
      </div>
      <div className={classNames(styles.tablet, className)}>
        <CustomImage
          imageKey={imageKey}
          alt="Logo"
          width={sizes.tablet.width}
          height={sizes.tablet.height}
          priority={priority}
        />
      </div>
      <div className={classNames(styles.mobile, className)}>
        <CustomImage
          imageKey={imageKey}
          alt="Logo"
          width={sizes.mobile.width}
          height={sizes.mobile.height}
          priority={priority}
        />
      </div>
    </>
  );
}

ResponsiveImage.defaultProps = {
  className: undefined,
  priority: undefined,
};
