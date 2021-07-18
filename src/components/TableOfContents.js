import React, { useState, useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import "./TableOfContents.css";

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <Nav.Link
        className={`tableOfContentsItem${
          heading.url.replace("#", "") === activeId ? " tableOfContentsItemActive" : ""
        }`}
        href={heading.url}
      >
        {heading.title}
      </Nav.Link>
    ))}
  </ul>
);

/**
 * @param props
 * @param {{ url: string, title: string }[]} props.items Items in the table of contents.
 */
export default function TableOfContents({ items }) {
  const ids = items.map((item) => item.url.slice(1));
  const [activeId, setActiveId] = useState();
  const isVisible = useRef(ids.map(() => false));

  function observerCallback(entries) {
    for (const entry of entries) {
      isVisible.current[ids.indexOf(entry.target.id)] = entry.isIntersecting;
    }

    // Set the topmost intersecting heading to active, or do nothing if no headings are visible.
    for (let i = ids.length - 1; i >= 0; i--) {
      if (isVisible.current[i]) {
        setActiveId(ids[i]);
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { rootMargin: "0px 0px -40% 0px" });
    ids.forEach((id) => observer.observe(document.getElementById(id)));
    return observer.disconnect;
  }, [items]);

  return (
    <div className="tableOfContentsWrapper">
      <Nav className="flex-column">
        <Headings headings={items} activeId={activeId} />
      </Nav>
    </div>
  );
}
