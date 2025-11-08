import Section from "./Section.jsx";
import { SITE } from "../data/site.js";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle={`A quick intro about ${SITE.name}.`}
    >
      <div className="mx-auto max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          I’m a {SITE.role} based in {SITE.location}. I enjoy building fast,
          accessible web apps, crafting developer tools, and collaborating
          across disciplines. My work blends clean UI, robust APIs, and
          pragmatic DevOps.
        </p>
        <p className="mt-4">
          Outside of work, I like writing, teaching, and exploring open source.
          If you think I could help your team or project, let’s chat.
        </p>
      </div>
    </Section>
  );
}
