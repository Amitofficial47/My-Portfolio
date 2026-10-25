import {
  ArrowUpRight,
  Globe,
  MapPin,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";

// Set this to your Nearby Digital website address once it is live.
// While it is null, a "Website coming soon" tag shows instead of a button,
// so nobody lands on a dead link.
const NEARBY_DIGITAL_URL: string | null = null;

type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Websites",
    description:
      "Clean, mobile-friendly sites that make your business easy to trust.",
    Icon: Globe,
  },
  {
    title: "Local SEO",
    description: "Show up when people nearby search for what you offer.",
    Icon: Search,
  },
  {
    title: "Social media",
    description:
      "Posts and offers handled for you, so you can focus on the shop.",
    Icon: Share2,
  },
];

export default function NearbyDigitalBanner() {
  return (
    <section
      className="container py-12 sm:py-16"
      aria-labelledby="nearby-digital"
    >
      {/* Fixed brand blue so white text stays readable in light and dark mode */}
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#2F46B3_0%,#2A3F9E_45%,#1B2A78_100%)] p-7 text-white shadow-[0_24px_60px_-24px_rgba(27,42,120,0.55)] sm:p-10 lg:p-14">
        {/* Decorative background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-white/10 blur-sm sm:size-96"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-8 -top-8 -z-10 size-44 rounded-full border border-white/20 sm:size-56"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-20 -z-10 size-72 rounded-full bg-[var(--accent)]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left: message */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
              <MapPin
                className="size-3.5 text-[var(--accent)]"
                aria-hidden="true"
              />
              My other venture
            </span>

            <h2
              id="nearby-digital"
              className="mt-5 text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl"
            >
              I also run{" "}
              <span className="font-semibold text-white">
                Nearby Digital Solutions
              </span>
              <span className="text-[var(--accent)]">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              We help local businesses get online: a simple website, a better
              Google presence and social media that is handled for you. Clear,
              friendly and built for small shops and teams.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {NEARBY_DIGITAL_URL ? (
                <a
                  href={NEARBY_DIGITAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2A3F9E] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Visit Nearby Digital
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur">
                  <span
                    className="size-2 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  Website coming soon
                </span>
              )}
            </div>
          </div>

          {/* Right: services */}
          <ul className="grid gap-3.5" aria-label="Nearby Digital services">
            {services.map(({ title, description, Icon }, index) => (
              <li
                key={title}
                className={`group flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:p-5 ${
                  index === 1 ? "lg:ml-8" : ""
                }`}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#2A3F9E] shadow-sm">
                  <Icon className="size-5" aria-hidden="true" />
                </span>

                <div className="min-w-0">
                  <p className="text-base font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
