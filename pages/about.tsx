import React from "react";
import Container from "react-bootstrap/Container";

import AboutTabs from "../components/AboutTabs";
import ArrowLink from "../components/ArrowLink";
import FullWidthImage from "../components/FullWidthImage";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle title="About Us" />
      <FullWidthImage path="content/photoshoot-marketing-17" />
      <PaddedBox>
        <h2>More than a team.</h2>
        <p>
          When not heads-down designing and developing, we set time aside to create opportunities to
          bond through games and mentorship. We care about celebrate each other’s successes as well!
          As a student member at TSE, you gain valuable skills and a network of talented peers who
          share a drive to do good for the community.
        </p>
        <ArrowLink href="/students">Cool! How do I join?</ArrowLink>
      </PaddedBox>
      <PaddedBox center>
        <h2>We are always growing.</h2>
      </PaddedBox>
      <Container>
        <AboutTabs />
      </Container>
    </>
  );
}
