import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard from "../components/EventCard";
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
