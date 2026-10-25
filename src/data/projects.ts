import type { LucideIcon } from "lucide-react";
import {
  Globe,
  HeartHandshake,
  Home,
  Leaf,
  Smartphone,
  Utensils,
  Building2,
} from "lucide-react";

export type ProjectStatus = "live" | "review" | "building" | "soon";

export type ProjectCategory =
  | "Websites"
  | "Mobile apps"
  | "Platforms"
  | "In development";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  tags: string[];
  technologies: string[];
  status: ProjectStatus;
  Icon: LucideIcon;
  liveUrl?: string;
  featuredColor: string;
  featured: boolean;
  image?: string;
};

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  review: "In review",
  building: "In development",
  soon: "Launching soon",
};

export const projects: Project[] = [
  {
    slug: "restart-byob",
    number: "01",
    title: "Restart BYOB",
    category: "Websites",
    summary:
      "A website experience for a restaurant, designed to present its identity, menu, and customer experience.",
    description:
      "A website experience for a restaurant, designed to present its identity, menu, and customer experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    Icon: Utensils,
    liveUrl: "https://restartbyob.com",
    featuredColor: "from-[#E9B77B] to-[#C97945]",
    featured: true,
  },
  {
    slug: "dhruv-digital-hub",
    number: "02",
    title: "Dhruv Digital Hub",
    category: "Websites",
    summary:
      "A digital presence for a business, helping visitors discover its services and offerings online.",
    description:
      "A digital presence for a business, helping visitors discover its services and offerings online.",
    tags: ["Next.js", "TypeScript"],
    technologies: ["Next.js", "TypeScript"],
    status: "live",
    Icon: Globe,
    liveUrl: "https://dhruvdigitalhub.com",
    featuredColor: "from-[#B9C8F5] to-[#657CC8]",
    featured: true,
  },
  {
    slug: "mymess",
    number: "03",
    title: "MyMess",
    category: "Platforms",
    summary:
      "A mess management project designed around the needs of hostels and their residents.",
    description:
      "A mess management project designed around the needs of hostels and their residents.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Prisma"],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Prisma"],
    status: "live",
    liveUrl: "https://my-mess-eight.vercel.app/",
    Icon: Utensils,
    featuredColor: "from-[#E6D7B9] to-[#BFA77D]",
    featured: true,
  },
  {
    slug: "findourstay",
    number: "04",
    title: "FindOurStay",
    category: "Platforms",
    summary:
      "An accommodation discovery platform designed to help users explore and find places to stay.",
    description:
      "An accommodation discovery platform designed to help users explore and find places to stay.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    status: "live",
    liveUrl: "https://findourstay.vercel.app/",
    Icon: Home,
    featuredColor: "from-[#B9DCD4] to-[#5C9B8B]",
    featured: true,
  },
  {
    slug: "bv-designs",
    number: "05",
    title: "B&V Designs",
    category: "Websites",
    summary:
      "A modern website for an architecture firm, showcasing its design approach, projects, and professional services.",
    description:
      "A website designed for B&V Designs, an architecture firm, to present its work and services online.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Design"],
    status: "live",
    Icon: Building2,
    liveUrl: "https://bv-designs.vercel.app/",
    featuredColor: "from-[#D9D0C4] to-[#9C8D7D]",
    featured: true,
  },
  {
    slug: "ashray",
    number: "06",
    title: "Ashray",
    category: "Mobile apps",
    summary:
      "A mobile app connecting gig workers with welfare schemes and job opportunities.",
    description:
      "A mobile app connecting gig workers with welfare schemes and job opportunities.",
    tags: ["Flutter", "Firebase"],
    technologies: ["Flutter", "Firebase"],
    status: "review",
    Icon: Smartphone,
    featuredColor: "from-[#D8C7F4] to-[#9580CB]",
    featured: false,
  },
  {
    slug: "ecohaq-carbon",
    number: "07",
    title: "EcoHAQ Carbon",
    category: "In development",
    summary:
      "A climate technology platform focused on carbon farming, farmer onboarding, monitoring, reporting, and verification.",
    description:
      "A climate technology platform focused on carbon farming, farmer onboarding, monitoring, reporting, and verification.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    status: "building",
    Icon: Leaf,
    featuredColor: "from-[#B9D9B2] to-[#61976C]",
    featured: false,
  },
  {
    slug: "udayasa-foundation",
    number: "08",
    title: "Udayasa Foundation",
    category: "Websites",
    summary:
      "A website project for the foundation, presenting its work, programmes, and organisational information.",
    description:
      "A website project for the foundation, presenting its work, programmes, and organisational information.",
    tags: ["WordPress", "Web Design"],
    technologies: ["WordPress", "Web Design"],
    status: "soon",
    Icon: HeartHandshake,
    featuredColor: "from-[#F0C9C7] to-[#CB898A]",
    featured: false,
  },
  {
    slug: "treasure-of-thoughts",
    number: "09",
    title: "Treasure of Thoughts",
    category: "Websites",
    summary:
      "A website project for an NGO, intended to introduce its mission and help attract partners.",
    description:
      "A website project for an NGO, intended to introduce its mission and help attract partners.",
    tags: ["Next.js", "TypeScript"],
    technologies: ["Next.js", "TypeScript"],
    status: "soon",
    Icon: HeartHandshake,
    featuredColor: "from-[#F0D6A4] to-[#D6A65D]",
    featured: false,
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Websites",
  "Mobile apps",
  "Platforms",
  "In development",
];

export function getProjectStatusText(status: ProjectStatus) {
  return statusLabel[status];
}

export function getProjectStatusStyle(status: ProjectStatus) {
  switch (status) {
    case "live":
      return "bg-white text-[#235D3A]";
    case "review":
      return "bg-white text-[#74521C]";
    case "building":
      return "bg-white text-[#33499B]";
    case "soon":
      return "bg-white text-[#66518D]";
  }
}
