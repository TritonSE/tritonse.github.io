import React from "react";
import Img from "gatsby-image";
import { gridify } from "../util/styling.js";
import "../styles/pages.css";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";

const Members = ({ data, members }) => {
  const priorities = {
    President: 0,
    "VP Operations": 1,
    "VP External": 2,
    "VP Technology": 3,
    "VP Projects": 4,
    "VP Design": 5,
    "Outreach Lead": 6,
    "Marketing Lead": 7,
    "Project Manager": 8,
    "UI/UX Designer": 9,
    Developer: 10
  };
  const elements = members
    .sort(
      (a, b) =>
        priorities[a.node.role] - priorities[b.node.role] ||
        a.node.name.localeCompare(b.node.name)
    )
    .map(value => (
      <div key={`${value.node.name}`} className="col l2 m4 s6 center">
        <div>
          <Img
            fluid={value.node.image.childImageSharp.fluid}
            className="tse-profile-image"
          ></Img>
        </div>
        <div className="tse-profile-name">
          <b>{value.node.name}</b>
        </div>
        <div className="tse-profile-role">{value.node.role}</div>
      </div>
    ));
  return <div>{gridify(elements, 6)}</div>;
};

export default Members;
