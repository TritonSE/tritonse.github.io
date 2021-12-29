import React from "react";

import type { Client } from "../data/clients";
import { nameToFilename } from "../util";

import ProfileCard from "./ProfileCard";

export default function ClientProfileCard({ client }: { client: Client }) {
  const imageProps = {
    paths: [`clients/${nameToFilename(client.name)}`, "icons/tse-bulb"],
    alt: "client logo",
  };
  const subtitle = `${client.startYear}–${client.endYear || "Present"}`;
  return (
    <a href={client.url}>
      <ProfileCard name={client.name} subtitles={[subtitle]} imageProps={imageProps} />
    </a>
  );
}
