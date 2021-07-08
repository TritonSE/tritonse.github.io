import React from "react";
import { Link } from "gatsby";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { StaticImage } from "gatsby-plugin-image"

export default function NavbarT() {
  // Refer to: https://react-bootstrap.github.io/components/navbar/
  return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"> <StaticImage src="../images/icons/tse-bulb.png" alt="Logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="mr-auto">
            <Navbar.Link href="/about">About Us</Navbar.Link>
            <Navbar.Link href="/approach">Our Approach</Navbar.Link>
            <Navbar.Link href="/projects">Projects</Navbar.Link>
            <Navbar.Link href="/students">For Students</Navbar.Link>
            <Navbar.Link href="/nonprofits">For Nonprofits</Navbar.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
