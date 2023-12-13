import classNames from "classnames";
import React from "react";
import Container from "react-bootstrap/Container";

import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import { ImageKey } from "../images";

import styles from "./PlainLayout.module.scss";

export type PlainMetadata = {
  title: string;
  subtitle?: string;
  heroImage?: ImageKey;
};

export type PlainLayoutProps = {
  metadata: PlainMetadata;
  children: React.ReactNode;
};

export default function PlainLayout({
  metadata: { title, subtitle, heroImage },
  children,
}: PlainLayoutProps) {
  const headerContents = (
    <>
      <h1>{title}</h1>
      {subtitle && <p>{heroImage ? subtitle : <em>{subtitle}</em>}</p>}
    </>
  );
  return (
    <>
      <PageTitle title={title} />
      {heroImage && <Hero imageKey={heroImage}>{headerContents}</Hero>}
      <Container className={classNames("mt-5", styles.markdownRoot)}>
        {!heroImage && <header>{headerContents}</header>}
        {children}
      </Container>
    </>
  );
}
