import React from "react";

/**
 * @param props
 * @param {{ url: string, title: string }[]} props.items Items in the table of contents.
 */
export default function TableOfContents({ items }) {
  // List of links: https://react-bootstrap.github.io/components/navs/#vertical
  return (
    <ol>
      Table of contents placeholder
      {items.map(({ url, title }) => (
        <li>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ol>
  );
}
