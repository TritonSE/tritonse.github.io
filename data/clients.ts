import { makeComparator } from "../util";

export interface Client {
  readonly name: string;
  readonly startYear: number;
  readonly endYear: number | null;
  readonly url: string;
}

const constClients = [
  {
    name: "International Health Collective",
    startYear: 2018,
    endYear: 2020,
    url: "https://www.internationalhealthcollective.org/",
  },
  {
    name: "Center for Community Health",
    startYear: 2018,
    endYear: 2019,
    url: "https://ucsdcommunityhealth.org/",
  },
  {
    name: "Office of Innovation and Commercialization",
    startYear: 2018,
    endYear: 2019,
    url: "https://innovation.ucsd.edu/",
  },
  {
    name: "Symphonic Student Association",
    startYear: 2018,
    endYear: 2019,
    url: "https://ssa.ucsd.edu/",
  },
  {
    name: "Key Conservation",
    startYear: 2019,
    endYear: 2020,
    url: "https://www.keyconservation.org/",
  },
  {
    name: "Dynamics Performance Team",
    startYear: 2019,
    endYear: 2020,
    url: "https://dynamicsperformanceteam.com/#/",
  },
  {
    name: "United Women of East Africa",
    startYear: 2019,
    endYear: 2021,
    url: "https://www.uweast.org/",
  },
  {
    name: "OG Yoga",
    startYear: 2020,
    endYear: 2021,
    url: "https://www.ogyoga.org/",
  },
  {
    name: "Feeding San Diego",
    startYear: 2020,
    endYear: 2021,
    url: "https://feedingsandiego.org/",
  },
  {
    name: "Make-A-Wish",
    startYear: 2021,
    endYear: null,
    url: "https://wish.org/",
  },
] as const;
export type ClientName = typeof constClients[number]["name"];

const allClients: readonly Client[] = constClients
  .slice()
  .sort(makeComparator((client) => [-(client.endYear || Infinity), client.startYear, client.name]));

export { allClients };
