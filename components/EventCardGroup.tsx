import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import EventCard from "./EventCard";

import type { Event } from "../data/events";

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
