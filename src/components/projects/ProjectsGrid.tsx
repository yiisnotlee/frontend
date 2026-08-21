"use client";

import { useState } from "react";
import ProjectCard_S from "./ProjectCard_S";
import ProjectDetailModal, { type ProjectDetail } from "./ProjectCardDetail";

type ProjectsGridProps = {
  projects: ProjectDetail[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard_S
            key={index}
            thumbnail={project.banner}
            logo={project.logo}
            title={project.title}
            periodStart={project.periodStart}
            periodEnd={project.periodEnd}
            tags={project.techStack}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}
