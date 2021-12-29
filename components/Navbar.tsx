import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BsNavbar from "react-bootstrap/Navbar";
import logo from "../public/images/icons/tse-bulb.png";

function NavbarItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Nav.Item as="li">
      <Link href={href} passHref>
        <Nav.Link className="px-3">{children}</Nav.Link>
      </Link>
    </Nav.Item>
  );
}

export default function Navbar() {
  return (
    <BsNavbar expand="lg" bg="dark" variant="dark">
      <Container>
        <BsNavbar.Brand className="py-0">
          <Link href="/" passHref>
            <a style={{ position: "relative", top: "3px" }}>
              <Image src={logo} alt="Logo" width={50} height={50} />
            </a>
          </Link>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar" />
        <BsNavbar.Collapse id="navbar" className="justify-content-end">
          <Nav as="ul">
            <NavbarItem href="/about">About Us</NavbarItem>
            <NavbarItem href="/approach">Our Approach</NavbarItem>
            <NavbarItem href="/projects">Projects</NavbarItem>
            <NavbarItem href="/students">For Students</NavbarItem>
            <NavbarItem href="/nonprofits">For Nonprofits</NavbarItem>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
