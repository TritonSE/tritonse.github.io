import React from "react";
import { DateTime } from "luxon";

import ArrowLink from "./ArrowLink";

import "./Events.css";

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
    <div className="col-md-6 my-3 d-flex align-items-stretch justify-content-around text-dark">
      <div className="event-card card p-4">
        <h2 className="card-title mb-4 ">
          <strong>{title}</strong>
        </h2>
        <p>{description}</p>
        <p>
          {" "}
          <strong>Where:</strong> {location}
        </p>
        <p>
          {" "}
          <strong>When:</strong> {startTime.toLocaleString(DateTime.DATETIME_FULL)}
        </p>
        <p>
          <ArrowLink to={url}>Learn More</ArrowLink>
        </p>
      </div>
    </div>
  );
}
