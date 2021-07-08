import React from "react";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

/**
 * Display a profile picture, title, optional subtitles, and optional links.
 * @param props
 * @param {string} props.title
 * @param {string[]} props.subtitles
 * @param {?string} props.linkedin LinkedIn username.
 * @param {?string} props.github GitHub username.
 * @param {?string} props.website Website URL.
 * @param {boolean} props.centered Whether to center the content instead of left aligning.
 */
export default function Profile(
  props /* { title, subtitles, linkedin, github, website, centered = false } */
) {
  // Icons: https://react-icons.github.io/react-icons
  return (
    <div className="tab-card col-sm-3 p-2">
      <img className="tab-image bg-secondary" />
      <p className="font-weight-bold">{props.title}</p>
      {props.subtitles.map((subtitle) => (
        <p>{subtitle}</p>
      ))}

      {props.linkedin ? <AiFillLinkedin /> : ""}
      {props.github ? <AiFillGithub /> : ""}
      {props.website ? <FiGlobe /> : ""}
    </div>
  );
}
