import React, { useState } from "react";

import Profiles from "./Profiles";
import "./TabbedInterface.css";

import { clients, currentMembers, alumni } from "../data";

/**
 * @param props
 * @param {{ name: string, count: integer }[]} profiles list of Object of members, alumni, and clients and their respective count.
 */
export default function TabbedInterface({ profiles }) {
  // creates state's keys based on names in profile
  const initialState = {};
  for (let i = 0; i < profiles.length; i++) {
    initialState[profiles[i].name] = false;
  }
  const unselectedState = { ...initialState };
  initialState[profiles[0].name] = true;

  // state that defines which tab is currently selected
  const [tab, setTab] = useState(initialState);

  // changes state when any tab is selected
  const handleTabChange = (name) => {
    setTab({
      ...unselectedState,
      [name]: true,
    });
  };

  const getCount = (profile) => {
    switch (profile) {
      case "members":
        return currentMembers.length;
      case "alumni":
        return alumni.length;
      case "clients":
        return clients.length;
      default:
        return 0;
    }
  };

  return (
    <>
      <div className="container bg-dark">
        <div className="row py-3">
          <h2 className="text-center text-light">We are always growing.</h2>
        </div>
        <div className="row pt-3">
          {profiles.map(({ name }) => (
            <div
              className={`tab text-center col-sm-4 p-0 ${
                tab[name] ? "selected font-weight-bold text-light" : "text-muted"
              }`}
              onClick={() => {
                handleTabChange(name);
              }}
            >
              <h1>{getCount(name)}</h1>
              <h2>{name}</h2>
              <hr />
            </div>
          ))}

          {profiles.map(({ name, count }) => (
            // TODO: need to remove name prop (only used temporarily until actual data is loaded)
            <Profiles name={name} display={tab[name]} />
          ))}
        </div>
      </div>
    </>
  );
}
