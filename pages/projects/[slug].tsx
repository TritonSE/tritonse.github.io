import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { allProjects } from "../../data/projects";
import ProjectLayout from "../../layouts/ProjectLayout";
import { findOne } from "../../util";

export default function ProjectPage({ slug }: { slug: string }) {
  const project = findOne(allProjects, { slug });
  const Content = project.content;
  return (
    <ProjectLayout project={project}>
      <Content />
    </ProjectLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allProjects.map((project) => ({
    params: { slug: project.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params === undefined || typeof context.params.slug !== "string") {
    throw new Error("Invalid context params");
  }
  return {
    props: {
      slug: context.params.slug,
    },
  };
};
