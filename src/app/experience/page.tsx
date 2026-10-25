// import type { Metadata } from "next";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BriefcaseBusiness,
//   Code2,
//   GraduationCap,
//   Layers3,
//   MapPin,
// } from "lucide-react";
// import ContactCta from "@/components/home/contact-cta";

// export const metadata: Metadata = {
//   title: "Experience",
//   description:
//     "Explore my professional experience in software engineering, project coordination, full-stack development, and digital infrastructure.",
// };

// const experiences = [
//   {
//     number: "01",
//     role: "Software Engineer",
//     company: "Udayasa Foundation",
//     period: "Mar 2026 — Present",
//     location: "Panchkula, Haryana",
//     type: "Full-time",
//     summary:
//       "Developing software solutions and digital experiences that support organisational needs and technology-driven initiatives.",
//     responsibilities: [
//       "Developing responsive web applications and reusable frontend components.",
//       "Building and integrating APIs with backend services and databases.",
//       "Working across frontend and backend technologies to deliver practical digital products.",
//       "Supporting application deployment, debugging, and continuous improvement.",
//     ],
//     technologies: [
//       "Next.js",
//       "TypeScript",
//       "React",
//       "Node.js",
//       "PostgreSQL",
//       "Prisma",
//     ],
//     accent: "bg-[#E3E9FF]",
//   },
//   {
//     number: "02",
//     role: "IT Project Coordinator",
//     company: "Udayasa Foundation",
//     period: "Oct 2025 — Feb 2026",
//     location: "Himachal Pradesh, India",
//     type: "Project coordination",
//     summary:
//       "Coordinated digital infrastructure initiatives across government schools, helping deliver digital learning resources and vocational technology facilities.",
//     responsibilities: [
//       "Coordinated digital classroom and digital library deployments across schools in Chamba and other districts.",
//       "Supported digital library setups with tablets, Mobile Device Management (MDM), and iPrep learning resources.",
//       "Coordinated Interactive Flat Panel (IFP) classroom installations and teacher orientation.",
//       "Supported vocational lab implementation across ITES, Telecom, Electronics, and related areas.",
//     ],
//     technologies: [
//       "Project Coordination",
//       "Digital Learning",
//       "Implementation",
//       "School Infrastructure",
//       "Stakeholder Coordination",
//     ],
//     accent: "bg-[#F6E6C9]",
//   },
//   {
//     number: "03",
//     role: "Full Stack Developer Intern",
//     company: "Tech Marbles Web Solutions Pvt. Ltd.",
//     period: "Jan 2025 — Jun 2025",
//     location: "India",
//     type: "Internship",
//     summary:
//       "Gained practical experience in full-stack development and software project workflows, building a foundation for a career in software engineering.",
//     responsibilities: [
//       "Developed practical skills in web application development.",
//       "Learned to work with frontend components and application development workflows.",
//       "Built foundational experience in software engineering and problem-solving.",
//     ],
//     technologies: [
//       "Full Stack Development",
//       "Web Development",
//       "Frontend Development",
//       "Software Engineering",
//     ],
//     accent: "bg-[#D9EDE5]",
//   },
// ];

// const capabilities = [
//   {
//     icon: Code2,
//     title: "Software development",
//     description:
//       "Creating responsive web experiences, application interfaces, and integrated software solutions.",
//   },
//   {
//     icon: Layers3,
//     title: "Technical implementation",
//     description:
//       "Connecting frontend interfaces, APIs, databases, and deployment workflows.",
//   },
//   {
//     icon: BriefcaseBusiness,
//     title: "Project coordination",
//     description:
//       "Coordinating technology implementations, supporting teams, and helping deliver projects.",
//   },
// ];

// export default function ExperiencePage() {
//   return (
//     <main>
//       {/* Hero */}
//       <section
//         className="container py-10 sm:py-16"
//         aria-labelledby="experience-title"
//       >
//         <div className="max-w-3xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
//             Professional journey
//           </p>

//           <h1
//             id="experience-title"
//             className="mt-3 text-3xl font-medium leading-[1.14] tracking-[-0.04em] sm:text-5xl"
//           >
//             From building technology to making an{" "}
//             <span className="font-semibold text-[var(--primary)]">
//               impact<span className="text-[var(--accent)]">.</span>
//             </span>
//           </h1>

//           <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-8">
//             My experience combines software engineering, full-stack development,
//             and hands-on project coordination. From developing digital products
//             to supporting technology implementation in schools, I enjoy turning
//             ideas into practical solutions.
//           </p>

//           <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
//             <span className="inline-flex items-center gap-2">
//               <Code2 className="size-4" aria-hidden="true" />
//               Software engineering
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <Layers3 className="size-4" aria-hidden="true" />
//               Digital projects
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <BriefcaseBusiness className="size-4" aria-hidden="true" />
//               Project coordination
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Career timeline */}
//       <section
//         className="container pb-12 sm:pb-16"
//         aria-labelledby="career-heading"
//       >
//         <div className="mb-7 flex flex-col gap-3 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
//               Where I have worked
//             </p>

//             <h2
//               id="career-heading"
//               className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl"
//             >
//               Career timeline
//               <span className="text-[var(--accent)]">.</span>
//             </h2>
//           </div>

//           <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
//             Three stages of learning, implementation, and professional growth.
//           </p>
//         </div>

//         <div className="relative">
//           <div
//             className="absolute bottom-5 left-[15px] top-5 w-px bg-[var(--border)] sm:left-[19px]"
//             aria-hidden="true"
//           />

//           <div className="space-y-6 sm:space-y-8">
//             {experiences.map((experience) => (
//               <article
//                 key={experience.number}
//                 className="relative grid grid-cols-1 gap-4 pl-10 sm:grid-cols-[155px_minmax(0,1fr)] sm:gap-7 sm:pl-14 lg:grid-cols-[185px_minmax(0,1fr)] lg:gap-10"
//               >
//                 <span
//                   className="absolute left-[9px] top-1.5 size-[13px] rounded-full border-2 border-[var(--primary)] bg-[var(--background)] sm:left-[13px]"
//                   aria-hidden="true"
//                 />

//                 <div className="sm:pt-1">
//                   <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
//                     {experience.number} / Experience
//                   </p>

//                   <p className="mt-2 text-sm font-medium leading-6 text-[var(--foreground)]">
//                     {experience.period}
//                   </p>

//                   <p className="mt-2 inline-flex items-start gap-1.5 text-sm leading-5 text-[var(--muted)]">
//                     <MapPin
//                       className="mt-0.5 size-4 shrink-0"
//                       aria-hidden="true"
//                     />
//                     {experience.location}
//                   </p>
//                 </div>

//                 <div className="min-w-0 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200 hover:border-[var(--primary)] sm:p-6 lg:p-7">
//                   <div className="flex flex-wrap items-start justify-between gap-3">
//                     <div className="min-w-0">
//                       <p className="text-sm font-medium text-[var(--muted)]">
//                         {experience.company}
//                       </p>

//                       <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-[var(--foreground)] sm:text-2xl">
//                         {experience.role}
//                       </h3>
//                     </div>

//                     <span
//                       className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-[#1B2250] ${experience.accent}`}
//                     >
//                       {experience.type}
//                     </span>
//                   </div>

//                   <p className="mt-4 text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-7">
//                     {experience.summary}
//                   </p>

//                   <div className="mt-6">
//                     <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
//                       Key contributions
//                     </p>

//                     <ul className="mt-3 space-y-3">
//                       {experience.responsibilities.map((responsibility) => (
//                         <li
//                           key={responsibility}
//                           className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground)] opacity-85"
//                         >
//                           <ArrowRight
//                             className="mt-1 size-4 shrink-0 text-[var(--primary)]"
//                             aria-hidden="true"
//                           />
//                           <span>{responsibility}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mt-6 border-t border-[var(--border)] pt-5">
//                     <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
//                       Technologies & skills
//                     </p>

//                     <ul className="mt-3 flex flex-wrap gap-2">
//                       {experience.technologies.map((technology) => (
//                         <li
//                           key={technology}
//                           className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--primary)]"
//                         >
//                           {technology}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core capabilities */}
//       <section className="container py-10 sm:py-16">
//         <div className="mb-7 border-b border-[var(--border)] pb-5">
//           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
//             What I bring
//           </p>

//           <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
//             Skills shaped by experience
//             <span className="text-[var(--accent)]">.</span>
//           </h2>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {capabilities.map((capability) => {
//             const Icon = capability.icon;

//             return (
//               <article
//                 key={capability.title}
//                 className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200 hover:border-[var(--primary)] sm:p-6"
//               >
//                 <Icon
//                   className="size-6 text-[var(--primary)]"
//                   strokeWidth={1.5}
//                   aria-hidden="true"
//                 />

//                 <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--foreground)]">
//                   {capability.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-[var(--foreground)] opacity-75">
//                   {capability.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       {/* Education link */}
//       <section className="container pb-12 sm:pb-16">
//         <div className="flex flex-col gap-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
//           <div className="flex items-start gap-4">
//             <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-muted)]">
//               <GraduationCap
//                 className="size-5 text-[var(--primary)]"
//                 aria-hidden="true"
//               />
//             </div>

//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
//                 Beyond work
//               </p>

//               <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">
//                 The learning continues.
//               </h2>

//               <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-75">
//                 Learn more about my background, education, and the experiences
//                 that shape how I approach technology.
//               </p>
//             </div>
//           </div>

//           <Link
//             href="/about"
//             className="button button-secondary inline-flex shrink-0 items-center justify-center gap-2"
//           >
//             About me
//             <ArrowUpRight className="size-4" aria-hidden="true" />
//           </Link>
//         </div>
//       </section>

//       {/* Shared portfolio CTA */}
//       <ContactCta />
//     </main>
//   );
// }

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  MapPin,
} from "lucide-react";
import ContactCta from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My experience in software engineering, full-stack development and IT project coordination, from building apps and websites to setting up digital classrooms and libraries in schools.",
};

const experiences = [
  {
    number: "01",
    role: "Software Engineer",
    company: "Udayasa Foundation",
    period: "Mar 2026 — Present",
    location: "Panchkula, Haryana",
    type: "Full-time",
    summary:
      "Building web and mobile products for the foundation, from its public website to Ashray, a mobile app that is now in Google Play testing.",
    responsibilities: [
      "Developing and maintaining the organization’s website on WordPress, with a focus on responsive design, user experience and easy content management.",
      "Building Ashray, a mobile app for Driver & Guard Resting Point Management, with React Native and a Node.js backend.",
      "Implementing QR-based check-in and check-out, session tracking, user management and reporting features.",
      "Working on API integration, application workflows, testing and feature delivery with the development team.",
      "Taking part in deployment and release, including the Google Play testing phase before public launch.",
    ],
    technologies: [
      "WordPress",
      "React Native",
      "Node.js",
      "API integration",
      "Testing",
      "Google Play",
    ],
    accent: "bg-[#E3E9FF]",
  },
  {
    number: "02",
    role: "IT Project Coordinator",
    company: "Udayasa Foundation",
    period: "Oct 2025 — Feb 2026",
    location: "Chamba, Himachal Pradesh",
    type: "Project coordination",
    summary:
      "Delivered digital education infrastructure across government schools in Chamba, Kangra and Mandi, working on site with teachers, students and school staff.",
    responsibilities: [
      "Set up and deployed digital libraries in 20+ schools, each with a 24-tablet learning system integrated with MDM and iPrep.",
      "Installed and configured digital classrooms in 25+ schools using Interactive Flat Panel (IFP) displays.",
      "Ran orientation sessions so teachers and students could use digital learning tools with confidence.",
      "Coordinated 60+ vocational lab setups across trades including ITES, Telecom and Electronics, with technical guidance and operational support.",
      "Managed on-site coordination, troubleshooting and training to keep every rollout running smoothly.",
    ],
    technologies: [
      "Project Coordination",
      "IT Infrastructure Deployment",
      "MDM",
      "iPrep",
      "Interactive Flat Panels",
      "Training & Orientation",
    ],
    accent: "bg-[#F6E6C9]",
  },
  {
    number: "03",
    role: "Full-stack Developer Intern",
    company: "TechMarbles Web Solutions Pvt. Ltd.",
    period: "Jan 2025 — Jun 2025",
    location: "Shimla, Himachal Pradesh · On-site",
    type: "Internship",
    summary:
      "Completed during the final semester of my MCA, this internship gave me hands-on industry experience building mobile and web applications with a team of developers and designers.",
    responsibilities: [
      "Developed and maintained cross-platform mobile apps in Flutter, with a focus on performance and smooth UI and UX.",
      "Built responsive, dynamic web modules in Next.js that work across devices and browsers.",
      "Integrated APIs and used state management to make applications easier to scale.",
      "Worked with developers and designers to deliver client projects on deadline.",
    ],
    technologies: [
      "Flutter",
      "Next.js",
      "API integration",
      "State management",
      "Teamwork",
    ],
    accent: "bg-[#D9EDE5]",
  },
];

// Numbers from the school rollout
const impact = [
  { value: "20+", label: "schools with digital libraries (24 tablets each)" },
  { value: "25+", label: "schools with digital classrooms" },
  { value: "60+", label: "vocational labs coordinated" },
  { value: "3", label: "districts: Chamba, Kangra and Mandi" },
];

const capabilities = [
  {
    icon: Code2,
    title: "Full-stack development",
    description:
      "Websites with WordPress and Next.js, mobile apps with Flutter and React Native, and APIs with Node.js.",
  },
  {
    icon: Layers3,
    title: "On-site implementation",
    description:
      "Setting up, configuring and troubleshooting technology in schools, then training the people who use it.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project coordination",
    description:
      "Coordinating teams and schools across districts to deliver rollouts on schedule.",
  },
];

export default function ExperiencePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="container py-10 sm:py-16"
        aria-labelledby="experience-title"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            Professional journey
          </p>

          <h1
            id="experience-title"
            className="mt-3 text-3xl font-medium leading-[1.14] tracking-[-0.04em] sm:text-5xl"
          >
            From setting up schools to building{" "}
            <span className="font-semibold text-[var(--primary)]">
              software<span className="text-[var(--accent)]">.</span>
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-8">
            I began with a full-stack internship in the final semester of my
            MCA, then coordinated digital classrooms and libraries across
            government schools in Himachal Pradesh. Today I build the
            foundation’s website and its Ashray app as a software engineer.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-2">
              <Code2 className="size-4" aria-hidden="true" />
              Software engineering
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers3 className="size-4" aria-hidden="true" />
              Digital infrastructure
            </span>
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness className="size-4" aria-hidden="true" />
              Project coordination
            </span>
          </div>
        </div>
      </section>

      {/* Impact in numbers */}
      <section
        className="container pb-10 sm:pb-14"
        aria-label="School rollout in numbers"
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-4">
          {impact.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-[var(--surface-muted)] px-4 py-6 text-center sm:px-6"
            >
              <dt className="text-3xl font-semibold tracking-tight text-[var(--primary)] sm:text-4xl">
                {value}
              </dt>
              <dd className="mt-1.5 max-w-[14rem] text-xs leading-5 text-[var(--foreground)] opacity-80 sm:text-sm sm:leading-6">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Career timeline */}
      <section
        className="container pb-12 sm:pb-16"
        aria-labelledby="career-heading"
      >
        <div className="mb-7 flex flex-col gap-3 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Where I have worked
            </p>

            <h2
              id="career-heading"
              className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl"
            >
              Career timeline
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
            Three stages of learning, implementation and professional growth.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute bottom-5 left-[15px] top-5 w-px bg-[var(--border)] sm:left-[19px]"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="relative grid grid-cols-1 gap-4 pl-10 sm:grid-cols-[155px_minmax(0,1fr)] sm:gap-7 sm:pl-14 lg:grid-cols-[185px_minmax(0,1fr)] lg:gap-10"
              >
                <span
                  className="absolute left-[9px] top-1.5 size-[13px] rounded-full border-2 border-[var(--primary)] bg-[var(--background)] sm:left-[13px]"
                  aria-hidden="true"
                />

                <div className="sm:pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                    {experience.number} / Experience
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-[var(--foreground)]">
                    {experience.period}
                  </p>

                  <p className="mt-2 inline-flex items-start gap-1.5 text-sm leading-5 text-[var(--muted)]">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {experience.location}
                  </p>
                </div>

                <div className="min-w-0 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200 hover:border-[var(--primary)] sm:p-6 lg:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[var(--muted)]">
                        {experience.company}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-[var(--foreground)] sm:text-2xl">
                        {experience.role}
                      </h3>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-[#1B2250] ${experience.accent}`}
                    >
                      {experience.type}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--foreground)] opacity-80 sm:text-base sm:leading-7">
                    {experience.summary}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Key contributions
                    </p>

                    <ul className="mt-3 space-y-3">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground)] opacity-85"
                        >
                          <ArrowRight
                            className="mt-1 size-4 shrink-0 text-[var(--primary)]"
                            aria-hidden="true"
                          />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-[var(--border)] pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Technologies & skills
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--primary)]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="container py-10 sm:py-16">
        <div className="mb-7 border-b border-[var(--border)] pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            What I bring
          </p>

          <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
            Skills shaped by experience
            <span className="text-[var(--accent)]">.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200 hover:border-[var(--primary)] sm:p-6"
              >
                <Icon
                  className="size-6 text-[var(--primary)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--foreground)] opacity-75">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Education link */}
      <section className="container pb-12 sm:pb-16">
        <div className="flex flex-col gap-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-muted)]">
              <GraduationCap
                className="size-5 text-[var(--primary)]"
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Beyond work
              </p>

              <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">
                The learning continues.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--foreground)] opacity-75">
                Learn more about my background, education and the experiences
                that shape how I approach technology.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="button button-secondary inline-flex shrink-0 items-center justify-center gap-2"
          >
            About me
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Shared portfolio CTA */}
      <ContactCta />
    </main>
  );
}
