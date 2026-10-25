// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowUpRight,
//   BookOpen,
//   Compass,
//   Download,
//   GraduationCap,
//   Users,
//   Wrench,
//   type LucideIcon,
// } from "lucide-react";

// // Adjust this import to wherever your ContactCta file lives.
// import ContactCta from "@/components/home/contact-cta";

// export const metadata: Metadata = {
//   title: "About | Amit Kumar",
//   description:
//     "Software engineer and former project coordinator, building apps and websites for NGOs, workers and climate teams.",
// };

// // Put your resume in /public (for example /public/resume.pdf) and set this to
// // "/resume.pdf". While it is null, the download button is hidden.
// const RESUME_URL: string | null = null;

// const principles: { title: string; description: string; Icon: LucideIcon }[] = [
//   {
//     title: "People first",
//     description:
//       "Talking to teachers and students taught me to start with the person using the product, not the technology.",
//     Icon: Users,
//   },
//   {
//     title: "Practical over fancy",
//     description:
//       "A tool that works on a basic tablet in a village school beats a clever one that nobody can use.",
//     Icon: Wrench,
//   },
//   {
//     title: "Teach as I build",
//     description:
//       "I enjoy explaining how technology works, so the people I build for can use it with confidence.",
//     Icon: BookOpen,
//   },
// ];

// const toolkit = [
//   { group: "Mobile", items: ["Flutter", "Firebase"] },
//   { group: "Web", items: ["Next.js", "TypeScript"] },
//   { group: "Backend & data", items: ["MongoDB", "Prisma", "AdonisJS"] },
// ];

// const education = [
//   { degree: "MCA", school: "Himachal Pradesh University", score: "CGPA 8.67" },
//   { degree: "BCA", school: "Himachal Pradesh University", score: "CGPA 7.96" },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       {/* 1. Intro */}
//       <section
//         className="container py-10 sm:py-16"
//         aria-labelledby="about-title"
//       >
//         <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
//           <div className="text-center lg:text-left">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
//               About me
//             </p>

//             <h1
//               id="about-title"
//               className="mt-3 text-3xl font-medium leading-[1.14] tracking-[-0.04em] sm:text-5xl"
//             >
//               I’m Amit, a software engineer who started in the{" "}
//               <span className="font-semibold text-[var(--primary)]">
//                 field
//                 <span className="text-[var(--accent)]">.</span>
//               </span>
//             </h1>

//             <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-8 lg:mx-0">
//               I hold an MCA and work as a Software Engineer at Udayasa
//               Foundation. Before writing code for the foundation, I visited
//               schools to set up digital classrooms, so I know what technology
//               looks like when real people use it.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
//               <Link href="/contact" className="button button-primary group">
//                 Let’s talk
//                 <ArrowUpRight
//                   className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                   aria-hidden="true"
//                 />
//               </Link>

//               {RESUME_URL && (
//                 <a
//                   href={RESUME_URL}
//                   download
//                   className="button button-secondary"
//                 >
//                   <Download className="size-4" aria-hidden="true" />
//                   Download resume
//                 </a>
//               )}
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px]">
//             <div
//               className="absolute bottom-0 left-1/2 h-[78%] w-[88%] -translate-x-1/2 rounded-t-full rounded-b-3xl bg-[var(--surface-muted)]"
//               aria-hidden="true"
//             />
//             <Image
//               src="/images/portrait/amit-kumar2.png"
//               alt="Amit Kumar"
//               width={900}
//               height={1200}
//               priority
//               className="relative z-[1] mx-auto h-auto max-h-[420px] w-auto max-w-full object-contain"
//               sizes="(max-width: 640px) 75vw, 320px"
//             />
//           </div>
//         </div>
//       </section>

//       {/* 2. My story */}
//       <section
//         className="border-t border-[var(--border)]"
//         aria-labelledby="my-story"
//       >
//         <div className="container py-12 sm:py-16">
//           <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
//             <h2
//               id="my-story"
//               className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
//             >
//               My story
//               <span className="text-[var(--accent)]">.</span>
//             </h2>

//             <div className="max-w-2xl space-y-5 text-sm leading-7 text-[var(--foreground)] opacity-90 sm:text-base sm:leading-8">
//               <p>
//                 I come from an IT background, and I completed my Master of
//                 Computer Applications. My first role afterwards was as a Project
//                 Coordinator at Udayasa Foundation, running IT projects: a
//                 digital library and a digital classroom for schools.
//               </p>
//               <p>
//                 That meant going to the schools myself. I showed teachers how
//                 the computers worked, set up 24 tablets in every school with MDM
//                 to manage them, built the digital library, and gave orientations
//                 to teachers and students. I also got to visit new places, meet
//                 different people and learn from every school I walked into.
//               </p>
//               <p>
//                 When the project wrapped up, the foundation offered me a
//                 Software Engineer role at the head office. Today I build its
//                 website and work on the Ashray app alongside a freelancer the
//                 company hired. Everything I build is shaped by those school
//                 visits, and the people who taught me what technology needs to
//                 do.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. How I work */}
//       <section
//         className="border-t border-[var(--border)] bg-[var(--surface-muted)]"
//         aria-labelledby="how-i-work"
//       >
//         <div className="container py-12 sm:py-16">
//           <h2
//             id="how-i-work"
//             className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
//           >
//             How I work
//             <span className="text-[var(--accent)]">.</span>
//           </h2>

//           <div className="mt-8 grid gap-5 md:grid-cols-3">
//             {principles.map(({ title, description, Icon }) => (
//               <article
//                 key={title}
//                 className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
//               >
//                 <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)]">
//                   <Icon className="size-6" aria-hidden="true" />
//                 </div>
//                 <h3 className="text-xl font-semibold tracking-tight">
//                   {title}
//                 </h3>
//                 <p className="mt-2 text-sm leading-7 text-[var(--foreground)] opacity-80">
//                   {description}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. Toolkit */}
//       <section className="container py-12 sm:py-16" aria-labelledby="toolkit">
//         <h2
//           id="toolkit"
//           className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
//         >
//           Toolkit
//           <span className="text-[var(--accent)]">.</span>
//         </h2>

//         <dl className="mt-8 grid gap-6 sm:grid-cols-3">
//           {toolkit.map(({ group, items }) => (
//             <div key={group}>
//               <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
//                 {group}
//               </dt>
//               <dd className="mt-3 flex flex-wrap gap-2">
//                 {items.map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full bg-[var(--surface-muted)] px-3.5 py-1.5 text-sm font-medium text-[var(--primary)]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </dd>
//             </div>
//           ))}
//         </dl>
//       </section>

//       {/* 5. Education */}
//       <section
//         className="border-t border-[var(--border)]"
//         aria-labelledby="education"
//       >
//         <div className="container py-12 sm:py-16">
//           <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
//             <h2
//               id="education"
//               className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
//             >
//               Education
//               <span className="text-[var(--accent)]">.</span>
//             </h2>

//             <ul className="max-w-2xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
//               {education.map(({ degree, school, score }) => (
//                 <li key={degree} className="flex items-center gap-4 py-5">
//                   <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)]">
//                     <GraduationCap className="size-5" aria-hidden="true" />
//                   </span>
//                   <div className="min-w-0 flex-1">
//                     <p className="font-semibold">{degree}</p>
//                     <p className="text-sm text-[var(--muted)]">{school}</p>
//                   </div>
//                   <p className="text-sm font-medium text-[var(--primary)]">
//                     {score}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 6. Beyond code */}
//       <section className="container pb-4" aria-labelledby="beyond-code">
//         <div className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-7 text-center sm:flex-row sm:text-left">
//           <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--primary)]">
//             <Compass className="size-6" aria-hidden="true" />
//           </span>
//           <div>
//             <h2
//               id="beyond-code"
//               className="text-lg font-semibold tracking-tight"
//             >
//               Beyond code
//             </h2>
//             <p className="mt-1 text-sm leading-7 text-[var(--foreground)] opacity-80">
//               I love to travel and explore new places. Every place and every
//               person teaches me something I end up using in my work.
//             </p>
//           </div>
//         </div>

//         <p className="mt-6 text-center text-sm text-[var(--muted)]">
//           I also run Nearby Digital Solutions, helping local businesses get
//           online.
//         </p>
//       </section>

//       {/* 7. Closing call to action */}
//       <ContactCta />
//     </>
//   );
// }

import type { Metadata } from "next";
import AboutIntro from "@/components/about/about-intro";
import AboutStory from "@/components/about/about-story";
import AboutPrinciples from "@/components/about/about-principles";
import AboutBeyondCode from "@/components/about/about-beyond-code";
import AboutEducation from "@/components/about/about-education";
import AboutToolkit from "@/components/about/about-toolkit";
import ContactCta from "@/components/home/contact-cta";

export const metadata: Metadata = { title: "About | Amit Kumar" };

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutStory />
      <AboutPrinciples />
      <AboutToolkit />
      <AboutEducation />
      <AboutBeyondCode />
      <ContactCta />
    </>
  );
}
