import { MDXProps } from "mdx/types";

import { ImageKey } from "../images";
import contentCCH from "../projects/cch-community-markets.mdx";
import contentDynamics from "../projects/dynamics-website.mdx";
import contentIHCWellnessApp from "../projects/ihc-wellness-app.mdx";
import contentKC from "../projects/kc-skilled-impact.mdx";
import contentOIC from "../projects/oic-web-innovation-portal.mdx";
import contentSSA from "../projects/ssa-website.mdx";
import contentUWEAST from "../projects/uweast-community-kitchen.mdx";
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

// Metadata for each project. Projects should be manually ordered from oldest
// to newest, since the dates are not stored for each project.
const constProjects = [
  {
    name: "KC Skilled Impact",
    description:
      "Volunteer connection section of the Key Conservation mobile app. Through this feature, skilled volunteers are connected to the organizations that need them most.",
    content: contentKC,
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
    content: contentIHCWellnessApp,
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
    name: "CCH Community Markets",
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
