import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects — Triton Software Engineering",
};
export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
