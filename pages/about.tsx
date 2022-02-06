import React from "react";

import AboutTabs from "../components/AboutTabs";
import ArrowLink from "../components/ArrowLink";
import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import SideBySide from "../components/SideBySide";
import markdown from "../util/markdown";

export default function About() {
  return (
    <>
      <PageTitle title="About Us" />
      <PaddedBox>
        <SideBySide
          layout={[
            {
              image: { key: "content/photoshoot-marketing-3", aspectRatio: 100 },
              width: (9 / 26) * 100,
            },
            {
              image: { key: "content/fa21-all-hands-2-group-pic-1", aspectRatio: (9 / 16) * 100 },
              width: (16 / 26) * 100,
            },
          ]}
        />
      </PaddedBox>
      <PaddedBox>
        <SideBySide
          layout={[{}, { image: { key: "content/photoshoot-marketing-12", aspectRatio: 100 } }]}
        >
          {markdown`
In Spring of 2017, a group of passionate students saw a huge problem: many nonprofits had little to no resources to procure professional web and technical development services.

In response, they banded together to create Triton Software Engineering. By providing a venue for both UCSD students and nonprofits to connect, they hoped to foster growth in both social good and technical expertise.
          `}
        </SideBySide>
      </PaddedBox>
      <Hero image="content/photoshoot-marketing-17" />
      <PaddedBox>
        {markdown`
## More than a team.

When not heads-down designing and developing, we set time aside to create opportunities to bond through games and mentorship. We care about celebrate each other's successes as well! As a student member at TSE, you gain valuable skills and a network of talented peers who share a drive to do good for the community.
        `}
        <ArrowLink href="/students">Cool! How do I join?</ArrowLink>
      </PaddedBox>
      <PaddedBox center heading="We are always growing.">
        <AboutTabs />
      </PaddedBox>
    </>
  );
}
