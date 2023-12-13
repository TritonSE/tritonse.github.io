import React from "react";

import { firstValidImageKey } from "../images";

import CustomImage from "./CustomImage";
import ProfileCard from "./ProfileCard";

import type { Project } from "../data/projects";

type ProjectProfileCardProps = {
  project: Project;
};

export default function ProjectProfileCard({
  project: { name, description, thumbnail, slug },
}: ProjectProfileCardProps) {
  const href = `/projects/${slug}`;
  return (
    <ProfileCard name={name} subtitles={[description]} href={href}>
      <CustomImage
        imageKey={firstValidImageKey(thumbnail, "icons/tse-bulb")}
        alt={`Thumbnail of ${name}`}
      />
    </ProfileCard>
  );
}
