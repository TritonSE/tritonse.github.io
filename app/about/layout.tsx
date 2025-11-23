import React from "react";

import Page from "./page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Triton Software Engineering",
};
export default function PageLayout() {
  return <Page />;
}
