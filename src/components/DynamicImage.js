import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { removeFileExtension } from "../util/strings";
import { deepCopy } from "../util/objects";

let images = null;

function initialize(data) {
  if (images !== null) {
    return;
  }

  images = {};
  for (const edge of data.allFile.edges) {
    const node = edge.node;
    images[removeFileExtension(node.relativePath)] = deepCopy(node.childImageSharp.gatsbyImageData);
  }
}

/**
 * Render an image from the images/ directory.
 * @param props
 * @param {string[]} props.paths Paths relative to images/ without the file
 * extension. The first image found will be used.
 * @param {string} props.alt Alt text.
 */
export default function DynamicImage({ paths, alt }) {
  initialize(
    useStaticQuery(graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `)
  );

  let image;
  for (const path of paths) {
    image = images[path];
    if (image !== undefined) {
      break;
    }
  }

  if (image === undefined) {
    throw new Error(`None of the following image paths exist: ${JSON.stringify(paths)}`);
  }

  return <GatsbyImage image={image} alt={alt} />;
}
