import React from "react";

import CustomImage from "./CustomImage";
import styles from "./LogoBar.module.scss";

export default function LogoBar() {
  return (
    <div className={styles.root}>
      <div className={styles.divider} />
      <div className={styles.imageContainer}>
        <CustomImage imageKey="icons/tse-bulb" alt="Logo" width={50} height={50} />
      </div>
      <div className={styles.divider} />
      <div className={styles.sunRayUpLeft} />
      <div className={styles.sunRayUpStraight} />
      <div className={styles.sunRayUpRight} />
    </div>
  );
}
