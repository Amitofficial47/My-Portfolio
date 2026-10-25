import type { Metadata } from "next";

import ContactIntro from "@/components/contact/contact-intro";
import ContactMethods from "@/components/contact/contact-methods";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact | Amit Kumar",
  description:
    "Have an app or website in mind? Get in touch with Amit Kumar, software engineer.",
};

export default function ContactPage() {
  return (
    <>
      <ContactIntro />

      {/* One joined panel: details on the left, form on the right */}
      <section
        className="container pb-14 pt-4 sm:pb-20"
        aria-label="Contact details and form"
      >
        <div className="grid overflow-hidden rounded-[2rem] border border-[var(--border)] shadow-[0_24px_60px_-32px_rgba(27,34,80,0.25)] lg:grid-cols-[0.85fr_1.15fr]">
          <ContactMethods />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
