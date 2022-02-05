import React, { useEffect, useState } from "react";

import ArrowLink from "../components/ArrowLink";
import EventCardGroup from "../components/EventCardGroup";
import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import { allEvents } from "../data/events";
import type { Event } from "../data/events";

export default function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState([] as Event[]);
  useEffect(() => {
    setUpcomingEvents(
      allEvents.filter((event) => event.startTime.toMillis() >= Date.now()).slice(0, 4)
    );
  }, []);

  return (
    <>
      <Hero image="content/photoshoot-marketing-15">
        <div className="text-center">
          <h1>Triton Software Engineering</h1>
          <p>Crafting digital solutions for the community around us.</p>
        </div>
      </Hero>
      <PageTitle title="Home" />
      <PaddedBox backgroundColor="#F8F8F8" className="text-black" heading="Latest Work">
        <p>todo</p>
      </PaddedBox>
      <PaddedBox backgroundColor="#F4F4F4" className="text-black" heading="Upcoming Events">
        <EventCardGroup events={upcomingEvents} />
        <ArrowLink href="/events" dark>
          See all past events
        </ArrowLink>
      </PaddedBox>
    </>
  );
}
