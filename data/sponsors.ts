import { makeComparator } from "../util";

export interface Sponsor {
  readonly name: string;
  readonly url: string;
}

const constSponsors = [
  {
    name: "Verkada",
    url: "https://www.verkada.com/",
  },
  {
    name: "San Diego County Taxpayers Association",
    url: "https://www.sdcta.org/",
  },
] as const;
export type SponsorName = typeof constSponsors[number]["name"];

const allSponsors: readonly Sponsor[] = constSponsors
  .slice()
  .sort(makeComparator((sponsor) => [sponsor.name]));

export { allSponsors };
