import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

import { ImageKey } from "../images";

import styles from "./BigCard.module.scss";
import RatioImage from "./RatioImage";

export interface BigCardProps {
  imageKey: ImageKey;
  title: string;
  children: React.ReactNode;
  href: string;
  colorHover?: boolean;
  sized?: boolean;
}

export default function BigCard({
  imageKey,
  title,
  children,
  href,
  colorHover,
  sized,
}: BigCardProps) {
  return (
    <Card
      className={classNames("p-3 m-4", styles.card, {
        [styles.colorHover]: colorHover,
        [styles.sized]: sized,
      })}
    >
      <Card.Body>
        <RatioImage aspectRatio={[1, 1]} imageKey={imageKey} />
        <div className="mb-5" />
        <Card.Title style={{ fontWeight: 600 }}>{title}</Card.Title>
        {children}
      </Card.Body>
      <Link href={href}>
        <a className="stretched-link">
          <span className="visually-hidden">Learn more</span>
        </a>
      </Link>
    </Card>
  );
}
