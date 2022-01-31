import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import ArrowLink from "../components/ArrowLink";
import EventCardGroup from "../components/EventCardGroup";
import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import events from "../data/events";
import type { Event } from "../data/events";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5" style={{ fontWeight: 600 }}>
      {children}
    </h2>
  );
}

export default function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState([] as Event[]);
  useEffect(() => {
    setUpcomingEvents(
      events.filter((event) => event.startTime.toMillis() >= Date.now()).slice(0, 4)
    );
  }, []);

  return (
    <>
      <Hero path="content/photoshoot-marketing-15">
        <div className="text-center">
          <h1>Triton Software Engineering</h1>
          <p>Crafting digital solutions for the community around us.</p>
        </div>
      </Hero>
      <PageTitle title="Home" />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <Container className="py-5 text-black">
          <Heading>Latest Work</Heading>
        </Container>
      </div>
      <div style={{ backgroundColor: "#F4F4F4" }}>
        <Container className="py-5 text-black">
          <Heading>Upcoming Events</Heading>
          <EventCardGroup events={upcomingEvents} />
          <ArrowLink href="/events" dark>
            See all past events
          </ArrowLink>
        </Container>
      </div>
    </>
  );
}
