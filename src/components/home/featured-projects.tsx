"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { projects as allProjects } from "@/data/projects";

type Status = "live" | "review" | "building" | "soon";

type FeaturedProject = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  status: Status;
  liveUrl?: string;
  Icon: LucideIcon;
  featured: boolean;
};

const statusLabel: Record<Status, string> = {
  live: "Live",
  review: "In Play Store review",
  building: "In development",
  soon: "Launching soon",
};

// Use the main projects.ts as the single source of truth.
const projects: FeaturedProject[] = allProjects.map((project) => ({
  slug: project.slug,
  title: project.slug === "restart-byob" ? "Restart BYOB" : project.title,
  summary: project.summary,
  tags: project.technologies,
  status: project.status,
  liveUrl: project.liveUrl,
  Icon: project.Icon,
  featured: project.featured,
}));

function ProjectCard({ project }: { project: FeaturedProject }) {
  const { slug, title, summary, tags, status, liveUrl, Icon } = project;

  const [imageFailed, setImageFailed] = useState(false);
  const image = `/images/${slug}/cover.webp`;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-200 hover:border-[var(--primary)]">
      {/*
        Image frame: a fixed 16:9 box. The covers are about 16:9, so
        object-contain shows the whole image with no cropping and almost no
        empty space. Every card gets the same image height, so the text
        below lines up across the row.
      */}
      <div className="relative flex aspect-video w-full shrink-0 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--surface-muted)]">
        {!imageFailed ? (
          <>
            {/* Soft blurred copy of the cover fills any leftover space, so no empty strips show */}
            <Image
              src={image}
              alt=""
              fill
              aria-hidden="true"
              className="scale-125 object-cover opacity-70 blur-2xl"
              sizes="(max-width: 639px) 86vw, (max-width: 1023px) 46vw, (max-width: 1279px) 38vw, 400px"
            />

            {/* Full cover, never cropped */}
            <Image
              src={image}
              alt={`${title} project cover`}
              fill
              className="object-contain"
              sizes="(max-width: 639px) 86vw, (max-width: 1023px) 46vw, (max-width: 1279px) 38vw, 400px"
              onError={() => setImageFailed(true)}
            />
          </>
        ) : (
          <Icon
            className="size-12 text-[var(--primary)] opacity-80 transition-transform duration-300 group-hover:scale-110 sm:size-14"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
            {title}
          </h3>

          {/* Status, right side, same blue as the project number */}
          <span className="mt-1 shrink-0 select-none text-sm font-semibold text-[var(--primary)] opacity-60">
            {statusLabel[status]}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-[var(--foreground)] opacity-80">
          {summary}
        </p>

        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--primary)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-4">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          >
            View project
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
            >
              Visit site
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [positions, setPositions] = useState(featured.length);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Width of one slide plus the gap between slides
  const getStep = useCallback(() => {
    const slider = sliderRef.current;
    const card = slider?.querySelector<HTMLElement>("[data-project-card]");
    if (!slider || !card) return 0;

    const gap =
      Number.parseFloat(window.getComputedStyle(slider).columnGap) || 16;
    return card.offsetWidth + gap;
  }, []);

  const update = useCallback(() => {
    const slider = sliderRef.current;
    const step = getStep();
    if (!slider || !step) return;

    const max = slider.scrollWidth - slider.clientWidth;
    const count = Math.max(1, Math.ceil(max / step - 0.05) + 1);
    const atEnd = slider.scrollLeft >= max - 4;

    setPositions(count);
    setCanPrev(slider.scrollLeft > 4);
    setCanNext(!atEnd);
    setActive(
      atEnd
        ? count - 1
        : Math.min(count - 1, Math.round(slider.scrollLeft / step)),
    );
  }, [getStep]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    update();
    const observer = new ResizeObserver(update);
    observer.observe(slider);

    return () => observer.disconnect();
  }, [update]);

  function moveSlider(direction: "previous" | "next") {
    const step = getStep();
    sliderRef.current?.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  }

  function goTo(index: number) {
    sliderRef.current?.scrollTo({
      left: index * getStep(),
      behavior: "smooth",
    });
  }

  return (
    <section
      className="container py-10 sm:py-14 lg:py-16"
      aria-labelledby="featured-work"
    >
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="featured-work"
            className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
          >
            Live projects
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
            Websites I’ve built and shipped. More are on the way.
          </p>
        </div>

        <Link href="/projects" className="button button-secondary group w-fit">
          See all projects
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* One slider for every screen: 1 card on phones, 2 on tablets, 2.5 on laptops, 3 on big screens */}
      <div
        ref={sliderRef}
        onScroll={update}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") moveSlider("next");
          if (event.key === "ArrowLeft") moveSlider("previous");
        }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects. Swipe or use the arrow keys to explore."
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] sm:gap-5 [&::-webkit-scrollbar]:hidden"
      >
        {featured.map((project) => (
          <div
            key={project.slug}
            data-project-card
            className="flex w-[86%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/2.5)] xl:w-[calc((100%-2.5rem)/3)]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Controls: dots on the left, arrows on the right */}
      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Choose project position"
          >
            {Array.from({ length: positions }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to position ${index + 1} of ${positions}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                  active === index
                    ? "w-6 bg-[var(--primary)]"
                    : "w-2.5 bg-[var(--border)] hover:bg-[var(--muted)]"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-[var(--muted)] sm:hidden">
            Swipe to explore
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => moveSlider("previous")}
            disabled={!canPrev}
            aria-label="Previous project"
            className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[var(--border)] disabled:hover:text-[var(--foreground)]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => moveSlider("next")}
            disabled={!canNext}
            aria-label="Next project"
            className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[var(--border)] disabled:hover:text-[var(--foreground)]"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
