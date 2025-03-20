import { MDXProps } from "mdx/types";
import { JSX } from "react";

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
import contentTSE from "../projects/tse-website-revamp.mdx";
import contentUSHS from "../projects/ushs-housing-portal.mdx";
import contentUWEAST from "../projects/uweast-community-kitchen.mdx";
import contentWA from "../projects/wa-family-literacy.mdx";
import contentYCW from "../projects/ycw-greenpoint-rated-app.mdx";
import contentYSC from "../projects/ysc-mobile-app.mdx";
import { makeSlug } from "../util";

import { allProjects, ProjectWithoutContent } from "./projects";

type MDXPage = (props: MDXProps) => JSX.Element;

export const projectSlugsToContent = {
  [makeSlug("4FLOT Website Revamp", "-")]: content4FLOT,
  [makeSlug("CCIDC Application Form", "-")]: contentCCIDC,
  [makeSlug("DFM Sideline Sidekick", "-")]: contentDFM,
  [makeSlug("PAP Application Form", "-")]: contentPAP,
  [makeSlug("PIA Program Manager", "-")]: contentPIA,
  [makeSlug("USHS Housing Portal", "-")]: contentUSHS,
  [makeSlug("FIX Landing Page", "-")]: contentFIX,
  [makeSlug("SDCTA Data Visualization Website", "-")]: contentSDCTA,
  [makeSlug("ALUM Mentorship Mobile Application", "-")]: contentALUM,
  [makeSlug("CBL Crisis Line Mobile Application", "-")]: contentCBL,
  [makeSlug("LAK Goods Transport Application", "-")]: contentLAK,
  [makeSlug("TSE Website Revamp", "-")]: contentTSE,
  [makeSlug("MAW Volunteer Hub", "-")]: contentMAW,
  [makeSlug("TSE Moneta", "-")]: contentMoneta,
  [makeSlug("LAP Student Tracker", "-")]: contentLAP,
  [makeSlug("TAP Foster Dog Matching Tool", "-")]: contentTAP,
  [makeSlug("YSC Mobile App", "-")]: contentYSC,
  [makeSlug("WA Family Literacy Mobile App", "-")]: contentWA,
  [makeSlug("FSD Distribution Web Application", "-")]: contentFSD,
  [makeSlug("TSE Oktavian", "-")]: contentOktavian,
  [makeSlug("SI Website Revamp", "-")]: contentSI,
  [makeSlug("YCW GreenPoint Rated Mobile App", "-")]: contentYCW,
  [makeSlug("IHC EMR Mobile App", "-")]: contentIHCEMR,
  [makeSlug("KC Linking Mobile App", "-")]: contentKCLinking,
  [makeSlug("KC Skilled Impact Mobile App", "-")]: contentKCSkilled,
  [makeSlug("UWEAST Community Kitchen Website", "-")]: contentUWEAST,
  [makeSlug("Dynamics Team Website", "-")]: contentDynamics,
  [makeSlug("IHC Wellness Mobile App", "-")]: contentIHCWellness,
  [makeSlug("OIC Web Innovation Portal", "-")]: contentOIC,
  [makeSlug("SSA Website", "-")]: contentSSA,
  [makeSlug("CCH Community Markets Website", "-")]: contentCCH,
};

export const allProjectsWithContent = allProjects.map((project) => ({
  ...project,
  content: projectSlugsToContent[project.slug],
}));

export type Project = ProjectWithoutContent & {
  content: MDXPage;
};
