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

type PaddedBoxProps = {
  backgroundColor?: string;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
  heading?: string;
  noContainer?: boolean;
};

export default function PaddedBox({
  backgroundColor,
  center,
  children,
  className,
  heading,
  noContainer,
}: PaddedBoxProps) {
  const styles = backgroundColor ? { backgroundColor } : {};
  const ContainerElement = noContainer ? React.Fragment : Container;
  return (
    <div className={classNames("py-5", { "text-center": center }, className)} style={styles}>
      <Container>{heading && <Heading>{heading}</Heading>}</Container>
      <ContainerElement>{children}</ContainerElement>
    </div>
  );
}

PaddedBox.defaultProps = {
  center: undefined,
  backgroundColor: undefined,
  className: undefined,
  heading: undefined,
  noContainer: false,
};
