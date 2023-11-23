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
      {team.map(({ role, personIds }) => (
        <React.Fragment key={role}>
          <h3>{role + (personIds.length > 1 ? "s" : "")}</h3>
          <ProfileCardGroup
            profiles={personIds.map((id) => (
              <MemberProfileCard member={findOne(allPeople, { id })} roleLimit={0} key={id} />
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
