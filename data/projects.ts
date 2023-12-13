import { MDXProps } from "mdx/types";

import { ImageKey } from "../images";
import contentCCH from "../projects/cch-community-markets.mdx";
import contentDynamics from "../projects/dynamics-website.mdx";
import contentFSD from "../projects/fsd-distribution-web-app.mdx";
import contentIHCEMR from "../projects/ihc-emr.mdx";
import contentIHCWellness from "../projects/ihc-wellness-app.mdx";
import contentKCLinking from "../projects/kc-linking.mdx";
import contentKCSkilled from "../projects/kc-skilled-impact.mdx";
import contentLAP from "../projects/lap-student-tracker.mdx";
import contentMAW from "../projects/maw-volunteer-hub.mdx";
import contentOIC from "../projects/oic-web-innovation-portal.mdx";
import contentSI from "../projects/si-website-revamp.mdx";
import contentSSA from "../projects/ssa-website.mdx";
import contentTAP from "../projects/tap-dog-matching.mdx";
import contentMoneta from "../projects/tse-moneta.mdx";
import contentOktavian from "../projects/tse-oktavian.mdx";
import contentUWEAST from "../projects/uweast-community-kitchen.mdx";
import contentWA from "../projects/wa-family-literacy.mdx";
import contentYCW from "../projects/ycw-greenpoint-rated-app.mdx";
import contentYSC from "../projects/ysc-mobile-app.mdx";
import { assertUniqueKey, makeComparator, makeSlug } from "../util";

import { PersonId, Role, allRoles } from "./people";

type MDXPage = (props: MDXProps) => JSX.Element;

type ProjectTeam = readonly {
  readonly role: Role;
  readonly personIds: readonly PersonId[];
}[];

type RawProject = {
  readonly name: string;
  readonly description: string;
  readonly content: MDXPage;
  readonly thumbnail: ImageKey | null;
  readonly team: ProjectTeam;
};

type Project = {
  readonly slug: string;
} & RawProject;

// Metadata for each project. Projects should be manually ordered from newest
// to oldest, since the dates are not stored for each project.
const constProjects = [
  {
    name: "MAW Volunteer Hub",
    description:
      "The Make-A-Wish Volunteer Hub is used to coordinate volunteer events, materials, and contact information for for the organization.",
    content: contentMAW,
    thumbnail: "projects/maw_volunteer_hub/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Patrick Brown 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Mrinal Sharma 0"],
      },
      {
        role: "Designer",
        personIds: ["Andrew Caballero 0", "Juliet Zhuang 0", "Tracy Nguyen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Aksharan Saravanan 0",
          "Andrew Russell 0",
          "Benson Vuong 0",
          "James Zhang 0",
          "Mohak Vaswani 0",
          "Shreya Gupta 0",
        ],
      },
    ],
  },
  {
    name: "TSE Moneta",
    description:
      "The TSE Moneta website is an abstractable, GUI database solution that can be individually customized by nonprofits to best address their needs.",
    content: contentMoneta,
    thumbnail: "projects/tse_moneta/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Navid Boloorian 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Reyna Abhyankar 0", "Stephen Tan 0"],
      },
      {
        role: "Designer",
        personIds: ["Kelly Li 0", "Jonathan Lum 0", "Tracey Du 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Ainesh Arumugam 0",
          "Alex Zhang 0",
          "Kevin Fu 0",
          "Elias Fang 0",
          "Pratyush Chand 0",
          "William Wu 0",
        ],
      },
    ],
  },
  {
    name: "LAP Student Tracker",
    description:
      "The League of Amazing Programmers Student Tracker is a hub for the League of Amazing Programmers school used by both students and teachers to centralize classroom scheduling and communication.",
    content: contentLAP,
    thumbnail: "projects/lap_student_tracker/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Anshul Birla 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Annie Wen 0"],
      },
      {
        role: "Designer",
        personIds: ["Evan Lam 0", "Rickie Chen 0", "Lydia Smith 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Allison Bhavsar 0",
          "Anvitaa Sekhsaria 0",
          "Nishant Balaji 0",
          "Ryan Bui 0",
          "Zain Khan 0",
          "Alex Zhang 0",
          "William Jin 0",
        ],
      },
    ],
  },
  {
    name: "TAP Foster Dog Matching Tool",
    description:
      "The Animal Pad Foster Dog Matching Tool assists with the process of matching dogs to foster families.",
    content: contentTAP,
    thumbnail: "projects/tap_dog_matching/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Dhanush Nanjunda Reddy 0", "Advay Sharma 0", "William Wu 0"],
      },
      {
        role: "Designer",
        personIds: ["Rickie Chen 0", "Rachel Blumin 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Andrew Masek 0",
          "Artyom Muradyan 0",
          "Jacob Au 0",
          "Parth Patel 0",
          "Philip Zhang 0",
          "William Jin 0",
        ],
      },
    ],
  },
  {
    name: "YSC Mobile App",
    description:
      "The YStem and Chess Mobile Application provides a platform through which underprivileged students can work with mentors in order to learn and play chess.",
    content: contentYSC,
    thumbnail: "projects/ysc_mobile_app/app-screens",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Nicolas La Polla 0", "Andrew Russell 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Akashnarendran Premkumar 0"],
      },
      {
        role: "Designer",
        personIds: ["Andrew Caballero 0", "Rachel Blumin 0", "Tracey Du 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Akhilan Gurumoorthy 0",
          "Deepansha Singh 0",
          "Helen Lin 0",
          "Ly Nguyen 0",
          "Rohan Puthukudy 0",
          "Ryan Hung 0",
          "Yucheng Huang 0",
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
        personIds: ["David Cruz 0"],
      },
      {
        role: "Designer",
        personIds: ["Kenny Tran 0", "Andrew Caballero 0", "Rickie Chen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Rohith Kasar 0",
          "Rohan Puthukudy 0",
          "Allison Bhavsar 0",
          "Dhruv Sood 0",
          "Anshul Birla 0",
          "Aksharan Saravanan 0",
          "Kevin Han 0",
          "Philip Zhang 0",
          "Emmanuel Flores 0",
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
        personIds: ["Sara Blumin 0"],
      },
      {
        role: "Designer",
        personIds: ["Kenny Tran 0", "Evan Lam 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Roger Ji 0",
          "William Wu 0",
          "Nicolas La Polla 0",
          "Nirmal Agnihotri 0",
          "Ryan Bui 0",
          "Stephen Tan 0",
          "Emmanuel Flores 0",
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
        personIds: ["Hannah Hsu 0", "Navid Boloorian 0"],
      },
      {
        role: "Designer",
        personIds: ["Mylinh Lac 0", "Kenny Tran 0", "Kelly Li 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Philip Zhang 0",
          "Justin Yao Du 0",
          "Benson Vuong 0",
          "Anson Lee 0",
          "Zain Khan 0",
          "Ly Nguyen 0",
          "Arnav Taneja 0",
          "Elias Fang 0",
          "Jacob Au 0",
          "Xi-Kai Wu 0",
          "Deepansha Singh 0",
          "Shravan Konduru 0",
          "Nicholas Vanny 0",
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
        personIds: ["Amrit Singh 0", "Navid Boloorian 0"],
      },
      {
        role: "Designer",
        personIds: ["Tracy Nguyen 0", "Rachel Blumin 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Alejandro Rodriguez Pascual 0",
          "Dhanush Nanjunda Reddy 0",
          "Patrick Brown 0",
          "Thomas Garry 0",
          "Amitesh Sharma 0",
          "Navid Boloorian 0",
          "Aaron Kirk 0",
          "Elias Fang 0",
          "Jacob Au 0",
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
        personIds: ["Arnold Duan 0", "Robert Tatum 0", "Advay Sharma 0"],
      },
      {
        role: "Designer",
        personIds: ["Jessica Nguyen 0", "Lydia Smith 0", "Kelly Li 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Alejandro Rodriguez Pascual 0",
          "Loc Vu 0",
          "Roger Ji 0",
          "Rohan Puthukudy 0",
          "Advay Sharma 0",
          "Shravan Hariharan 0",
          "Kunal Bhandarkar 0",
          "Hana Kim 0",
          "Robert Tatum 0",
          "Uposhanto Bhattacharya 0",
          "Thai Gillespie 0",
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
        personIds: ["Alex Chiu 0", "Bryant Liu 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Bryant Liu 0",
          "Davin Tjong 0",
          "Nathan Zhao 0",
          "Brent Min 0",
          "Alex Li 0",
          "Kenny Yi 0",
          "Ayush Shukla 0",
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
        personIds: ["Hannah Hsu 0", "Kenny Yi 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Arnav Taneja 0",
          "Nicolas La Polla 0",
          "Anne Xu 0",
          "Bryant Liu 0",
          "Kenny Yi 0",
          "Sara Blumin 0",
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
        personIds: ["Sumeet Bansal 0", "David Cruz 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Anson Lee 0",
          "Ryan Bui 0",
          "Shravan Hariharan 0",
          "Thomas Li 0",
          "David Cruz 0",
        ],
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
        personIds: ["Amrit Singh 0"],
      },
      {
        role: "Designer",
        personIds: ["Kelly Li 0", "Kenny Tran 0", "Tracy Nguyen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Alejandro Rodriguez Pascual 0",
          "Amitesh Sharma 0",
          "Dhanush Nanjunda Reddy 0",
          "Aaron Kirk 0",
          "Navid Boloorian 0",
          "Patrick Brown 0",
          "Thomas Garry 0",
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
        personIds: ["Jason Cabrera 0"],
      },
      {
        role: "Designer",
        personIds: ["Jessica Nguyen 0", "Nhu Luong 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Amrit Singh 0",
          "Nicholas Vanny 0",
          "Dhanush Nanjunda Reddy 0",
          "Upo Bhat 0",
          "Anshul Birla 0",
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
        personIds: ["Glenn Raskovich 0"],
      },
      {
        role: "Developer",
        personIds: ["Anoushka Dave 0", "Benson Vuong 0", "Robert Tatum 0", "Rohith Kasar 0"],
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
        personIds: ["Dan Huang 0"],
      },
      {
        role: "Designer",
        personIds: ["Jessica Nguyen 0"],
      },
      {
        role: "Developer",
        personIds: ["Alexandra Michael 0", "Gary Zhao 0", "John Lu 0", "Nathan Zhao 0"],
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
        personIds: ["Holly Ham 0"],
      },
      {
        role: "Designer",
        personIds: ["Nhu Luong 0"],
      },
      {
        role: "Developer",
        personIds: ["Jason Vega 0", "Bryan Yuan 0", "Sara Blumin 0", "Victor Luong 0"],
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
        personIds: ["Hannah Hsu 0"],
      },
      {
        role: "Developer",
        personIds: ["Jason Cabrera 0", "Declan Sullivan 0", "Kevin Soloway 0"],
      },
    ],
  },
] as const satisfies readonly RawProject[];

function sortTeam(team: ProjectTeam): ProjectTeam {
  return (
    team
      .slice()
      // Sort roles by rank.
      .sort(makeComparator((group) => [allRoles.indexOf(group.role)]))
      // Sort names for each role.
      .map(({ role, personIds }) => ({ role, personIds: personIds.slice().sort() }))
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
export type { Project, ProjectTeam };
