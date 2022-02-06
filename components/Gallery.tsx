import classNames from "classnames";
import React from "react";
import Ratio from "react-bootstrap/Ratio";

import { ImageKey } from "../images";

import CustomImage from "./CustomImage";

export interface LayoutSpec {
  imageKey?: ImageKey;
  width?: number;
  aspectRatio?: [number, number];
}

export interface GalleryProps {
  children?: React.ReactNode;
  className?: string;
  layout: LayoutSpec[];
  reverseOnSmallScreens?: boolean;
}

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
    return (
      <Ratio aspectRatio={(aspectRatio[1] / aspectRatio[0]) * 100}>
        <div>
          <CustomImage imageKey={imageKey} layout="fill" objectFit="cover" />;
        </div>
      </Ratio>
    );
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
          className
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
