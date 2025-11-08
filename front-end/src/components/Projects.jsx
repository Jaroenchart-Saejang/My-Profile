import Section from "./Section.jsx";
import { PROJECTS } from "../data/site.js";

function ProjectCard({ p }) {
  return (
    <div className="card p-5 hover:shadow-lg hover:shadow-brand-500/10 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {p.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags?.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        {p.link && (
          <a
            className="btn-primary"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {p.repo && (
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
            href={p.repo}
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of things I built or collaborated on."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
