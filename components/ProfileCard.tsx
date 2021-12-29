import Card from "react-bootstrap/Card";

import ImageWithFallback, { ImageWithFallbackProps } from "./ImageWithFallback";

export default function ProfileCard({
  name,
  subtitles,
  imageProps,
}: {
  name: string;
  subtitles: string[];
  imageProps: ImageWithFallbackProps;
}) {
  return (
    <Card className="m-3 mb-5" style={{ background: "rgba(0, 0, 0, 0)" }}>
      <div className="mb-3">
        <ImageWithFallback width={500} height={500} layout="responsive" {...imageProps} />
      </div>
      <Card.Title style={{ fontWeight: 600 }}>{name}</Card.Title>
      {subtitles.map((subtitle, index) => (
        <Card.Text className="m-0" key={index}>
          {subtitle}
        </Card.Text>
      ))}
    </Card>
  );
}
