import { GetStaticPropsContext } from "next";
import React from "react";

import { allProjects, ProjectName } from "../../data/projects";
import ProjectLayout from "../../layouts/ProjectLayout";
import { findOne } from "../../util";

interface ProjectPageProps {
  name: ProjectName;
}

export default function ProjectPage({ name }: ProjectPageProps) {
  const project = findOne(allProjects, { name });
  const Content = project.content;
  return (
    <ProjectLayout project={project}>
      <Content />
    </ProjectLayout>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: ProjectPageProps }> {
  const slug = context.params.slug as string;
  return {
    props: {
      name: findOne(allProjects, { slug }).name,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}
