import React from "react";
import Container from "react-bootstrap/Container";

import ProfileCardGroup from "../../components/ProfileCardGroup";
import ProjectProfileCard from "../../components/ProjectProfileCard";
import { allProjects } from "../../data/projects";

export default function Projects() {
  return (
    <Container>
      <ProfileCardGroup
        profiles={allProjects.map((project, index) => (
          <ProjectProfileCard project={project} key={index} />
        ))}
      />
    </Container>
  );
}
