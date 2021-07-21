import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { StaticImage } from "gatsby-plugin-image";
import "./NavbarT.css"; // temp file for when additional css is added for transparency

export default function NavbarT() {
  // Refer to: https://react-bootstrap.github.io/components/navbar/
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <StaticImage src="../images/icons/tse-bulb.png" alt="Logo" height={47} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar" />
      <Navbar.Collapse id="responsive-navbar">
        <Nav className="mr-auto" as="ul">
          <Nav.Item as="li">
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/approach" className="nav-link">
              Our Approach
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/students" className="nav-link">
              For Students
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/nonprofits" className="nav-link">
              For Nonprofits
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
