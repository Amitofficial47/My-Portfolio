"use client";

import { useState, type FormEvent } from "react";
import {
  Briefcase,
  ChevronDown,
  Mail,
  MessageCircle,
  ShieldCheck,
  User,
} from "lucide-react";
import { SITE } from "@/lib/site";

const topics = [
  "A mobile app",
  "A website",
  "Something for my business",
  "Something else",
];

const inputClass =
  "w-full rounded-xl border border-transparent bg-[var(--surface-muted)] py-3.5 pl-11 pr-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] transition focus:border-[var(--primary)] focus:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const subject = `${topic}: message from ${name || "your website"}`;
  const body = `Hi Amit,\n\nI'm ${name}.\nI'm looking for: ${topic}\n\n${message}\n\nReply to: ${email}`;

  const canEmail = Boolean(SITE.email);
  const canWhatsApp = Boolean(SITE.whatsapp);

  const sendByEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!SITE.email) return;

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const sendOnWhatsApp = (form: HTMLFormElement | null) => {
    if (!SITE.whatsapp || !form) return;
    if (!form.reportValidity()) return;

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form
      id="contact-form"
      onSubmit={sendByEmail}
      className="scroll-mt-24 bg-[var(--surface)] p-6 sm:p-10"
      aria-labelledby="form-title"
    >
      <h2
        id="form-title"
        className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl"
      >
        Send me a message
        <span className="text-[var(--accent)]">.</span>
      </h2>
      <p className="mt-2 max-w-md text-sm leading-7 text-[var(--foreground)] opacity-80">
        Fill this in and it opens as a ready-to-send message.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <div className="relative mt-2">
            <User
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]"
              aria-hidden="true"
            />
            <input
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
        </label>

        <label className="block text-sm font-medium">
          Your email
          <div className="relative mt-2">
            <Mail
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]"
              aria-hidden="true"
            />
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </label>
      </div>

      <label className="mt-6 block text-sm font-medium">
        I’m looking for
        <div className="relative mt-2">
          <Briefcase
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]"
            aria-hidden="true"
          />
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={`${inputClass} cursor-pointer appearance-none pr-11`}
          >
            {topics.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]"
            aria-hidden="true"
          />
        </div>
      </label>

      <label className="mt-6 block text-sm font-medium">
        Tell me about it
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What do you want to build, and who is it for?"
          className="mt-2 w-full resize-y rounded-xl border border-transparent bg-[var(--surface-muted)] px-4 py-3.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] transition focus:border-[var(--primary)] focus:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
        />
      </label>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {canEmail && (
          <button
            type="submit"
            className="button button-primary w-full justify-center sm:w-auto"
          >
            <Mail className="size-4" aria-hidden="true" />
            Send by email
          </button>
        )}

        {canWhatsApp && (
          <button
            type="button"
            onClick={(e) => sendOnWhatsApp(e.currentTarget.form)}
            className="button button-secondary w-full justify-center sm:w-auto"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Send on WhatsApp
          </button>
        )}

        {!canEmail && !canWhatsApp && (
          <p className="text-sm text-[var(--muted)]">
            Messaging is not set up yet. Please check back soon.
          </p>
        )}
      </div>

      <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-[var(--muted)]">
        <ShieldCheck
          className="mt-0.5 size-4 shrink-0 text-[var(--primary)]"
          aria-hidden="true"
        />
        Nothing is stored on this site. Your message opens in your own email or
        WhatsApp, and you press send.
      </p>
    </form>
  );
}
