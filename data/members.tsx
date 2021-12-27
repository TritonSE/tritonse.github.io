import { makeComparator } from "../util/sorting";
import _members from "./members.json";

export interface Member {
  readonly name: string,
  readonly roles: [string, ...string[]],
  readonly graduationYear: number | null,
  readonly hidden: boolean,
}

const memberDefaults = {
  graduationYear: null,
  hidden: false,
}

const roles = [
  "President",
  // VPs
  "VP Design",
  "VP Engineering",
  "VP External",
  "VP Operations",
  "VP Projects",
  "VP Technology",
  // Leads
  "Marketing Lead",
  "Outreach Lead",
  // Managers
  "Engineering Manager",
  "Product Manager",
  "Project Manager",
  // Everyone else
  "Designer",
  "Developer",
  "TEST Designer",
  "TEST Developer",
] as readonly string[];

function roleIndex(role: string) {
  const index = roles.indexOf(role);
  if (index === -1) {
    throw new Error(`Unrecognized role: '${role}'`);
  }
  return index;
}

const members = (_members.map((member) => ({...memberDefaults, ...member})) as Member[]).filter((member) => !member.hidden);
members.sort(makeComparator(({ graduationYear, roles, name }) => [
  graduationYear === null ? 9999 : graduationYear,
  roleIndex(roles[roles.length - 1]),
  name
]));
export default members as readonly Member[];
