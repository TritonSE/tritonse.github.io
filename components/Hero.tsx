import React from "react";
import Container from "react-bootstrap/Container";

import { ImageKey } from "../images";

import CustomImage from "./CustomImage";

export interface HeroProps {
  imageKey: ImageKey;
  children?: React.ReactNode;
}

export default function Hero({ imageKey, children }: HeroProps) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children && <Container className="py-5 fw-bold">{children}</Container>}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -100,
          filter: children ? "brightness(0.7)" : undefined,
        }}
      >
        <CustomImage imageKey={imageKey} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

Hero.defaultProps = { children: undefined };
