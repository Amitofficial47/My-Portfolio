"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import {
  getProjectStatusStyle,
  getProjectStatusText,
  type Project,
} from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.Icon;
  const [imageFailed, setImageFailed] = useState(false);
  const coverImage = `/images/${project.slug}/cover.webp`;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-200 hover:border-[var(--primary)]">
      {/*
        Image frame: the same fixed 16:9 box used in the featured slider.
        object-contain shows the whole cover with no cropping, and every card
        gets the same image height so the text below lines up in each row.
      */}
      <div
        className={`relative flex aspect-video w-full shrink-0 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-gradient-to-br ${project.featuredColor}`}
      >
        {!imageFailed && (
          <>
            {/* Soft blurred copy of the cover fills any leftover space, so no empty strips show */}
            <Image
              src={coverImage}
              alt=""
              fill
              aria-hidden="true"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="scale-125 object-cover opacity-70 blur-2xl"
            />

            {/* Full cover, never cropped */}
            <Image
              src={coverImage}
              alt={`${project.title} project cover`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-contain"
              onError={() => setImageFailed(true)}
            />
          </>
        )}

        {(imageFailed || !coverImage) && (
          <Icon
            className="size-14 text-[#1B2250]/75 transition-transform duration-300 group-hover:scale-110 sm:size-16"
            strokeWidth={1.25}
            aria-hidden="true"
          />
        )}

        <span
          className={`absolute bottom-3 right-3 z-10 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm sm:bottom-4 sm:right-4 ${getProjectStatusStyle(project.status)}`}
        >
          {getProjectStatusText(project.status)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-6 text-[var(--foreground)] opacity-80">
          {project.description}
        </p>

        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--primary)]"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
            >
              View project details
              <ArrowDownRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
              >
                Visit website
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>

          {/* Project number, bottom right */}
          <span
            className="select-none text-xl font-semibold leading-none tabular-nums tracking-tight text-[var(--primary)] opacity-40 transition-opacity duration-200 group-hover:opacity-70"
            aria-hidden="true"
          >
            {project.number}
          </span>
        </div>
      </div>
    </article>
  );
}
