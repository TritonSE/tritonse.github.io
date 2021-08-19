/**
 * Member manipulation functions
 */
const ROLE_ORDER = [
  "President",
  "VP Operations",
  "VP External",
  "VP Technology",
  "VP Projects",
  "VP Design",
  "Outreach Lead",
  "Marketing Lead",
  "Project Manager",
  "UI/UX Designer",
  "Developer",
];

function compareByRole(a, b) {
  const aRole = a.roles[a.roles.length - 1];
  const bRole = b.roles[b.roles.length - 1];
  const roleComparison = ROLE_ORDER.indexOf(aRole) - ROLE_ORDER.indexOf(bRole);
  if (roleComparison < 0) {
    return -1;
  }
  if (roleComparison > 0) {
    return 1;
  }
  // same role; sort by alphabetical first name

  const aName = a.name;
  const bName = b.name;
  if (aName < bName) {
    return -1;
  }
  if (aName > bName) {
    return 1;
  }

  return 0;
}

export function sortMembersByRole(members) {
  members.sort(compareByRole);
}

/**
 * given a list of members (must have a graduation year field), group them into years
 */
export function categorizeMembersIntoYears(members) {
  const result = {};

  for (const member of members) {
    const graduationYear = member.graduationYear;
    if (graduationYear in result) {
      result[graduationYear].push(member);
    } else {
      result[graduationYear] = [member];
    }
  }

  // sort the categorized members
  Object.values(result).forEach((group) => group.sort(compareByRole));

  return result;
}
