import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  // Column layout: https://react-bootstrap.github.io/layout/grid/
  // List of links: https://react-bootstrap.github.io/components/navs/#vertical
  // Icons: https://react-icons.github.io/react-icons
  // return <footer>Footer placeholder</footer>;
  return(
    // <footer className="container">

    <Container fluid className="container-fluid">
      <Row>
        {/* GENERAL */}
        <Col>
        <h2>GENERAL</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Approach</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
        </Col>

        {/* GET INVOLVED */}
        <Col xs={7}>
        <h2>GET INVOLVED</h2>
        <ul>
          <li><a href="#">Students</a></li>
          <li><a href="#">Non Profits</a></li>
        </ul>
        </Col>

        {/* SOCIAL MEDIA */}
        <Col>
        <h2></h2>
        <ul id="icons">
          <li><a href="mailto:tse@ucsd.edu"><FaEnvelope/></a></li>
          <li><a href="https://facebook.com"><FaFacebook/></a></li>
          <li><a href="https://linkedin.com"><FaLinkedin/></a></li>
          <li><a href="https://linkedin.com"><FaGithub/></a></li>
          <li><a href="https://instagram.com/ucsd_tse"><FaInstagram/></a></li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}
