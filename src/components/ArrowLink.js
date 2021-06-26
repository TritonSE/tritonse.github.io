import React from "react";
import { Link } from "gatsby";

/**
 * Create a link with an arrow next to it.
 */
export default function ArrowLink({ to, children }) {
  // TODO add the arrow
  // Arrow icon: https://react-icons.github.io/react-icons
  return (
    <Link to={to}>
      {children}
    </Link>
  );
}
