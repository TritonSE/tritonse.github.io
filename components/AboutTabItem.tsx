import Nav from "react-bootstrap/Nav";
import type { NavLinkProps } from "react-bootstrap";
import classNames from "classnames";
import styles from "./AboutTabItem.module.scss";

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
