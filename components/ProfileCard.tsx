import Card from "react-bootstrap/Card";

export default function ProfileCard({ name, subtitles }: { name: string, subtitles: string[] }) {
  return (
    <Card className="mb-5" style={{ background: "rgba(0, 0, 0, 0)" }}>
      <Card.Img variant="top">

      </Card.Img>
      <Card.Title style={{ fontWeight: 600 }}>{name}</Card.Title>
      {subtitles.map((subtitle, index) => (
        <Card.Text className="m-0" key={index}>{subtitle}</Card.Text>
      ))}
    </Card>
  )
}
