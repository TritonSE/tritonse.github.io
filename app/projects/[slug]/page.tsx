import React from "react";

import ProjectPage from "../../../components/ProjectPage";
import { allProjects } from "../../../data/projects";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ProjectPage slug={(await params).slug} />;
}

export const generateStaticParams = async () =>
  allProjects.map((project) => ({
    slug: project.slug,
  }));
