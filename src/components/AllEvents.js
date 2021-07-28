import React from "react";

import Event from "./Event";
import { allEvents } from "../data";

export default function AllEvents() {
  return (
    <>
      {allEvents.map((event) => (
        <Event {...event} />
      ))}
    </>
  );
}
