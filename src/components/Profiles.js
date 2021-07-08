import React from "react";

import Profile from "./Profile";

/**
 * Tabbed interface showing members, alumni, and clients.
 * @param props
 * @param {object[]} members Refer to members.json.
 * @param {object[]} clients Refer to clients.json.
 */
export default function Profiles(props /* { members, clients } */) {
  return (
    <div className={`tab-content text-light row  ${props.display ? "d-flex" : "d-none"}`}>
      {/* TODO: Loop through each member's info */}
      <Profile title={props.name} subtitles={["President", "Developer"]} />
      <Profile
        title="Firstname Lastname"
        subtitles={["President", "Developer"]}
        linkedin="https//www.google.com"
      />
      <Profile
        title="Firstname Lastname"
        subtitles={["President", "Developer"]}
        linkedin="https//www.google.com"
      />
      <Profile
        title="Firstname Lastname"
        subtitles={["President", "Developer"]}
        linkedin="https//www.google.com"
      />
      <Profile
        title="Firstname Lastname"
        subtitles={["President", "Developer"]}
        linkedin="https//www.google.com"
      />
    </div>
  );
}
