import { MDXProps } from "mdx/types";

import { ImageKey } from "../images";
import contentCCH from "../projects/cch-community-markets.mdx";
import contentDynamics from "../projects/dynamics-website.mdx";
import contentFSD from "../projects/fsd-distribution-web-app.mdx";
import contentIHCEMR from "../projects/ihc-emr.mdx";
import contentIHCWellness from "../projects/ihc-wellness-app.mdx";
import contentKCLinking from "../projects/kc-linking.mdx";
import contentKCSkilled from "../projects/kc-skilled-impact.mdx";
import contentOIC from "../projects/oic-web-innovation-portal.mdx";
import contentSI from "../projects/si-website-revamp.mdx";
import contentSSA from "../projects/ssa-website.mdx";
import contentOktavian from "../projects/tse-oktavian.mdx";
import contentUWEAST from "../projects/uweast-community-kitchen.mdx";
import contentWA from "../projects/wa-family-literacy.mdx";
import contentYCW from "../projects/ycw-greenpoint-rated-app.mdx";
import contentYSC from "../projects/ysc-mobile-app.mdx";
import { assertUniqueKey, makeComparator, makeSlug } from "../util";

import { PersonName, Role, allRoles } from "./people";

type MDXPage = (props: MDXProps) => JSX.Element;

export type ProjectTeam = readonly {
  readonly role: Role;
  readonly names: readonly PersonName[];
}[];

export interface Project {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly content: MDXPage;
  readonly thumbnail: ImageKey | null;
  readonly team: ProjectTeam;
}

// Metadata for each project. Projects should be manually ordered from newest
// to oldest, since the dates are not stored for each project.
const constProjects = [
  {
    name: "YSC Mobile App",
    description:
      "The YStem and Chess Mobile Application provides a platform through which underprivileged students can work with mentors in order to learn and play chess.",
    content: contentYSC,
    thumbnail: "projects/ysc_mobile_app/app-screens",
    team: [
      {
        role: "Project Manager",
        names: ["David Cruz"],
      },
      {
        role: "Designer",
        names: ["Kenny Tran", "Andrew Caballero", "Rickie Chen"],
      },
      {
        role: "Developer",
        names: [
          "Rohith Kasar",
          "Rohan Puthukudy",
          "Allison Bhavsar",
          "Dhruv Sood",
          "Anshul Birla",
          "Aksharan Saravanan",
          "Kevin Han",
          "Philip Zhang",
          "Emmanuel Flores",
        ],
      },
    ],
  },
  {
    name: "WA Family Literacy Mobile App",
    description:
      "The Words Alive Family Literacy Application promotes family literacy through an intuitive mobile app.",
    content: contentWA,
    thumbnail: "projects/wa_family_literacy/app-screens",
    team: [
      {
        role: "Project Manager",
        names: ["David Cruz"],
      },
      {
        role: "Designer",
        names: ["Kenny Tran", "Andrew Caballero", "Rickie Chen"],
      },
      {
        role: "Developer",
        names: [
          "Rohith Kasar",
          "Rohan Puthukudy",
          "Allison Bhavsar",
          "Dhruv Sood",
          "Anshul Birla",
          "Aksharan Saravanan",
          "Kevin Han",
          "Philip Zhang",
          "Emmanuel Flores",
        ],
      },
    ],
  },
  {
    name: "FSD Distribution Web Application",
    description:
      "The FSD Distribution Web Application tracks information on agencies and food distributions for Feeding San Diego.",
    content: contentFSD,
    thumbnail: "projects/fsd_distribution_web_app/home-page",
    team: [
      {
        role: "Project Manager",
        names: ["Sara Blumin"],
      },
      {
        role: "Designer",
        names: ["Kenny Tran", "Evan Lam"],
      },
      {
        role: "Developer",
        names: [
          "Roger Ji",
          "William Wu",
          "Nicolas La Polla",
          "Nirmal Agnihotri",
          "Ryan Bui",
          "Stephen Tan",
          "Emmanuel Flores",
        ],
      },
    ],
  },
  {
    name: "TSE Oktavian",
    description:
      "Membership & logistics portal for TSE — handles recruitment, roster management, etc.",
    content: contentOktavian,
    thumbnail: "projects/tse_oktavian/home-page",
    team: [
      {
        role: "Project Manager",
        names: ["Hannah Hsu", "Navid Boloorian"],
      },
      {
        role: "Designer",
        names: ["Mylinh Lac", "Kenny Tran", "Kelly Li"],
      },
      {
        role: "Developer",
        names: [
          "Philip Zhang",
          "Justin Yao Du",
          "Benson Vuong",
          "Anson Lee",
          "Zain Khan",
          "Ly Nguyen",
          "Arnav Taneja",
          "Elias Fang",
          "Jacob Au",
          "Xi-Kai Wu",
          "Deepansha Singh",
          "Shravan Konduru",
          "Nicholas Vanny",
        ],
      },
    ],
  },
  {
    name: "SI Website Revamp",
    description:
      "Personalized website and admin tool for Sakyadhita to display and edit organization information.",
    content: contentSI,
    thumbnail: "projects/si_website_revamp/home-page",
    team: [
      {
        role: "Project Manager",
        names: ["Amrit Singh", "Navid Boloorian"],
      },
      {
        role: "Designer",
        names: ["Tracy Nguyen", "Rachel Blumin"],
      },
      {
        role: "Developer",
        names: [
          "Alejandro Rodriguez Pascual",
          "Dhanush Nanjunda Reddy",
          "Patrick Brown",
          "Thomas Garry",
          "Amitesh Sharma",
          "Navid Boloorian",
          "Aaron Kirk",
          "Elias Fang",
          "Jacob Au",
        ],
      },
    ],
  },
  {
    name: "YCW GreenPoint Rated Mobile App",
    description:
      "Mobile application for Your Clear Way (formerly Build-It-Green) which helps homeowners and certified GreenPoint raters to create healthy and sustainable homes.",
    content: contentYCW,
    thumbnail: "projects/ycw_greenpoint_rated_app/app-screens",
    team: [
      {
        role: "Project Manager",
        names: ["Arnold Duan", "Robert Tatum", "Advay Sharma"],
      },
      {
        role: "Designer",
        names: ["Jessica Nguyen", "Lydia Smith", "Kelly Li"],
      },
      {
        role: "Developer",
        names: [
          "Alejandro Rodriguez Pascual",
          "Loc Vu",
          "Roger Ji",
          "Rohan Puthukudy",
          "Advay Sharma",
          "Shravan Hariharan",
          "Kunal Bhandarkar",
          "Hana Kim",
          "Robert Tatum",
          "Uposhanto Bhattacharya",
          "Thai Gillespie",
        ],
      },
    ],
  },
  {
    name: "IHC EMR Mobile App",
    description:
      "Mobile application for IHC that digitizes clinic administration. Volunteers, physicians, and lab technicians can view and edit information pertaining to patient check-ins, triages, lab testing, and pharmacy management.",
    content: contentIHCEMR,
    thumbnail: "projects/default-thumbnail",
    team: [
      {
        role: "Project Manager",
        names: ["Alex Chiu", "Bryant Liu"],
      },
      {
        role: "Developer",
        names: [
          "Bryant Liu",
          "Davin Tjong",
          "Nathan Zhao",
          "Brent Min",
          "Alex Li",
          "Kenny Yi",
          "Ayush Shukla",
        ],
      },
    ],
  },
  {
    name: "KC Linking Mobile App",
    description:
      "Linking feature of the Key Conservation mobile app. This feature makes posts and profiles easily accessible via links which gives conservationists easy access to critical funding and global support. ",
    content: contentKCLinking,
    thumbnail: "projects/kc_linking/app-screens",
    team: [
      {
        role: "Project Manager",
        names: ["Hannah Hsu", "Kenny Yi"],
      },
      {
        role: "Developer",
        names: [
          "Arnav Taneja",
          "Nicolas La Polla",
          "Anne Xu",
          "Bryant Liu",
          "Kenny Yi",
          "Sara Blumin",
        ],
      },
    ],
  },
  {
    name: "KC Skilled Impact Mobile App",
    description:
      "Volunteer connection section of the Key Conservation mobile app. Through this feature, skilled volunteers are connected to the organizations that need them most.",
    content: contentKCSkilled,
    thumbnail: "projects/kc_skilled_impact/app-screens",
    team: [
      {
        role: "Project Manager",
        names: ["Sumeet Bansal", "David Cruz"],
      },
      {
        role: "Developer",
        names: ["Anson Lee", "Ryan Bui", "Shravan Hariharan", "Thomas Li", "David Cruz"],
      },
    ],
  },
  {
    name: "UWEAST Community Kitchen Website",
    description:
      "Web application for UWEAST that allows customers to view the menu, place orders, and pay.",
    content: contentUWEAST,
    thumbnail: "projects/uweast_community_kitchen/home-page",
    team: [
      {
        role: "Project Manager",
        names: ["Amrit Singh"],
      },
      {
        role: "Designer",
        names: ["Kelly Li", "Kenny Tran", "Tracy Nguyen"],
      },
      {
        role: "Developer",
        names: [
          "Alejandro Rodriguez Pascual",
          "Amitesh Sharma",
          "Dhanush Nanjunda Reddy",
          "Aaron Kirk",
          "Navid Boloorian",
          "Patrick Brown",
          "Thomas Garry",
        ],
      },
    ],
  },
  {
    name: "Dynamics Team Website",
    description:
      "Website to help promote Dynamics Performance Team while providing ways to support the organization financially.",
    content: contentDynamics,
    thumbnail: "projects/dynamics_performance_team/home-page",
    team: [
      {
        role: "Project Manager",
        names: ["Jason Cabrera"],
      },
      {
        role: "Designer",
        names: ["Jessica Nguyen", "Nhu Luong"],
      },
      {
        role: "Developer",
        names: [
          "Amrit Singh",
          "Nicholas Vanny",
          "Dhanush Nanjunda Reddy",
          "Upo Bhat",
          "Anshul Birla",
        ],
      },
    ],
  },
  {
    name: "IHC Wellness Mobile App",
    description:
      "Mobile application encouraging more open dialogue, healthy coping mechanisms, and better utilization of on campus resources for students under intense academic pressure.",
    content: contentIHCWellness,
    thumbnail: "projects/ihc_wellness_app/app-screens",
    team: [
      {
        role: "Project Manager",
        names: ["Glenn Raskovich"],
      },
      {
        role: "Developer",
        names: ["Anoushka Dave", "Benson Vuong", "Robert Tatum", "Rohith Kasar"],
      },
    ],
  },
  {
    name: "OIC Web Innovation Portal",
    description:
      "UCSD resource hub where users can find the activity, event, or campus resource they are seeking or explore new ones.",
    content: contentOIC,
    thumbnail: "projects/office_of_innovation_and_commercialization/home-page",
    team: [
      {
        role: "Project Manager",
        names: ["Dan Huang"],
      },
      {
        role: "Designer",
        names: ["Jessica Nguyen"],
      },
      {
        role: "Developer",
        names: ["Alexandra Michael", "Gary Zhao", "John Lu", "Nathan Zhao"],
      },
    ],
  },
  {
    name: "SSA Website",
    description:
      "Website for the Symphonic Student Association, a student organization fostering a community of members interested in classical music.",
    content: contentSSA,
    thumbnail: "projects/symphonic_student_association/home-page",
    team: [
      {
        role: "Project Manager",
        names: ["Holly Ham"],
      },
      {
        role: "Designer",
        names: ["Nhu Luong"],
      },
      {
        role: "Developer",
        names: ["Jason Vega", "Bryan Yuan", "Sara Blumin", "Victor Luong"],
      },
    ],
  },
  {
    name: "CCH Community Markets Website",
    description:
      "Online assessment tool to determine the health of a market, allowing CCH to get accurate information on how to provide healthier foods for their community.",
    content: contentCCH,
    thumbnail: "projects/default-thumbnail",
    team: [
      {
        role: "Project Manager",
        names: ["Hannah Hsu"],
      },
      {
        role: "Developer",
        names: ["Jason Cabrera", "Declan Sullivan", "Kevin Soloway"],
      },
    ],
  },
] as const;

function sortTeam(team: ProjectTeam): ProjectTeam {
  return (
    team
      .slice()
      // Sort roles by rank.
      .sort(makeComparator((group) => [allRoles.indexOf(group.role)]))
      // Sort names for each role.
      .map(({ role, names }) => ({ role, names: names.slice().sort() }))
  );
}

const allProjects: readonly Project[] = constProjects.slice().map(({ name, team, ...project }) => ({
  ...project,
  name,
  slug: makeSlug(name, "-"),
  team: sortTeam(team),
}));
assertUniqueKey(allProjects, "name");
assertUniqueKey(allProjects, "slug");

export { allProjects };
