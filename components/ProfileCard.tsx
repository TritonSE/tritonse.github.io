import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";

type ProfileCardProps = {
  name: string;
  subtitles: string[];
  href?: string;
  children?: React.ReactNode;
};

export default function ProfileCard({ name, subtitles, href, children }: ProfileCardProps) {
  return (
    <Card className="m-3 mb-4" style={{ background: "rgba(0, 0, 0, 0)" }}>
      <div className="mb-3">{children}</div>
      <Card.Title style={{ fontWeight: 600 }}>{name}</Card.Title>
      {subtitles.map((subtitle, index) => (
        <Card.Text className="m-0" key={index}>
          {subtitle}
        </Card.Text>
      ))}
      {href !== undefined && (
        <Link href={href} className="stretched-link">
          Learn more
        </Link>
      )}
    </Card>
  );
}
ProfileCard.defaultProps = { href: undefined, children: undefined };
