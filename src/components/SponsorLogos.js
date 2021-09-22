import React from "react";

import { clients } from "../data";
import DynamicImage from "./DynamicImage";
import { nameToFilename } from "../util/strings";

export default function SponsorLogos() {
  return (
    <div className="container row mx-auto py-4">
      <div className="py-4">
        <h2>Our Sponsors</h2>
      </div>
      {clients.map((client) => (
        <div className="col-sm-6 col-md-3 p-2 m-auto d-flex justify-content-center">
          <a className="client-logo-link" target="_blank" href={client.website} rel="noreferrer">
            <DynamicImage paths={[`clients/${nameToFilename(client.name)}`, "clients/anonymous"]} />
          </a>
        </div>
      ))}
    </div>
  );
}
