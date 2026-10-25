// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// type Role = {
//   title: string;
//   organization: string;
//   place: string;
//   // Add real dates, e.g. "2025 – Present". Leave undefined to hide the line.
//   period?: string;
//   description: string;
//   current?: boolean;
// };

// const roles: Role[] = [
//   {
//     title: "Software Engineer",
//     organization: "Udayasa Foundation",
//     place: "Head office, Panchkula",
//     current: true,
//     description:
//       "Designing and building the foundation’s websites and digital products, from the first idea to a working release.",
//   },
//   {
//     title: "Project Coordinator",
//     organization: "Udayasa Foundation",
//     place: "Chamba",
//     description:
//       "Coordinated project work on the ground, which taught me what real users and communities need from technology.",
//   },
// ];

// export default function Experience() {
//   return (
//     <section className="container py-12 sm:py-16" aria-labelledby="experience">
//       <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
//         <div className="max-w-2xl">
//           <h2
//             id="experience"
//             className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
//           >
//             Experience
//             <span className="text-[var(--accent)]">.</span>
//           </h2>
//           <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
//             I started in the field and moved into building the tools.
//           </p>
//         </div>

//         <Link
//           href="/experience"
//           className="button button-secondary group w-fit"
//         >
//           Full experience
//           <ArrowUpRight
//             className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//             aria-hidden="true"
//           />
//         </Link>
//       </div>

//       <ol className="relative max-w-3xl border-l-2 border-[var(--border)] pl-6 sm:pl-8">
//         {roles.map(
//           ({ title, organization, place, period, description, current }) => (
//             <li key={`${title}-${place}`} className="relative pb-10 last:pb-0">
//               {/* Timeline dot */}
//               <span
//                 className={`absolute -left-[33px] top-1.5 size-4 rounded-full border-4 border-[var(--background)] sm:-left-[41px] ${
//                   current ? "bg-[var(--accent)]" : "bg-[var(--primary)]"
//                 }`}
//                 aria-hidden="true"
//               />

//               <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//                 <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
//                   {title}
//                 </h3>
//                 {current && (
//                   <span className="rounded-full bg-[var(--surface-muted)] px-3 py-0.5 text-xs font-semibold text-[var(--primary)]">
//                     Current
//                   </span>
//                 )}
//               </div>

//               <p className="mt-1 text-sm font-medium text-[var(--primary)]">
//                 {organization} · {place}
//               </p>

//               {period && (
//                 <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">
//                   {period}
//                 </p>
//               )}

//               <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80">
//                 {description}
//               </p>
//             </li>
//           ),
//         )}
//       </ol>
//     </section>
//   );
// }

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Role = {
  title: string;
  organization: string;
  place: string;
  period?: string;
  description: string;
  current?: boolean;
};

const roles: Role[] = [
  {
    title: "Software Engineer",
    organization: "Udayasa Foundation",
    place: "Head office, Panchkula",
    period: "Mar 2026 – Present",
    current: true,
    description:
      "Designing and building the foundation’s websites and digital products, from the first idea to a working release.",
  },
  {
    title: "Project Coordinator",
    organization: "Udayasa Foundation",
    place: "Chamba",
    period: "Oct 2025 – Feb 2026",
    description:
      "Coordinated project work on the ground, which taught me what real users and communities need from technology.",
  },
];

export default function Experience() {
  return (
    <section
      className="border-t border-[var(--border)]"
      aria-labelledby="experience"
    >
      <div className="container py-12 sm:py-16">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="experience"
            className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
          >
            Experience
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
            I started in the field and moved into building the tools.
          </p>

          <Link
            href="/experience"
            className="button button-secondary group mt-5 inline-flex w-fit items-center gap-2"
          >
            Full experience
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Alternating timeline without cards or background boxes */}
        <ol className="relative mx-auto mt-10 max-w-4xl">
          {/* Center timeline */}
          <div
            className="absolute bottom-2 left-4 top-2 w-px bg-[var(--border)] md:left-1/2"
            aria-hidden="true"
          />

          {roles.map(
            (
              { title, organization, place, period, description, current },
              index,
            ) => (
              <li
                key={`${title}-${place}`}
                className="relative pb-10 pl-12 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
              >
                {/* Timeline marker */}
                <span
                  className={`absolute left-4 top-2.5 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--background)] ring-1 md:left-1/2 ${
                    current
                      ? "bg-[var(--accent)] ring-[var(--accent)]"
                      : "bg-[var(--primary)] ring-[var(--primary)]"
                  }`}
                  aria-hidden="true"
                >
                  <span className="size-2 rounded-full bg-[var(--background)]" />
                </span>

                {/* Experience details — no card background or border */}
                <div
                  className={`min-w-0 ${
                    index % 2 === 1
                      ? "md:col-start-2 md:row-start-1"
                      : "md:col-start-1 md:row-start-1 md:text-right"
                  }`}
                >
                  <div
                    className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
                      {title}
                    </h3>

                    {current && (
                      <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                    {organization}
                  </p>

                  <p className="mt-1 text-sm text-[var(--muted)]">{place}</p>

                  {period && (
                    <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">
                      {period}
                    </p>
                  )}

                  <p
                    className={`mt-3 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </li>
            ),
          )}
        </ol>
      </div>
    </section>
  );
}
