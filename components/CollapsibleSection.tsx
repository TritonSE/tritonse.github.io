import classNames from "classnames";
import React, { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

import styles from "./CollapsibleSection.module.scss";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.title} onClick={toggle} onKeyDown={toggle} role="presentation">
        <BsArrowRightCircle
          className={classNames(styles.arrow, isOpen ? styles.facingDown : null)}
          size={40}
        />
        <h2>{title}</h2>
      </div>
      <div className={classNames(isOpen ? null : styles.collapsed)}>{children}</div>
    </>
  );
}
