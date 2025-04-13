import React from "react";
import Card from "react-bootstrap/Card";

import type { Event } from "../data/events";

import ArrowLink from "./ArrowLink";

interface EventTextProps {
  className?: string;
  children: React.ReactNode;
}

function EventText({ className, children, ...props }: EventTextProps) {
  return (
    <Card.Text className={className || "mb-3"} {...props}>
      {children}
    </Card.Text>
  );
}

EventText.defaultProps = {
  className: undefined,
};

interface EventCardProps {
  event: Event;
}

export default function EventCard({
  event: { title, description, location, startTime, url },
}: EventCardProps) {
  return (
    <Card className="mb-3 text-dark shadow" style={{ backgroundColor: "white" }}>
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
        {url ? (
          <EventText>
            <ArrowLink href={url} dark>
              Learn more
            </ArrowLink>
          </EventText>
        ) : null}
      </Card.Body>
    </Card>
  );
}
