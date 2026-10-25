import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { getProjectStatusStyle, getProjectStatusText } from "@/data/projects";
import ContactCta from "@/components/home/contact-cta";
import ProjectImageGallery from "@/components/projects/project-image-gallery";

type ProjectDetailProps = {
  project: Project;
  images: string[];
};

export default function ProjectDetail({ project, images }: ProjectDetailProps) {
  const Icon = project.Icon;

  return (
    <main>
      <section className="container pb-16 pt-10 sm:pb-20 sm:pt-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="eyebrow">
            Project / {project.number} · {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">
            {project.title}
            <span className="text-[var(--accent)]">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--foreground)] opacity-80 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getProjectStatusStyle(project.status)}`}
            >
              {getProjectStatusText(project.status)}
            </span>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Visit website
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {images.length > 0 ? (
          <ProjectImageGallery title={project.title} images={images} />
        ) : (
          <div
            className={`relative mt-10 flex aspect-[2/1] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${project.featuredColor} sm:mt-14`}
          >
            <span className="absolute left-5 top-5 text-xs font-semibold tracking-wider text-[#1B2250]/70 sm:left-8 sm:top-8">
              PROJECT / {project.number}
            </span>

            <Icon
              className="size-20 text-[#1B2250]/75 sm:size-28"
              strokeWidth={1.1}
              aria-hidden="true"
            />
          </div>
        )}

        <div className="mt-12 grid gap-10 border-t border-[var(--border)] pt-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Project overview</p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight">
              About the project
            </h2>
          </div>

          <div>
            <p className="leading-8 text-[var(--foreground)] opacity-80">
              {project.description}
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider">
              Technologies
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-sm font-medium text-[var(--primary)]"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--border)] p-4">
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-[var(--primary)]"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium">Project status</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {getProjectStatusText(project.status)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactCta />
      </section>
    </main>
  );
}
