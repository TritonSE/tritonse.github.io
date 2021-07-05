/**
 * Import, process, and export data from JSON files.
 */

import allMembers from "./members.json";

allMembers.forEach((member) => {
  member.socials = member.socials || {};
});
const shownMembers = allMembers.filter((member) => !member.hidden);
const currentMembers = shownMembers.filter((member) => member.graduation_year === undefined);
const alumni = shownMembers.filter((member) => member.graduation_year !== undefined);

export { allMembers, currentMembers, alumni };
