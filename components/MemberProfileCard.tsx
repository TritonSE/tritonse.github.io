import React from "react";

import type { Member } from "../data/people";
import { makeSlug } from "../util";

import ProfileCard from "./ProfileCard";

interface MemberProfileCardProps {
  member: Member;
  roleLimit: number;
}

export default function MemberProfileCard({ member, roleLimit }: MemberProfileCardProps) {
  const imageProps = {
    paths: [`members/${makeSlug(member.name)}`, "icons/tse-bulb"],
    alt: "profile photo",
  };
  const subtitles = roleLimit === 0 ? [] : member.roles.slice(-roleLimit).reverse();
  return <ProfileCard name={member.name} subtitles={subtitles} imageProps={imageProps} />;
}
