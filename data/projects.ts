import { MDXProps } from "mdx/types";

import { ImageKey } from "../images";
import contentDynamics from "../projects/dynamics-website.mdx";
import contentIHCWellnessApp from "../projects/ihc-wellness-app.mdx";
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
    name: "UWEAST Community Kitchen",
    description:
      "Web application for UWEAST that allows customers to view the menu, place orders, and pay.",
    content: contentUWEAST,
    thumbnail: "projects/uweast_community_kitchen/home_page",
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
    thumbnail: "projects/dynamics_performance_team/home_page",
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
    name: "IHC Wellness App",
    description:
      "Mobile application encouraging more open dialogue, healthy coping mechanisms, and better utilization of on campus resources for students under intense academic pressure.",
    content: contentIHCWellnessApp,
    thumbnail: "projects/ihc_wellness_app/app_screens",
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
    name: "Symphonic Student Association",
    description:
      "Website for the Symphonic Student Association, a student organization fostering a community of members interested in classical music.",
    content: contentSSA,
    thumbnail: "projects/symphonic_student_association/home_page",
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
