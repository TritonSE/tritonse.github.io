import React from "react";

import ArrowLink from "./ArrowLink";
import BigCard, { BigCardProps } from "./BigCard";

export interface GetInvolvedCardProps extends BigCardProps {
  linkText: string;
}

export default function GetInvolvedCard({
  href,
  linkText,
  children,
  ...props
}: GetInvolvedCardProps) {
  return (
    <BigCard href={href} colorHover {...props}>
      {children}
      <ArrowLink dark href={href}>
        {linkText}
      </ArrowLink>
    </BigCard>
  );
}
