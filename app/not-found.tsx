import React from "react";

import PlainLayout from "../layouts/PlainLayout";

export default function Page404() {
  return (
    <PlainLayout metadata={{ title: "404" }}>
      <p>Page not found</p>
    </PlainLayout>
  );
}
