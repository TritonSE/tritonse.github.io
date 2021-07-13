import React from "react";

import Profile from "./Profile";
import { allClients, currentMembers, alumni } from "../data";
import { nameToFilename } from "../util/strings";

function getProfilesFromCategory(category) {
  console.log(allClients);
  switch (category) {
    case "members":
      return currentMembers;

    case "alumni":
      return alumni;

    case "clients":
      // TODO fix when all client info is available
      return currentMembers;

    default:
      return currentMembers;
  }
}

/**
 * Tabbed interface showing members, alumni, and clients.
 * @param props
 * @param {object[]} members Refer to members.json.
 * @param {object[]} clients Refer to clients.json.
 */
export default function Profiles(props /* { members, clients } */) {
  return (
    <div className={`tab-content text-light row  ${props.display ? "d-flex" : "d-none"}`}>
      {
        // creates a profile for each member/client
        getProfilesFromCategory(props.name).map((member) => (
          <Profile
            imagePaths={[`members/${nameToFilename(member.name)}`, "members/anonymous"]}
            title={member.name}
            subtitles={member.roles.slice().reverse()}
            socials={member.socials}
          />
        ))
      }
    </div>
  );
}
