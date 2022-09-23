import React from "react";
import ReactMarkdown from "react-markdown";

export default function markdown(template: TemplateStringsArray, ...expressions: unknown[]) {
  const markdownSource = String.raw(template, ...expressions);
  return <ReactMarkdown>{markdownSource}</ReactMarkdown>;
}
