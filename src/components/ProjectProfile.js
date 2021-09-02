import React from "react";

import DynamicImage from "./DynamicImage";
import { nameToFilename } from "../util/strings";

/**
 * Shows profile image and name for each member in a project
 *  @param props
 *  @param {string[]} props.roles
 */
export default function ProjectProfile({ roles }) {
  return (
    <div className="mt-5">
      <h1 className="py-4">Meet the Team</h1>
      {
        // loops through each role in the team
        Object.keys(roles).map((role) => (
          <div>
            <h2>{role}</h2>

            <div className="row">
              {
                // creates profile for each member with that role
                roles[role].map((name) => (
                  <div className="tab-card col-sm-6 col-md-3 py-2 px-4">
                    <div className="profile-image">
                      <DynamicImage
                        paths={[`members/${nameToFilename(name)}`, `members/anonymous`]}
                        alt={`${name}`}
                      />
                    </div>

                    <div className="text-center">
                      <p className="pt-3 pb-5">{`${name}`}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}
