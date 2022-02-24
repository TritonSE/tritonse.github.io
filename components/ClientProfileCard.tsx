import React from "react";

import type { Client } from "../data/clients";
import { firstValidImageKey } from "../images";
import { makeSlug } from "../util";

import ProfileCard from "./ProfileCard";
import RatioImage from "./RatioImage";

export default function ClientProfileCard({ client }: { client: Client }) {
  const subtitle = `${client.startYear}–${client.endYear || "Present"}`;
  return (
    <ProfileCard name={client.name} subtitles={[subtitle]} href={client.url || undefined}>
      <div className="bg-white p-3">
        <RatioImage
          aspectRatio={[1, 1]}
          imageKey={firstValidImageKey(`clients/${makeSlug(client.name)}`, "icons/tse-bulb")}
          alt={`Logo of ${client.name}`}
          objectFit="contain"
        />
      </div>
    </ProfileCard>
  );
}
