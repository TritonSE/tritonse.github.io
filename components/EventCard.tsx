import Card from "react-bootstrap/Card";

import type { Event } from "../data/events";

import ArrowLink from "./ArrowLink";

function EventText({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Card.Text className={className || "mb-3"} {...props}>
      {children}
    </Card.Text>
  );
}

export default function EventCard({
  event: { title, description, location, startTime, url },
}: {
  event: Event;
}) {
  return (
    <Card className="mb-3 text-dark shadow">
      <Card.Body>
        <Card.Title className="mb-4" style={{ fontWeight: 600 }}>
          {title}
        </Card.Title>
        <EventText>{description}</EventText>
        <EventText className="mb-1">
          <strong>Where:</strong>
          {" " + location}
        </EventText>
        <EventText>
          <strong>When:</strong>
          {" " + startTime.toFormat("DDD / t") + " Pacific"}
        </EventText>
        <EventText>
          <ArrowLink href={url} dark>
            Learn more
          </ArrowLink>
        </EventText>
      </Card.Body>
    </Card>
  );
}
