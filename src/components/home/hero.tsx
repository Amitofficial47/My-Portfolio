// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ArrowUpRight,
//   Code2,
//   Layers3,
//   UsersRound,
// } from "lucide-react";

// const slides = [
//   {
//     eyebrow: "Behind the code",
//     title: "Amit Kumar",
//     description: "Software Engineer · Full-Stack Developer",
//   },
//   {
//     eyebrow: "My approach",
//     title: "Curious mind. Practical builder.",
//     description:
//       "Turning complex ideas into useful digital products for real people.",
//   },
// ];

// // Short, factual outcomes instead of vague labels
// const focusAreas = [
//   {
//     title: "Development",
//     description: "Flutter, Next.js, Firebase",
//     Icon: Code2,
//   },
//   {
//     title: "Digital products",
//     description: "Ideas to launch",
//     Icon: Layers3,
//   },
//   {
//     title: "Real impact",
//     description: "Built for NGOs & communities",
//     Icon: UsersRound,
//   },
// ];

// export default function Hero() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const goToSlide = useCallback((index: number) => {
//     setActiveSlide((index + slides.length) % slides.length);
//   }, []);

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = window.setInterval(() => {
//       setActiveSlide((current) => (current + 1) % slides.length);
//     }, 5000);

//     return () => window.clearInterval(timer);
//   }, [activeSlide, isPaused]);

//   const currentSlide = slides[activeSlide];

//   return (
//     <section className="container py-6 sm:py-10 lg:py-12">
//       <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
//         {/* Main introduction: centered on mobile, left-aligned on desktop */}
//         <div className="order-1 min-w-0 text-center lg:order-1 lg:text-left">
//           <h1 className="mx-auto max-w-2xl text-3xl font-medium leading-[1.16] tracking-[-0.04em] sm:text-4xl lg:mx-0 lg:text-5xl">
//             I build apps and websites
//             <br className="hidden sm:block" /> that{" "}
//             <span className="font-semibold text-[var(--primary)]">
//               matter<span className="text-[var(--accent)]">.</span>
//             </span>
//           </h1>

//           {/* Darker, more specific paragraph */}
//           <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0">
//             For NGOs, gig workers and climate-tech teams — from a welfare-scheme
//             app to a carbon-farming platform. Full-stack, built end to end.
//           </p>

//           <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
//             <Link href="/projects" className="button button-primary group">
//               Explore my work
//               <ArrowUpRight
//                 className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 aria-hidden="true"
//               />
//             </Link>

//             <Link href="/contact" className="button button-secondary">
//               Get in touch
//             </Link>
//           </div>

//           {/* One line of proof */}
//           <p className="mt-5 text-xs text-[var(--muted)] sm:text-sm">
//             Built:{" "}
//             <span className="font-medium text-[var(--foreground)]">Ashray</span>
//             {" · "}
//             <span className="font-medium text-[var(--foreground)]">
//               Ecohaq Carbon
//             </span>
//             {" · "}
//             <span className="font-medium text-[var(--foreground)]">
//               Udayasa Foundation
//             </span>
//           </p>
//         </div>

//         {/* Carousel: below buttons on mobile, right on desktop */}
//         <div
//           className="relative order-2 mx-auto w-full max-w-xl min-w-0 lg:order-2 lg:max-w-none"
//           aria-roledescription="carousel"
//           aria-label="Introduction carousel"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           onFocusCapture={() => setIsPaused(true)}
//           onBlurCapture={(event) => {
//             if (
//               !event.currentTarget.contains(event.relatedTarget as Node | null)
//             ) {
//               setIsPaused(false);
//             }
//           }}
//         >
//           {/* Slide label and counter */}
//           <div className="mb-2 flex flex-col items-center gap-1 text-center">
//             <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs">
//               {currentSlide.eyebrow}
//             </p>

//             <span
//               className="text-[11px] tabular-nums text-[var(--muted)] sm:text-xs"
//               aria-live="polite"
//               aria-atomic="true"
//             >
//               {String(activeSlide + 1).padStart(2, "0")} / 02
//             </span>
//           </div>

//           {/* Narrow stage so the arrows sit close to the content */}
//           <div className="relative mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center sm:min-h-[400px] lg:min-h-[460px]">
//             {/* Slide 1: portrait on a soft arch */}
//             {activeSlide === 0 && (
//               <div
//                 key="portrait"
//                 className="animate-fade-up flex w-full flex-col items-center justify-center py-3 text-center"
//               >
//                 <div className="relative w-full max-w-[260px] sm:max-w-[320px]">
//                   {/* Arch shape that grounds the cut-out photo */}
//                   <div
//                     className="absolute bottom-0 left-1/2 h-[78%] w-[88%] -translate-x-1/2 rounded-t-full rounded-b-3xl bg-[var(--surface-muted)]"
//                     aria-hidden="true"
//                   />
//                   <Image
//                     src="/images/portrait/amit-kumar2.png"
//                     alt="Amit Kumar"
//                     width={900}
//                     height={1200}
//                     priority
//                     className="relative z-[1] mx-auto h-auto max-h-[340px] w-auto max-w-full object-contain sm:max-h-[440px]"
//                     sizes="(max-width: 640px) 75vw, 320px"
//                   />
//                 </div>

//                 <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl">
//                   {currentSlide.title}
//                 </h2>

//                 <p className="mt-1 text-xs text-[var(--muted)] sm:mt-2 sm:text-sm">
//                   {currentSlide.description}
//                 </p>
//               </div>
//             )}

//             {/* Slide 2: Minimal text-only design */}
//             {activeSlide === 1 && (
//               <div
//                 key="approach"
//                 className="animate-fade-up flex w-full flex-col items-center px-10 py-8 text-center sm:px-12 sm:py-10"
//               >
//                 <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)] sm:mb-7 sm:text-xs">
//                   Thoughtful by nature
//                 </p>

//                 <h2 className="text-3xl font-medium leading-[1.2] tracking-[-0.04em] sm:text-4xl">
//                   Curious mind.
//                   <br />
//                   <span className="font-semibold text-[var(--primary)]">
//                     Practical builder
//                   </span>
//                   <span className="text-[var(--accent)]">.</span>
//                 </h2>

//                 <div className="my-5 h-1 w-14 rounded-full bg-[var(--accent)] sm:my-6" />

//                 <p className="max-w-sm text-sm leading-7 text-[var(--muted)] sm:text-base">
//                   I turn complex ideas into clear, useful digital products with
//                   a focus on people, purpose, and real-world needs.
//                 </p>

//                 <Link
//                   href="/about"
//                   className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)] sm:mt-6"
//                 >
//                   More about me
//                   <ArrowUpRight className="size-4" aria-hidden="true" />
//                 </Link>
//               </div>
//             )}

//             {/* Previous slide */}
//             <button
//               type="button"
//               onClick={() => goToSlide(activeSlide - 1)}
//               aria-label="Previous slide"
//               className="absolute left-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] sm:size-11"
//             >
//               <ArrowLeft className="size-4 sm:size-5" aria-hidden="true" />
//             </button>

//             {/* Next slide */}
//             <button
//               type="button"
//               onClick={() => goToSlide(activeSlide + 1)}
//               aria-label="Next slide"
//               className="absolute right-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] sm:size-11"
//             >
//               <ArrowRight className="size-4 sm:size-5" aria-hidden="true" />
//             </button>
//           </div>

//           {/* Slide indicators */}
//           <div
//             className="mt-3 flex items-center justify-center gap-2.5 sm:mt-5"
//             role="group"
//             aria-label="Choose carousel slide"
//           >
//             {slides.map((slide, index) => (
//               <button
//                 key={slide.eyebrow}
//                 type="button"
//                 onClick={() => goToSlide(index)}
//                 aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
//                 aria-current={activeSlide === index ? "true" : undefined}
//                 className={`size-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
//                   activeSlide === index
//                     ? "scale-110 bg-[var(--primary)]"
//                     : "bg-[var(--border)] hover:bg-[var(--muted)]"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Three focus areas: full width below both columns on desktop */}
//         <div className="order-3 grid grid-cols-3 border-t border-[var(--border)] pt-5 sm:pt-7 lg:col-span-2 lg:mt-1">
//           {focusAreas.map(({ title, description, Icon }, index) => (
//             <div
//               key={title}
//               className={`flex min-w-0 flex-col items-center px-1 text-center sm:px-4 ${
//                 index > 0 ? "border-l border-[var(--border)]" : ""
//               }`}
//             >
//               <div className="mb-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)] sm:size-12">
//                 <Icon className="size-5 sm:size-6" aria-hidden="true" />
//               </div>

//               <p className="text-xs font-semibold leading-5 text-[var(--foreground)] sm:text-sm">
//                 {title}
//               </p>

//               <p className="mt-1 text-[11px] leading-5 text-[var(--muted)] sm:text-xs">
//                 {description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  UsersRound,
} from "lucide-react";

const slides = [
  {
    eyebrow: "Behind the code",
    title: "Amit Kumar",
    description: "Software Engineer · Full-Stack Developer",
  },
  {
    eyebrow: "My approach",
    title: "Curious mind. Practical builder.",
    description:
      "Turning complex ideas into useful digital products for real people.",
  },
];

// Short, factual outcomes instead of vague labels
const focusAreas = [
  {
    title: "Development",
    description: "Flutter, Next.js, Firebase",
    Icon: Code2,
  },
  {
    title: "Backend & data",
    description: "MongoDB, Prisma, AdonisJS",
    Icon: Database,
  },
  { title: "Digital products", description: "Ideas to launch", Icon: Layers3 },
  {
    title: "Real impact",
    description: "Built for NGOs & communities",
    Icon: UsersRound,
  },
];

// Set this to your Nearby Digital website address once it is live.
// While it is null, the founder line shows as plain text (no dead link).
const NEARBY_DIGITAL_URL: string | null = null;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeSlide, isPaused]);

  const currentSlide = slides[activeSlide];

  return (
    <section className="container py-6 sm:py-10 lg:py-12">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Main introduction: centered on mobile, left-aligned on desktop */}
        <div className="order-1 min-w-0 text-center lg:order-1 lg:text-left">
          <h1 className="mx-auto max-w-2xl text-3xl font-medium leading-[1.16] tracking-[-0.04em] sm:text-4xl lg:mx-0 lg:text-5xl">
            I build apps and websites
            <br className="hidden sm:block" /> that{" "}
            <span className="font-semibold text-[var(--primary)]">
              matter<span className="text-[var(--accent)]">.</span>
            </span>
          </h1>

          {/* Darker, more specific paragraph */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0">
            For NGOs, gig workers and climate-tech teams — from a welfare-scheme
            app to a carbon-farming platform. Full-stack, built end to end.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
            <Link href="/projects" className="button button-primary group">
              Explore my work
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link href="/contact" className="button button-secondary">
              Get in touch
            </Link>
          </div>

          {/* One line of proof */}
          <p className="mt-5 text-xs text-[var(--muted)] sm:text-sm">
            Built:{" "}
            <span className="font-medium text-[var(--foreground)]">Ashray</span>
            {" · "}
            <span className="font-medium text-[var(--foreground)]">
              Ecohaq Carbon
            </span>
            {" · "}
            <span className="font-medium text-[var(--foreground)]">
              Udayasa Foundation
            </span>
          </p>

          {/* Founder line */}
          <p className="mt-2 text-xs text-[var(--muted)] sm:text-sm">
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

        {/* Carousel: below buttons on mobile, right on desktop */}
        <div
          className="relative order-2 mx-auto w-full max-w-xl min-w-0 lg:order-2 lg:max-w-none"
          aria-roledescription="carousel"
          aria-label="Introduction carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget as Node | null)
            ) {
              setIsPaused(false);
            }
          }}
        >
          {/* Slide label and counter */}
          <div className="mb-2 flex flex-col items-center gap-1 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs">
              {currentSlide.eyebrow}
            </p>

            <span
              className="text-[11px] tabular-nums text-[var(--muted)] sm:text-xs"
              aria-live="polite"
              aria-atomic="true"
            >
              {String(activeSlide + 1).padStart(2, "0")} / 02
            </span>
          </div>

          {/* Narrow stage so the arrows sit close to the content */}
          <div className="relative mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center sm:min-h-[400px] lg:min-h-[460px]">
            {/* Slide 1: portrait on a soft arch */}
            {activeSlide === 0 && (
              <div
                key="portrait"
                className="animate-fade-up flex w-full flex-col items-center justify-center py-3 text-center"
              >
                <div className="relative w-full max-w-[260px] sm:max-w-[320px]">
                  {/* Arch shape that grounds the cut-out photo */}
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
                    className="relative z-[1] mx-auto h-auto max-h-[340px] w-auto max-w-full object-contain sm:max-h-[440px]"
                    sizes="(max-width: 640px) 75vw, 320px"
                  />
                </div>

                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl">
                  {currentSlide.title}
                </h2>

                <p className="mt-1 text-xs text-[var(--muted)] sm:mt-2 sm:text-sm">
                  {currentSlide.description}
                </p>
              </div>
            )}

            {/* Slide 2: Minimal text-only design */}
            {activeSlide === 1 && (
              <div
                key="approach"
                className="animate-fade-up flex w-full flex-col items-center px-10 py-8 text-center sm:px-12 sm:py-10"
              >
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)] sm:mb-7 sm:text-xs">
                  Thoughtful by nature
                </p>

                <h2 className="text-3xl font-medium leading-[1.2] tracking-[-0.04em] sm:text-4xl">
                  Curious mind.
                  <br />
                  <span className="font-semibold text-[var(--primary)]">
                    Practical builder
                  </span>
                  <span className="text-[var(--accent)]">.</span>
                </h2>

                <div className="my-5 h-1 w-14 rounded-full bg-[var(--accent)] sm:my-6" />

                <p className="max-w-sm text-sm leading-7 text-[var(--muted)] sm:text-base">
                  I turn complex ideas into clear, useful digital products with
                  a focus on people, purpose, and real-world needs.
                </p>

                <Link
                  href="/about"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)] sm:mt-6"
                >
                  More about me
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            )}

            {/* Previous slide */}
            <button
              type="button"
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Previous slide"
              className="absolute left-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] sm:size-11"
            >
              <ArrowLeft className="size-4 sm:size-5" aria-hidden="true" />
            </button>

            {/* Next slide */}
            <button
              type="button"
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Next slide"
              className="absolute right-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] sm:size-11"
            >
              <ArrowRight className="size-4 sm:size-5" aria-hidden="true" />
            </button>
          </div>

          {/* Slide indicators */}
          <div
            className="mt-3 flex items-center justify-center gap-2.5 sm:mt-5"
            role="group"
            aria-label="Choose carousel slide"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`size-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                  activeSlide === index
                    ? "scale-110 bg-[var(--primary)]"
                    : "bg-[var(--border)] hover:bg-[var(--muted)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Three focus areas: full width below both columns on desktop */}
        <div className="order-3 grid grid-cols-2 gap-y-6 border-t border-[var(--border)] pt-5 sm:grid-cols-4 sm:pt-7 lg:col-span-2 lg:mt-1">
          {focusAreas.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className={`flex min-w-0 flex-col items-center px-1 text-center sm:px-4 ${
                index % 2 === 1 ? "border-l border-[var(--border)]" : ""
              } ${index > 0 ? "sm:border-l sm:border-[var(--border)]" : ""}`}
            >
              <div className="mb-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)] sm:size-12">
                <Icon className="size-5 sm:size-6" aria-hidden="true" />
              </div>

              <p className="text-xs font-semibold leading-5 text-[var(--foreground)] sm:text-sm">
                {title}
              </p>

              <p className="mt-1 text-[11px] leading-5 text-[var(--muted)] sm:text-xs">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
