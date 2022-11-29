import Head from "next/head";
import React from "react";

export interface PageTitleProps {
  title?: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <Head>
      <title>{(title ? title + " — " : "") + "Triton Software Engineering"}</title>
    </Head>
  );
}

PageTitle.defaultProps = { title: undefined };
