import React from "react";
import { Link } from "gatsby";

import PageContext from "./PageContext";
import DynamicImage from "./DynamicImage";

import "./AllProjects.css";

export default function AllProjects() {
  return (
    <PageContext.Consumer>
      {({ allProjects }) => (
        <div>
          <h2>Completed Projects</h2>
          <div className="container">
            <div className="row d-flex text-light">
              {allProjects.map(({ pathname, frontmatter: { title, subtitle, thumbnail } }) => (
                <div className="col-md-6 col-lg-4 mb-4">
                  <Link to={pathname} className="text-light" style={{ textDecoration: "none" }}>
                    <div className="imageContainer">
                      <DynamicImage
                        style={{ height: "100%" }}
                        imgStyle={{ objectFit: "contain" }}
                        paths={[thumbnail, "icons/tse-bulb"]}
                        alt="Project screenshot"
                      />
                    </div>
                    <div className="projectDescription mt-3 text-center">
                      <h3>{title}</h3>
                      {subtitle && <p className="mt-3">{subtitle}</p>}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageContext.Consumer>
  );
}
