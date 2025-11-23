import classNames from "classnames";
import React from "react";
import Container from "react-bootstrap/Container";

import Hero from "../components/Hero";

import styles from "./PlainLayout.module.scss";

import type { ImageKey } from "../images";

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
      {heroImage && <Hero imageKey={heroImage}>{headerContents}</Hero>}
      <Container className={classNames("mt-5", styles.markdownRoot)}>
        {!heroImage && <header>{headerContents}</header>}
        {children}
      </Container>
    </>
  );
}
