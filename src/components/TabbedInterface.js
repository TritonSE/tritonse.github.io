import React, { useState } from "react";

import Profiles from "./Profiles";
import "./TabbedInterface.css";
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

  return (
    <>
      <div className="container bg-dark">
        <div className="row py-3">
          <h3 className="text-center text-light">We are always growing.</h3>
        </div>
        <div className="row pt-3">
          {profiles.map(({ name, count }) => (
            <div
              className={`tab text-center col-sm-4 p-0 ${
                tab[name] ? "selected font-weight-bold text-light" : "text-muted"
              }`}
              onClick={() => {
                handleTabChange(name);
              }}
            >
              <h2>{count}</h2>
              <p>{name}</p>
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
