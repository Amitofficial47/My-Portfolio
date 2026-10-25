import type { Metadata } from "next";
import { BriefcaseBusiness, Layers3, Smartphone } from "lucide-react";
import ProjectGallery from "@/components/projects/project-gallery";
import ContactCta from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of websites, applications, and digital products I've worked on. Explore my web development, mobile application, and digital platform projects.",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Page introduction */}
      <section className="container pb-8 pt-12 sm:pb-12 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          <p className="eyebrow">The portfolio</p>

          <h1 className="mt-3 text-3xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">
            Ideas into
            <br />
            <span className="text-[var(--primary)]">digital experiences</span>
            <span className="text-[var(--accent)]">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-8">
            A collection of websites, applications, and digital products I’ve
            worked on. Each project is an opportunity to solve a problem, learn
            something new, and build something useful.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2">
              <Layers3
                className="size-4 text-[var(--primary)]"
                aria-hidden="true"
              />
              Web &amp; digital platforms
            </span>

            <span className="inline-flex items-center gap-2">
              <Smartphone
                className="size-4 text-[var(--primary)]"
                aria-hidden="true"
              />
              Mobile applications
            </span>

            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness
                className="size-4 text-[var(--primary)]"
                aria-hidden="true"
              />
              Real-world projects
            </span>
          </div>
        </div>
      </section>

      {/* Project collection */}
      <section
        className="container pb-16 sm:pb-20 lg:pb-24"
        aria-label="Project collection"
      >
        <ProjectGallery />
      </section>

      <ContactCta />
    </main>
  );
}
