import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  // Refer to: https://react-bootstrap.github.io/components/navbar/
  return (
    <>
      Navbar placeholder
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/approach">Our Approach</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/students">For Students</Link>
        </li>
        <li>
          <Link to="/nonprofits">For Nonprofits</Link>
        </li>
      </ol>
    </>
  );
}
