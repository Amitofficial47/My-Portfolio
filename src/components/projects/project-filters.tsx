"use client";

import { projectCategories, type ProjectCategory } from "@/data/projects";

export type ProjectFilter = "All" | ProjectCategory;

type ProjectFiltersProps = {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

export default function ProjectFilters({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div
      className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap"
      role="group"
      aria-label="Filter projects by category"
    >
      {projectCategories.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
            activeFilter === filter
              ? "border-[var(--primary)] bg-[var(--primary)] text-white"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
