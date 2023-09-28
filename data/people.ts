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
    name: "Akashnarendran Premkumar",
    roles: ["Product Manager"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Anne Xu",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Uposhanto Bhattacharya",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Arnav Taneja",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Bryan Yuan",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Jason Vega",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Alex Li",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Brent Min",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Loc Vu",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Roger Ji",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Davin Tjong",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Victor Luong",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Alexandra Michael",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Nathan Zhao",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    name: "Kevin Soloway",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
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
    graduation: 2023,
  },
  {
    name: "Reyna Abhyankar",
    roles: ["Developer", "VP Products"],
    graduation: 2023,
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
    graduation: 2022,
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
    name: "Jason Cabrera",
    roles: ["Project Manager"],
    graduation: 2021,
  },
  {
    name: "Declan Sullivan",
    roles: ["Project Manager", "Developer"],
    graduation: 2021,
  },
  {
    name: "Andrew Caballero",
    roles: ["Designer", "VP Design"],
    graduation: 2023,
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
    graduation: 2023,
  },
  {
    name: "Rickie Chen",
    roles: ["Designer", "TEST Design Lead"],
    graduation: 2023,
  },
  {
    name: "Thomas Li",
    roles: ["Developer", "Project Manager"],
    hidden: true,
  },
  {
    name: "Tracy Nguyen",
    roles: ["Designer"],
    graduation: 2022,
  },
  {
    name: "Aaron Kirk",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Advay Sharma",
    roles: ["Developer", "Engineering Manager"],
    hidden: true,
  },
  {
    name: "Aksharan Saravanan",
    roles: ["Developer"],
    graduation: 2023,
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
    graduation: 2023,
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
    hidden: true,
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
    roles: ["Developer", "Engineering Manager", "President"],
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
    graduation: 2023,
  },
  {
    name: "Patrick Brown",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2022,
  },
  {
    name: "Philip Zhang",
    roles: ["Developer"],
  },
  {
    name: "Rohan Puthukudy",
    roles: ["Developer", "TEST Developer Lead"],
    graduation: 2023,
  },
  {
    name: "Rohith Kasar",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Ryan Bui",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Shravan Hariharan",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Shravan Konduru",
    roles: ["Developer", "VP Operations"],
    graduation: 2023,
  },
  {
    name: "Stephen Tan",
    roles: ["Developer", "TEST Developer Lead", "Product Manager", "VP Products"],
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
    hidden: true,
  },
  {
    name: "Ainesh Arumugam",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Alex Zhang",
    roles: ["Developer", "Engineering Manager"],
    hidden: true,
  },
  {
    name: "Kevin Fu",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Pratyush Chand",
    roles: ["Developer"],
  },
  {
    name: "Andrew Russell",
    roles: ["Developer", "Engineering Manager", "VP Technology"],
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
    graduation: 2023,
  },
  {
    name: "Artyom Muradyan",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Helen Lin",
    roles: ["Developer"],
  },
  {
    name: "Mary Vu",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Nishant Balaji",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Aman Aggarwal",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2023,
  },
  {
    name: "Parth Patel",
    roles: ["Developer"],
  },
  {
    name: "Assaf Cohen-Arazi",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2023,
  },
  {
    name: "Ryan Hung",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Shreekar Pandey",
    roles: ["Developer", "VP External"],
    hidden: true,
  },
  {
    name: "William Jin",
    roles: ["Developer"],
  },
  {
    name: "Yucheng Huang",
    roles: ["Developer"],
    hidden: true,
  },
  {
    name: "Leslie Aguiar",
    roles: ["Designer"],
    graduation: 2022,
  },
  {
    name: "Jonathan Lum",
    roles: ["Designer"],
    graduation: 2023,
  },
  {
    name: "Juliet Zhuang",
    roles: ["Designer", "Marketing Lead"],
    graduation: 2023,
  },
  {
    name: "Tracey Du",
    roles: ["Designer"],
    hidden: true,
  },
  {
    name: "Mrinal Sharma",
    roles: ["Product Manager"],
  },
  {
    name: "Akash Premkumar",
    roles: ["Product Manager"],
    hidden: true,
  },
  {
    name: "Annie Wen",
    roles: ["Product Manager", "Designer"],
  },
  {
    name: "Casey Toy",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    name: "Sage Amon",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    name: "Abel Seyoum",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    name: "Garrett Lam",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    name: "Eric Shults",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    name: "Alicia Danielle",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    name: "Frances Sy",
    roles: ["TEST Designer"],
    graduation: 2022,
  },
  {
    name: "Aska Kunita Demirci",
    roles: ["TEST Designer", "Designer"],
  },
  {
    name: "Annie Ye",
    roles: ["TEST Designer"],
    graduation: 2022,
  },
  {
    name: "Nhu Luong",
    roles: ["Designer"],
    hidden: true,
  },
  {
    name: "Aaron Chan",
    roles: ["Developer"],
  },
  {
    name: "Adhithya Ananthan-Regina",
    roles: ["Developer"],
  },
  {
    name: "Anthony Pertsel",
    roles: ["Developer"],
  },
  {
    name: "Arnav Modi",
    roles: ["Developer"],
  },
  {
    name: "Arohan Mittal",
    roles: ["Developer"],
  },
  {
    name: "Benjamin Johnson",
    roles: ["Developer"],
  },
  {
    name: "Brenton Dunn",
    roles: ["Developer"],
  },
  {
    name: "Christen Xie",
    roles: ["Developer"],
  },
  {
    name: "Daniel Shao",
    roles: ["Developer"],
  },
  {
    name: "Edward Lin",
    roles: ["Developer"],
  },
  {
    name: "Emily Marschall-Niswonger",
    roles: ["Developer"],
  },
  {
    name: "Emily Yu",
    roles: ["Designer"],
  },
  {
    name: "Emma Zhu",
    roles: ["Developer"],
  },
  {
    name: "Fatima Dong",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    name: "Harsh Gurnani",
    roles: ["Developer"],
  },
  {
    name: "Hrithik Pai",
    roles: ["Developer"],
  },
  {
    name: "James Luo",
    roles: ["Developer"],
  },
  {
    name: "Jared Rosas",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    name: "Jennifer Chen",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    name: "Jennifer Tanurdjaja",
    roles: ["Developer"],
  },
  {
    name: "Jenny Mar",
    roles: ["Developer"],
  },
  {
    name: "Jocelyn Horng",
    roles: ["Designer"],
  },
  {
    name: "Kacy Umana",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    name: "Kevin Do",
    roles: ["Developer"],
  },
  {
    name: "Laura Liu",
    roles: ["TEST Designer"],
    graduation: 2023,
  },
  {
    name: "Lillian Ho",
    roles: ["Developer"],
  },
  {
    name: "Madhav Bansal",
    roles: ["Developer"],
  },
  {
    name: "Megan Leong",
    roles: ["Developer"],
  },
  {
    name: "Melina Dimitropoulou",
    roles: ["Developer"],
  },
  {
    name: "Nitya Pillai",
    roles: ["Developer"],
  },
  {
    name: "Samvrit Srinath",
    roles: ["Developer"],
  },
  {
    name: "Sidhant Rohatgi",
    roles: ["Developer"],
  },
  {
    name: "Steven Shi",
    roles: ["Developer"],
  },
  {
    name: "Sydney Zhang",
    roles: ["Developer"],
  },
  {
    name: "Victor Siu",
    roles: ["Developer"],
  },
  {
    name: "Vinayak Sharma",
    roles: ["Developer"],
  },
  {
    name: "Vivian Liu",
    roles: ["Developer", "VP Operations"],
  },
  {
    name: "Yash Ravipati",
    roles: ["Developer"],
  },
  {
    name: "Madison Plotkin",
    roles: ["TEST Designer"],
    graduation: 2023,
  },
  {
    name: "Mandy Lai",
    roles: ["Designer", "Marketing Lead"],
  },
  {
    name: "Melanie Haro",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    name: "Omar Khalil",
    roles: ["TEST Designer"],
    graduation: 2023,
  },
  {
    name: "Rosario Ortiz",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    name: "Shana Chen",
    roles: ["Designer"],
  },
  {
    name: "Sujana Nagasuri",
    roles: ["Designer"],
  },
  {
    name: "Tiffany Lee",
    roles: ["Designer", "VP Design"],
  },
  {
    name: "Yoto Kim",
    roles: ["TEST Developer"],
    graduation: 2023,
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
