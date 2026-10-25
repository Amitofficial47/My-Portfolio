import Hero from "@/components/home/hero";
import FeaturedWork from "@/components/home/featured-projects";
import WhatIDo from "@/components/home/what-i-do";
import Experience from "@/components/home/experience";
import NearbyDigitalBanner from "@/components/home/nearbydigitalbanner";
import ContactCta from "@/components/home/contact-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <WhatIDo />
      <Experience />
      <NearbyDigitalBanner />
      <ContactCta />
    </main>
  );
}
