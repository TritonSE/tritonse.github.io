import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "./Footer.scss";

function FooterHeading({ children }) {
  return <h2 className="Footer__Heading">{children}</h2>;
}

function FooterItem({ to, href, children }) {
  return (
    <Nav.Item>
      {to === undefined ? (
        <Nav.Link href={href} className="Footer__Link">
          {children}
        </Nav.Link>
      ) : (
        <Link to={to} className="nav-link Footer__Link">
          {children}
        </Link>
      )}
    </Nav.Item>
  );
}

function FooterIcon({ icon, ...props }) {
  const IconClass = icon;
  return (
    <FooterItem {...props}>
      <IconClass size="2em" />
    </FooterItem>
  );
}

export default function Footer() {
  const iconSize = "2em";
  return (
    <Container className="Footer">
      <Row>
        <Col xs={9} sm={11}>
          <Row>
            <Col className="mt-4" xs={12} sm={5} md={4} lg={3} xxl={2}>
              <FooterHeading>General</FooterHeading>
              <Nav className="flex-column">
                <FooterItem to="/">Home</FooterItem>
                <FooterItem to="/about">About Us</FooterItem>
                <FooterItem to="/approach">Our Approach</FooterItem>
                <FooterItem to="/projects">Projects</FooterItem>
              </Nav>
            </Col>
            <Col className="mt-4" xs={12} sm={7} md={8} lg={9} xxl={10}>
              <FooterHeading>Get Involved</FooterHeading>
              <Nav className="flex-column">
                <FooterItem to="/students">Students</FooterItem>
                <FooterItem to="/nonprofits">Nonprofits</FooterItem>
              </Nav>
            </Col>
          </Row>
        </Col>
        <Col className="mt-4" xs={3} sm={1}>
          <Nav className="flex-column Footer__IconNav">
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
