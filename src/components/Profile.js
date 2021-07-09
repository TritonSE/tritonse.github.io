import React from "react";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

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

// export default function Profile(
//   props /* { title, subtitles, linkedin, github, website, centered = false } */
// ) {
//   // Icons: https://react-icons.github.io/react-icons
//   return (
//     <div className="tab-card col-sm-3 p-2">
//       <img className="tab-image bg-secondary" />
//       <p className="font-weight-bold">{props.title}</p>
//       {props.subtitles.map((subtitle) => (
//         <p>{subtitle}</p>
//       ))}

//       {props.linkedin ? <AiFillLinkedin /> : ""}
//       {props.github ? <AiFillGithub /> : ""}
//       {props.website ? <FiGlobe /> : ""}
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
