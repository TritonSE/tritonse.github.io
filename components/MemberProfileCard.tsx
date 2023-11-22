import React from "react";

import type { Member } from "../data/people";
import { firstValidImageKey } from "../images";
import { makeSlug } from "../util";

import ProfileCard from "./ProfileCard";
import RatioImage from "./RatioImage";

interface MemberProfileCardProps {
  member: Member;
  roleLimit: number;
}

export default function MemberProfileCard({ member, roleLimit }: MemberProfileCardProps) {
  const subtitles = roleLimit === 0 ? [] : member.roles.slice(-roleLimit).reverse();
  return (
    <ProfileCard name={member.id} subtitles={subtitles}>
      <RatioImage
        aspectRatio={[1, 1]}
        imageKey={firstValidImageKey(`members/${makeSlug(member.id)}`, "icons/tse-bulb")}
        alt={`Profile photo of ${member.id}`}
      />
    </ProfileCard>
  );
}
