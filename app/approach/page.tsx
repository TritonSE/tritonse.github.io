"use client";

import React from "react";

import ApproachStage from "../../components/ApproachStage";
import GoldButton from "../../components/GoldButton";
import LogoBar from "../../components/LogoBar";
import PageContainer from "../../components/PageContainer";

import styles from "./approach.module.scss";

export default function Approach() {
  return (
    <PageContainer>
      <h1>Our Approach</h1>
      <h4>
        Learn more about our process with client projects, from initial contact with an organization
        all the way to product hand-off.
      </h4>
      <LogoBar />

      <div className={styles.stepsContainer}>
        <div className={styles.lineContainer}>
          <div className={styles.solidLine} />
          <div className={styles.triangleUp} />
          <div className={styles.dashedLine} />
          <div className={styles.triangleDown} />
        </div>

        <div className={styles.stepsColumn}>
          <ApproachStage
            stageNum={1}
            iconImageKey="icons/people"
            iconSizes={{
              desktop: {
                width: 69,
                height: 47,
              },
              tablet: {
                width: 58,
                height: 42,
              },
              mobile: {
                width: 34,
                height: 23,
              },
            }}
            title="Outreach/Onboarding"
            dates="May - August"
            description="We start by getting to know your organization, your mission, and your vision. Then, we brainstorm what TSE can build for you. Afterwards, a product manager will work closely with you to determine the direction of your project."
          />
          <ApproachStage
            stageNum={2}
            iconImageKey="icons/docs"
            iconSizes={{
              desktop: {
                width: 43,
                height: 47,
              },
              tablet: {
                width: 38,
                height: 42,
              },
              mobile: {
                width: 21,
                height: 24,
              },
            }}
            title="Requirements Drafting/Design"
            dates="September - December"
            description="Your product manager works with you to identify your priorities and requirements for an initial version of your product and puts it into writing. We assign designers to your project, who put together the visual blueprint of what the first version of your product will look like."
          />
          <ApproachStage
            stageNum={3}
            iconImageKey="icons/hammer"
            iconSizes={{
              desktop: {
                width: 55,
                height: 42,
              },
              tablet: {
                width: 43,
                height: 33,
              },
              mobile: {
                width: 31,
                height: 24,
              },
            }}
            title="Development"
            dates="January - June"
            description="Finally, the development team starts working! Led by their engineering manager, the developers will communicate closely with the designers to iteratively develop your product. We aim to have the final product in your hands by the end of the school year in June."
          />
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <h3>Want to get involved?</h3>
        <div className={styles.buttonsContainer}>
          <GoldButton href="/students" openInNewTab={false} className={styles.button}>
            Students
          </GoldButton>
          <GoldButton href="/nonprofits" openInNewTab={false} className={styles.button}>
            Nonprofits
          </GoldButton>
        </div>
      </div>
    </PageContainer>
  );
}
