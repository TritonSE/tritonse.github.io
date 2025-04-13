import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./GoldButton.module.scss";

interface GoldButtonProps {
  children: React.ReactNode;
  href: string;
  openInNewTab: boolean;
  className?: string;
  disableHoverEffect?: boolean;
  isSmall?: boolean;
}

export default function GoldButton({
  children,
  href,
  openInNewTab,
  className,
  disableHoverEffect,
  isSmall,
}: GoldButtonProps) {
  const contents = (
    <button
      type="button"
      className={classNames(
        styles.button,
        disableHoverEffect ? "" : styles.buttonWithHover,
        isSmall ? styles.buttonSmall : "",
        className
      )}
    >
      <p className={classNames(styles.text, isSmall ? styles.textSmall : "")}>{children}</p>
    </button>
  );

  return openInNewTab ? (
    <a href={href} target="blank" rel="noopener noreferrer">
      {contents}
    </a>
  ) : (
    <Link href={href}>{contents}</Link>
  );
}

GoldButton.defaultProps = {
  className: undefined,
  disableHoverEffect: false,
  isSmall: false,
};
