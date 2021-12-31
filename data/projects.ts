import { MDXProps } from "mdx/types";

import contentUWEAST from "../projects/uweast-community-kitchen.mdx";
import { makeComparator, makeSlug } from "../util";

import { PersonName, Role, ROLES } from "./people";

type MDXPage = (props: MDXProps) => JSX.Element;

type ProjectTeam = readonly {
  readonly role: Role;
  readonly names: readonly PersonName[];
}[];

interface Project {
  /* eslint-disable-next-line no-use-before-define */
  readonly name: ProjectName;
  readonly slug: string;
  readonly description: string;
  readonly thumbnail?: string;
  readonly team: ProjectTeam;
  readonly content: MDXPage;
}

const constProjects = [
  {
    name: "UWEAST Community Kitchen",
    description:
      "Web application for UWEAST that allows customers to view the menu, place orders, and pay",
    thumbnail: undefined,
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
] as const;

type ProjectName = typeof constProjects[number]["name"];

const projectPageContent: { [key in ProjectName]: (props: MDXProps) => JSX.Element } = {
  "UWEAST Community Kitchen": contentUWEAST,
};

function sortTeam(team: ProjectTeam): ProjectTeam {
  return team
    .slice()
    .sort(makeComparator((group) => [ROLES.indexOf(group.role)]))
    .map(({ role, names }) => ({ role, names: names.slice().sort() }));
}

const projects: Project[] = constProjects.slice().map(({ name, team, ...project }) => ({
  ...project,
  name,
  slug: makeSlug(name, "-"),
  team: sortTeam(team),
  content: projectPageContent[name],
}));

const allProjects = projects as readonly Project[];
export { allProjects };

export type { Project, ProjectName, ProjectTeam };
