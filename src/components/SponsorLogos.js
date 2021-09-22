import React from "react";
import "./ClientLogos.css";
import { sponsors } from "../data";
import DynamicImage from "./DynamicImage";
import { nameToFilename } from "../util/strings";

export default function SponsorLogos() {
  return (
    <div className="container row mx-auto py-4">
      <div className="py-4">
        <h2>Our Sponsors</h2>
      </div>
      {sponsors.map((sponsor) => (
        <div className="col-sm-6 col-md-3 p-2 m-auto d-flex justify-content-center">
          <a className="client-logo-link" target="_blank" href={sponsor.website} rel="noreferrer">
            <DynamicImage
              paths={[`sponsors/${nameToFilename(sponsor.name)}`, "sponsors/anonymous"]}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
