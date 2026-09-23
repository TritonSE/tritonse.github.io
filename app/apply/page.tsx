"use client";

import { useEffect } from "react";

import recruitment from "../../data/recruitment";
import PlainLayout from "../../layouts/PlainLayout";

/**
 * Redirects visitors of /apply to the current application form.
 */
export default function ApplyPage() {
  useEffect(() => {
    window.location.replace(recruitment.applicationUrl);
  }, []);

  return (
    <PlainLayout metadata={{ title: "Redirecting..." }}>
      <p>
        Taking you to the TSE application. If you are not redirected automatically,{" "}
        <a href={recruitment.applicationUrl}>click here</a>.
      </p>
    </PlainLayout>
  );
}
