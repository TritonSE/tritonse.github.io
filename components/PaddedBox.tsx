import classNames from "classnames";
import React from "react";
import { Container } from "react-bootstrap";

interface PaddedBoxProps {
  backgroundColor?: string;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function PaddedBox({
  backgroundColor,
  center,
  children,
  className,
}: PaddedBoxProps) {
  const styles = backgroundColor ? { backgroundColor } : {};
  return (
    <div className={classNames("py-5", { "text-center": center }, className)} style={styles}>
      <Container>{children}</Container>
    </div>
  );
}

PaddedBox.defaultProps = { center: undefined, backgroundColor: undefined, className: undefined };
