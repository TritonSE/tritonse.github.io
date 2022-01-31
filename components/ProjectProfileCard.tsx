import React from "react";

import type { Project } from "../data/projects";

import ProfileCard from "./ProfileCard";

interface ProjectProfileCardProps {
  project: Project;
}

export default function ProjectProfileCard({
  project: { name, description, thumbnail, slug },
}: ProjectProfileCardProps) {
  const paths = (thumbnail ? [thumbnail] : []).concat(["icons/tse-bulb"]);
  const imageProps = {
    paths,
    alt: "project thumbnail",
  };
  const href = `/projects/${slug}`;
  return <ProfileCard name={name} subtitles={[description]} imageProps={imageProps} href={href} />;
}
