import React from "react";

import Profile from "./Profile";
import { allMembers } from "../data";

/**
 * This component exists for testing purposes only, and should be removed once the profiles are complete.
 */
export default function AllMembers() {
  return (
    <>
      {allMembers.map((member) => (
        <Profile
          title={member.name}
          subtitles={member.roles.slice().reverse()}
          socials={member.socials}
        />
      ))}
    </>
  );
}
