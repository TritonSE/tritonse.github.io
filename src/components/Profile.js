import React from "react";

/**
 * Display a profile picture, title, optional subtitles, and optional links.
 * @param props
 * @param {string} props.title
 * @param {string[]} props.subtitles
 * @param {{ github: ?string, linkedin: ?string, website: ?string }} props.socials
 * @param {?boolean} props.centered Whether to center the content instead of left aligning.
 */
export default function Profile({ title, subtitles, socials /* centered = false */ }) {
  // Icons: https://react-icons.github.io/react-icons
  return (
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
  );
}
