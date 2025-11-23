"use client";

import classNames from "classnames";
import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.scss";
import ResponsiveImage from "./ResponsiveImage";

import type { IconType } from "react-icons";

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
          <FooterIcon icon={FaInstagram} href="https://instagram.com/tse.atucsd" />
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
