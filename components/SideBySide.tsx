import React from "react";
import Ratio from "react-bootstrap/Ratio";

import ImageWithFallback from "./ImageWithFallback";

export interface ImageSpec {
  key: string;
  aspectRatio: number;
}

export interface LayoutSpec {
  image?: ImageSpec;
  width?: number;
}

export interface SideBySideProps {
  children?: React.ReactNode;
  layout: LayoutSpec[];
}

export default function SideBySide({ layout, children }: SideBySideProps) {
  const wideItems = layout.map((spec) =>
    "image" in spec && spec.image !== undefined
      ? {
          ...spec,
          element: (
            <Ratio aspectRatio={spec.image.aspectRatio}>
              <ImageWithFallback paths={[spec.image.key]} layout="fill" objectFit="cover" />
            </Ratio>
          ),
        }
      : // If no image is specified, render this element's children.
        { ...spec, element: children }
  );

  // Always show image before text in the narrow layout.
  // If the first item is text in the wide layout, move it to the end.
  const narrowItems = layout[0] === null ? wideItems.slice(1).concat([layout[0]]) : wideItems;

  return (
    <>
      {/* Side by side display for wider devices. */}
      <div className="d-none d-md-flex justify-content-between align-items-center">
        {wideItems.map(({ element, width }, index) => (
          <div key={index} style={{ width: width ? `${width}%` : "45%" }}>
            {element}
          </div>
        ))}
      </div>
      {/* Stacked display for narrower devices. */}
      <div className="d-md-none">
        {narrowItems.map(({ element }, index) => (
          <div key={index} className="mb-3">
            {element}
          </div>
        ))}
      </div>
    </>
  );
}
