"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";

import GoldButton from "../../components/GoldButton";
import LogoBar from "../../components/LogoBar";
import PageContainer from "../../components/PageContainer";
import ProfileCardGroup from "../../components/ProfileCardGroup";
import ProjectProfileCard from "../../components/ProjectProfileCard";
import { allProjectsWithContent } from "../../data/projects-content";

import styles from "./index.module.scss";

export default function Projects() {
  return (
    <PageContainer>
      <div className={styles.topRow}>
        <h1>Projects</h1>
        <GoldButton
          href="https://github.com/TritonSE"
          openInNewTab
          className={styles.iconButton}
          disableHoverEffect
        >
          <FaGithub className={styles.githubLogo} color="black" />
        </GoldButton>
      </div>
      <h4 className={styles.subtitle}>
        At TSE, we believe in keeping our work open source because we value transparency and
        connectivity.
      </h4>
      <GoldButton href="https://github.com/TritonSE" openInNewTab className={styles.visitButton}>
        Visit GitHub
      </GoldButton>
      <LogoBar />
      <div className={styles.spacer} />
      <ProfileCardGroup
        width={3}
        profiles={allProjectsWithContent.map((project, index) => (
          <ProjectProfileCard project={project} key={index} />
        ))}
      />
    </PageContainer>
  );
}
