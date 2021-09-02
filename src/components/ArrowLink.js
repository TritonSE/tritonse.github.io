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
export default function ArrowLink({ to, children, dark = false }) {
  const isExternalLink = to.includes("://");
  const className = dark ? "text-dark" : "";
  return (
    <span>
      {isExternalLink ? (
        <a href={to} className={className}>
          {children}
        </a>
      ) : (
        <Link to={to} className={className}>
          {children}
        </Link>
      )}
      <UnselectableSpace />
      {isExternalLink ? (
        <BsBoxArrowUpRight className={className} />
      ) : (
        <BsArrowRight className={className} />
      )}
    </span>
  );
}
