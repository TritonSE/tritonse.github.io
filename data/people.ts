import { assertUniqueKey, makeComparator } from "../util";

// Roles are listed alphabetically in each category.
const allRoles = [
  "President",
  // VPs
  "VP Design",
  "VP Engineering",
  "VP External",
  "VP Operations",
  "VP Products",
  "VP Projects",
  "VP Technology",
  // Leads
  "Marketing Lead",
  "Outreach Lead",
  "TEST Design Lead",
  "TEST Developer Lead",
  // Managers
  "Engineering Manager",
  "Product Manager",
  "Project Manager",
  // Members
  "Designer",
  "Developer",
  // TEST
  "TEST Designer",
  "TEST Developer",
] as const;
type Role = typeof allRoles[number];

interface Member {
  readonly name: string;
  readonly roles: readonly Role[];
  readonly hidden?: boolean;
}

interface Alumnus extends Member {
  readonly graduation: number | "TEST";
}

type Person = Member | Alumnus;

const constPeople = [
  {
    name: "Aaron Yang",
    roles: ["President"],
    graduation: 2018,
  },
  {
    name: "Thomas Galpin",
    roles: ["VP Operations"],
    graduation: 2018,
  },
  {
    name: "Belal Aboabdo",
    roles: ["VP External"],
    graduation: 2018,
  },
  {
    name: "Khaled Ahmad",
    roles: ["VP Technology"],
    graduation: 2018,
  },
  {
    name: "Zach Liou",
    roles: ["Project Manager", "VP Technology"],
    graduation: 2018,
  },
  {
    name: "Donald Kwan",
    roles: ["Project Manager"],
    graduation: 2018,
  },
  {
    name: "Joann Chen",
    roles: ["Developer", "Project Manager"],
    graduation: 2018,
  },
  {
    name: "Gary Zhao",
    roles: ["Developer"],
    graduation: 2019,
  },
  {
    name: "John Lu",
    roles: ["Developer"],
    graduation: 2019,
  },
  {
    name: "Sumeet Bansal",
    roles: ["Developer", "Project Manager", "President"],
    graduation: 2020,
  },
  {
    name: "Alex Chiu",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    name: "Bryant Liu",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    name: "Dan Huang",
    roles: ["Project Manager"],
    graduation: 2020,
  },
  {
    name: "Glenn Raskovich",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    name: "Kenny Yi",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    name: "Winnie Chen",
    roles: ["Designer"],
    graduation: 2020,
  },
  {
    name: "Benson Budiman",
    roles: ["Developer", "VP Operations"],
    graduation: 2021,
  },
  {
    name: "Ayush Shukla",
    roles: ["Developer", "VP External"],
    graduation: 2021,
  },
  {
    name: "Jessica Nguyen",
    roles: ["Designer", "VP Design"],
    graduation: 2021,
  },
  {
    name: "Wesley Chen",
    roles: ["Developer", "VP External", "President"],
    graduation: 2021,
  },
  {
    name: "Anoushka Dave",
    roles: ["Developer", "VP Operations", "President"],
  },
  {
    name: "Viren Abhyankar",
    roles: ["Developer", "VP Products"],
  },
  {
    name: "David Hacker",
    roles: ["Developer", "VP Technology"],
    graduation: 2021,
  },
  {
    name: "Holly Ham",
    roles: ["Developer", "Project Manager", "VP Projects"],
    graduation: 2021,
  },
  {
    name: "Mylinh Lac",
    roles: ["Designer", "VP Design"],
    hidden: true,
  },
  {
    name: "Heather Gan",
    roles: ["Developer", "Outreach Lead"],
    graduation: 2022,
  },
  {
    name: "Kelly Li",
    roles: ["Designer", "Marketing Lead"],
    graduation: 2022,
  },
  {
    name: "Amrit Singh",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    name: "Arnold Duan",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    name: "David Cruz",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    name: "Hannah Hsu",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    name: "Sara Blumin",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    name: "Andrew Caballero",
    roles: ["Designer", "VP Design"],
  },
  {
    name: "Evan Lam",
    roles: ["Designer", "VP Design"],
    graduation: 2022,
  },
  {
    name: "Kenny Tran",
    roles: ["Designer"],
    graduation: 2021,
  },
  {
    name: "Lydia Smith",
    roles: ["Designer"],
    graduation: 2022,
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
    graduation: 2022,
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
    graduation: 2022,
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
    graduation: 2021,
  },
  {
    name: "Benson Vuong",
    roles: ["Developer"],
    graduation: 2022,
  },
  {
    name: "Robert Tatum",
    roles: ["Developer", "Project Manager"],
    graduation: 2022,
  },
  {
    name: "Deepansha Singh",
    roles: ["Developer"],
  },
  {
    name: "Dhanush Nanjunda Reddy",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2022,
  },
  {
    name: "Dhruv Sood",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Elias Fang",
    roles: ["Developer"],
    graduation: 2022,
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
    graduation: 2021,
  },
  {
    name: "Kunal Bhandarkar",
    roles: ["Developer", "VP Engineering"],
    graduation: 2022,
  },
  {
    name: "Ly Nguyen",
    roles: ["Developer"],
    graduation: 2022,
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
    graduation: 2022,
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
    roles: ["Developer", "TEST Developer Lead"],
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
    roles: ["Developer", "TEST Developer Lead", "Product Manager"],
  },
  {
    name: "Thai Gillespie",
    roles: ["Developer"],
    graduation: 2021,
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
    roles: ["Developer", "VP Engineering"],
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
    roles: ["Developer", "Engineering Manager"],
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
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "James Zhang",
    roles: ["Developer"],
  },
  {
    name: "Mohak Vaswani",
    roles: ["Developer", "Product Manager"],
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
    roles: ["Developer", "Engineering Manager"],
  },
  {
    name: "Ryan Hung",
    roles: ["Developer"],
  },
  {
    name: "Shreekar Pandey",
    roles: ["Developer", "VP External"],
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
    graduation: 2022,
  },
  {
    name: "Jonathan Lum",
    roles: ["Designer"],
  },
  {
    name: "Juliet Zhuang",
    roles: ["Designer", "Marketing Lead"],
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
    graduation: "TEST",
  },
  {
    name: "Sage Amon",
    roles: ["TEST Developer"],
    graduation: "TEST",
  },
  {
    name: "Abel Seyoum",
    roles: ["TEST Developer"],
    graduation: "TEST",
  },
  {
    name: "Garrett Lam",
    roles: ["TEST Developer"],
    graduation: "TEST",
  },
  {
    name: "Eric Shults",
    roles: ["TEST Developer"],
    graduation: "TEST",
  },
  {
    name: "Alicia Danielle",
    roles: ["TEST Developer"],
    graduation: "TEST",
  },
  {
    name: "Frances Sy",
    roles: ["TEST Designer"],
    graduation: "TEST",
  },
  {
    name: "Aska Kunita Demirci",
    roles: ["TEST Designer"],
    graduation: "TEST",
  },
  {
    name: "Annie Ye",
    roles: ["TEST Designer"],
    graduation: "TEST",
  },
  {
    name: "Jason Cabrera",
    roles: ["Project Manager"],
    graduation: "TEST",
    hidden: true,
  },
  {
    name: "Nhu Luong",
    roles: ["Designer"],
    hidden: true,
  },
] as const;
type PersonName = typeof constPeople[number]["name"];

// Sort and validate data.
const mutablePeople: Person[] = constPeople.slice();
mutablePeople.sort(
  makeComparator(({ roles, name, ...person }) => [
    "graduation" in person ? person.graduation : 9999,
    allRoles.indexOf(roles[roles.length - 1]),
    name,
  ])
);
assertUniqueKey(mutablePeople, "name");

const allPeople = mutablePeople as readonly Person[];
const visiblePeople = allPeople.filter((person) => !person.hidden);

// Create arrays with only alumni and only members.
function isAlumnus(member: Member): member is Alumnus {
  return "graduation" in member;
}
const allAlumni: readonly Alumnus[] = visiblePeople.filter(isAlumnus);
const allMembers: readonly Member[] = visiblePeople.filter((person) => !isAlumnus(person));

export { allRoles, allAlumni, allMembers, allPeople };

export type { Alumnus, Member, Person, PersonName, Role };
