import React from "react";

import PageWrapper from "./PageWrapper";

export default function PlainLayout(props) {
  return <PageWrapper {...props} render={({ children }) => <>{children}</>} />;
}
