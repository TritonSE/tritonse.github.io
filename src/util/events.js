/**
 * Event sorting and filtering functions
 */

export function sortByEarliest(events) {
  return events.sort(compare);
}

export function getUpcomingEvents(events) {
  // filter events that have already passed
  const upcomingEvents = events.filter((event) => {
    if (new Date(event.startTime) > new Date()) {
      return true;
    }
  });

  return upcomingEvents;
}

let compare = (a, b) => {
  const aDate = new Date(a.startTime);
  const bDate = new Date(b.startTime);
  if (aDate < bDate) {
    return -1;
  }
  if (aDate > bDate) {
    return 1;
  }
  return 0;
};
