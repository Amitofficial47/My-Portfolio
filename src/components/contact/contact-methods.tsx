import {
  ArrowUpRight,
  Check,
  Globe,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SITE } from "@/lib/site";

// Inline icon, because newer lucide-react versions removed brand icons.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Method = {
  label: string;
  detail: string;
  href: string;
  external: boolean;
  Icon: React.ComponentType<{ className?: string }>;
};

const tips = [
  "What you want to build",
  "Who it’s for",
  "When you’d like to launch",
];

export default function ContactMethods() {
  const methods: Method[] = [];

  if (SITE.email) {
    methods.push({
      label: "Email",
      detail: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
      Icon: Mail,
    });
  }
  if (SITE.whatsapp) {
    methods.push({
      label: "WhatsApp",
      detail: "Message me directly",
      href: `https://wa.me/${SITE.whatsapp}`,
      external: true,
      Icon: MessageCircle,
    });
  }
  if (SITE.phone) {
    methods.push({
      label: "Call",
      detail: SITE.phone,
      href: `tel:${SITE.phone.replace(/[^\d+]/g, "")}`,
      external: false,
      Icon: Phone,
    });
  }
  if (SITE.linkedin) {
    methods.push({
      label: "LinkedIn",
      detail: "Connect with me",
      href: SITE.linkedin,
      external: true,
      Icon: LinkedinIcon,
    });
  }
  if (SITE.nearbyDigital) {
    methods.push({
      label: "Nearby Digital Solutions",
      detail: "Websites and SEO for local businesses",
      href: SITE.nearbyDigital,
      external: true,
      Icon: Globe,
    });
  }

  return (
    <aside
      aria-labelledby="reach-me"
      className="flex flex-col bg-[var(--surface-muted)] p-6 sm:p-10"
    >
      <h2
        id="reach-me"
        className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl"
      >
        Reach me directly
        <span className="text-[var(--accent)]">.</span>
      </h2>
      <p className="mt-2 max-w-sm text-sm leading-7 text-[var(--foreground)] opacity-80">
        Prefer not to fill a form? Use whichever way is easiest for you.
      </p>

      {methods.length > 0 && (
        <ul className="mt-7 grid gap-3">
          {methods.map(({ label, detail, href, external, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl bg-[var(--surface)] p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                  <Icon className="size-5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="block truncate text-sm text-[var(--muted)]">
                    {detail}
                  </span>
                </span>

                <ArrowUpRight
                  className="size-4 shrink-0 text-[var(--muted)] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 border-t border-dashed border-[var(--border)] pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          What helps me reply well
        </p>
        <ul className="mt-3 grid gap-2.5">
          {tips.map((tip) => (
            <li key={tip} className="flex items-center gap-3 text-sm">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                <Check className="size-3" aria-hidden="true" />
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
