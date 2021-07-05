import React from "react";
import { Link } from "gatsby";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";

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
  const isExternalLink = to.includes("://");
  return (
    <span>
      {isExternalLink ? <a href={to}>{children}</a> : <Link to={to}>{children}</Link>}
      <UnselectableSpace />
      {isExternalLink ? <BsBoxArrowUpRight /> : <BsArrowRight />}
    </span>
  );
}
