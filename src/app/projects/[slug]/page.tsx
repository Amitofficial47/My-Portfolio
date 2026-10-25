// import type { Metadata } from "next";
// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import { projects } from "@/data/projects";
// import ProjectDetail from "@/components/projects/project-detail";

// type ProjectPageProps = {
//   params: Promise<{ slug: string }>;
// };

// export const metadata: Metadata = {
//   title: "Project Details",
//   description:
//     "Explore project details, technologies, and work from my portfolio.",
// };

// export function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// async function ProjectContent({ params }: ProjectPageProps) {
//   const { slug } = await params;
//   const project = projects.find((item) => item.slug === slug);

//   if (!project) {
//     notFound();
//   }

//   return <ProjectDetail project={project} />;
// }

// export default function ProjectPage({ params }: ProjectPageProps) {
//   return (
//     <Suspense
//       fallback={
//         <main className="container py-20">
//           <p className="text-sm text-[var(--muted)]">
//             Loading project details...
//           </p>
//         </main>
//       }
//     >
//       <ProjectContent params={params} />
//     </Suspense>
//   );
// }

import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/project-detail";
import { getProjectGalleryImages } from "@/lib/project-images";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Project Details",
  description:
    "Explore project details, technologies, and work from my portfolio.",
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const images = getProjectGalleryImages(project.slug);

  return <ProjectDetail project={project} images={images} />;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense
      fallback={
        <main className="container py-20">
          <p className="text-sm text-[var(--muted)]">
            Loading project details...
          </p>
        </main>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}
