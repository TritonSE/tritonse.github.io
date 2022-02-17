import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ArrowLink from "../components/ArrowLink";
import EventCardGroup from "../components/EventCardGroup";
import GetInvolvedCard from "../components/GetInvolvedCard";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import { allClients } from "../data/clients";
import { allEvents } from "../data/events";
import type { Event } from "../data/events";
import { allSponsors } from "../data/sponsors";
import { firstValidImageKey } from "../images";
import { makeSlug } from "../util";
import markdown from "../util/markdown";

export default function Home() {
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
      <PaddedBox backgroundColor="#F8F8F8" className="text-black" heading="Latest Work">
        <p>todo</p>
      </PaddedBox>
      <PaddedBox backgroundColor="#F8F8F8" className="text-black" heading="Get Involved">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <GetInvolvedCard
                title="Students"
                imageKey="content/photoshoot-marketing-7"
                href="/students"
                linkText="Learn how to join!"
              >
                {markdown`
We recruit student developers and designers every academic year during the fall.
                `}
              </GetInvolvedCard>
            </Col>
            <Col xs={12} lg={6}>
              <GetInvolvedCard
                title="Nonprofits"
                imageKey="content/photoshoot-marketing-15"
                href="/nonprofits"
                linkText="Learn how to partner with us!"
              >
                {markdown`
We're always looking for opportunities to help nonprofits operate with ease.
                `}
              </GetInvolvedCard>
            </Col>
          </Row>
        </Container>
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
