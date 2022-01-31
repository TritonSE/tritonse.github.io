import React from "react";
import Container from "react-bootstrap/Container";

import EventCardGroup from "../components/EventCardGroup";
import PageTitle from "../components/PageTitle";
import { allEvents } from "../data/events";
import type { Event } from "../data/events";
import { groupBy } from "../util";

function getSchoolYear(event: Event): number {
  return event.startTime.minus({ months: 8 }).year;
}

function formatSchoolYear(year: number): string {
  return year + "–" + (year + 1).toString().slice(2);
}

export default function Events() {
  const yearsAndEvents = groupBy(allEvents, getSchoolYear).reverse();
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
  );
}
