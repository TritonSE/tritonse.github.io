import React from "react";

import { allProjects } from "../data/projects";
import { firstValidImageKey } from "../images";

import BigCard from "./BigCard";

export default function ProjectCarousel() {
  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      <div style={{ flexGrow: 0, flexShrink: 0, width: "5vw" }} />
      {allProjects
        .slice(-5)
        .reverse()
        .map((project) => (
          <BigCard
            title={project.name}
            imageKey={firstValidImageKey(project.thumbnail, "icons/tse-bulb")}
            href={`/projects/${project.slug}`}
            sized
            key={project.slug}
          >
            <span className="small">{project.description}</span>
          </BigCard>
        ))}
    </div>
  );
}
