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
      "Unsure about which career path to follow? Interested in learning the different industry options available for you? Start this quarter strong by learning the different industry options available for you! Our panelists include MBA Candidates, PMs, and Software Engineers from different industries, including Harvard Business School, Uber, Google, and Salesforce! These tech leaders will share their stories on their different career paths!",
    location: "Zoom",
    startTime: parseDate("2021-01-14T18:00:00"),
    url: "https://www.facebook.com/events/658433511514793",
  },
  {
    title: "TSE x Tau Beta Pi Mock Interview Series",
    description:
      "DO YOU NEED TO PREPARE FOR YOUR INTERNSHIP INTERVIEWS? Are you interested in practicing with skilled UCSD students before going into the real thing? Tau Beta Pi will be collaborating with Triton Software Engineering (TSE) to host a Mock Interview Series where an experienced TBP or TSE member will conduct a one-on-one interview with you!",
    location: "Zoom",
    startTime: parseDate("2021-02-03T12:00:00"),
    url: "https://www.facebook.com/events/859872464852255",
  },
  {
    title: "TSE x Tau Beta Pi Databases Workshop",
    description:
      "ARE YOU INTRIGUED BY DATABASES? Do you want to learn how to use Databases in your SOFTWARE PROJECTS? Tau Beta Pi will be co-hosting a Databases Workshop with Triton Software Engineering (TSE) where experienced TBP and TSE members will teach you everything you need to know about Databases! Come learn about how to incorporate databases into your projects, choose between the many available resources, and increase the breadth of your development skills!",
    location: "Zoom",
    startTime: parseDate("2021-05-06T19:00:00"),
    url: "https://www.facebook.com/events/917834475456873",
  },
  {
    title: "ACM x TSE Intern Panel",
    description:
      "Are you nervous about your upcoming SWE internship? Want to learn how to make the most of it? ACM at UCSD will be collaborating with Triton Software Engineering (TSE) to host a panel of experienced UCSD students with extensive internship experiences! They will be answering all of your questions on how you can capitalize on your upcoming summer internship!",
    location: "Zoom",
    startTime: parseDate("2021-05-14T18:00:00"),
    url: "https://www.facebook.com/events/384066446022698?ref=newsfeed",
  },
  {
    title: "Resume Review Workshop",
    description:
      "Triton Software Engineering is hosting a Resume Review workshop led by TSE members with extensive internship experiences at companies such as Snap, Amazon, Verkada, and more! We will go over how to build an effective resume that can help you get your foot in the door for both startups and larger companies alike. We will also have some time for our experienced members to review your resume and provide feedback! Come bring your resume and ask your questions about interviewing, industry, and more!",
    location: "Student Center - Huerta Vera Cruz Room",
    startTime: parseDate("2022-02-17T19:00:00"),
    url: "https://www.facebook.com/events/600881921217812",
  },
  {
    title: "Recruitment Info Session 2",
    description:
      "We are looking to recruit developers, designers, and product managers to come join our mission of developing solutions to the software needs of nonprofits! You can learn more about our organization and the work we have done in the past on our website! This year, we are also introducing a new program called TSE Early Start Training (TEST), where prospective developers and designers from underprivileged backgrounds can apply to learn the fundamentals of software engineering and UI/UX design through workshops and internal projects. Join us for Info Session 2 to learn about our organization in-depth, including who we work with, what technologies we use, and what we have to offer to you!",
    location: "Zoom",
    startTime: parseDate("2021-10-04T18:00:00"),
    url: "https://www.facebook.com/events/344131667463475",
  },
  {
    title: "Intern Panel",
    description:
      "Are YOU looking for an internship for next summer? Do YOU want to kick start your software engineering career by gaining vital industry experience? Do you want to learn more about how to get your first software engineering or UI/UX design internship? If so, then this event is for YOU! TSE will be hosting an intern panel consisting of eight members with extensive internship experiences. The panelists are well versed in the ins and outs of the internship application process and have a lot of insights to share with you! Our panelists have interned at numerous companies including Google, Amazon, Coinbase, Uber, Disney, and many more! Come out to ask all of your questions about internships and the software industry!",
    location: "Zoom",
    startTime: parseDate("2021-10-02T13:00:00"),
    url: "https://www.facebook.com/events/836762657028757",
  },
  {
    title: "Recruitment Info Session 1",
    description:
      "We are looking to recruit developers, designers, and product managers to come join our mission of developing solutions to the software needs of nonprofits! You can learn more about our organization and the work we have done in the past on our website! This year, we are also introducing a new program called TSE Early Start Training (TEST), where prospective developers and designers from underprivileged backgrounds can apply to learn the fundamentals of software engineering and UI/UX design through workshops and internal projects. Join us for Info Session 1 to learn about our organization in-depth, including who we work with, what technologies we use, and what we have to offer to you!",
    location: "Zoom",
    startTime: parseDate("2021-09-30T19:00:00"),
    url: "https://www.facebook.com/events/892283354720946",
  },
  {
    title: "TSE x IEEE: Build Your Personal Website (3)",
    description:
      "Don’t know where to start for your personal website? Want to learn and explore the tools used to create a stellar website that stands out to recruiters? IEEE is collaborating with TSE to host a series of 3 workshops where we will cover all of the technologies you need to create your website! The first two workshops (Thursday, January 21st & 28th at 5:00PM PST) will teach the skills of HTML, CSS, JavaScript, React, and DOM. In the final workshop (Thursday, February 5th at 5:00PM PST), IEEE & TSE members will help you start development for your website!",
    location: "Zoom",
    startTime: parseDate("2021-02-04T17:00:00"),
    url: "https://www.facebook.com/events/465514927805991",
  },
  {
    title: "TSE x IEEE: Build Your Personal Website (2)",
    description:
      "Don’t know where to start for your personal website? Want to learn and explore the tools used to create a stellar website that stands out to recruiters? IEEE is collaborating with TSE to host a series of 3 workshops where we will cover all of the technologies you need to create your website! The first two workshops (Thursday, January 21st & 28th at 5:00PM PST) will teach the skills of HTML, CSS, JavaScript, React, and DOM. In the final workshop (Thursday, February 5th at 5:00PM PST), IEEE & TSE members will help you start development for your website!",
    location: "Zoom",
    startTime: parseDate("2021-01-28T17:00:00"),
    url: "https://www.facebook.com/events/237936007860726",
  },
  {
    title: "TSE x IEEE: Build Your Personal Website (1)",
    description:
      "Don’t know where to start for your personal website? Want to learn and explore the tools used to create a stellar website that stands out to recruiters? IEEE is collaborating with TSE to host a series of 3 workshops where we will cover all of the technologies you need to create your website! The first two workshops (Thursday, January 21st & 28th at 5:00PM PST) will teach the skills of HTML, CSS, JavaScript, React, and DOM. In the final workshop (Thursday, February 5th at 5:00PM PST), IEEE & TSE members will help you start development for your website!",
    location: "Zoom",
    startTime: parseDate("2021-01-21T17:00:00"),
    url: "https://www.facebook.com/events/872660076635049",
  },
  {
    title: "HKN x TSE: Tools to Know Before Starting Your Internship",
    description:
      "Unsure of what to prepare before starting your next internship? Want to learn and explore the tools used in the software engineering industry? Eta Kappa Nu (HKN) is collaborating with TSE to host a workshop where we will cover a breath of different technologies that will give you a massive boost during your internship! Come learn about internships, industry, and more!",
    location: "Zoom",
    startTime: parseDate("2020-12-07T17:00:00"),
    url: "https://www.facebook.com/events/713217112905328",
  },
  {
    title: "Discussing the Software Engineering Industry",
    description:
      "Want to talk to and gain insight from several leaders from the software engineering industry? Looking for some advice for your career path? The Jacobs Talent Initiative is partnering with TSE to host a Q&A Panel where several leaders from the software engineering industry will share their stories on their different career paths! We will have engineers and CEOs from Verimatrix and GCAS!",
    location: "GoTo Webinar",
    startTime: parseDate("2020-12-01T17:00:00"),
    url: "https://www.facebook.com/events/2844477182472771",
  },
  {
    title: "Resume Review Workshop",
    description:
      "Trying to build a strong, effective resume? Want to make your resume stand out amongst the competition? TSE is hosting a Resume Review workshop lead by David, a former intern at Bloomberg and Citadel Securities! He will explain how to build an effective resume that can help you get your foot in the door for both startups and larger companies alike. We will also have some time for our members to review your resumes! Come bring your resumes and ask your questions about interviewing, industry, and more!",
    location: "Zoom",
    startTime: parseDate("2020-11-04T18:00:00"),
    url: "https://www.facebook.com/events/265726604878808",
  },
  {
    title: "Recruitment Info Session 2",
    description:
      "Are you interested in software development? Do you want to gain REAL WORLD experience working in project teams to help others? If so, then you are in luck! TSE is looking for project managers, UI/UX designers, and developers! TSE is a student-run organization that seeks to provide pro-bono software development services and technical consultation. We connect with non-profit organizations and use our technical abilities to help them help others. Join us for Info Session 2 to learn about our organization in-depth, including who we work with, what technologies we use, and what we have to offer to you!",
    location: "Zoom",
    startTime: parseDate("2020-10-13T19:00:00"),
    url: "https://www.facebook.com/events/1240531482964924",
  },
  {
    title: "Recruitment Info Session 1",
    description:
      "Are you interested in software development? Do you want to gain REAL WORLD experience working in project teams to help others? If so, then you are in luck! TSE is looking for project managers, UI/UX designers, and developers! TSE is a student-run organization that seeks to provide pro-bono software development services and technical consultation. We connect with non-profit organizations and use our technical abilities to help them help others. Join us for Info Session 2 to learn about our organization in-depth, including who we work with, what technologies we use, and what we have to offer to you!",
    location: "Zoom",
    startTime: parseDate("2020-10-09T19:00:00"),
    url: "https://www.facebook.com/events/769684050545336",
  },
  {
    title: "Intern Panel",
    description:
      "Want to learn how to get a head start in the software engineering space? Interested in learning how to prepare for your next FAANG interview? Unsure what to look for when applying for different companies for your first internship? TSE is hosting an intern panel with several of our members where they will discuss their personal tips and tricks that helped them advance in their career growth! We have panelists from many companies including Facebook, Apple, Amazon, and Google with their unique perspectives to share. Come and ask your questions about internships, industry, and more!",
    location: "Zoom",
    startTime: parseDate("2020-10-03T13:00:00"),
    url: "https://www.facebook.com/events/3901881176505358",
  },
  {
    title: "IEEE x TSE: Programming in the Cloud",
    description:
      "Bored at home during quarantine and been itching to learn to code? If that describes you, we are proud to announce that we will be holding our annual Programming in the s̶k̶y̶ Cloud event! IEEE and TSE will be going over Python basics and how to apply Python to create a fun project! This workshop will available to not only current students, but incoming students and the general public, so make to RSVP by clicking going so you can learn some new programming techniques.",
    location: "Zoom",
    startTime: parseDate("2020-05-30T16:00:00"),
    url: "https://www.facebook.com/events/843699352808271",
  },
  {
    title: "ACM Cyber x TSE: Cryptography Workshop",
    description:
      "ACM & TSE invite you to the Cryptography Workshop. This workshop is a deep dive into the world of elliptic curve cryptography. Gives members hands-on experience with the process of encrypting data with computers using elliptic curves. Get a crash course on modular arithmetic, elliptic curves, and even how to create a cryptographic back door. Participants will learn with hands-on programing exercises in Python and other demonstrations.",
    location: "Online",
    startTime: parseDate("2020-05-20T18:00:00"),
    url: "https://www.facebook.com/events/235849287832471",
  },
  {
    title: "TSE x Gordon Leadership Center: Team Development",
    description:
      "Collaborating with the Gordon Center at JSOE, we will be hosting this leadership workshop that will cover strategies and techniques to help build, nurture, and sustain your team so that you can continue to teach as well as learn from one another. This workshop is only one of many that will help you understand the fundamentals of a perfect leader, and such aspects are important when you are looking forward to becoming a project manager or a tech lead, or even when making executive decisions with your friends when purchasing food. TSE believes that knowing the principles of leadership is crucial in order to make smooth progress through your projects, your events, and more.",
    location: "Zoom",
    startTime: parseDate("2020-04-30T17:00:00"),
    url: "https://www.facebook.com/events/709856783118610",
  },
  {
    title: "Virtual Q&A Panel",
    description:
      "Why should I think about graduate school? What should I do before I start working full-time? What are the most important soft skills as well as hard skills to bring into industry? These are only some of the numerous questions that many students may ask themselves throughout their undergraduate student life. TSE believes that all students should be able to learn the answers for these questions so they will feel prepared for their future and create a career timeline for themselves. For this Virtual Q&A Panel, several alumni of TSE and UCSD (who currently work at Google, Salesforce, Splunk, etc.) will be answering these questions for students who desire insight from those who have survived UCSD. Everyone will also have the opportunity to ask their own questions, so be prepared!",
    location: "Zoom",
    startTime: parseDate("2020-04-15T18:30:00"),
    url: "https://www.facebook.com/events/239627577189596",
  },
  {
    title: "TSE x Gordon Leadership Center: Leadership Workshop",
    description:
      "TSE and Gordon Leadership Center will be collaborating to host a workshop on how to be a successful team leader to those looking to become a project manager, a tech lead, or just a better leader for the future. We will cover topics such as: communication, time management, responsibility, ownership, and more. If you are looking for strategies and techniques to take your leadership skills to the next level, then we can help!",
    location: "CSE Building, Room 4140",
    startTime: parseDate("2020-02-07T18:00:00"),
    url: "https://www.facebook.com/events/219575115714971",
  },
  {
    title: "ACM x TSE: Modern Cpp (2)",
    description:
      "Interested in learning more C++? Come learn beyond the classroom and enjoy free burritos while coding in C++! TSE and ACM are coming together to create an awesome workshop where you'll get to learn more about advanced C++",
    location: "Jacobs School of Engineering, Qualcomm Room",
    startTime: parseDate("2019-11-15T18:30:00"),
    url: "https://www.facebook.com/events/2640637832666618",
  },
  {
    title: "ACM x TSE: Advanced Cpp (1)",
    description:
      "The first workshop in a two part series on C++. Learn about standard library basics, common design idioms, exception safety, and other best practices. The workshop assumes a basic knowledge of control structures/data structures and familiarity with basic C++. If you have taken CSE 100 or other similar courses, and want to spruce up your C++ knowledge, this is the workshop for you!",
    location: "Jacobs School of Engineering, Qualcomm Room",
    startTime: parseDate("2019-11-08T18:30:00"),
    url: "https://www.facebook.com/events/513664769405070",
  },
  {
    title: "Recruitment Info Session 2",
    description:
      "Applications for developers, designers, and project leads are now open! TSE is an interdisciplinary student organization that designs and develops pro-bono software (e.g. web and mobile applications) for non-profits, while giving our students practical, real world experience. This information session is for anyone interested in learning more about our organization and how to become a member. We will be talking in-depth about who we are and what we do. We have projects that range from simple, basic websites to full-fledged mobile and web apps. Join us to work with causes from empowering refugees to combating food insecurity. We're excited to meet you!",
    location: "Price Center West - Earl Warren College Room",
    startTime: parseDate("2019-10-03T14:00:00"),
    url: "https://www.facebook.com/events/395672657787534",
  },
  {
    title: "Recruitment Info Session 1",
    description:
      "Applications for developers, designers, and project leads are now open! TSE is an interdisciplinary student organization that designs and develops pro-bono software (e.g. web and mobile applications) for non-profits, while giving our students practical, real world experience. This information session is for anyone interested in learning more about our organization and how to become a member. We will be talking in-depth about who we are and what we do. We have projects that range from simple, basic websites to full-fledged mobile and web apps. Join us to work with causes from empowering refugees to combating food insecurity. We're excited to meet you!",
    location: "Price Center West - Earl Warren College Room",
    startTime: parseDate("2019-10-02T18:00:00"),
    url: "https://www.facebook.com/events/442107213090595",
  },
  {
    title: "TSE x IEEE: Programming in the Sky",
    description:
      "Ever want to learn the basics of C++ and Python, but don't want to take an entire class? Good, we have just the workshop for you! IEEE UCSD and TSE will be holding one introductory Python programming workshop and one intro to C++ workshop at the same time at the highest point on campus, overlooking the beautiful Pacific. You will be fed with knowledge and food. This event is proudly brought you by the IEEE UC San Diego Branch, TSE, and The Village! Typically, invitation is not limited, but in the event of reaching maximum capacity, we will not be able to accept everyone.",
    location: "The Village West Tower",
    startTime: parseDate("2019-05-12T17:00:00"),
    url: "https://www.facebook.com/events/337492293618898",
  },
  {
    title: "Recruitment Info Session 2",
    description:
      "This event is an info session for anyone interested in learning more about our org and how to become a member. We will be talking about who we are and what we do. We have projects that range from simple, basic websites to full-fledged mobile and web apps.",
    location: "Price Center West - Eleanor Roosevelt College Room",
    startTime: parseDate("2018-10-10T19:00:00"),
    url: "https://www.facebook.com/events/302663066989271",
  },
  {
    title: "Recruitment Info Session 1",
    description:
      "This event is an info session for anyone interested in learning more about our org and how to become a member. We will be talking about who we are and what we do. We have projects that range from simple, basic websites to full-fledged mobile and web apps.",
    location: "Price Center West - Governance Chambers",
    startTime: parseDate("2018-10-04T19:00:00"),
    url: "https://www.facebook.com/events/261926627791755",
  },
  {
    title: "Intern Panel (Google, Salesforce, Visa)",
    description: "",
    location: "Price Center East - Earl Warren College Room",
    startTime: parseDate("2018-02-26T19:00:00"),
    url: "https://www.facebook.com/events/2057901217756759",
  },
  {
    title: "Technical Interview Workshop",
    description: "",
    location: "Price Center East - Governance Chambers",
    startTime: parseDate("2018-01-22T19:00:00"),
    url: "https://www.facebook.com/events/389423808172676",
  },
  {
    title: "Intern Panel (Google, Salesforce, Visa)",
    description: "",
    location: "Price Center East - Governance Chambers",
    startTime: parseDate("2017-10-09T18:30:00"),
    url: "https://www.facebook.com/events/737856743065843",
  },
];

events.sort(makeComparator((event) => [event.startTime.toMillis(), event.title]));

const allEvents = events as readonly Event[];

export { allEvents };
