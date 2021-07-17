import React from "react";

import Profile from "./Profile";
import { clients, currentMembers, alumni } from "../data";
import { nameToFilename } from "../util/strings";

function getProfilesFromCategory(category) {
  switch (category) {
    case "members":
      return currentMembers;

    case "alumni":
      return alumni;

    case "clients":
      return clients;

    default:
      return currentMembers;
  }
}

function getSubtitlesFromMembers(profile) {
  return profile.roles.slice().reverse();
}

function getSubtitlesFromClients(profile) {
  return [`${profile.start} - ${profile.end}`];
}

function getSocialsFromClients(profile) {
  return { website: profile.website };
}

/**
 * Tabbed interface showing members, alumni, and clients.
 * @param props
 * @param {object[]} members Refer to members.json.
 * @param {object[]} clients Refer to clients.json.
 */
export default function Profiles(props /* { members, clients } */) {
  const category = props.name == "clients" ? "clients" : "members";
  return (
    <div className={`tab-content text-light row  ${props.display ? "d-flex" : "d-none"}`}>
      {
        // creates a profile for each member/client
        getProfilesFromCategory(props.name).map((profile) => (
          <Profile
            imagePaths={[`${category}/${nameToFilename(profile.name)}`, `${category}/anonymous`]}
            title={profile.name}
            subtitles={
              category == "clients"
                ? getSubtitlesFromClients(profile)
                : getSubtitlesFromMembers(profile)
            }
            socials={category == "clients" ? getSocialsFromClients(profile) : profile.socials}
          />
        ))
      }
    </div>
  );
}
