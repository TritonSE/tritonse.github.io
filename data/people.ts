import { assertUniqueKey, makeComparator } from "../util";

// Roles are listed alphabetically in each category.
const allRoles = [
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
  // TEST
  "TEST Design Lead",
  "TEST Developer Lead",
  "TEST Designer",
  "TEST Developer",
  // Everyone else
  "Designer",
  "Developer",
] as const;
type Role = typeof allRoles[number];

interface Member {
  readonly name: string;
  readonly roles: readonly Role[];
  readonly hidden?: boolean;
}

interface Alumnus extends Member {
  readonly graduationYear: number;
}

type Person = Member | Alumnus;

const constPeople = [
  {
    name: "Aaron Yang",
    roles: ["President"],
    graduationYear: 2018,
  },
  {
    name: "Thomas Galpin",
    roles: ["VP Operations"],
    graduationYear: 2018,
  },
  {
    name: "Belal Aboabdo",
    roles: ["VP External"],
    graduationYear: 2018,
  },
  {
    name: "Khaled Ahmad",
    roles: ["VP Technology"],
    graduationYear: 2018,
  },
  {
    name: "Zach Liou",
    roles: ["Project Manager", "VP Technology"],
    graduationYear: 2018,
  },
  {
    name: "Donald Kwan",
    roles: ["Project Manager"],
    graduationYear: 2018,
  },
  {
    name: "Joann Chen",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2018,
  },
  {
    name: "Gary Zhao",
    roles: ["Developer"],
    graduationYear: 2019,
  },
  {
    name: "John Lu",
    roles: ["Developer"],
    graduationYear: 2019,
  },
  {
    name: "Sumeet Bansal",
    roles: ["Developer", "Project Manager", "President"],
    graduationYear: 2020,
  },
  {
    name: "Alex Chiu",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2020,
  },
  {
    name: "Bryant Liu",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2020,
  },
  {
    name: "Dan Huang",
    roles: ["Project Manager"],
    graduationYear: 2020,
  },
  {
    name: "Glenn Raskovich",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2020,
  },
  {
    name: "Kenny Yi",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2020,
  },
  {
    name: "Winnie Chen",
    roles: ["Designer"],
    graduationYear: 2020,
  },
  {
    name: "Benson Budiman",
    roles: ["Developer", "VP Operations"],
    graduationYear: 2021,
  },
  {
    name: "Ayush Shukla",
    roles: ["Developer", "VP External"],
    graduationYear: 2021,
  },
  {
    name: "Jessica Nguyen",
    roles: ["Designer", "VP Design"],
    graduationYear: 2021,
  },
  {
    name: "Wesley Chen",
    roles: ["Developer", "VP External", "President"],
    graduationYear: 2021,
  },
  {
    name: "Anoushka Dave",
    roles: ["Developer", "VP Operations", "President"],
  },
  {
    name: "Viren Abhyankar",
    roles: ["Developer", "VP Projects"],
  },
  {
    name: "David Hacker",
    roles: ["Developer", "VP Technology"],
    graduationYear: 2021,
  },
  {
    name: "Holly Ham",
    roles: ["Developer", "Project Manager", "VP Projects"],
    graduationYear: 2021,
  },
  {
    name: "Mylinh Lac",
    roles: ["Designer", "VP Design"],
    hidden: true,
  },
  {
    name: "Heather Gan",
    roles: ["Developer", "Outreach Lead"],
  },
  {
    name: "Kelly Li",
    roles: ["Designer", "Marketing Lead"],
  },
  {
    name: "Amrit Singh",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2021,
  },
  {
    name: "Arnold Duan",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2021,
  },
  {
    name: "David Cruz",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2021,
  },
  {
    name: "Hannah Hsu",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2021,
  },
  {
    name: "Sara Blumin",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2021,
  },
  {
    name: "Andrew Caballero",
    roles: ["Designer"],
  },
  {
    name: "Evan Lam",
    roles: ["Designer", "VP Design"],
  },
  {
    name: "Kenny Tran",
    roles: ["Designer"],
    graduationYear: 2021,
  },
  {
    name: "Lydia Smith",
    roles: ["Designer"],
  },
  {
    name: "Rachel Blumin",
    roles: ["Designer"],
  },
  {
    name: "Rickie Chen",
    roles: ["Designer", "TEST Design Lead"],
  },
  {
    name: "Tracy Nguyen",
    roles: ["Designer"],
  },
  {
    name: "Aaron Kirk",
    roles: ["Developer"],
  },
  {
    name: "Advay Sharma",
    roles: ["Developer"],
  },
  {
    name: "Aksharan Saravanan",
    roles: ["Developer"],
  },
  {
    name: "Alejandro Rodriguez Pascual",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Allison Bhavsar",
    roles: ["Developer"],
  },
  {
    name: "Amitesh Sharma",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Anshul Birla",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "Anson Lee",
    roles: ["Developer"],
    graduationYear: 2021,
  },
  {
    name: "Benson Vuong",
    roles: ["Developer"],
  },
  {
    name: "Robert Tatum",
    roles: ["Developer", "Project Manager"],
    graduationYear: 2022,
  },
  {
    name: "Deepansha Singh",
    roles: ["Developer"],
  },
  {
    name: "Dhanush Nanjunda Reddy",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "Dhruv Sood",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Elias Fang",
    roles: ["Developer"],
  },
  {
    name: "Emmanuel Flores",
    roles: ["Developer", "Product Manager"],
  },
  {
    name: "Hana Kim",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Jacob Au",
    roles: ["Developer"],
  },
  {
    name: "Justin Yao Du",
    roles: ["Developer", "VP Technology"],
  },
  {
    name: "Kevin Han",
    roles: ["Developer"],
    graduationYear: 2021,
  },
  {
    name: "Kunal Bhandarkar",
    roles: ["Developer", "VP Engineering"],
  },
  {
    name: "Ly Nguyen",
    roles: ["Developer"],
  },
  {
    name: "Navid Boloorian",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "Nicholas Vanny",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Nicolas La Polla",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "Nirmal Agnihotri",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "Patrick Brown",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "Philip Zhang",
    roles: ["Developer"],
  },
  {
    name: "Rohan Puthukudy",
    roles: ["Developer"],
  },
  {
    name: "Rohith Kasar",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Ryan Bui",
    roles: ["Developer"],
  },
  {
    name: "Shravan Hariharan",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Shravan Konduru",
    roles: ["Developer", "VP Operations"],
  },
  {
    name: "Stephen Tan",
    roles: ["Developer", "TEST Developer Lead"],
  },
  {
    name: "Thai Gillespie",
    roles: ["Developer"],
    graduationYear: 2021,
  },
  {
    name: "Thomas Garry",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Upo Bhat",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "William Wu",
    roles: ["Developer"],
  },
  {
    name: "Xi-Kai Wu",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Zain Khan",
    roles: ["Developer"],
  },
  {
    name: "Ainesh Arumugam",
    roles: ["Developer"],
  },
  {
    name: "Alex Zhang",
    roles: ["Developer"],
  },
  {
    name: "Kevin Fu",
    roles: ["Developer"],
  },
  {
    name: "Pratyush Chand",
    roles: ["Developer"],
  },
  {
    name: "Andrew Russell",
    roles: ["Developer"],
  },
  {
    name: "James Zhang",
    roles: ["Developer"],
  },
  {
    name: "Mohak Vaswani",
    roles: ["Developer"],
  },
  {
    name: "Shreya Gupta",
    roles: ["Developer"],
  },
  {
    name: "Akhilan Gurumoorthy",
    roles: ["Developer"],
  },
  {
    name: "Aammya Sapra",
    roles: ["Developer"],
  },
  {
    name: "Andrew Masek",
    roles: ["Developer"],
  },
  {
    name: "Anvitaa Sekhsaria",
    roles: ["Developer"],
  },
  {
    name: "Artyom Muradyan",
    roles: ["Developer"],
  },
  {
    name: "Helen Lin",
    roles: ["Developer"],
  },
  {
    name: "Mary Vu",
    roles: ["Developer"],
  },
  {
    name: "Nishant Balaji",
    roles: ["Developer"],
  },
  {
    name: "Aman Aggarwal",
    roles: ["Developer"],
  },
  {
    name: "Parth Patel",
    roles: ["Developer"],
  },
  {
    name: "Assaf Cohen-Arazi",
    roles: ["Developer"],
  },
  {
    name: "Ryan Hung",
    roles: ["Developer"],
  },
  {
    name: "Shreekar Pandey",
    roles: ["Developer"],
  },
  {
    name: "William Jin",
    roles: ["Developer"],
  },
  {
    name: "Yucheng Huang",
    roles: ["Developer"],
  },
  {
    name: "Leslie Aguiar",
    roles: ["Designer"],
  },
  {
    name: "Jonathan Lum",
    roles: ["Designer"],
  },
  {
    name: "Juliet Zhuang",
    roles: ["Designer"],
  },
  {
    name: "Tracey Du",
    roles: ["Designer"],
  },
  {
    name: "Mrinal Sharma",
    roles: ["Product Manager"],
  },
  {
    name: "Akash Premkumar",
    roles: ["Product Manager"],
  },
  {
    name: "Annie Wen",
    roles: ["Product Manager"],
  },
  {
    name: " Casey Toy",
    roles: ["TEST Developer"],
  },
  {
    name: "Sage Amon",
    roles: ["TEST Developer"],
  },
  {
    name: "Abel Seyoum",
    roles: ["TEST Developer"],
  },
  {
    name: "Garrett Lam",
    roles: ["TEST Developer"],
  },
  {
    name: "Eric Shults",
    roles: ["TEST Developer"],
  },
  {
    name: "Alicia Danielle",
    roles: ["TEST Developer"],
  },
  {
    name: "Frances Sy",
    roles: ["TEST Designer"],
  },
  {
    name: "Aska Kunita Demirci",
    roles: ["TEST Designer"],
  },
  {
    name: "Annie Ye",
    roles: ["TEST Designer"],
  },
] as const;
type PersonName = typeof constPeople[number]["name"];

// Sort and validate data.
const mutablePeople: Person[] = constPeople.slice();
mutablePeople.sort(
  makeComparator(({ roles, name, ...person }) => [
    "graduationYear" in person ? person.graduationYear : 9999,
    allRoles.indexOf(roles[roles.length - 1]),
    name,
  ])
);
assertUniqueKey(mutablePeople, "name");

const allPeople = mutablePeople as readonly Person[];
const visiblePeople = allPeople.filter((person) => !person.hidden);

// Create arrays with only alumni and only members.
function isAlumnus(member: Member): member is Alumnus {
  return "graduationYear" in member;
}
const allAlumni: readonly Alumnus[] = visiblePeople.filter(isAlumnus);
const allMembers: readonly Member[] = visiblePeople.filter((person) => !isAlumnus(person));

export { allRoles, allAlumni, allMembers, allPeople };

export type { Alumnus, Member, Person, PersonName, Role };
