import classNames from "classnames";
import React from "react";

import { ImageKey } from "../images";

import CustomImage from "./CustomImage";
import RatioImage from "./RatioImage";

// Incorrectly detected as prop types, but these are actually array elements, so
// it doesn't make sense to give default values.

export type LayoutSpec = {
  imageKey?: ImageKey;
  width?: number;
  aspectRatio?: [number, number];
};
/* eslint-enable react/require-default-props */
/* eslint-enable react/no-unused-prop-types */

export type GalleryProps = {
  children?: React.ReactNode;
  className?: string;
  layout: LayoutSpec[];
  reverseOnSmallScreens?: boolean;
};

export default function Gallery({
  children,
  className,
  layout,
  reverseOnSmallScreens,
}: GalleryProps) {
  function getElement({ imageKey, aspectRatio }: LayoutSpec) {
    if (imageKey === undefined) {
      return children;
    }
    if (aspectRatio === undefined) {
      return <CustomImage imageKey={imageKey} layout="responsive" />;
    }
    return <RatioImage aspectRatio={aspectRatio} imageKey={imageKey} />;
  }

  const wideItems = layout.map((spec) => ({
    ...spec,
    element: getElement(spec),
  }));

  const narrowItems = reverseOnSmallScreens ? wideItems.slice().reverse() : wideItems;

  const defaultWidth = (100 - 5 * (layout.length - 1)) / layout.length;

  return (
    <>
      {/* Side by side display for wider devices. */}
      <div
        className={classNames(
          "d-none d-md-flex justify-content-between align-items-center mb-3",
          className,
        )}
      >
        {wideItems.map(({ element, width }, index) => (
          <div key={index} style={{ width: `${width || defaultWidth}%` }}>
            {element}
          </div>
        ))}
      </div>
      {/* Stacked display for narrower devices. */}
      <div className={classNames("d-md-none", className)}>
        {narrowItems.map(({ element }, index) => (
          <div key={index} className="mb-3">
            {element}
          </div>
        ))}
      </div>
    </>
  );
}

Gallery.defaultProps = { children: false, className: undefined, reverseOnSmallScreens: undefined };
