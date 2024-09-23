import { MDXProps } from "mdx/types";

import { ImageKey } from "../images";
import content4FLOT from "../projects/4flot-website-revamp.mdx";
import contentALUM from "../projects/alum-mentorship-mobile-application.mdx";
import contentCBL from "../projects/cbl-crisis-line-mobile-application.mdx";
import contentCCH from "../projects/cch-community-markets.mdx";
import contentCCIDC from "../projects/ccidc-application-form.mdx";
import contentDFM from "../projects/dfm-sideline-sidekick.mdx";
import contentDynamics from "../projects/dynamics-website.mdx";
import contentFIX from "../projects/fix-landing-page.mdx";
import contentFSD from "../projects/fsd-distribution-web-app.mdx";
import contentIHCEMR from "../projects/ihc-emr.mdx";
import contentIHCWellness from "../projects/ihc-wellness-app.mdx";
import contentKCLinking from "../projects/kc-linking.mdx";
import contentKCSkilled from "../projects/kc-skilled-impact.mdx";
import contentLAK from "../projects/lak-goods-transport-application.mdx";
import contentLAP from "../projects/lap-student-tracker.mdx";
import contentMAW from "../projects/maw-volunteer-hub.mdx";
import contentOIC from "../projects/oic-web-innovation-portal.mdx";
import contentPAP from "../projects/pap-application-form.mdx";
import contentPIA from "../projects/pia-program-manager.mdx";
import contentSDCTA from "../projects/sdcta-data-visualization-website.mdx";
import contentSI from "../projects/si-website-revamp.mdx";
import contentSSA from "../projects/ssa-website.mdx";
import contentTAP from "../projects/tap-dog-matching.mdx";
import contentMoneta from "../projects/tse-moneta.mdx";
import contentOktavian from "../projects/tse-oktavian.mdx";
import contentUWEAST from "../projects/uweast-community-kitchen.mdx";
import contentWA from "../projects/wa-family-literacy.mdx";
import contentYCW from "../projects/ycw-greenpoint-rated-app.mdx";
import contentYSC from "../projects/ysc-mobile-app.mdx";
import contentTSE from "../projects/tse-website-revamp.mdx";
import contentUSHS from "../projects/ushs-housing-portal.mdx";
import { assertUniqueKey, makeComparator, makeSlug } from "../util";

import { PersonId, Role, allRoles } from "./people";

type MDXPage = (props: MDXProps) => JSX.Element;

type ProjectTeam = readonly {
  readonly role: Role;
  readonly personIds: readonly PersonId[];
}[];

interface RawProject {
  readonly name: string;
  readonly description: string;
  readonly content: MDXPage;
  readonly thumbnail: ImageKey | null;
  readonly team: ProjectTeam;
}

interface Project extends RawProject {
  readonly slug: string;
}

// Metadata for each project. Projects should be manually ordered from newest
// to oldest, since the dates are not stored for each project.
const constProjects = [
  {
    name: "4FLOT Website Revamp",
    description: "Website highlighting the impact of 4FLOT in the community.",
    content: content4FLOT,
    thumbnail: "projects/4flot_website_revamp/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Jenny Mar 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Jennifer Tanurdjaja 0"],
      },
      {
        role: "Designer",
        personIds: ["Emily Yu 0", "Alice Lam 0", "Shana Chen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Arnav Modi 0",
          "Arohan Mittal 0",
          "Christen Xie 0",
          "Jacob Hansen 0",
          "Katelyn Nguyen 0",
          "Kevin Do 0",
          "Rachel Wei 0",
          "Sophia Zhu 0",
        ],
      },
    ],
  },
  {
    name: "CCIDC Application Form",
    description:
      "Redesigned application pathways to make it easier for target users to navigate and apply for certification.",
    content: contentCCIDC,
    thumbnail: "projects/ccidc_application_form/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Helen Lin 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Shreya Gupta 0"],
      },
      {
        role: "Designer",
        personIds: ["Sujana Nagasuri 0", "Uma Naik 0", "Nandini Desai 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Emma Zhu 0",
          "Hrithik Pai 0",
          "Jared Rosas 0",
          "Kathy Chen 0",
          "Leo Friedman 0",
          "Madhav Bansal 0",
          "Mohak Vaswani 0",
          "Sidhant Rohatgi 0",
        ],
      },
    ],
  },
  {
    name: "DFM Sideline Sidekick",
    description:
      "App to get quick reference on injuries and how to treat them when physicians are at on-call events.",
    content: contentDFM,
    thumbnail: "projects/dfm_sideline_sidekick/splashscreens",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Anthony Pertsel 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Shreya Gupta 0"],
      },
      {
        role: "Designer",
        personIds: ["Jocelyn Horng 0", "Thoa Nguyen 0", "Nicole Zhi 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Edward Lin 0",
          "Eshaan Sharma 0",
          "Lillian Ho 0",
          "Megan Leong 0",
          "Pratyush Chand 0",
          "Rohan Sachdeva 0",
          "Vinayak Sharma 0",
        ],
      },
    ],
  },
  {
    name: "PAP Application Form",
    description:
      "A robust, streamlined way to manage and service a large volume of requests for furnishings",
    content: contentPAP,
    thumbnail: "projects/pap_application_form/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Benjamin Johnson 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Emmanuel Flores 0"],
      },
      {
        role: "Designer",
        personIds: ["Aska Kunita Demirci 0", "Hieu Phan 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Daniel Shao 0",
          "Harsh Gurnani 0",
          "Melina Dimitropoulou 0",
          "Samvrit Srinath 0",
          "Sophia Yu 0",
          "Steven Shi 0",
          "Sydney Zhang 0",
          "Yoto Kim 0",
        ],
      },
    ],
  },
  {
    name: "PIA Program Manager",
    description:
      "A database to track students, programs the students are part of, and any relevant information.",
    content: contentPIA,
    thumbnail: "projects/pia_program_manager/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Adhithya Ananthan-Regina 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Jennifer Tanurdjaja 0"],
      },
      {
        role: "Designer",
        personIds: ["Mandy Lai 0", "Justin Kim 0", "Rain Dong 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Aammya Sapra 0",
          "Aaron Chan 0",
          "Andrew Pu 0",
          "Lisa Liu 0",
          "Michael Sullivan 0",
          "Parth Patel 0",
          "Victor Siu 0",
        ],
      },
    ],
  },
  {
    name: "USHS Housing Portal",
    description: "Database that matches housing to people who are homeless.",
    content: contentUSHS,
    thumbnail: "projects/ushs_housing_portal/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Philip Zhang 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Emmanuel Flores 0"],
      },
      {
        role: "Designer",
        personIds: ["Annie Wen 0", "Joanne Tsai 0", "Madison Plotkin 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Andrew Zhou 0",
          "Brenton Dunn 0",
          "James Zhang 0",
          "Karen Yan 0",
          "Nitya Pillai 0",
          "Pranav Soma 0",
          "Ramtin Tajbakhsh 0",
          "Shreya Gupta 0",
          "Yash Ravipati 0",
        ],
      },
    ],
  },
  {
    name: "FIX Landing Page",
    description:
      "Landing page with interactive elements to bring awareness to community cats and encourage people to get involved.",
    content: contentFIX,
    thumbnail: "projects/fix_landing_page/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Andrew Russell 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Annie Wen 0"],
      },
      {
        role: "Designer",
        personIds: [
          "Rickie Chen 0",
          "Rachel Blumin 0",
          "Jocelyn Horng 0",
          "Mandy Lai 0",
          "Annie Wen 0",
        ],
      },
      {
        role: "Developer",
        personIds: [
          "Jacob Au 0",
          "Melina Dimitropoulou 0",
          "Benjamin Johnson 0",
          "Edward Lin 0",
          "Emily Marschall-Niswonger 0",
          "Daniel Shao 0",
          "James Zhang 0",
        ],
      },
    ],
  },
  {
    name: "SDCTA Data Visualization Website",
    description: "Data Visualization Website with a subscription structure.",
    content: contentSDCTA,
    thumbnail: "projects/sdcta_data_visualization_website/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Nirmal Agnihotri 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Akashnarendran Premkumar 0", "Mohak Vaswani 0"],
      },
      {
        role: "Designer",
        personIds: ["Tracey Du 0", "Sujana Nagasuri 0", "Aska Kunita Demirci 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Aammya Sapra 0",
          "Anthony Pertsel 0",
          "Brenton Dunn 0",
          "Helen Lin 0",
          "Hrithik Pai 0",
          "Emma Zhu 0",
          "Megan Leong 0",
          "Samvrit Srinath 0",
          "Victor Siu 0",
        ],
      },
    ],
  },
  {
    name: "ALUM Mentorship Mobile Application",
    description:
      "Mobile (specifically iOS) application that provides a personalized user experience and flexibility to receive mentorship.",
    content: contentALUM,
    thumbnail: "projects/alum_mentorship_mobile_application/splashscreens",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Aman Aggarwal 0", "Adhithya Ananthan-Regina 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Mrinal Sharma 0", "Stephen Tan 0"],
      },
      {
        role: "Designer",
        personIds: ["Juliet Zhuang 0", "Emily Yu 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Adhithya Ananthan-Regina 0",
          "Christen Xie 0",
          "Jenny Mar 0",
          "Sidhant Rohatgi 0",
          "Yash Ravipati 0",
          "Harsh Gurnani 0",
          "Philip Zhang 0",
        ],
      },
    ],
  },
  {
    name: "CBL Crisis Line Mobile Application",
    description:
      "Mobile app offering crisis counseling services and resources to people throughout the United States and Canada.",
    content: contentCBL,
    thumbnail: "projects/cbl_crisis_line/splashscreens",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Assaf Cohen-Arazi 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Mohak Vaswani 0"],
      },
      {
        role: "Designer",
        personIds: ["Jonathan Lum 0", "Tiffany Lee 0", "Shana Chen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Nishant Balaji 0",
          "Madhav Bansal 0",
          "Aaron Chan 0",
          "Shreya Gupta 0",
          "William Jin 0",
          "Arohan Mittal 0",
          "Parth Patel 0",
          "Steven Shi 0",
          "Jennifer Tanurdjaja 0",
          "Sydney Zhang 0",
        ],
      },
    ],
  },
  {
    name: "LAK Goods Transport Application",
    description:
      "The Laktaa Goods Transport Application connects Bhutanese farmers and agricultural collectives to delivery drivers for Laktaa Bhutan (formerly FirstMile Bhutan).",
    content: contentLAK,
    thumbnail: "projects/lak_goods_transport/splashscreens",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Nirmal Agnihotri 0", "Alex Zhang 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Emmanuel Flores 0"],
      },
      {
        role: "Designer",
        personIds: ["Kenny Tran 0", "Tracy Nguyen 0", "Leslie Aguiar 0", "Juliet Zhuang 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Aammya Sapra 0",
          "Aaron Kirk 0",
          "Advay Sharma 0",
          "Aman Aggarwal 0",
          "Assaf Cohen-Arazi 0",
          "Shreekar Pandey 0",
          "Pratyush Chand 0",
          "Andrew Masek 0",
          "Akhilan Gurumoorthy 0",
          "Vivian Liu 0",
          "Arnav Modi 0",
          "Kevin Do 0",
          "Nitya Pillai 0",
          "Vinayak Sharma 0",
          "Jennifer Chen 0",
          "James Luo 0",
          "Aksharan Saravanan 0",
        ],
      },
    ],
  },
  {
    name: "TSE Website Revamp",
    description: "Our website!",
    content: contentTSE,
    thumbnail: "projects/tse_website_revamp/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Justin Yao Du 0", "Navid Boloorian 0"],
      },
      {
        role: "Designer",
        personIds: ["Kelly Li 0", "Mylinh Lac 0", "Juliet Zhuang 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Allison Bhavsar 0",
          "Benson Vuong 0",
          "Dhruv Sood 0",
          "Nirmal Agnihotri 0",
          "Hrithik Pai 0",
          "Jennifer Chen 0",
          "Emma Zhu 0",
        ],
      },
    ],
  },
  {
    name: "MAW Volunteer Hub",
    description:
      "The Make-A-Wish Volunteer Hub is used to coordinate volunteer events, materials, and contact information for for the organization.",
    content: contentMAW,
    thumbnail: "projects/maw_volunteer_hub/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Patrick Brown 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Mrinal Sharma 0"],
      },
      {
        role: "Designer",
        personIds: ["Andrew Caballero 0", "Juliet Zhuang 0", "Tracy Nguyen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Aksharan Saravanan 0",
          "Andrew Russell 0",
          "Benson Vuong 0",
          "James Zhang 0",
          "Mohak Vaswani 0",
          "Shreya Gupta 0",
        ],
      },
    ],
  },
  {
    name: "TSE Moneta",
    description:
      "The TSE Moneta website is an abstractable, GUI database solution that can be individually customized by nonprofits to best address their needs.",
    content: contentMoneta,
    thumbnail: "projects/tse_moneta/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Navid Boloorian 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Reyna Abhyankar 0", "Stephen Tan 0"],
      },
      {
        role: "Designer",
        personIds: ["Kelly Li 0", "Jonathan Lum 0", "Tracey Du 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Ainesh Arumugam 0",
          "Alex Zhang 0",
          "Kevin Fu 0",
          "Elias Fang 0",
          "Pratyush Chand 0",
          "William Wu 0",
        ],
      },
    ],
  },
  {
    name: "LAP Student Tracker",
    description:
      "The League of Amazing Programmers Student Tracker is a hub for the League of Amazing Programmers school used by both students and teachers to centralize classroom scheduling and communication.",
    content: contentLAP,
    thumbnail: "projects/lap_student_tracker/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Anshul Birla 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Annie Wen 0"],
      },
      {
        role: "Designer",
        personIds: ["Evan Lam 0", "Rickie Chen 0", "Lydia Smith 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Allison Bhavsar 0",
          "Anvitaa Sekhsaria 0",
          "Nishant Balaji 0",
          "Ryan Bui 0",
          "Zain Khan 0",
          "Alex Zhang 0",
          "William Jin 0",
        ],
      },
    ],
  },
  {
    name: "TAP Foster Dog Matching Tool",
    description:
      "The Animal Pad Foster Dog Matching Tool assists with the process of matching dogs to foster families.",
    content: contentTAP,
    thumbnail: "projects/tap_dog_matching/home-page",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Dhanush Nanjunda Reddy 0", "Advay Sharma 0", "William Wu 0"],
      },
      {
        role: "Designer",
        personIds: ["Rickie Chen 0", "Rachel Blumin 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Andrew Masek 0",
          "Artyom Muradyan 0",
          "Jacob Au 0",
          "Parth Patel 0",
          "Philip Zhang 0",
          "William Jin 0",
        ],
      },
    ],
  },
  {
    name: "YSC Mobile App",
    description:
      "The YStem and Chess Mobile Application provides a platform through which underprivileged students can work with mentors in order to learn and play chess.",
    content: contentYSC,
    thumbnail: "projects/ysc_mobile_app/app-screens",
    team: [
      {
        role: "Engineering Manager",
        personIds: ["Nicolas La Polla 0", "Andrew Russell 0"],
      },
      {
        role: "Product Manager",
        personIds: ["Akashnarendran Premkumar 0"],
      },
      {
        role: "Designer",
        personIds: ["Andrew Caballero 0", "Rachel Blumin 0", "Tracey Du 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Akhilan Gurumoorthy 0",
          "Deepansha Singh 0",
          "Helen Lin 0",
          "Ly Nguyen 0",
          "Rohan Puthukudy 0",
          "Ryan Hung 0",
          "Yucheng Huang 0",
        ],
      },
    ],
  },
  {
    name: "WA Family Literacy Mobile App",
    description:
      "The Words Alive Family Literacy Application promotes family literacy through an intuitive mobile app.",
    content: contentWA,
    thumbnail: "projects/wa_family_literacy/app-screens",
    team: [
      {
        role: "Project Manager",
        personIds: ["David Cruz 0"],
      },
      {
        role: "Designer",
        personIds: ["Kenny Tran 0", "Andrew Caballero 0", "Rickie Chen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Rohith Kasar 0",
          "Rohan Puthukudy 0",
          "Allison Bhavsar 0",
          "Dhruv Sood 0",
          "Anshul Birla 0",
          "Aksharan Saravanan 0",
          "Kevin Han 0",
          "Philip Zhang 0",
          "Emmanuel Flores 0",
        ],
      },
    ],
  },
  {
    name: "FSD Distribution Web Application",
    description:
      "The FSD Distribution Web Application tracks information on agencies and food distributions for Feeding San Diego.",
    content: contentFSD,
    thumbnail: "projects/fsd_distribution_web_app/home-page",
    team: [
      {
        role: "Project Manager",
        personIds: ["Sara Blumin 0"],
      },
      {
        role: "Designer",
        personIds: ["Kenny Tran 0", "Evan Lam 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Roger Ji 0",
          "William Wu 0",
          "Nicolas La Polla 0",
          "Nirmal Agnihotri 0",
          "Ryan Bui 0",
          "Stephen Tan 0",
          "Emmanuel Flores 0",
        ],
      },
    ],
  },
  {
    name: "TSE Oktavian",
    description:
      "Membership & logistics portal for TSE — handles recruitment, roster management, etc.",
    content: contentOktavian,
    thumbnail: "projects/tse_oktavian/home-page",
    team: [
      {
        role: "Project Manager",
        personIds: ["Hannah Hsu 0", "Navid Boloorian 0"],
      },
      {
        role: "Designer",
        personIds: ["Mylinh Lac 0", "Kenny Tran 0", "Kelly Li 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Philip Zhang 0",
          "Justin Yao Du 0",
          "Benson Vuong 0",
          "Anson Lee 0",
          "Zain Khan 0",
          "Ly Nguyen 0",
          "Arnav Taneja 0",
          "Elias Fang 0",
          "Jacob Au 0",
          "Xi-Kai Wu 0",
          "Deepansha Singh 0",
          "Shravan Konduru 0",
          "Nicholas Vanny 0",
        ],
      },
    ],
  },
  {
    name: "SI Website Revamp",
    description:
      "Personalized website and admin tool for Sakyadhita to display and edit organization information.",
    content: contentSI,
    thumbnail: "projects/si_website_revamp/home-page",
    team: [
      {
        role: "Project Manager",
        personIds: ["Amrit Singh 0", "Navid Boloorian 0"],
      },
      {
        role: "Designer",
        personIds: ["Tracy Nguyen 0", "Rachel Blumin 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Alejandro Rodriguez Pascual 0",
          "Dhanush Nanjunda Reddy 0",
          "Patrick Brown 0",
          "Thomas Garry 0",
          "Amitesh Sharma 0",
          "Navid Boloorian 0",
          "Aaron Kirk 0",
          "Elias Fang 0",
          "Jacob Au 0",
        ],
      },
    ],
  },
  {
    name: "YCW GreenPoint Rated Mobile App",
    description:
      "Mobile application for Your Clear Way (formerly Build-It-Green) which helps homeowners and certified GreenPoint raters to create healthy and sustainable homes.",
    content: contentYCW,
    thumbnail: "projects/ycw_greenpoint_rated_app/app-screens",
    team: [
      {
        role: "Project Manager",
        personIds: ["Arnold Duan 0", "Robert Tatum 0", "Advay Sharma 0"],
      },
      {
        role: "Designer",
        personIds: ["Jessica Nguyen 0", "Lydia Smith 0", "Kelly Li 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Alejandro Rodriguez Pascual 0",
          "Loc Vu 0",
          "Roger Ji 0",
          "Rohan Puthukudy 0",
          "Advay Sharma 0",
          "Shravan Hariharan 0",
          "Kunal Bhandarkar 0",
          "Hana Kim 0",
          "Robert Tatum 0",
          "Thai Gillespie 0",
        ],
      },
    ],
  },
  {
    name: "IHC EMR Mobile App",
    description:
      "Mobile application for IHC that digitizes clinic administration. Volunteers, physicians, and lab technicians can view and edit information pertaining to patient check-ins, triages, lab testing, and pharmacy management.",
    content: contentIHCEMR,
    thumbnail: "projects/default-thumbnail",
    team: [
      {
        role: "Project Manager",
        personIds: ["Alex Chiu 0", "Bryant Liu 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Bryant Liu 0",
          "Davin Tjong 0",
          "Nathan Zhao 0",
          "Brent Min 0",
          "Alex Li 0",
          "Kenny Yi 0",
          "Ayush Shukla 0",
        ],
      },
    ],
  },
  {
    name: "KC Linking Mobile App",
    description:
      "Linking feature of the Key Conservation mobile app. This feature makes posts and profiles easily accessible via links which gives conservationists easy access to critical funding and global support. ",
    content: contentKCLinking,
    thumbnail: "projects/kc_linking/app-screens",
    team: [
      {
        role: "Project Manager",
        personIds: ["Hannah Hsu 0", "Kenny Yi 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Arnav Taneja 0",
          "Nicolas La Polla 0",
          "Anne Xu 0",
          "Bryant Liu 0",
          "Kenny Yi 0",
          "Sara Blumin 0",
        ],
      },
    ],
  },
  {
    name: "KC Skilled Impact Mobile App",
    description:
      "Volunteer connection section of the Key Conservation mobile app. Through this feature, skilled volunteers are connected to the organizations that need them most.",
    content: contentKCSkilled,
    thumbnail: "projects/kc_skilled_impact/app-screens",
    team: [
      {
        role: "Project Manager",
        personIds: ["Sumeet Bansal 0", "David Cruz 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Anson Lee 0",
          "Ryan Bui 0",
          "Shravan Hariharan 0",
          "Thomas Li 0",
          "David Cruz 0",
        ],
      },
    ],
  },
  {
    name: "UWEAST Community Kitchen Website",
    description:
      "Web application for UWEAST that allows customers to view the menu, place orders, and pay.",
    content: contentUWEAST,
    thumbnail: "projects/uweast_community_kitchen/home-page",
    team: [
      {
        role: "Project Manager",
        personIds: ["Amrit Singh 0"],
      },
      {
        role: "Designer",
        personIds: ["Kelly Li 0", "Kenny Tran 0", "Tracy Nguyen 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Alejandro Rodriguez Pascual 0",
          "Amitesh Sharma 0",
          "Dhanush Nanjunda Reddy 0",
          "Aaron Kirk 0",
          "Navid Boloorian 0",
          "Patrick Brown 0",
          "Thomas Garry 0",
        ],
      },
    ],
  },
  {
    name: "Dynamics Team Website",
    description:
      "Website to help promote Dynamics Performance Team while providing ways to support the organization financially.",
    content: contentDynamics,
    thumbnail: "projects/dynamics_performance_team/home-page",
    team: [
      {
        role: "Project Manager",
        personIds: ["Jason Cabrera 0"],
      },
      {
        role: "Designer",
        personIds: ["Jessica Nguyen 0", "Nhu Luong 0"],
      },
      {
        role: "Developer",
        personIds: [
          "Amrit Singh 0",
          "Nicholas Vanny 0",
          "Dhanush Nanjunda Reddy 0",
          "Anshul Birla 0",
        ],
      },
    ],
  },
  {
    name: "IHC Wellness Mobile App",
    description:
      "Mobile application encouraging more open dialogue, healthy coping mechanisms, and better utilization of on campus resources for students under intense academic pressure.",
    content: contentIHCWellness,
    thumbnail: "projects/ihc_wellness_app/app-screens",
    team: [
      {
        role: "Project Manager",
        personIds: ["Glenn Raskovich 0"],
      },
      {
        role: "Developer",
        personIds: ["Anoushka Dave 0", "Benson Vuong 0", "Robert Tatum 0", "Rohith Kasar 0"],
      },
    ],
  },
  {
    name: "OIC Web Innovation Portal",
    description:
      "UCSD resource hub where users can find the activity, event, or campus resource they are seeking or explore new ones.",
    content: contentOIC,
    thumbnail: "projects/office_of_innovation_and_commercialization/home-page",
    team: [
      {
        role: "Project Manager",
        personIds: ["Dan Huang 0"],
      },
      {
        role: "Designer",
        personIds: ["Jessica Nguyen 0"],
      },
      {
        role: "Developer",
        personIds: ["Alexandra Michael 0", "Gary Zhao 0", "John Lu 0", "Nathan Zhao 0"],
      },
    ],
  },
  {
    name: "SSA Website",
    description:
      "Website for the Symphonic Student Association, a student organization fostering a community of members interested in classical music.",
    content: contentSSA,
    thumbnail: "projects/symphonic_student_association/home-page",
    team: [
      {
        role: "Project Manager",
        personIds: ["Holly Ham 0"],
      },
      {
        role: "Designer",
        personIds: ["Nhu Luong 0"],
      },
      {
        role: "Developer",
        personIds: ["Jason Vega 0", "Bryan Yuan 0", "Sara Blumin 0", "Victor Luong 0"],
      },
    ],
  },
  {
    name: "CCH Community Markets Website",
    description:
      "Online assessment tool to determine the health of a market, allowing CCH to get accurate information on how to provide healthier foods for their community.",
    content: contentCCH,
    thumbnail: "projects/default-thumbnail",
    team: [
      {
        role: "Project Manager",
        personIds: ["Hannah Hsu 0"],
      },
      {
        role: "Developer",
        personIds: ["Jason Cabrera 0", "Declan Sullivan 0", "Kevin Soloway 0"],
      },
    ],
  },
] as const satisfies readonly RawProject[];

function sortTeam(team: ProjectTeam): ProjectTeam {
  return (
    team
      .slice()
      // Sort roles by rank.
      .sort(makeComparator((group) => [allRoles.indexOf(group.role)]))
      // Sort names for each role.
      .map(({ role, personIds }) => ({ role, personIds: personIds.slice().sort() }))
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
