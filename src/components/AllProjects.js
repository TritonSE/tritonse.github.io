import React from "react";
import PageContext from "./PageContext";
import DynamicImage from "./DynamicImage";

export default function AllProjects() {
  return (
    <PageContext.Consumer>
      {({ allProjects }) => (
        <div>
          {allProjects.map(({ frontmatter: { title, subtitle, thumbnail } }) => (
            <div>
              <DynamicImage paths={[thumbnail || "icons/tse-bulb"]} alt="Project screenshot" />
              <h3>{title}</h3>
              {subtitle && <p>{subtitle}</p>}
            </div>
          ))}
        </div>
      )}
    </PageContext.Consumer>
  );
}
