import React from "react";

import MemberProfileCard from "../components/MemberProfileCard";
import ProfileCardGroup from "../components/ProfileCardGroup";
import { getPersonByName } from "../data/people";
import { getProjectByName, ProjectName, ProjectTeam } from "../data/projects";

import type { PlainMetadata } from "./PlainLayout";
import PlainLayout from "./PlainLayout";

function TeamProfiles({ team }: { team: ProjectTeam }) {
  return (
    <>
      {team.map(({ role, names }) => (
        <React.Fragment key={role}>
          <h3>{role}</h3>
          <ProfileCardGroup
            profiles={names.map((name) => (
              <MemberProfileCard member={getPersonByName(name)} roleLimit={0} key={name} />
            ))}
          />
        </React.Fragment>
      ))}
    </>
  );
}

export default function ProjectLayout({
  name,
  children,
}: {
  name: ProjectName;
  children: React.ReactNode;
}) {
  const project = getProjectByName(name);
  return (
    <PlainLayout metadata={{ title: project.name, subtitle: project.description }}>
      {children}
      <h2>Meet the Team</h2>
      <TeamProfiles team={project.team} />
    </PlainLayout>
  );
}

export function makeProjectPage(name: ProjectName, Content: (props: any) => JSX.Element) {
  return function ProjectPage() {
    return (
      <ProjectLayout name={name}>
        <Content />
      </ProjectLayout>
    );
  };
}
