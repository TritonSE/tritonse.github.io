import React from "react";
import { Link } from "gatsby";
import Navbar from 'react-bootstrap/Navbar'
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  // Refer to: https://react-bootstrap.github.io/components/navbar/
  return (
    <>
      Navbar placeholder
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"> <StaticImage src="../images/icons/tse-bulb.png" alt="Logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Collapse id="responsive-navbar">
          <Navbar className="mr-auto">
            <Navbar.Link href="/about">About Us</Navbar.Link>
            <Navbar.Link href="/approach">Our Approach</Navbar.Link>
            <Navbar.Link href="/projects">Projects</Navbar.Link>
            <Navbar.Link href="/students">For Students</Navbar.Link>
            <Navbar.Link href="/nonprofits">For Nonprofits</Navbar.Link>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
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
