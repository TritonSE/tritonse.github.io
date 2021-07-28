import React from "react";

import Event from "./Event";
import { allEvents } from "../data";

import { sortByEarliest, getUpcomingEvents } from "../util/events";

const getNRecentEvents = (numToShow = -1) => {
  // TODO: line below will get all upcoming events, but since data currently is all past event, we do no need this
  // let upcomingEvents = getUpcomingEvents(allEvents);

  // TODO: delete this line and uncomment top line when data/events.js is updated
  const upcomingEvents = allEvents;
  const sortedUpcomingEvents = sortByEarliest(upcomingEvents);

  return numToShow < 0 ? sortedUpcomingEvents : sortedUpcomingEvents.slice(0, numToShow);
};

const emptyEvent = {
  title: "No Upcoming Events",
  description:
    "There are currently no events planned for the forseeable future, but make came back later or follow us on our socials to keep up to date",
};

/**
 * Tabbed interface showing members, alumni, and clients.
 * @param props
 */
export default function UpcomingEvents(props) {
  // gets all events if number of events not specified
  const upcomingEvents =
    "numToShow" in props ? getNRecentEvents(props["numToShow"]) : getNRecentEvents();

  return (
    <div className="row m-5 text-dark">
      {upcomingEvents.length === 0 ? (
        <div className="col-md-6 my-3 d-flex align-items-stretch justify-content-around">
          <div className="empty-event event-card card p-4">
            <h2 className="card-title mb-4 ">
              <strong>{emptyEvent.title}</strong>
            </h2>
            <p>{emptyEvent.description}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      {upcomingEvents.map((event) => (
        <Event {...event} />
      ))}
    </div>
  );
}
