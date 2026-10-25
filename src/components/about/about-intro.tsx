import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

// Put your resume in /public (for example /public/resume.pdf) and set this to
// "/resume.pdf". While it is null, the download button is hidden.
const RESUME_URL: string | null = null;

export default function AboutIntro() {
  return (
    <section className="container py-10 sm:py-16" aria-labelledby="about-title">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            About me
          </p>

          <h1
            id="about-title"
            className="mt-3 text-3xl font-medium leading-[1.14] tracking-[-0.04em] sm:text-5xl"
          >
            I’m Amit, a software engineer who started in the{" "}
            <span className="font-semibold text-[var(--primary)]">
              field
              <span className="text-[var(--accent)]">.</span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-8 lg:mx-0">
            I hold an MCA and work as a Software Engineer at Udayasa Foundation.
            Before writing code for the foundation, I visited schools to set up
            digital classrooms, so I know what technology looks like when real
            people use it.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href="/contact" className="button button-primary group">
              Let’s talk
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            {RESUME_URL && (
              <a href={RESUME_URL} download className="button button-secondary">
                <Download className="size-4" aria-hidden="true" />
                Download resume
              </a>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px]">
          <div
            className="absolute bottom-0 left-1/2 h-[78%] w-[88%] -translate-x-1/2 rounded-t-full rounded-b-3xl bg-[var(--surface-muted)]"
            aria-hidden="true"
          />
          <Image
            src="/images/portrait/amit-kumar2.png"
            alt="Amit Kumar"
            width={900}
            height={1200}
            priority
            className="relative z-[1] mx-auto h-auto max-h-[420px] w-auto max-w-full object-contain"
            sizes="(max-width: 640px) 75vw, 320px"
          />
        </div>
      </div>
    </section>
  );
}
