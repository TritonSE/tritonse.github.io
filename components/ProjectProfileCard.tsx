import React from "react";

import type { Project } from "../data/projects";
import { firstValidImageKey } from "../images";

import ProfileCard from "./ProfileCard";

interface ProjectProfileCardProps {
  project: Project;
}

export default function ProjectProfileCard({
  project: { name, description, thumbnail, slug },
}: ProjectProfileCardProps) {
  const imageKeys = [];
  if (thumbnail) {
    imageKeys.push(thumbnail);
  }
  imageKeys.push("icons/tse-bulb");
  const imageProps = {
    imageKey: firstValidImageKey(...imageKeys),
    alt: `Thumbnail of ${name}`,
  };
  const href = `/projects/${slug}`;
  return <ProfileCard name={name} subtitles={[description]} imageProps={imageProps} href={href} />;
}
