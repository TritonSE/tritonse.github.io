import React from "react";

import type { Member } from "../data/people";
import { firstValidImageKey } from "../images";
import { makeSlug } from "../util";

import ProfileCard from "./ProfileCard";

interface MemberProfileCardProps {
  member: Member;
  roleLimit: number;
}

export default function MemberProfileCard({ member, roleLimit }: MemberProfileCardProps) {
  const imageProps = {
    imageKey: firstValidImageKey(`members/${makeSlug(member.name)}`, "icons/tse-bulb"),
    alt: `Profile photo of ${member.name}`,
  };
  const subtitles = roleLimit === 0 ? [] : member.roles.slice(-roleLimit).reverse();
  return <ProfileCard name={member.name} subtitles={subtitles} imageProps={imageProps} />;
}
