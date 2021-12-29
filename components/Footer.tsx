import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

import styles from "./Footer.module.scss";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.heading}>{children}</h2>;
}

function FooterItem({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.indexOf(":") >= 0;
  const navLinkProps = { className: styles.link };
  return (
    <Nav.Item>
      {external ? (
        <Nav.Link href={href} {...navLinkProps}>
          {children}
        </Nav.Link>
      ) : (
        <Link href={href} passHref>
          <Nav.Link {...navLinkProps}>{children}</Nav.Link>
        </Link>
      )}
    </Nav.Item>
  );
}

function FooterIcon({ icon, href }: { icon: IconType; href: string }) {
  const IconClass = icon;
  return (
    <FooterItem href={href}>
      <IconClass size="2em" />
    </FooterItem>
  );
}

export default function Footer() {
  return (
    <Container className={styles.footer}>
      <Row>
        <Col xs={9} sm={11}>
          <Row>
            <Col className="mt-4" xs={12} md={5} lg={4} xl={3}>
              <FooterHeading>General</FooterHeading>
              <Nav className="flex-column">
                <FooterItem href="/">Home</FooterItem>
                <FooterItem href="/about">About Us</FooterItem>
                <FooterItem href="/approach">Our Approach</FooterItem>
                <FooterItem href="/projects">Projects</FooterItem>
              </Nav>
            </Col>
            <Col className="mt-4" xs={12} md={6} lg={5} xl={4}>
              <FooterHeading>Get Involved</FooterHeading>
              <Nav className="flex-column">
                <FooterItem href="/students">Students</FooterItem>
                <FooterItem href="/nonprofits">Nonprofits</FooterItem>
              </Nav>
            </Col>
            <Col xs={0} md />{" "}
            {/* Take up space to prevent the links in the second column from getting too long */}
          </Row>
        </Col>
        <Col className="mt-4" xs={3} sm={1}>
          <Nav className={`flex-column ${styles.iconNav}`}>
            <FooterIcon icon={FaEnvelope} href="mailto:tse@ucsd.edu" />
            <FooterIcon icon={FaFacebook} href="https://www.facebook.com/TritonSE" />
            <FooterIcon
              icon={FaLinkedin}
              href="https://www.linkedin.com/company/tritonsoftwareengineering"
            />
            <FooterIcon icon={FaGithub} href="https://github.com/TritonSE" />
            <FooterIcon icon={FaInstagram} href="https://instagram.com/ucsd_tse" />
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
