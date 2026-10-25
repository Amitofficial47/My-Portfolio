export default function AboutStory() {
  return (
    <section
      className="border-t border-[var(--border)]"
      aria-labelledby="my-story"
    >
      <div className="container py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
          <h2
            id="my-story"
            className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl"
          >
            My story
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <div className="max-w-2xl space-y-5 text-sm leading-7 text-[var(--foreground)] opacity-90 sm:text-base sm:leading-8">
            <p>
              I come from an IT background. In the final semester of my Master
              of Computer Applications, I did a full-stack internship building
              mobile and web apps. My first role after the degree was Project
              Coordinator at Udayasa Foundation, running IT projects: digital
              libraries and digital classrooms for government schools.
            </p>
            <p>
              That meant going to the schools myself. I showed teachers how the
              computers worked, set up 24-tablet learning systems with MDM in
              more than 20 schools, installed digital classrooms in more than
              25, and gave orientations to teachers and students. I also got to
              visit new places, meet different people and learn from every
              school I walked into.
            </p>
            <p>
              When the project wrapped up, the foundation offered me a Software
              Engineer role at the head office. Today I build its website and
              work on the Ashray app alongside the development team. Everything
              I build is shaped by those school visits, and the people who
              taught me what technology needs to do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
