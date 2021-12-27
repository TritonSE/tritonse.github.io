import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import EventCardGroup from '../components/EventCardGroup';
import events from '../data/events';
import type { Event } from "../data/events";

function Heading({ text, ...props }: { text: string }) {
  return (
    <h2 className="mb-5" style={{ fontWeight: 600 }} {...props}>
      {text}
    </h2>
  )
}

export default function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState([] as Event[]);
  useEffect(() => {
    setUpcomingEvents(events.filter((event) => event.startTime.toMillis() >= Date.now()).slice(0, 4));
  }, []);

  return (
    <>
      <div style={{backgroundColor: "#F4F4F4"}}>
        <Container className="py-5 text-black">
          <Heading text="Upcoming Events" />
          <EventCardGroup events={upcomingEvents} />
        </Container>
      </div>
    </>
  )
}
