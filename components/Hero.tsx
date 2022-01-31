import React from "react";
import { Container } from "react-bootstrap";

import ImageWithFallback from "./ImageWithFallback";

export default function Hero({ path, children }: { path: string; children: React.ReactNode }) {
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
      <Container className="py-5 fw-bold">{children}</Container>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -100,
          filter: "brightness(0.7)",
        }}
      >
        <ImageWithFallback paths={[path]} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
