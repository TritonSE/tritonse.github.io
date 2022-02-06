import React from "react";

import type { Client } from "../data/clients";
import { firstValidImageKey } from "../images";
import { makeSlug } from "../util";

import ProfileCard from "./ProfileCard";

export default function ClientProfileCard({ client }: { client: Client }) {
  const imageProps = {
    imageKey: firstValidImageKey(`clients/${makeSlug(client.name)}`, "icons/tse-bulb"),
    alt: `Logo of ${client.name}`,
  };
  const subtitle = `${client.startYear}–${client.endYear || "Present"}`;
  return (
    <ProfileCard
      name={client.name}
      subtitles={[subtitle]}
      imageProps={imageProps}
      href={client.url}
    />
  );
}
