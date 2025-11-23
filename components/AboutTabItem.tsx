import classNames from "classnames";
import React from "react";
import Nav from "react-bootstrap/Nav";

import styles from "./AboutTabItem.module.scss";

import type { NavLinkProps } from "react-bootstrap";

export default function AboutTabItem({
  title,
  subtitle,
  ...props
}: { title: string; subtitle: string } & NavLinkProps) {
  return (
    <Nav.Item>
      <Nav.Link {...props} className={styles.tabItem}>
        <span className={classNames("mb-0", styles.title)} style={{ display: "block" }}>
          {title}
        </span>
        <span className={styles.subtitle} style={{ display: "block" }}>
          {subtitle}
        </span>
      </Nav.Link>
    </Nav.Item>
  );
}
