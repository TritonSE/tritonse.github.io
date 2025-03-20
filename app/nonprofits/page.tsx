"use client";

import { Accordion } from "@tritonse/tse-constellation";
import React from "react";

import GoldButton from "../../components/GoldButton";
import ImageCard from "../../components/ImageCard";
import PageContainer from "../../components/PageContainer";
import ProfileCardGroup from "../../components/ProfileCardGroup";
import WhyTSECard from "../../components/WhyTSECard";

import styles from "./nonprofits.module.scss";

export default function Nonprofits() {
  return (
    <PageContainer>
      <div className={styles.topRow}>
        <div className={styles.imagesContainer}>
          <ImageCard
            imageKey="content/beach-photoshoot-women-in-tse"
            sizes={{
              mobile: {
                width: 121,
                height: 97,
              },
              tablet: {
                width: 215,
                height: 171,
              },
              desktop: {
                width: 345,
                height: 274,
              },
            }}
            rotationAngleDegrees={-5.04}
            className={styles.image1}
          />
          <ImageCard
            imageKey="content/beach-photoshoot-spayla"
            sizes={{
              mobile: {
                width: 126,
                height: 99,
              },
              tablet: {
                width: 224,
                height: 175,
              },
              desktop: {
                width: 359,
                height: 280,
              },
            }}
            rotationAngleDegrees={3.95}
            className={styles.image2}
          />
        </div>

        <div className={styles.topTextContainer}>
          <h1>Nonprofits</h1>
          <h4 className={styles.boldText}>
            Partner with Triton Software Engineering and we will work{" "}
            <span className={styles.goldText}>hand-in-hand</span> with you to develop the technology
            that will turn your <span className={styles.goldText}>vision</span> into a reality{" "}
            <span className={styles.goldText}>free of cost</span>.
          </h4>

          <GoldButton
            className={styles.contactButton}
            href="mailto:tse@ucsd.edu"
            openInNewTab={false}
          >
            Contact Us
          </GoldButton>
        </div>
      </div>

      <h2>Why work with TSE?</h2>
      <div className={styles.whyCardsContainer}>
        <ProfileCardGroup
          profiles={[
            <WhyTSECard
              imageKey="icons/computer"
              imageSizes={{
                mobile: {
                  width: 87,
                  height: 75,
                },
                tablet: {
                  width: 78,
                  height: 67,
                },
                desktop: {
                  width: 148,
                  height: 128,
                },
              }}
              title="Free Services"
              content="Access high-quality web and technical development services at no cost."
              key={0}
            />,
            <WhyTSECard
              imageKey="icons/gears"
              imageSizes={{
                mobile: {
                  width: 80,
                  height: 78,
                },
                tablet: {
                  width: 78,
                  height: 76,
                },
                desktop: {
                  width: 167,
                  height: 162,
                },
              }}
              title="Expertise and Skills"
              content="Benefit from dedicated students' skills in web development/design, and software engineering."
              key={1}
            />,
            <WhyTSECard
              imageKey="icons/connect"
              imageSizes={{
                mobile: {
                  width: 63,
                  height: 72,
                },
                tablet: {
                  width: 70,
                  height: 79,
                },
                desktop: {
                  width: 136,
                  height: 154,
                },
              }}
              title="Connect"
              content="Establish your brand name and relationship with TSE and expose our students to new opportunities"
              key={2}
            />,
          ]}
        />
      </div>

      <h2>What to expect</h2>
      <h4>
        At Triton Software Engineering, we understand that nonprofit organizations are a valuable
        asset to our community. We want to use our software and web development skills to help
        nonprofits. Our collaborations with nonprofits are about 1 year long.
      </h4>

      <div className={styles.timelineColumn}>
        <div className={styles.timelineLabelsTopRow}>
          <h4 className={styles.timelineLabel}>Onboarding</h4>
          <h4 className={styles.timelineLabel}>Drafting</h4>
        </div>
        <div className={styles.timeline}>
          <div className={styles.whiteCircle} />
          <div className={styles.whiteCircle} />
          <div className={styles.whiteCircle} />
          <div className={styles.whiteCircle} />
          <div className={styles.whiteCircle} />
        </div>
        <div className={styles.timelineLabelsBottomRow}>
          <h4 className={styles.timelineLabel} style={{ textAlign: "start" }}>
            Outreach
          </h4>
          <h4 className={styles.timelineLabel}>Design</h4>
          <h4 className={styles.timelineLabel} style={{ textAlign: "end" }}>
            Development
          </h4>
        </div>
      </div>

      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <Accordion
        items={[
          {
            header: "How are TSE projects structured?",
            content: (
              <p>
                TSE&apos;s structure consists of our board and 6 project-based teams. Each project
                team is made up of an engineering manager, a product manager, 6 developers, and 2-3
                designers. Teams work independently of one another to create software for the
                nonprofit organization that they have been assigned to.
              </p>
            ),
          },
          {
            header: "What resources does TSE have to ensure success?",
            content: (
              <p>
                Our organization recruits some of the most hard-working, passionate, and brightest
                students at UC San Diego. Through effective leadership, frequent check-ins, and
                organized project timelines set with our clients and board, we ensure that our
                combination of talent, dedication, and care will result in the best projects we are
                capable of.
              </p>
            ),
          },
        ]}
        hideControls
        disableHoverEffect
        borderColor="white"
        className={styles.accordion}
      />

      <h2>Interested in working with us?</h2>
      <p>
        Get in touch with us by emailing <a href="mailto:tse@ucsd.edu">tse@ucsd.edu</a>.
        <br /> <br />
        We will work with you to deliver a solution that satisfies your needs.
      </p>
    </PageContainer>
  );
}
