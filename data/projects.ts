import { MDXProps } from "mdx/types";

import { ImageKey } from "../images";
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
      "Web application for UWEAST that allows customers to view the menu, place orders, and pay",
    content: contentUWEAST,
    thumbnail: "projects/uweast_community_kitchen/contact_page",
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
  // TODO remove these once actual projects are created.
  // These were used to test the project carousel on the homepage.
  {
    name: "Fake Project 1",
    description: "Made some cool stuff for some cool people",
    content: contentUWEAST,
    thumbnail: null,
    team: [],
  },
  {
    name: "Fake Project 2",
    description: "Made some more cool stuff for some more cool people",
    content: contentUWEAST,
    thumbnail: null,
    team: [],
  },
  {
    name: "Fake Project 3",
    description: "Made the coolest stuff for the coolest people",
    content: contentUWEAST,
    thumbnail: null,
    team: [],
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
