"use client";

import { ThemeProvider } from "@tritonse/tse-constellation";
import React from "react";

type ThemeContainerProps = {
  children: React.ReactNode;
};

export default function ThemeContainer({ children }: ThemeContainerProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
