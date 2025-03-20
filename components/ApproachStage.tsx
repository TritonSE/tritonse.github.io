import React from "react";

import { ImageKey } from "../images";

import styles from "./ApproachStage.module.scss";
import ResponsiveImage from "./ResponsiveImage";

interface IconSize {
  width: number;
  height: number;
}

interface ApproachStageIconSizes {
  desktop: IconSize;
  tablet: IconSize;
  mobile: IconSize;
}

interface ApproachStageProps {
  stageNum: number;
  iconImageKey: ImageKey;
  iconSizes: ApproachStageIconSizes;
  title: string;
  dates: string;
  description: string;
}

/**
 * One of the stages on the "Our Approach" page.
 */
export default function ApproachStage({
  stageNum,
  iconImageKey,
  iconSizes,
  title,
  dates,
  description,
}: ApproachStageProps) {
  return (
    <div className={styles.root}>
      <div className={styles.topRow}>
        <h1 className={styles.goldText}>{stageNum}</h1>
        <ResponsiveImage imageKey={iconImageKey} sizes={iconSizes} />
      </div>
      <h3 className={styles.goldText}>{title}</h3>
      <h5>{dates}</h5>
      <p>{description}</p>
    </div>
  );
}
