import React from "react";

import Event from "./Event";
import { allEvents } from "../data";
import { categorizeIntoYears, sortByEarliest } from "../util/events";

const sortedEvents = sortByEarliest(allEvents);
const categorizedEvents = categorizeIntoYears(sortedEvents);
console.log(categorizedEvents);

const eventCards = Object.keys(categorizedEvents).map((yearRange) => {
  console.log(yearRange);
  return (
    <div>
      <h2>{yearRange}</h2>
      <div>
        {categorizedEvents[yearRange].map((event) => (
          <Event {...event} />
        ))}
      </div>
    </div>
  );
});

console.log(eventCards);

export default function AllEvents() {
  return (
    <div className="m-5">
      {
        // loops through each year range
        Object.keys(categorizedEvents)
          .reverse()
          .map((yearRange) => {
            console.log(yearRange);
            return (
              <div>
                <h2>{yearRange}</h2>
                <div className="row">
                  {
                    // loops through each event in theyear range
                    categorizedEvents[yearRange].reverse().map((event) => (
                      <Event {...event} />
                    ))
                  }
                </div>
              </div>
            );
          })
      }
    </div>
  );
}
