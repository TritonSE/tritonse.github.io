/**
 * Import, process, and export data from JSON files.
 */

import { DateTime } from "luxon";

import allMembers from "./members.json";
import allEvents from "./events.json";
import allClients from "./clients.json";

allMembers.forEach((member) => {
  member.socials = member.socials || {};
});

const shownMembers = allMembers.filter((member) => !member.hidden);
const currentMembers = shownMembers.filter((member) => member.graduationYear === undefined);
const alumni = shownMembers.filter((member) => member.graduationYear !== undefined);
const clients = allClients;

// TODO filter past and present clients
// const currentClients = allClients.filter((client) => );

allEvents.forEach((event) => {
  event.startTime = DateTime.fromISO(event.startTime, { zone: "America/Los_Angeles" });
});

export { allMembers, currentMembers, alumni, allEvents, clients };
