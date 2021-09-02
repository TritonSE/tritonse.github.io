import React from "react";
import "./SideBySide.css";

/**
 * Show content side-by-side on wide devices, or stacked on narrow ones.
 * @param {boolean} props.swap Whether to swap the two sides in horizontal mode.
 */
export default function SideBySide({ swap = false, children }) {
  console.log(children);
  return (
    <div className={`side-by-side-wrapper ${swap ? "side-by-side-swapped" : "side-by-side"}`}>
      {children.map((child) => (
        <div className="side-by-side-element">{child}</div>
      ))}
    </div>
  );
}
