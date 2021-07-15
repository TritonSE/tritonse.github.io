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

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

/**
 * @param props
 * @param {{ url: string, title: string }[]} props.items Items in the table of contents.
 */
export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);

  return (
    <div className="tableOfContentsWrapper">
      <Nav className="flex-column">
        <Headings headings={items} activeId={activeId} />
      </Nav>
    </div>
  );
}
