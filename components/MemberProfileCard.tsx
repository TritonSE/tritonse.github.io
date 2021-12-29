import React from "react";

import type { Member } from "../data/people";
import { nameToFilename } from "../util";

import ProfileCard from "./ProfileCard";

export default function MemberProfileCard({
  member,
  roleLimit,
}: {
  member: Member;
  roleLimit: number;
}) {
  const imageProps = {
    paths: [`members/${nameToFilename(member.name)}`, "icons/tse-bulb"],
    alt: "profile photo",
  };
  const subtitles = roleLimit === 0 ? [] : member.roles.slice(-roleLimit).reverse();
  return <ProfileCard name={member.name} subtitles={subtitles} imageProps={imageProps} />;
}
