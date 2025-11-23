import React from "react";

import ArrowLink from "./ArrowLink";
import BigCard from "./BigCard";

import type { BigCardProps } from "./BigCard";

export type GetInvolvedCardProps = {
  linkText: string;
} & BigCardProps;

export default function GetInvolvedCard({
  href,
  linkText,
  children,
  ...props
}: GetInvolvedCardProps) {
  return (
    <BigCard href={href} {...props}>
      {children}
      <ArrowLink dark href={href}>
        {linkText}
      </ArrowLink>
    </BigCard>
  );
}
