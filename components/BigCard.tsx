import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

import { ImageKey } from "../images";

import RatioImage from "./RatioImage";

export interface BigCardProps {
  imageKey: ImageKey;
  title: string;
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function BigCard({ imageKey, title, children, href, className }: BigCardProps) {
  return (
    <Card className={classNames("p-4 m-4", className)}>
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
