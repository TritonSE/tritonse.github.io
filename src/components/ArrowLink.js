import React from "react";
import { Link } from "gatsby";
import { BsArrowRight } from "react-icons/bs";

import "./ArrowLink.css";

/**
 * Create an unselectable space character.
 */
function UnselectableSpace() {
  return <span className="UnselectableSpace" />;
}

/**
 * Create a link with an arrow next to it.
 */
export default function ArrowLink({ to, children }) {
  return (
    <span className="ArrowLink">
      <Link to={to}>{children}</Link>
      <UnselectableSpace />
      <BsArrowRight />
    </span>
  );
}
