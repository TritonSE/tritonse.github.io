"use client";

import React from "react";

import { allProjectsWithContent } from "../data/projects-content";
import ProjectLayout from "../layouts/ProjectLayout";
import { findOne } from "../util";

export default function ProjectPage({ slug }: { slug: string }) {
  const project = findOne(allProjectsWithContent, { slug });
  const Content = project.content;
  return (
    <ProjectLayout project={project}>
      <Content />
    </ProjectLayout>
  );
}
