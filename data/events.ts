import { DateTime } from "luxon";

import { makeComparator } from "../util";

export interface Event {
  readonly title: string;
  readonly description: string;
  readonly location: string;
  readonly startTime: DateTime;
  readonly url: string;
}

function parseDate(date: string): DateTime {
  const parsed = DateTime.fromISO(date, { zone: "America/Los_Angeles" });
  if (parsed.isValid) {
    return parsed;
  }
  throw new Error(`Invalid date '${date}': ${parsed.invalidExplanation}`);
}

const events: Event[] = [
  {
    title: "Harvard Business School x Google Panel",
    description:
      "Unsure about which career path to follow? Start this quarter strong by learning the different industry options available for you! Our panelists include MBA Candidates, PMs, and Software Engineers from different industries, including Harvard Business School, Uber, Google, and Salesforce! These tech leaders will share their stories on their different career paths!",
    location: "Zoom",
    startTime: parseDate("2021-01-14T18:00:00"),
    url: "https://www.facebook.com/TritonSE/posts/2800445893504598",
  },
  {
    title: "TSE x Tau Beta Pi Mock Interview Series",
    description:
      "DO YOU NEED TO PREPARE FOR YOUR INTERNSHIP INTERVIEWS? Are you interested in practicing with skilled UCSD students before going into the real thing? Tau Beta Pi will be collaborating with Triton Software Engineering (TSE) to host a Mock Interview Series where an experienced TBP or TSE member will conduct a one-on-one interview with you!",
    location: "Zoom",
    startTime: parseDate("2021-02-03T12:00:00"),
    url: "https://www.facebook.com/TritonSE/posts/2810270352522152",
  },
  {
    title: "TSE x Tau Beta Pi Databases Workshop",
    description:
      "ARE YOU INTRIGUED BY DATABASES? Do you want to learn how to use Databases in your SOFTWARE PROJECTS? Tau Beta Pi will be co-hosting a Databases Workshop with Triton Software Engineering (TSE) where experienced TBP and TSE members will teach you everything you need to know about Databases! Come learn about how to incorporate databases into your projects, choose between the many available resources, and increase the breadth of your development skills!",
    location: "Zoom",
    startTime: parseDate("2021-05-06T19:00:00"),
    url: "https://www.facebook.com/TritonSE/posts/2861308080751712",
  },
  {
    title: "ACM x TSE Intern Panel",
    description:
      "Are you nervous about your upcoming SWE internship? Want to learn how to make the most of it? ACM at UCSD will be collaborating with Triton Software Engineering (TSE) to host a panel of experienced UCSD students with extensive internship experiences! They will be answering all of your questions on how you can capitalize on your upcoming summer internship!",
    location: "Zoom",
    startTime: parseDate("2021-05-14T18:00:00"),
    url: "https://www.facebook.com/TritonSE/posts/2872472886301898",
  },
  {
    title: "Recruitment Info Session",
    description:
      'Do you need meaningful experience to give your resume a little boost? Are you passionate about giving back to the community? Do you want to develop your leadership and programming skills? If you said "yes" to any of the above questions consider applying to join Triton Conceptualize! We are a group of passionate students at UCSD whose mission is to provide technical development services to local non profits pro-bono. And we are looking for like minded individuals to join us. You will be put on a team and work on real projects with requirements from real clients.',
    location: "Little Q Room @ Jacob's School of Engineering",
    startTime: parseDate("2017-06-02T17:00:00"),
    url: "https://www.facebook.com/TritonSE/posts/299543323820414",
  },
];

events.sort(makeComparator((event) => [event.startTime.toMillis(), event.title]));

const allEvents = events as readonly Event[];

export { allEvents };
