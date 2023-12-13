import Link from "next/link";
import React from "react";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";

export type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
};

export default function ArrowLink({ href, children, dark }: ArrowLinkProps) {
  const className = dark ? "text-dark" : "text-light";
  const arrowStyles = { marginLeft: "0.25em" };
  return (
    <span>
      {href.includes(":") ? (
        <a href={href} className={className}>
          {children}
          <BsBoxArrowUpRight style={{ position: "relative", top: "-0.2em", ...arrowStyles }} />
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
          <BsArrowRight style={arrowStyles} />
        </Link>
      )}
    </span>
  );
}

ArrowLink.defaultProps = { dark: false };
