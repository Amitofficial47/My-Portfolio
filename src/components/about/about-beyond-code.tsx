import { Compass } from "lucide-react";

export default function AboutBeyondCode() {
  return (
    <section className="container pb-4" aria-labelledby="beyond-code">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-7 text-center sm:flex-row sm:text-left">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--primary)]">
          <Compass className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h2 id="beyond-code" className="text-lg font-semibold tracking-tight">
            Beyond code
          </h2>
          <p className="mt-1 text-sm leading-7 text-[var(--foreground)] opacity-80">
            I love to travel and explore new places. Every place and every
            person teaches me something I end up using in my work.
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        I also run Nearby Digital Solutions, helping local businesses get
        online.
      </p>
    </section>
  );
}
