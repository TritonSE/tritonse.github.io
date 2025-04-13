"use client";

import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BsNavbar from "react-bootstrap/Navbar";

import CustomImage from "./CustomImage";
import styles from "./Navbar.module.scss";

function NavbarItem({
  href,
  children,
  isBold,
}: {
  href: string;
  children: React.ReactNode;
  isBold: boolean;
}) {
  return (
    <Nav.Item as="li">
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className={classNames(styles.text, isBold ? styles.textBold : "")}>
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
}

export default function Navbar() {
  return (
    <BsNavbar expand="sm" bg="dark" variant="dark" className={styles.root}>
      {/* <Container> */}
      <BsNavbar.Brand className="py-0">
        <Link href="/" passHref legacyBehavior>
          <a style={{ position: "relative", top: "3px" }}>
            {/* Make image smaller on smaller screens - this is kind of a hack, but it works */}
            <div className="d-none d-lg-flex">
              <CustomImage imageKey="icons/tse-bulb" alt="Logo" width={50} height={50} />
            </div>
            <div className="d-lg-none">
              <CustomImage imageKey="icons/tse-bulb" alt="Logo" width={30} height={30} />
            </div>
          </a>
        </Link>
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="navbar" className={styles.expandButton} />
      <BsNavbar.Collapse id="navbar" className="justify-content-start w-100">
        <Nav as="ul" className={styles.navList}>
          <NavbarItem href="/" isBold>
            Triton Software Engineering
          </NavbarItem>
          <Container className="w-100" />
          <NavbarItem href="/about" isBold={false}>
            About
          </NavbarItem>
          <NavbarItem href="/approach" isBold={false}>
            Our Approach
          </NavbarItem>
          <NavbarItem href="/projects" isBold={false}>
            Projects
          </NavbarItem>
          <NavbarItem href="/students" isBold={false}>
            Students
          </NavbarItem>
          <NavbarItem href="/nonprofits" isBold={false}>
            Nonprofits
          </NavbarItem>
        </Nav>
      </BsNavbar.Collapse>
      {/* </Container> */}
    </BsNavbar>
  );
}
