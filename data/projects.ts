import { makeComparator } from "../util";

import { PersonName, Role, ROLES } from "./people";

type ProjectTeam = readonly {
  readonly role: Role;
  readonly names: readonly PersonName[];
}[];

interface Project {
  readonly name: string;
  readonly description: string;
  readonly team: ProjectTeam;
}

const constProjects = [
  {
    name: "UWEAST Community Kitchen",
    description:
      "Web application for UWEAST that allows customers to view the menu, place orders, and pay",
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
          "Aaron Kirk",
          "Alejandro Rodriguez Pascual",
          "Amitesh Sharma",
          "Dhanush Nanjunda Reddy",
          "Navid Boloorian",
          "Patrick Brown",
          "Thomas Garry",
        ],
      },
    ],
  },
] as const;

type ProjectName = typeof constProjects[number]["name"];

function sortTeam(team: ProjectTeam): ProjectTeam {
  return team.slice().sort(makeComparator((group) => [ROLES.indexOf(group.role)]));
}

const projects: Project[] = constProjects
  .slice()
  .map(({ team, ...project }) => ({ ...project, team: sortTeam(team) }));

function getProjectByName(name: ProjectName): Project {
  return projects.find((project) => project.name === name) as Project;
}

const readonlyProjects = projects as readonly Project[];
export { readonlyProjects as projects, getProjectByName };

export type { Project, ProjectName, ProjectTeam };
