import React from "react";
import { Link } from "gatsby";
import { BsArrowRight } from "react-icons/bs";

/**
 * Create a link with an arrow next to it.
 */
export default function ArrowLink({ to, children }) {
  // TODO fix styling
  return (
    <span>
      <Link to={to}>
        {children}
      </Link>
      <BsArrowRight/>
    </span>
  );
}
