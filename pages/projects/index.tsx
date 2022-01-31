import React from "react";
import Container from "react-bootstrap/Container";

import Hero from "../../components/Hero";
import ProfileCardGroup from "../../components/ProfileCardGroup";
import ProjectProfileCard from "../../components/ProjectProfileCard";
import { allProjects } from "../../data/projects";

export default function Projects() {
  return (
    <>
      <Hero path="content/photoshoot-marketing-17">
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet</p>
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
          profiles={allProjects.map((project) => (
            <ProjectProfileCard project={project} key={project.name} />
          ))}
        />
      </Container>
    </>
  );
}
