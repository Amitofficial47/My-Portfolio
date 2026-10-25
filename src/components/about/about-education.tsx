import { GraduationCap } from "lucide-react";

type Degree = {
  short: string;
  full: string;
  school: string;
  cgpa: string;
  // Add the passing year, e.g. "2024" or "2022 – 2024".
  // While it is undefined, the year label stays hidden.
  year?: string;
};

// Latest first
const education: Degree[] = [
  {
    short: "MCA",
    full: "Master of Computer Applications",
    school: "Himachal Pradesh University",
    cgpa: "8.67",
    year: "2023 – 2025",
  },
  {
    short: "BCA",
    full: "Bachelor of Computer Applications",
    school: "Himachal Pradesh University",
    cgpa: "7.96",
    year: "2020 – 2023",
  },
];

export default function AboutEducation() {
  return (
    <section
      className="border-t border-[var(--border)]"
      aria-labelledby="education"
    >
      <div className="container py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="education"
            className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
          >
            Education
            <span className="text-[var(--accent)]">.</span>
          </h2>
          <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
            A computer applications foundation, from bachelor’s to master’s.
          </p>
        </div>

        <ol className="relative mx-auto mt-10 max-w-4xl">
          {/* Timeline line */}
          <div
            className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-[var(--border)] md:left-1/2"
            aria-hidden="true"
          />

          {education.map(({ short, full, school, cgpa, year }, index) => (
            <li
              key={short}
              className="relative pb-8 pl-12 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
            >
              {/* Timeline node */}
              <span
                className="absolute left-4 top-6 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[var(--background)] text-[var(--primary)] md:left-1/2"
                aria-hidden="true"
              >
                <GraduationCap className="size-4" />
              </span>

              <article
                className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:border-[var(--primary)] sm:p-7 ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <div className="relative flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                        {short}
                      </span>
                      {year && (
                        <span className="text-xs font-medium text-[var(--muted)] sm:text-sm">
                          {year}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                      {full}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{school}</p>
                  </div>

                  {/* CGPA stat */}
                  <div className="shrink-0 rounded-xl bg-[var(--surface-muted)] px-3 py-2 text-center">
                    <p className="text-lg font-semibold leading-none tracking-tight text-[var(--primary)] sm:text-xl">
                      {cgpa}
                    </p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      CGPA
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
