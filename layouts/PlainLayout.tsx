import { Container } from "react-bootstrap";

import PageTitle from "../components/PageTitle";

export interface PlainMetadata {
  title: string;
  subtitle?: string;
}

export default function PlainLayout({
  metadata: { title, subtitle },
  children,
}: {
  metadata: PlainMetadata;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageTitle title={title} />
      <Container className="mt-5">
        <header>
          <h1>{title}</h1>
          {subtitle && (
            <p>
              <em>{subtitle}</em>
            </p>
          )}
        </header>
        {children}
      </Container>
    </>
  );
}
