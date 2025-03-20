import classNames from "classnames";
import React from "react";
import Card from "react-bootstrap/Card";

import { ImageKey } from "../images";

import ResponsiveImage, { ResponsiveImageSizes } from "./ResponsiveImage";
import styles from "./WhyTSECard.module.scss";

interface WhyTSECardProps {
  imageKey: ImageKey;
  imageSizes: ResponsiveImageSizes;
  title: string;
  content: string;
}

export default function WhyTSECard({ imageKey, imageSizes, title, content }: WhyTSECardProps) {
  return (
    <Card className={classNames("m-2", styles.card)}>
      <div className={styles.cardImage}>
        <ResponsiveImage imageKey={imageKey} sizes={imageSizes} />
      </div>
      <Card.Title className={styles.cardTitle}>{title}</Card.Title>
      <Card.Text className={styles.cardDescription}>{content}</Card.Text>
    </Card>
  );
}
