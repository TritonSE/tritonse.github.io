import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import Nav from "react-bootstrap/Nav";

import "./TableOfContents.scss";

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
    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <Nav as="ul" className="flex-column TableOfContents">
      {items.map((item) => (
        <Nav.Item as="li" key={item.url}>
          <Nav.Link
            href={item.url}
            className={classNames({
              TableOfContents__Link: true,
              "TableOfContents__Link--active": item.url.slice(1) === activeId,
            })}
          >
            {item.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
