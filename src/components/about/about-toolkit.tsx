// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   Database,
//   LayoutTemplate,
//   Monitor,
//   Server,
//   Smartphone,
//   Sparkles,
//   type LucideIcon,
// } from "lucide-react";

// type ToolGroup = {
//   title: string;
//   description: string;
//   tools: string[];
//   Icon: LucideIcon;
//   note?: string;
// };

// const groups: ToolGroup[] = [
//   {
//     title: "Frontend",
//     description: "Fast, responsive interfaces people enjoy using.",
//     tools: ["Next.js", "TypeScript"],
//     Icon: Monitor,
//   },
//   {
//     title: "Backend",
//     description: "The APIs and logic that power a product.",
//     tools: ["Node.js", "Express", "AdonisJS"],
//     Icon: Server,
//   },
//   {
//     title: "Mobile apps",
//     description: "Apps for Android and iOS from one codebase.",
//     tools: ["Flutter", "Firebase"],
//     Icon: Smartphone,
//   },
//   {
//     title: "Databases",
//     description: "Storing and querying data, SQL and NoSQL.",
//     tools: ["SQL", "PostgreSQL", "MongoDB", "Prisma"],
//     Icon: Database,
//   },
//   {
//     title: "Site builders",
//     description: "Quick, editable sites when that is the better fit.",
//     tools: ["WordPress", "Wix Studio"],
//     Icon: LayoutTemplate,
//   },
//   {
//     title: "Always learning",
//     description:
//       "If a project needs something I don’t know yet, I learn it and build it. The stack is a starting point, not a limit.",
//     tools: [],
//     Icon: Sparkles,
//     note: "Curious mind. Practical builder.",
//   },
// ];

// const AUTO_SCROLL_MS = 3500;
// const RESUME_DELAY_MS = 6000;

// export default function AboutToolkit() {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const activeRef = useRef(0);
//   const pausedUntilRef = useRef(0);
//   const [active, setActive] = useState(0);

//   const scrollToIndex = useCallback((index: number) => {
//     const scroller = scrollerRef.current;
//     const card = scroller?.children[index] as HTMLElement | undefined;
//     if (!scroller || !card) return;

//     scroller.scrollTo({
//       left: card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2,
//       behavior: "smooth",
//     });
//   }, []);

//   // Track which card is centred while the user swipes
//   const handleScroll = useCallback(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const center = scroller.scrollLeft + scroller.clientWidth / 2;
//     let nearest = 0;
//     let smallestGap = Infinity;

//     Array.from(scroller.children).forEach((child, index) => {
//       const el = child as HTMLElement;
//       const gap = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
//       if (gap < smallestGap) {
//         smallestGap = gap;
//         nearest = index;
//       }
//     });

//     activeRef.current = nearest;
//     setActive(nearest);
//   }, []);

//   // Auto-advance on small screens only; stops when the user touches it
//   useEffect(() => {
//     const desktop = window.matchMedia("(min-width: 640px)");
//     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

//     const timer = window.setInterval(() => {
//       if (desktop.matches || reduceMotion.matches) return;
//       if (document.hidden || Date.now() < pausedUntilRef.current) return;

//       scrollToIndex((activeRef.current + 1) % groups.length);
//     }, AUTO_SCROLL_MS);

//     return () => window.clearInterval(timer);
//   }, [scrollToIndex]);

//   const pause = () => {
//     pausedUntilRef.current = Date.now() + RESUME_DELAY_MS;
//   };

//   return (
//     <section className="container py-12 sm:py-16" aria-labelledby="toolkit">
//       <div className="mx-auto max-w-2xl text-center">
//         <h2
//           id="toolkit"
//           className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
//         >
//           Toolkit
//           <span className="text-[var(--accent)]">.</span>
//         </h2>
//         <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
//           The tools I use most, and the habit behind them: I pick the right tool
//           for the job, not the other way round.
//         </p>
//       </div>

//       {/* Phones: swipeable row that moves on its own. sm and up: normal grid. */}
//       <div
//         ref={scrollerRef}
//         onScroll={handleScroll}
//         onTouchStart={pause}
//         onPointerDown={pause}
//         onMouseEnter={pause}
//         onFocusCapture={pause}
//         aria-roledescription="carousel"
//         aria-label="Toolkit"
//         className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
//       >
//         {groups.map(({ title, description, tools, Icon, note }) => (
//           <article
//             key={title}
//             className="group flex w-[82%] shrink-0 snap-center flex-col items-center rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center transition duration-300 sm:w-auto sm:shrink sm:p-7 sm:hover:-translate-y-0.5 sm:hover:border-[var(--primary)]"
//           >
//             <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-muted)] text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
//               <Icon className="size-6" aria-hidden="true" />
//             </span>

//             <h3 className="mt-4 text-lg font-semibold tracking-tight">
//               {title}
//             </h3>

//             <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--foreground)] opacity-75">
//               {description}
//             </p>

//             {tools.length > 0 && (
//               <ul
//                 className="mt-5 flex flex-wrap justify-center gap-2"
//                 aria-label={`${title} tools`}
//               >
//                 {tools.map((tool) => (
//                   <li
//                     key={tool}
//                     className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3.5 py-1.5 text-sm font-medium text-[var(--primary)]"
//                   >
//                     {tool}
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {note && (
//               <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
//                 {note}
//               </p>
//             )}
//           </article>
//         ))}
//       </div>

//       {/* Dots: phones only */}
//       <div
//         className="mt-4 flex items-center justify-center gap-2.5 sm:hidden"
//         role="group"
//         aria-label="Choose toolkit card"
//       >
//         {groups.map(({ title }, index) => (
//           <button
//             key={title}
//             type="button"
//             onClick={() => {
//               pause();
//               scrollToIndex(index);
//             }}
//             aria-label={`Show ${title}`}
//             aria-current={active === index ? "true" : undefined}
//             className={`size-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
//               active === index
//                 ? "scale-110 bg-[var(--primary)]"
//                 : "bg-[var(--border)]"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Database,
  LayoutTemplate,
  Monitor,
  Server,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type ToolGroup = {
  number: string;
  title: string;
  description: string;
  tools: string[];
  Icon: LucideIcon;
  note?: string;
};

const groups: ToolGroup[] = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive, accessible interfaces and thoughtful digital experiences.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    Icon: Monitor,
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing application logic, APIs, and services that power digital products.",
    tools: ["Node.js", "Express", "NestJS", "AdonisJS"],
    Icon: Server,
  },
  {
    number: "03",
    title: "Mobile apps",
    description:
      "Creating mobile experiences and connecting apps with cloud services.",
    tools: ["Flutter", "Firebase"],
    Icon: Smartphone,
  },
  {
    number: "04",
    title: "Databases",
    description:
      "Designing data structures and working with relational and document databases.",
    tools: ["PostgreSQL", "MongoDB", "Prisma", "SQL"],
    Icon: Database,
  },
  {
    number: "05",
    title: "Website platforms",
    description:
      "Choosing flexible platforms for websites that need straightforward content management.",
    tools: ["WordPress", "Wix Studio"],
    Icon: LayoutTemplate,
  },
  {
    number: "06",
    title: "Always learning",
    description:
      "I learn new tools when a project calls for them. Good engineering is about solving the problem, not simply choosing a familiar stack.",
    tools: [],
    Icon: Sparkles,
    note: "Curious mind. Practical builder.",
  },
];

const AUTO_SCROLL_MS = 3500;
const RESUME_DELAY_MS = 6000;

export default function AboutToolkit() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const pausedUntilRef = useRef(0);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[index] as HTMLElement | undefined;

    if (!scroller || !card) return;

    scroller.scrollTo({
      left: card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let nearest = 0;
    let smallestGap = Infinity;

    Array.from(scroller.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const gap = Math.abs(
        element.offsetLeft + element.clientWidth / 2 - center,
      );

      if (gap < smallestGap) {
        smallestGap = gap;
        nearest = index;
      }
    });

    activeRef.current = nearest;
    setActive((current) => (current === nearest ? current : nearest));
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const timer = window.setInterval(() => {
      if (!mobile.matches || reduceMotion.matches) return;
      if (document.hidden || Date.now() < pausedUntilRef.current) return;

      scrollToIndex((activeRef.current + 1) % groups.length);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [scrollToIndex]);

  const pause = useCallback(() => {
    pausedUntilRef.current = Date.now() + RESUME_DELAY_MS;
  }, []);

  return (
    <section
      className="border-t border-[var(--border)]"
      aria-labelledby="toolkit"
    >
      <div className="container py-8 sm:py-12">
        {/* Section introduction */}
        <div className="grid gap-5 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Technologies I use
            </p>

            <h2
              id="toolkit"
              className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
            >
              My toolkit
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm leading-7 text-[var(--foreground)] opacity-85 sm:text-base sm:leading-8">
              I work across frontend, backend, mobile, and database technologies
              to build useful digital products. I choose tools based on the
              needs of the project, with a focus on practical solutions,
              maintainability, and continuous learning.
            </p>

            <div
              className="mt-5 h-px w-16 bg-[var(--accent)]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Mobile carousel / desktop grid */}
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onTouchStart={pause}
          onPointerDown={pause}
          onMouseEnter={pause}
          onFocusCapture={pause}
          aria-roledescription="carousel"
          aria-label="Technologies and tools"
          className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
        >
          {groups.map(({ number, title, description, tools, Icon, note }) => (
            <article
              key={title}
              className="group flex w-[82%] shrink-0 snap-center flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors duration-200 hover:border-[var(--primary)] sm:w-auto sm:shrink sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-[var(--primary)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon
                    className="size-5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>

                <span className="text-xs font-medium tracking-[0.12em] text-[var(--muted)]">
                  {number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-75">
                {description}
              </p>

              {tools.length > 0 && (
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`${title} tools`}
                >
                  {tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--primary)]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              )}

              {note && (
                <p className="mt-5 border-t border-[var(--border)] pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {note}
                </p>
              )}

              <div className="mt-auto flex justify-end pt-4">
                <ArrowUpRight
                  className="size-4 text-[var(--muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Mobile pagination */}
        <div
          className="mt-4 flex items-center justify-center gap-2.5 sm:hidden"
          role="group"
          aria-label="Choose toolkit card"
        >
          {groups.map(({ title }, index) => (
            <button
              key={title}
              type="button"
              onClick={() => {
                pause();
                scrollToIndex(index);
              }}
              aria-label={`Show ${title}`}
              aria-current={active === index ? "true" : undefined}
              className={`size-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                active === index
                  ? "scale-110 bg-[var(--primary)]"
                  : "bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
