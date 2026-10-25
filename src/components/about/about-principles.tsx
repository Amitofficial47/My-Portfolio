type Principle = {
  number: string;
  title: string;
  description: string;
  practice: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "People first",
    description:
      "Working directly with teachers and students taught me to understand people's needs before choosing a technological solution.",
    practice:
      "Visited schools to understand how digital learning tools are used in real classrooms.",
  },
  {
    number: "02",
    title: "Practical over fancy",
    description:
      "Technology creates value when it works reliably in real environments, even when resources and infrastructure are limited.",
    practice:
      "Supported digital library setups with 24 tablets per school, managed through MDM.",
  },
  {
    number: "03",
    title: "Build and empower",
    description:
      "Successful implementation means more than installing technology. People should feel confident using the tools available to them.",
    practice:
      "Supported teacher and student orientations for digital learning resources.",
  },
];

export default function AboutPrinciples() {
  return (
    <section
      className="border-t border-[var(--border)]"
      aria-labelledby="how-i-work"
    >
      <div className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
          {/* Section heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              My approach
            </p>

            <h2
              id="how-i-work"
              className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
            >
              How I work
              <span className="text-[var(--accent)]">.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-8">
              Three principles shaped by real-world experience, practical
              problem-solving, and the people who use the technology I help
              build.
            </p>

            <div
              className="mt-6 h-1 w-14 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />
          </div>

          {/* Principle list */}
          <ol className="border-t border-[var(--border)]">
            {principles.map(({ number, title, description, practice }) => (
              <li
                key={number}
                className="group border-b border-[var(--border)] py-5 sm:py-6"
              >
                <div className="grid gap-1.5 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-4">
                  {/* Number */}
                  <span
                    className="select-none text-lg font-semibold leading-none tracking-tight text-[var(--primary)] opacity-40 transition-opacity duration-300 group-hover:opacity-100 sm:pt-1.5 sm:text-xl"
                    aria-hidden="true"
                  >
                    {number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-xl">
                      {title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-7">
                      {description}
                    </p>

                    {/* Proof from real work */}
                    <div className="mt-3 max-w-xl border-l-2 border-[var(--accent)] bg-[var(--surface-muted)] py-2 pl-3.5 pr-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                        In practice
                      </p>
                      <p className="mt-0.5 text-sm leading-6 text-[var(--foreground)]">
                        {practice}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
