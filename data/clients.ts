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
    name: "Your Clear Way",
    startYear: 2019,
    endYear: 2021,
    url: null,
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
    endYear: 2023,
    url: null,
  },
  {
    name: "The Animal Pad",
    startYear: 2021,
    endYear: 2023,
    url: "https://theanimalpad.org/",
  },
  {
    name: "The League of Amazing Programmers",
    startYear: 2021,
    endYear: 2023,
    url: "https://www.jointheleague.org/",
  },
  {
    name: "Laktaa Bhutan",
    startYear: 2021,
    endYear: 2023,
    url: "https://laktaa.medium.com/",
  },
  {
    name: "San Diego County Taxpayers Association",
    startYear: 2022,
    endYear: 2023,
    url: "https://www.sdcta.org/",
  },
  {
    name: "Call Blackline",
    startYear: 2022,
    endYear: 2023,
    url: "https://www.callblackline.com/",
  },
  {
    name: "FixNation",
    startYear: 2022,
    endYear: 2023,
    url: "https://fixnation.org/",
  },
  {
    name: "ALUM for Northwood",
    startYear: 2022,
    endYear: 2023,
    url: null,
  },
  {
    name: "4 Future Leaders of Tomorrow",
    startYear: 2023,
    endYear: 2024,
    url: "https://4flot.com/",
  },
  {
    name: "California Council For Interior Design Certification",
    startYear: 2023,
    endYear: null,
    url: "https://ccidc.org/",
  },
  {
    name: "Department of Family Medicine",
    startYear: 2023,
    endYear: 2024,
    url: "https://familymedicine.ucsd.edu/divisions/sports-medicine/index.html",
  },
  {
    name: "Patriots and Paws",
    startYear: 2023,
    endYear: 2024,
    url: null,
  },
  {
    name: "Plant It Again",
    startYear: 2023,
    endYear: null,
    url: "https://www.plantitagain.org/",
  },
  {
    name: "Union Station Homeless Services",
    startYear: 2023,
    endYear: 2024,
    url: "https://ushs.org/",
  },
  {
    name: "HoMEwork",
    startYear: 2024,
    endYear: null,
    url: "https://www.homework-sd.org/",
  },
  {
    name: "Psyches of Color",
    startYear: 2024,
    endYear: null,
    url: "https://psychesofcolor.org/",
  },
  {
    name: "SpayLA",
    startYear: 2024,
    endYear: null,
    url: "https://www.1888spay4la.org/",
  },
  {
    name: "SPLAGen",
    startYear: 2024,
    endYear: null,
    url: "https://www.splagen.org/en/",
  },
  {
    name: "UCSD Health",
    startYear: 2024,
    endYear: null,
    url: "https://health.ucsd.edu/",
  },
  {
    name: "Veteran Sisters",
    startYear: 2024,
    endYear: null,
    url: "https://veteransisters.org/",
  },
] as const;
export type ClientName = (typeof constClients)[number]["name"];

const allClients: readonly Client[] = constClients
  .slice()
  .sort(makeComparator((client) => [-(client.endYear || Infinity), client.startYear, client.name]));

export { allClients };
