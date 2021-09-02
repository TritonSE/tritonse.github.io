import React from "react";

import Profile from "./Profile";
import { allMembers } from "../data";
import { nameToFilename } from "../util/strings";

/**
 * This component exists for testing purposes only, and should be removed once the profiles are complete.
 */
export default function AllMembers() {
  return (
    <>
      {allMembers.map((member) => (
        <Profile
          imagePaths={[`members/${nameToFilename(member.name)}`, "members/anonymous"]}
          title={member.name}
          subtitles={member.roles.slice().reverse()}
          socials={member.socials}
        />
      ))}
    </>
  );
}
