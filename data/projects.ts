import { MDXProps } from "mdx/types";

import { ImageKey } from "../images";
import contentUWEAST from "../projects/uweast-community-kitchen.mdx";
import { assertUniqueKey, makeComparator, makeSlug } from "../util";

import { PersonName, Role, allRoles } from "./people";

type MDXPage = (props: MDXProps) => JSX.Element;

type ProjectTeam = readonly {
  readonly role: Role;
  readonly names: readonly PersonName[];
}[];

interface Project {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly content: MDXPage;
  readonly thumbnail: ImageKey | null;
  readonly team: ProjectTeam;
}

// Metadata for each project.
const constProjects = [
  {
    name: "UWEAST Community Kitchen",
    description:
      "Web application for UWEAST that allows customers to view the menu, place orders, and pay",
    content: contentUWEAST,
    thumbnail: "projects/uweast-community-kitchen/contact-page",
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

export type { Project, ProjectTeam };
