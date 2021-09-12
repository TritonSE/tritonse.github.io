import React from "react";
import PageContext from "./PageContext";
import DynamicImage from "./DynamicImage";

import "./AllProjects.css";

export default function AllProjects() {
  const dynamicImageProp = {
    height: "100%",
  };

  return (
    <PageContext.Consumer>
      {({ allProjects }) => (
        <div>
          <h2>Completed Projects</h2>
          <div className="container">
            <div className="row d-flex text-light">
              {allProjects.map(({ frontmatter: { title, subtitle, thumbnail } }) => (
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="imageContainer">
                    <DynamicImage
                      style={dynamicImageProp}
                      imgStyle={{ objectFit: "contain" }}
                      paths={[thumbnail, "icons/tse-bulb"]}
                      alt="Project screenshot"
                    />
                  </div>

                  <div className="projectDescription mt-3 text-center">
                    <h3>{title}</h3>
                    {subtitle && <p className="mt-3">{subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageContext.Consumer>
  );
}
