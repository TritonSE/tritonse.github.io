import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  // Column layout: https://react-bootstrap.github.io/layout/grid/
  // List of links: https://react-bootstrap.github.io/components/navs/#vertical
  // Icons: https://react-icons.github.io/react-icons
  // return <footer>Footer placeholder</footer>;
  return (
    // <footer className="container">

    <Container fluid className="container-fluid">
      <Row>
        {/* GENERAL */}
        <Col>
          <h2>GENERAL</h2>
          <Nav className="flex-column">
            <Nav.Link bsPrefix="link">Home</Nav.Link>
            <Nav.Link bsPrefix="link">About Us</Nav.Link>
            <Nav.Link bsPrefix="link">Our Approach</Nav.Link>
            <Nav.Link bsPrefix="link">Projects</Nav.Link>
          </Nav>
        </Col>

        {/* GET INVOLVED */}
        <Col xs={7}>
          <h2>GET INVOLVED</h2>
          <Nav className="flex-column">
            <Nav.Link bsPrefix="link">Students</Nav.Link>
            <Nav.Link bsPrefix="link">Non Profits</Nav.Link>
          </Nav>
        </Col>

        {/* SOCIAL MEDIA */}
        <Col>
          <h2 />
          <Nav className="flex-column">
            <Nav.Link bsPrefix="link" href="mailto:tse@ucsd.edu">
              <FaEnvelope />
            </Nav.Link>
            <Nav.Link bsPrefix="link" href="https://facebook.com">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link bsPrefix="link" href="https://linkedin.com">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link bsPrefix="link" href="https://github.com">
              <FaGithub />
            </Nav.Link>
            <Nav.Link bsPrefix="link" href="https://instagram.com/ucsd_tse">
              <FaInstagram />
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
