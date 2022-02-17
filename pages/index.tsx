import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import ArrowLink from "../components/ArrowLink";
import EventCardGroup from "../components/EventCardGroup";
import GetInvolvedCards from "../components/GetInvolvedCards";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import ProjectCarousel from "../components/ProjectCarousel";
import { allClients } from "../data/clients";
import { allEvents } from "../data/events";
import type { Event } from "../data/events";
import { allSponsors } from "../data/sponsors";
import { firstValidImageKey } from "../images";
import { makeSlug } from "../util";
import markdown from "../util/markdown";

export default function Home() {
  // If the events are statically rendered, the event data could become outdated
  // if a user visits the website and it hasn't been rebuilt recently.
  // Prevent this by filtering the events at runtime for each user.
  const [upcomingEvents, setUpcomingEvents] = useState([] as Event[]);
  useEffect(() => {
    setUpcomingEvents(
      allEvents.filter((event) => event.startTime.toMillis() >= Date.now()).slice(0, 4)
    );
  }, []);

  return (
    <>
      <PageTitle title="Home" />
      <Hero imageKey="content/photoshoot-marketing-15">
        <div className="text-center">
          {markdown`
# Triton Software Engineering

Crafting digital solutions for the community around us.
          `}
        </div>
      </Hero>
      <PaddedBox heading="Tech For Good">Lorem ipsum dolor sit amet</PaddedBox>
      <PaddedBox
        backgroundColor="#F4F4F4"
        className="text-black pb-0"
        heading="Latest Work"
        noContainer
      >
        <Container style={{ marginTop: "-1em" }}>
          <ArrowLink href="/projects" dark>
            See all projects
          </ArrowLink>
        </Container>
        <ProjectCarousel />
      </PaddedBox>
      <PaddedBox heading="Todo">
        Think of something to put here... dark background is good because it makes the scrollbar
        above look less ugly
      </PaddedBox>
      <PaddedBox backgroundColor="#F8F8F8" className="text-black" heading="Get Involved">
        <GetInvolvedCards />
      </PaddedBox>
      <PaddedBox backgroundColor="#F4F4F4" className="text-black" heading="Upcoming Events">
        <EventCardGroup events={upcomingEvents} />
        <ArrowLink href="/events" dark>
          See all past events
        </ArrowLink>
      </PaddedBox>
      <PaddedBox backgroundColor="#FFFFFF" className="text-black" heading="Our Clients">
        <Logos
          logos={allClients.map((client) => ({
            imageKey: firstValidImageKey(`clients/${makeSlug(client.name)}`),
            url: client.url,
          }))}
        />
      </PaddedBox>
      <PaddedBox backgroundColor="#FFFFFF" className="text-black" heading="Our Sponsors">
        <Logos
          logos={allSponsors.map((sponsor) => ({
            imageKey: firstValidImageKey(`sponsors/${makeSlug(sponsor.name)}`),
            url: sponsor.url,
          }))}
        />
      </PaddedBox>
    </>
  );
}
