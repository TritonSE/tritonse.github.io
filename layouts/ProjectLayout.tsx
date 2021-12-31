import React from "react";

import MemberProfileCard from "../components/MemberProfileCard";
import ProfileCardGroup from "../components/ProfileCardGroup";
import { allPeople } from "../data/people";
import { Project, ProjectTeam } from "../data/projects";
import { findOne } from "../util";

import PlainLayout from "./PlainLayout";

function TeamProfiles({ team }: { team: ProjectTeam }) {
  return (
    <>
      {team.map(({ role, names }) => (
        <React.Fragment key={role}>
          <h3>{role + (names.length > 1 ? "s" : "")}</h3>
          <ProfileCardGroup
            profiles={names.map((name) => (
              <MemberProfileCard member={findOne(allPeople, { name })} roleLimit={0} key={name} />
            ))}
          />
        </React.Fragment>
      ))}
    </>
  );
}

interface ProjectLayoutProps {
  project: Project;
  children: React.ReactNode;
}

export default function ProjectLayout({ project, children }: ProjectLayoutProps) {
  return (
    <PlainLayout metadata={{ title: project.name, subtitle: project.description }}>
      {children}
      <h2>Meet the Team</h2>
      <TeamProfiles team={project.team} />
    </PlainLayout>
  );
}
