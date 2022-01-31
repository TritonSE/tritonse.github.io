import React from "react";
import Container from "react-bootstrap/Container";

import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";

export interface PlainMetadata {
  title: string;
  subtitle?: string;
  heroImage?: string;
}

export default function PlainLayout({
  metadata: { title, subtitle, heroImage },
  children,
}: {
  metadata: PlainMetadata;
  children: React.ReactNode;
}) {
  const headerContents = (
    <>
      <h1>{title}</h1>
      {subtitle && <p>{heroImage ? subtitle : <em>{subtitle}</em>}</p>}
    </>
  );
  return (
    <>
      <PageTitle title={title} />
      {heroImage && <Hero path={heroImage}>{headerContents}</Hero>}
      <Container className="mt-5">
        {!heroImage && <header>{headerContents}</header>}
        {children}
      </Container>
    </>
  );
}
