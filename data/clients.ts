import { makeComparator } from "../util";

export interface Client {
  readonly name: string;
  readonly startYear: number;
  readonly endYear: number | null;
  readonly url: string | null;
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
    endYear: 2022,
    url: "https://wish.org/",
  },
  {
    name: "Words Alive",
    startYear: 2020,
    endYear: 2021,
    url: "https://www.wordsalive.org/",
  },
  {
    name: "Sakyadhita",
    startYear: 2021,
    endYear: 2022,
    url: "https://sakyadhita.org/",
  },
  {
    name: "YStem & Chess",
    startYear: 2021,
    endYear: null,
    url: null,
  },
  {
    name: "The Animal Pad",
    startYear: 2021,
    endYear: null,
    url: "https://theanimalpad.org/",
  },
  {
    name: "The League of Amazing Programmers",
    startYear: 2021,
    endYear: null,
    url: "https://www.jointheleague.org/",
  },
  {
    name: "Laktaa Bhutan",
    startYear: 2021,
    endYear: null,
    url: "https://laktaa.medium.com/",
  },
  {
    name: "San Diego County Taxpayers Association",
    startYear: 2022,
    endYear: null,
    url: "https://www.sdcta.org/",
  },
  {
    name: "Call Blackline",
    startYear: 2022,
    endYear: null,
    url: "https://www.callblackline.com/",
  },
  {
    name: "FixNation",
    startYear: 2022,
    endYear: null,
    url: "https://fixnation.org/",
  },
  {
    name: "ALUM for Northwood",
    startYear: 2022,
    endYear: null,
    url: "https://alumfornorthwood.org/",
  },
  // TODO: add YCW info
] as const;
export type ClientName = typeof constClients[number]["name"];

const allClients: readonly Client[] = constClients
  .slice()
  .sort(makeComparator((client) => [-(client.endYear || Infinity), client.startYear, client.name]));

export { allClients };
