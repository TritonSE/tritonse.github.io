import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";

import ImageWithFallback from "./ImageWithFallback";
import type { ImageWithFallbackProps } from "./ImageWithFallback";

interface ProfileCardProps {
  name: string;
  subtitles: string[];
  imageProps: ImageWithFallbackProps;
  href?: string;
}

export default function ProfileCard({ name, subtitles, imageProps, href }: ProfileCardProps) {
  return (
    <Card className="m-3 mb-5" style={{ background: "rgba(0, 0, 0, 0)" }}>
      <div className="mb-3">
        <ImageWithFallback
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
          {...imageProps}
        />
      </div>
      <Card.Title style={{ fontWeight: 600 }}>{name}</Card.Title>
      {subtitles.map((subtitle, index) => (
        <Card.Text className="m-0" key={index}>
          {subtitle}
        </Card.Text>
      ))}
      {href !== undefined && (
        <Link href={href}>
          <a className="stretched-link">Learn more</a>
        </Link>
      )}
    </Card>
  );
}
ProfileCard.defaultProps = { href: undefined };
