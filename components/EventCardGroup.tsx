import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import type { Event } from "../data/events";

import EventCard from "./EventCard";

export default function EventCardGroup({ events }: { events: Event[] }) {
  if (events.length === 0) {
    return <p>No events scheduled.</p>;
  }

  return (
    <Row>
      {events.map((event, index) => (
        <Col xs={12} lg={6} key={index}>
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
  );
}
