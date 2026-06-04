"use client";

import React from "react";
import Container from "react-bootstrap/Container";

import GoldButton from "../../components/GoldButton";
import Logos from "../../components/Logos";
import PaddedBox from "../../components/PaddedBox";
import { ORG_EMAIL } from "../../data/contact";
import { allSponsors } from "../../data/sponsors";
import { firstValidImageKey } from "../../images";
import { makeSlug } from "../../util";

export default function Sponsorship() {
  return (
    <>
      <PaddedBox heading="Sponsor & Donate">
        <h4>
          Your support helps Triton Software Engineering continue crafting digital solutions for
          nonprofit organizations in our community. We always appreciate any donations, no matter
          how big or small, since they help us continue working on impactful projects.
        </h4>
        <br />
        <br />
        <h4>
          To learn more about how to donate, email us at{" "}
          <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a>.
        </h4>
        <Container style={{ marginTop: "1.5em" }}>
          <GoldButton href={`mailto:${ORG_EMAIL}`} openInNewTab={false}>
            Get in Touch
          </GoldButton>
        </Container>
      </PaddedBox>
      <PaddedBox backgroundColor="#F8F8F8" className="text-black" heading="Corporate Sponsorships">
        <h4>
          Interested in partnering with TSE? Corporate sponsors enjoy a range of benefits,
          including:
        </h4>
        <ul style={{ marginTop: "1em" }}>
          <li>Being featured on our website</li>
          <li>Access to TSE members&apos; resumes</li>
          <li>Host a company event at UCSD to connect with students for jobs and internships</li>
        </ul>
        <h4>
          Reach out to{" "}
          <a style={{ color: "black" }} href={`mailto:${ORG_EMAIL}`}>
            {ORG_EMAIL}
          </a>{" "}
          for more information.
        </h4>
      </PaddedBox>
      <PaddedBox backgroundColor="#FFFFFF" className="text-black" heading="Past Sponsors">
        <Logos
          logos={allSponsors.map((sponsor) => ({
            imageKey: firstValidImageKey(`sponsors/${makeSlug(sponsor.name)}`),
            url: sponsor.url,
          }))}
        />
      </PaddedBox>
    </>
  );
}
