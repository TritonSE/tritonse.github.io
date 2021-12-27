import React from "react";
import Container from "react-bootstrap/Container";

import PageTitle from "../components/PageTitle";
import EventCardGroup from "../components/EventCardGroup";
import events from "../data/events";
import type { Event } from "../data/events";

function getYearsAndEvents() {
  const eventsBySchoolYear: {[key:string]: Event[]} = {};
  for (const event of events) {
    const schoolYear = event.startTime.minus({ months: 8 }).year;

    if (!eventsBySchoolYear.hasOwnProperty(schoolYear)) {
      eventsBySchoolYear[schoolYear] = [];
    }
    eventsBySchoolYear[schoolYear].push(event);
  }

  const entries = (Object.entries(eventsBySchoolYear)
    .map(([year, events]) => [parseInt(year), events] as [number, Event[]]));
  entries.sort((entry1, entry2) => entry2[0] - entry1[0]);
  return entries;
}

function formatSchoolYear(year: number) {
  return year + "–" + (year + 1).toString().slice(2);
}

export default function Events() {
  const yearsAndEvents = getYearsAndEvents();
  return (
    <>
      <PageTitle title="Events" />
      <Container>
        <h1 className="mt-5">TSE Events</h1>
        {yearsAndEvents.map(([year, events]) => (
          <React.Fragment key={year}>
            <h2 className="my-5">{formatSchoolYear(year)}</h2>
            <EventCardGroup events={events} />
          </React.Fragment>
        ))}
      </Container>
    </>
  )
}
