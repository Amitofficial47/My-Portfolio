import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

// TODO: put your real email here. While it is null, only the contact-page
// button shows.
const CONTACT_EMAIL: string | null = null;

export default function ContactCta() {
  return (
    <section className="container py-12 sm:py-16" aria-labelledby="contact-cta">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-muted)] px-6 py-12 text-center sm:px-10 sm:py-16">
        <h2
          id="contact-cta"
          className="mx-auto max-w-2xl text-3xl font-medium leading-[1.16] tracking-[-0.04em] sm:text-5xl"
        >
          Have an app or website{" "}
          <span className="font-semibold text-[var(--primary)]">
            in mind
            <span className="text-[var(--accent)]">?</span>
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
          Tell me what you’re trying to build and who it’s for. I’ll reply with
          honest ideas on how to get it done.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="button button-primary group">
            Let’s talk
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>

          {CONTACT_EMAIL && (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="button button-secondary"
            >
              <Mail className="size-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
