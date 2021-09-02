import React from "react";

/**
 * Show content side-by-side on wide devices, or stacked on narrow ones.
 * @param {boolean} props.swap Whether to swap the two sides in horizontal mode.
 */
export default function SideBySide({ /* swap = false, */ children }) {
  return (
    <>
      Side by side placeholder
      {children}
    </>
  );
}
