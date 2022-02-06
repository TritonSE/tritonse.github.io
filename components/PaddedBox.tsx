import classNames from "classnames";
import React from "react";
import Container from "react-bootstrap/Container";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5" style={{ fontWeight: 600 }}>
      {children}
    </h2>
  );
}

interface PaddedBoxProps {
  backgroundColor?: string;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
  heading?: string;
}

export default function PaddedBox({
  backgroundColor,
  center,
  children,
  className,
  heading,
}: PaddedBoxProps) {
  const styles = backgroundColor ? { backgroundColor } : {};
  return (
    <div className={classNames("py-5", { "text-center": center }, className)} style={styles}>
      <Container>
        {heading && <Heading>{heading}</Heading>}
        {children}
      </Container>
    </div>
  );
}

PaddedBox.defaultProps = {
  center: undefined,
  backgroundColor: undefined,
  className: undefined,
  heading: undefined,
};
