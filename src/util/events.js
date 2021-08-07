// used to concatenate with year to ccheck which school year an event is from
const SCHOOL_START_DATE = "-09-01T00:00:00";

/**
 * Event sorting and filtering functions
 */

export function sortByEarliest(events) {
  return events.sort(compare);
}

export function getUpcomingEvents(events) {
  // filter out events that have already passed
  const upcomingEvents = events.filter((event) => {
    if (new Date(event.startTime) > new Date()) {
      return true;
    }
  });

  return upcomingEvents;
}

// splits list of events into groups based in school year
export function categorizeIntoYears(events) {
  const result = {};
  for (const event of events) {
    const year = new Date(event.startTime).getFullYear();
    let schoolYear;

    // gets the range of year the event takes place in
    if (new Date(event.startTime) < new Date(year + SCHOOL_START_DATE)) {
      schoolYear = (year - 1).toString() + "-" + year.toString();
    } else {
      schoolYear = year.toString() + "-" + (year + 1).toString();
    }

    // adds this event to correct year range
    if (schoolYear in result) {
      result[schoolYear].push(event);
    } else {
      result[schoolYear] = [event];
    }
  }

  return result;
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
