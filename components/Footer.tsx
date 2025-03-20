"use client";

import classNames from "classnames";
import React from "react";
import type { IconType } from "react-icons";
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.scss";
import ResponsiveImage from "./ResponsiveImage";

function FooterIcon({ icon, href }: { icon: IconType; href: string }) {
  const IconClass = icon;
  return (
    <a href={href}>
      <IconClass className={styles.icon} />
    </a>
  );
}

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ResponsiveImage
        className={styles.logo}
        imageKey="icons/tse-bulb"
        sizes={{
          desktop: {
            width: 70,
            height: 70,
          },
          tablet: {
            width: 36,
            height: 36,
          },
          mobile: {
            width: 0,
            height: 0,
          },
        }}
      />
      <div className={styles.column}>
        <p className={styles.goldText}>Triton Software Engineering</p>
        <div className={styles.iconsRow}>
          <FooterIcon icon={FaEnvelope} href="mailto:tse@ucsd.edu" />
          <FooterIcon
            icon={FaLinkedin}
            href="https://www.linkedin.com/company/tritonsoftwareengineering"
          />
          <FooterIcon icon={FaInstagram} href="https://instagram.com/ucsd_tse" />
          <FooterIcon icon={FaFacebook} href="https://www.facebook.com/TritonSE" />
          <FooterIcon icon={FaGithub} href="https://github.com/TritonSE" />
        </div>
      </div>
      <div className={classNames(styles.column, styles.rightColumn)}>
        <p className={styles.goldText}>Contact Us</p>
        <p className={styles.whiteText}>
          For all inquiries, please contact us at <a href="mailto:tse@ucsd.edu">tse@ucsd.edu</a>
        </p>
      </div>
    </div>
  );
}

/*
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
*/
