import React from "react";

import styles from "./PageContainer.module.css";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return <div className={styles.root}>{children}</div>;
}
