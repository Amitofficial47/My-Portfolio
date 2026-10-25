import Link from "next/link";
import {
  ArrowDown,
  Lightbulb,
  MessageCircle,
  MessageSquareText,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/site";

type Step = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: Step[] = [
  {
    title: "You tell me",
    description: "What you want to build, and who it’s for",
    Icon: MessageSquareText,
  },
  {
    title: "I reply with ideas",
    description: "Honest advice on the best way to do it",
    Icon: Lightbulb,
  },
  {
    title: "We build it",
    description: "From first sketch to launch",
    Icon: Rocket,
  },
];

export default function ContactIntro() {
  return (
    <section
      className="container py-6 sm:py-10 lg:py-12"
      aria-labelledby="contact-title"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Introduction */}
        <div className="min-w-0 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            <span
              className="size-2 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />
            Contact
          </p>

          <h1
            id="contact-title"
            className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-[1.14] tracking-[-0.04em] sm:text-5xl lg:mx-0"
          >
            Let’s talk about what you want to{" "}
            <span className="font-semibold text-[var(--primary)]">
              build<span className="text-[var(--accent)]">.</span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-8 lg:mx-0">
            An app, a website, or an idea you’re still shaping. Send me a few
            lines and I’ll reply with honest ideas on how to get it done.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href="#contact-form" className="button button-primary group">
              Send a message
              <ArrowDown
                className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            {SITE.whatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Visual: a simple conversation on a soft rounded panel */}
        <div
          className="relative mx-auto w-full max-w-md"
          role="img"
          aria-label="Illustration of a short conversation about starting a project"
        >
          <div
            className="absolute inset-0 -rotate-2 rounded-[2rem] bg-[var(--surface-muted)]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-3 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-[var(--surface-muted)] px-4 py-3 text-sm leading-6">
              Hi Amit, I want an app for my NGO.
            </div>

            <div className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-[var(--primary)] px-4 py-3 text-sm leading-6 text-white">
              Great! Tell me who it’s for and what it should do.
            </div>

            <div className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-[var(--surface-muted)] px-4 py-3 text-sm leading-6">
              It’s for field workers, and it needs to work on basic phones.
            </div>

            {/* Typing indicator */}
            <div className="flex w-fit items-center gap-1.5 self-end rounded-full bg-[var(--primary)] px-4 py-3">
              <span className="size-1.5 rounded-full bg-white motion-safe:animate-pulse" />
              <span className="size-1.5 rounded-full bg-white opacity-80 motion-safe:animate-pulse [animation-delay:150ms]" />
              <span className="size-1.5 rounded-full bg-white opacity-60 motion-safe:animate-pulse [animation-delay:300ms]" />
            </div>
          </div>
        </div>

        {/* How it works: full width below both columns on desktop */}
        <ol
          className="grid gap-y-6 border-t border-[var(--border)] pt-6 sm:grid-cols-3 sm:pt-8 lg:col-span-2"
          aria-label="How we work together"
        >
          {steps.map(({ title, description, Icon }, index) => (
            <li
              key={title}
              className={`flex min-w-0 flex-col items-center px-2 text-center sm:px-6 ${
                index > 0 ? "sm:border-l sm:border-[var(--border)]" : ""
              }`}
            >
              <span className="mb-3 flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)] sm:size-12">
                <Icon className="size-5 sm:size-6" aria-hidden="true" />
              </span>

              <p className="text-sm font-semibold text-[var(--foreground)]">
                {title}
              </p>
              <p className="mt-1 max-w-[16rem] text-xs leading-5 text-[var(--muted)] sm:text-sm">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
