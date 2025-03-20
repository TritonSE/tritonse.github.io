import classNames from "classnames";
import React from "react";

import { ImageKey } from "../images";

import CustomImage from "./CustomImage";
import styles from "./ResponsiveImage.module.scss";

export interface ImageSize {
  width: number;
  height: number;
}

export interface ResponsiveImageSizes {
  desktop: ImageSize;
  tablet: ImageSize;
  mobile: ImageSize;
}

interface ResponsiveImageProps {
  imageKey: ImageKey;
  sizes: ResponsiveImageSizes;
  className?: string;
}

/**
 * A component to display an image with different width/heights depending on the screen size.
 */
export default function ResponsiveImage({ imageKey, sizes, className }: ResponsiveImageProps) {
  return (
    <>
      <div className={classNames(styles.desktop, className)}>
        <CustomImage
          imageKey={imageKey}
          alt="Logo"
          width={sizes.desktop.width}
          height={sizes.desktop.height}
        />
      </div>
      <div className={classNames(styles.tablet, className)}>
        <CustomImage
          imageKey={imageKey}
          alt="Logo"
          width={sizes.tablet.width}
          height={sizes.tablet.height}
        />
      </div>
      <div className={classNames(styles.mobile, className)}>
        <CustomImage
          imageKey={imageKey}
          alt="Logo"
          width={sizes.mobile.width}
          height={sizes.mobile.height}
        />
      </div>
    </>
  );
}

ResponsiveImage.defaultProps = {
  className: undefined,
};
