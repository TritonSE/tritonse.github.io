import React from "react";
import { DateTime } from "luxon";

import ArrowLink from "./ArrowLink";

/**
 * Display information about an event.
 * @param props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.location
 * @param {luxon.DateTime} props.startTime
 * @param {string} props.url
 */
export default function Event({ title, description, location, startTime, url }) {
  return (
    <div>
      <p>
        <strong>{title}</strong>
      </p>
      <p>{description}</p>
      <p>Where: {location}</p>
      <p>When: {startTime.toLocaleString(DateTime.DATETIME_FULL)}</p>
      <p>
        <ArrowLink to={url}>Learn More</ArrowLink>
      </p>
    </div>
  );
}
