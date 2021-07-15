import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { StaticImage } from "gatsby-plugin-image";
import "./NavbarT.css";

export default function NavbarT() {
  // Refer to: https://react-bootstrap.github.io/components/navbar/
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <StaticImage src="../images/icons/tse-bulb.png" alt="Logo" height={47} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar" />
      <Navbar.Collapse id="responsive-navbar">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/approach">Our Approach</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/students">For Students</Nav.Link>
          <Nav.Link href="/nonprofits">For Nonprofits</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
