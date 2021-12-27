import { DateTime } from "luxon";

import _events from "./events.json";

export interface Event {
  readonly title: string,
  readonly description: string,
  readonly location: string,
  readonly startTime: DateTime,
  readonly url: string,
}

const events = _events.map((event) => {
  const dateTimeRegex = /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d$/;
  if (!dateTimeRegex.test(event.startTime)) {
    throw new Error(`Date '${event.startTime}' does not match regex '${dateTimeRegex}'`);
  }
  return {...event, startTime: DateTime.fromISO(event.startTime, { zone: "America/Los_Angeles" })};
}) as Event[];
events.sort((e1, e2) => e1.startTime.toMillis() - e2.startTime.toMillis());

export default events as readonly Event[];
