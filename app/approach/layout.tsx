import { Metadata } from "next";
import React from "react";

import Page from "./page";

export const metadata: Metadata = {
  title: "Our Approach — Triton Software Engineering",
};
export default function PageLayout() {
  return <Page />;
}
