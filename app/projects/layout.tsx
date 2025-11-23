import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Projects — Triton Software Engineering",
};
export default async function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
