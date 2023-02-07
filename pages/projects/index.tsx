import React from "react";
import Container from "react-bootstrap/Container";

import AutomaticCarousel from "../../components/AutomaticCarousel";
import Hero from "../../components/Hero";
import PageTitle from "../../components/PageTitle";
import ProfileCardGroup from "../../components/ProfileCardGroup";
import ProjectProfileCard from "../../components/ProjectProfileCard";
import { allProjects } from "../../data/projects";
import markdown from "../../util/markdown";

export default function Projects() {
  return (
    <>
      <PageTitle title="Projects" />
      <AutomaticCarousel/>
      <Hero imageKey="content/photoshoot-marketing-17">
        {markdown`
# Projects

At Triton Software Engineering, we believe in keeping our work open source because we value transparency and connectivity.
        `}
        <a
          className="btn btn-dark fw-bold"
          href="https://github.com/TritonSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT GITHUB
        </a>
      </Hero>
      <Container>
        <ProfileCardGroup
          width={3}
          profiles={allProjects.map((project, index) => (
            <ProjectProfileCard project={project} key={index} />
          ))}
        />
      </Container>
    </>
  );
}
