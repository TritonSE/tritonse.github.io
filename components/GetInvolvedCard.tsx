import React from "react";

import ArrowLink from "./ArrowLink";
import BigCard, { BigCardProps } from "./BigCard";
import styles from "./GetInvolvedCard.module.scss";

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
    <BigCard href={href} className={styles.card} {...props}>
      {children}
      <ArrowLink dark href={href}>
        {linkText}
      </ArrowLink>
    </BigCard>
  );
}
