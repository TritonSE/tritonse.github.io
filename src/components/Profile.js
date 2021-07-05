import React from "react";

import DynamicImage from "./DynamicImage";

/**
 * Display a profile picture, title, optional subtitles, and optional links.
 * @param props
 * @param {string[]} props.imagePaths
 * @param {string} props.title
 * @param {string[]} props.subtitles
 * @param {{ github: ?string, linkedin: ?string, website: ?string }} props.socials
 * @param {?boolean} props.centered Whether to center the content instead of left aligning.
 */
export default function Profile({ imagePaths, title, subtitles, socials /* centered = false */ }) {
  // Icons: https://react-icons.github.io/react-icons
  return (
    <div>
      <div style={{ maxWidth: "200px" }}>
        <DynamicImage paths={imagePaths} alt={title} />
      </div>
      <div>
        <strong>{title}</strong>
        {subtitles.length && (
          <ol>
            {subtitles.map((subtitle) => (
              <li>{subtitle}</li>
            ))}
          </ol>
        )}
        <ul>
          {Object.entries(socials).map(([key, value]) => (
            <li>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
