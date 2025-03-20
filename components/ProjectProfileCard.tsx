import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";

import type { Project } from "../data/projects-content";
import { firstValidImageKey } from "../images";

import CustomImage from "./CustomImage";
import GoldButton from "./GoldButton";
import styles from "./ProjectProfileCard.module.scss";

interface ProjectProfileCardProps {
  project: Project;
}

export default function ProjectProfileCard({
  project: { name, description, thumbnail, slug },
}: ProjectProfileCardProps) {
  const href = `/projects/${slug}`;
  return (
    <Link className={styles.outerLink} href={href}>
      <Card className={classNames("m-2", styles.card)}>
        <div className="mb-3">
          <CustomImage
            imageKey={firstValidImageKey(thumbnail, "icons/tse-bulb")}
            alt={`Thumbnail of ${name}`}
          />
        </div>
        <Card.Title className={styles.cardTitle}>{name}</Card.Title>
        <Card.Text className={styles.cardDescription}>{description}</Card.Text>
        <GoldButton href={href} isSmall className={styles.button} openInNewTab={false}>
          Learn More
        </GoldButton>
      </Card>
    </Link>
  );
}
