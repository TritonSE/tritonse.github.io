import { DateTime } from "luxon";

export interface Event {
  readonly title: string,
  readonly description: string,
  readonly location: string,
  readonly startTime: DateTime,
  readonly url: string,
}

function parseDate(date: string): DateTime {
  const dateTimeRegex = /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d$/;
  if (!dateTimeRegex.test(date)) {
    throw new Error(`Date '${date}' does not match regex '${dateTimeRegex}'`);
  }
  return DateTime.fromISO(date, { zone: "America/Los_Angeles" });
}

const events: Event[] = [
  {
    "title": "Harvard Business School x Google Panel",
    "description": "Unsure about which career path to follow? Start this quarter strong by learning the different industry options available for you! Our panelists include MBA Candidates, PMs, and Software Engineers from different industries, including Harvard Business School, Uber, Google, and Salesforce! These tech leaders will share their stories on their different career paths!",
    "location": "Zoom",
    "startTime": parseDate("2021-01-14T18:00:00"),
    "url": "https://www.facebook.com/TritonSE/posts/2800445893504598",
  },
  {
    "title": "TSE x Tau Beta Pi Mock Interview Series",
    "description": "DO YOU NEED TO PREPARE FOR YOUR INTERNSHIP INTERVIEWS? Are you interested in practicing with skilled UCSD students before going into the real thing? Tau Beta Pi will be collaborating with Triton Software Engineering (TSE) to host a Mock Interview Series where an experienced TBP or TSE member will conduct a one-on-one interview with you!",
    "location": "Zoom",
    "startTime": parseDate("2021-02-03T12:00:00"),
    "url": "https://www.facebook.com/TritonSE/posts/2810270352522152",
  },
  {
    "title": "TSE x Tau Beta Pi Databases Workshop",
    "description": "ARE YOU INTRIGUED BY DATABASES? Do you want to learn how to use Databases in your SOFTWARE PROJECTS? Tau Beta Pi will be co-hosting a Databases Workshop with Triton Software Engineering (TSE) where experienced TBP and TSE members will teach you everything you need to know about Databases! Come learn about how to incorporate databases into your projects, choose between the many available resources, and increase the breadth of your development skills!",
    "location": "Zoom",
    "startTime": parseDate("2021-05-06T19:00:00"),
    "url": "https://www.facebook.com/TritonSE/posts/2861308080751712",
  },
  {
    "title": "ACM x TSE Intern Panel",
    "description": "Are you nervous about your upcoming SWE internship? Want to learn how to make the most of it? ACM at UCSD will be collaborating with Triton Software Engineering (TSE) to host a panel of experienced UCSD students with extensive internship experiences! They will be answering all of your questions on how you can capitalize on your upcoming summer internship!",
    "location": "Zoom",
    "startTime": parseDate("2021-05-14T18:00:00"),
    "url": "https://www.facebook.com/TritonSE/posts/2872472886301898",
  },
  {
    "title": "Test Fake Event: Apple Pie",
    "description": "Apple pie is tasty! Come enjoy some pie.",
    "location": "Somewhere over the rainbow",
    "startTime": parseDate("2022-01-21T14:00:00"),
    "url": "https://www.example.com",
  },
];

events.sort((e1, e2) => e1.startTime.toMillis() - e2.startTime.toMillis());

export default events as readonly Event[];
