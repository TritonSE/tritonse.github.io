import React from "react";

import Profile from "./Profile";
import { clients, currentMembers, alumni } from "../data";
import { nameToFilename } from "../util/strings";
import { sortMembersByRole, categorizeMembersIntoYears } from "../util/members";

function getProfilesFromCategory(category) {
  switch (category) {
    case "members":
      sortMembersByRole(currentMembers);
      return currentMembers;

    case "alumni":
      const result = categorizeMembersIntoYears(alumni);
      return result;

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

getProfilesFromCategory("alumni");

/**
 * Tabbed interface showing members, alumni, and clients.
 * @param props
 * @param {object[]} members Refer to members.json.
 * @param {object[]} clients Refer to clients.json.
 */
export default function Profiles(props /* { members, clients } */) {
  const category = props.name === "clients" ? "clients" : "members";
  return (
    <div className={`tab-content text-light row  ${props.display ? "d-flex" : "d-none"}`}>
      {
        // creates a profile for alumni that is categorized into graduation year
        props.name === "alumni"
          ? Object.keys(getProfilesFromCategory(props.name))
              .reverse()
              .map((yearRange) => (
                <div>
                  <h2 className="px-5 pt-5 mt-3">Class of {yearRange}</h2>
                  <div className="row">
                    {
                      // loops through each alumni in the year range
                      getProfilesFromCategory(props.name)[yearRange].map((profile) => (
                        <Profile
                          imagePaths={[
                            `${category}/${nameToFilename(profile.name)}`,
                            `${category}/anonymous`,
                          ]}
                          title={profile.name}
                          subtitles={
                            category === "clients"
                              ? getSubtitlesFromClients(profile)
                              : getSubtitlesFromMembers(profile)
                          }
                          socials={
                            category === "clients"
                              ? getSocialsFromClients(profile)
                              : profile.socials
                          }
                        />
                      ))
                    }
                  </div>
                </div>
              ))
          : getProfilesFromCategory(props.name).map((profile) => (
              <Profile
                imagePaths={[
                  `${category}/${nameToFilename(profile.name)}`,
                  `${category}/anonymous`,
                ]}
                title={profile.name}
                subtitles={
                  category === "clients"
                    ? getSubtitlesFromClients(profile)
                    : getSubtitlesFromMembers(profile)
                }
                socials={category === "clients" ? getSocialsFromClients(profile) : profile.socials}
              />
            ))
      }
    </div>
  );
}
