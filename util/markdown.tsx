import React from "react";
import ReactMarkdown from "react-markdown";

export default function markdown(template: TemplateStringsArray, ...expressions: unknown[]) {
  return <ReactMarkdown>{String.raw(template, expressions)}</ReactMarkdown>;
}
