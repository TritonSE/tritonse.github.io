import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

import DynamicImage from "./DynamicImage";
import "./Profile.css";

const LINKEDIN_PREFIX = "https://www.linkedin.com/in/";
const GITHUB_PREFIX = "https://github.com/";

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
    <div className="tab-card col-sm-6 col-md-3 py-2 px-4 mt-5">
      <div className="profile-image">
        <DynamicImage paths={imagePaths} alt={title} />
      </div>

      <div className="profile-description">
        <strong>{title}</strong>
        {subtitles.length && (
          <ol className="roles-text">
            {subtitles.map((subtitle) => (
              <li>{subtitle}</li>
            ))}
          </ol>
        )}
        <div className="socials-container">
          {Object.entries(socials).map(([key, value]) => {
            switch (key) {
              case "github":
                return (
                  <a target="_blank" href={GITHUB_PREFIX + value} rel="noreferrer">
                    <AiFillGithub />
                  </a>
                );

              case "linkedin":
                return (
                  <a target="_blank" href={LINKEDIN_PREFIX + value} rel="noreferrer">
                    <AiFillLinkedin />
                  </a>
                );

              case "website":
                return (
                  <a target="_blank" href={value} rel="noreferrer">
                    <FiGlobe />
                  </a>
                );
              default:
                throw new Error("Unrecognized social type: " + key);
            }
          })}
        </div>
      </div>
    </div>
  );
}
