"use client";

import React from "react";

import AboutTabs from "../../components/AboutTabs";
import ArrowLink from "../../components/ArrowLink";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import PaddedBox from "../../components/PaddedBox";
import markdown from "../../util/markdown";

export default function About() {
  return (
    <>
      <PaddedBox heading="Our Mission">
        {markdown`
TSE's mission is to craft digital solutions for nonprofit organizations in our community.
        `}
        <Gallery
          layout={[
            {
              imageKey: "content/beach-photoshoot-veteran-sisters",
              width: (9 / 26) * 100,
              aspectRatio: [1, 1],
            },
            {
              imageKey: "content/wi25-all-hands-2",
              width: (16 / 26) * 100,
            },
          ]}
        />
      </PaddedBox>
      <PaddedBox>
        <Gallery layout={[{}, { imageKey: "content/beach-photoshoot-pvp", aspectRatio: [4, 3] }]}>
          {markdown`
In Spring of 2017, a group of passionate students saw a huge problem: many nonprofit organizations had little to no resources to procure professional web and technical development services.

In response, they banded together to create Triton Software Engineering. By providing a venue for both UCSD students and nonprofits to connect, they hoped to foster growth in both social good and technical expertise.
          `}
        </Gallery>
      </PaddedBox>
      <PaddedBox heading="Our Values">
        <ol style={{ fontSize: "3rem", paddingLeft: "1.5em" }}>
          <li>Innovation</li>
          <li>Education</li>
          <li>Collaboration</li>
          <li>Service</li>
        </ol>
      </PaddedBox>
      <Hero imageKey="content/exec-dinner-2024" />
      <PaddedBox heading="More than a team.">
        {markdown`
When not heads-down designing and developing, we set time aside to create opportunities to bond through games and mentorship. We care about celebrating each other's successes as well! As a member in TSE, you gain valuable skills and a network of talented peers who share a drive to do good for the community.
        `}
        <ArrowLink href="/students">Cool! How do I join?</ArrowLink>
      </PaddedBox>
      <PaddedBox center heading="We are always growing.">
        <AboutTabs />
      </PaddedBox>
    </>
  );
}
