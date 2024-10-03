import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import ApplicationButton from "../components/ApplicationButton";
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
import recruitment from "../data/recruitment";
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

  /**
   * TODO:
   * - Update the client testimonials section to match the Figma: images, scrolling, colored blue text
   */
  return (
    <>
      <PageTitle title="Home" />
      <Hero imageKey="content/photoshoot-marketing-15">
        <div className="text-center">
          {markdown`
# Triton Software Engineering

Crafting digital solutions for nonprofit organizations in our community.
          `}
        </div>
      </Hero>
      {recruitment.acceptingApplications && (
        <PaddedBox heading="Apply Now!">
          Are you a UCSD student interested in joining TSE this school year? Applications are due on{" "}
          {recruitment.deadline}.
          <ApplicationButton />
        </PaddedBox>
      )}
      <PaddedBox heading="Tech For Good">
        We believe that technology should be utilized to better the community. Something as simple
        as a sleek, static, and easy-to-use website or as complicated as a mobile app to track
        donations to your nonprofit organization can have a huge impact on an organization of any
        size.
        <Container style={{ marginTop: "1.5em", marginLeft: "-0.6em" }}>
          <ArrowLink href="/about">Our Story</ArrowLink>
        </Container>
      </PaddedBox>
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
      <PaddedBox heading="Get Involved">
        {markdown`
As a powerhouse of 42 developers and 12 UI/UX designers, we are extremely collaborative here at Triton Software Engineering. In the past 6 years, we have provided software services pro bono for 18 nonprofit organizations, and we are continuing to grow.
        `}
      </PaddedBox>
      <PaddedBox backgroundColor="#F8F8F8" className="text-black">
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
