import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import EventCardGroup from '../components/EventCardGroup';
import events from '../data/events';
import type { Event } from "../data/events";
import ArrowLink from "../components/ArrowLink";
import PageTitle from "../components/PageTitle";

function Heading(props: any) {
  return (
    <h2 className="mb-5" style={{ fontWeight: 600 }} {...props} />
  )
}

export default function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState([] as Event[]);
  useEffect(() => {
    setUpcomingEvents(events.filter((event) => event.startTime.toMillis() >= Date.now()).slice(0, 4));
  }, []);

  return (
    <>
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
          <ArrowLink href="/events" dark>See all past events</ArrowLink>
        </Container>
      </div>
    </>
  )
}
