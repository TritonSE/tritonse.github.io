import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BsNavbar from "react-bootstrap/Navbar";

function NavbarItem({ to, children }) {
  return (
    <Nav.Item as="li">
      <Link to={to} className="nav-link px-3">
        {children}
      </Link>
    </Nav.Item>
  );
}

export default function Navbar() {
  return (
    <BsNavbar expand="lg" bg="dark" variant="dark">
      <Container>
        <BsNavbar.Brand>
          <Link to="/">
            <StaticImage src="../images/icons/tse-bulb.png" alt="Logo" height={47} />
          </Link>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar" />
        <BsNavbar.Collapse id="navbar" className="justify-content-end">
          <Nav as="ul">
            <NavbarItem to="/about">About Us</NavbarItem>
            <NavbarItem to="/approach">Our Approach</NavbarItem>
            <NavbarItem to="/projects">Projects</NavbarItem>
            <NavbarItem to="/students">For Students</NavbarItem>
            <NavbarItem to="/nonprofits">For Nonprofits</NavbarItem>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
