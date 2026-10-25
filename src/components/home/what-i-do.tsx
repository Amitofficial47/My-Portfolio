// import { Smartphone, Monitor, Database, ArrowUpRight } from "lucide-react";
// import Link from "next/link";

// const capabilities = [
//   {
//     number: "01",
//     title: "Mobile Development",
//     description:
//       "Building mobile applications with practical features and connected backend services.",
//     technologies: ["Flutter", "Firebase"],
//     Icon: Smartphone,
//   },
//   {
//     number: "02",
//     title: "Web Development",
//     description:
//       "Creating responsive websites and digital platforms with a focus on usability and performance.",
//     technologies: ["Next.js", "React", "TypeScript"],
//     Icon: Monitor,
//   },
//   {
//     number: "03",
//     title: "Backend Development",
//     description:
//       "Developing APIs, data models, and server-side services that power digital products.",
//     technologies: ["Node.js", "NestJS", "MongoDB", "PostgreSQL"],
//     Icon: Database,
//   },
// ];

// export default function WhatIDo() {
//   return (
//     <section
//       className="section bg-[var(--surface)]"
//       aria-labelledby="what-i-do-heading"
//     >
//       <div className="container">
//         <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <p className="eyebrow">Capabilities</p>

//             <h2
//               id="what-i-do-heading"
//               className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
//             >
//               What I do
//               <span className="text-[var(--accent)]">.</span>
//             </h2>

//             <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
//               From user-facing interfaces to backend services, I build digital
//               products from the ground up.
//             </p>
//           </div>

//           <Link
//             href="/projects"
//             className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
//           >
//             Explore my work
//             <ArrowUpRight className="size-4" aria-hidden="true" />
//           </Link>
//         </div>

//         <div className="grid gap-4 md:grid-cols-3">
//           {capabilities.map(
//             ({ number, title, description, technologies, Icon }) => (
//               <article
//                 key={number}
//                 className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 transition-colors duration-200 hover:border-[var(--primary)] sm:p-6 lg:p-7"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-[var(--primary)] transition-transform duration-200 group-hover:-translate-y-0.5">
//                     <Icon className="size-5" aria-hidden="true" />
//                   </div>

//                   <span className="text-xs font-medium tabular-nums text-[var(--muted)]">
//                     {number}
//                   </span>
//                 </div>

//                 <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
//                   {title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-[var(--foreground)] opacity-80">
//                   {description}
//                 </p>

//                 <ul
//                   className="mt-5 flex flex-wrap gap-2"
//                   aria-label={`${title} technologies`}
//                 >
//                   {technologies.map((technology) => (
//                     <li
//                       key={technology}
//                       className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--primary)]"
//                     >
//                       {technology}
//                     </li>
//                   ))}
//                 </ul>
//               </article>
//             ),
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Database, Globe, Smartphone, type LucideIcon } from "lucide-react";

type Skill = {
  title: string;
  description: string;
  tools: string[];
  Icon: LucideIcon;
};

const skills: Skill[] = [
  {
    title: "Mobile apps",
    description:
      "Cross-platform apps for Android and iOS, from the first idea to the store.",
    tools: ["Flutter", "Firebase"],
    Icon: Smartphone,
  },
  {
    title: "Web apps & websites",
    description:
      "Fast, responsive websites and web apps that are easy to use and easy to find.",
    tools: ["Next.js", "TypeScript"],
    Icon: Globe,
  },
  {
    title: "Backend & data",
    description:
      "The APIs, databases and logins behind a product, so it keeps working as it grows.",
    tools: ["MongoDB", "Prisma", "AdonisJS"],
    Icon: Database,
  },
];

export default function WhatIDo() {
  return (
    <section className="container py-12 sm:py-16" aria-labelledby="what-i-do">
      <div className="mb-8 max-w-2xl sm:mb-10">
        <h2
          id="what-i-do"
          className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
        >
          What I do
          <span className="text-[var(--accent)]">.</span>
        </h2>
        <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base">
          I build the whole product, from the screen a person taps to the
          database behind it.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {skills.map(({ title, description, tools, Icon }) => (
          <article
            key={title}
            className="flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--primary)] sm:p-7"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)]">
              <Icon className="size-6" aria-hidden="true" />
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-80">
              {description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--primary)]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
