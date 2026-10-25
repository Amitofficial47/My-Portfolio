"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import ProjectFilters, {
  type ProjectFilter,
} from "@/components/projects/project-filters";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project: Project) => project.category === activeFilter,
    );
  }, [activeFilter]);

  return (
    <div>
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-[var(--muted)]">
          No projects found in this category.
        </p>
      )}
    </div>
  );
}
