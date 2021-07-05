import React from "react";
import DynamicImage from "./DynamicImage";

/**
 * Render a full-width banner image, with text and buttons on top.
 * @param props
 * @param {string} props.imagePath
 * @param {string} props.title
 * @param {string} props.description
 * @param {?{ text: string, url: string }[]} props.links Links to display as buttons.
 * @param {?boolean} props.centered Whether the text and buttons should be centered.
 */
export default function Hero({ imagePath, title, description, links = [], centered = false }) {
  return (
    <div>
      <p>Hero placeholder begins here</p>
      <DynamicImage paths={[imagePath]} />
      <h1>{title}</h1>
      <p>{description}</p>
      {links.length > 0 && (
        <ol>
          {links.map(({ text, url }) => (
            <li>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ol>
      )}
      <p>{centered ? "This should be centered" : "This should not be centered"}</p>
      <p>Hero placeholder ends here</p>
    </div>
  );
}
