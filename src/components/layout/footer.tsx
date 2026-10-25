import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

// Newer lucide-react versions removed brand icons, so these are inline SVGs.
type IconProps = {
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// TODO: fill these in. Anything left as null is hidden automatically.
const NEARBY_DIGITAL_URL: string | null = "https://your-nearby-site.com";
const LINKEDIN_URL: string | null = "https://www.linkedin.com/in/Mramit47";
const GITHUB_URL: string | null = "https://github.com/Amitofficial47";
const INSTAGRAM_URL: string | null =
  "https://www.instagram.com/_mittu_03_?srtk=ZDNlajBxMGNvc3N0";
const CONTACT_EMAIL: string | null = "amitmitu2235@gmail.com";

const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: LinkedinIcon },
  { label: "GitHub", href: GITHUB_URL, Icon: GithubIcon },
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon },
  {
    label: "Email",
    href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : null,
    Icon: Mail,
  },
].filter((item): item is typeof item & { href: string } => Boolean(item.href));

// Your project uses Cache Components, which blocks `new Date()` in a normal
// server component. "use cache" prerenders the year and refreshes it later.
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="container py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)]"
            >
              Amit Kumar
              <span className="text-[var(--accent)]">.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--foreground)] opacity-80">
              Software engineer building apps and websites for NGOs, workers and
              climate teams.
            </p>

            <p className="mt-4 text-sm text-[var(--muted)]">
              Founder,{" "}
              {NEARBY_DIGITAL_URL ? (
                <a
                  href={NEARBY_DIGITAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                >
                  Nearby Digital Solutions
                </a>
              ) : (
                <span className="font-medium text-[var(--primary)]">
                  Nearby Digital Solutions
                </span>
              )}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Explore
            </p>
            <ul className="mt-4 grid gap-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Let’s connect
            </p>

            <Link
              href="/contact"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
            >
              Start a conversation
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            {socials.length > 0 && (
              <ul className="mt-5 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={label === "Email" ? undefined : "_blank"}
                      rel={
                        label === "Email" ? undefined : "noopener noreferrer"
                      }
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> Amit Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
