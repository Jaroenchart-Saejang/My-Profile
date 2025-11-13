import Section from "./Section.jsx";
import { EXPERIENCE } from "../data/site.js";

function TechChips({ tech = [] }) {
  if (!tech.length) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="cursor-default select-none rounded-full border border-slate-300 px-2.5 py-0.5
                     text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200
                     transition-all duration-200 ease-out will-change-transform
                     hover:-translate-y-0.5 hover:scale-[1.03]
                     hover:bg-gradient-to-r hover:from-brand-400/20 hover:to-brand-600/20
                     hover:text-slate-900 hover:border-brand-500 hover:shadow hover:shadow-brand-500/25
                     dark:hover:text-white dark:hover:border-brand-400"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Item({ job }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
      <div className="card p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold">
            {job.role} · {job.company}
          </h3>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {job.period}
          </span>
        </div>

        {job.summary && (
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{job.summary}</p>
        )}

        {!!job.bullets?.length && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <TechChips tech={job.tech} />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Highlights from my recent roles."
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative space-y-6 border-l border-slate-200 dark:border-slate-800">
          {EXPERIENCE.map((j, idx) => (
            <Item key={idx} job={j} />
          ))}
        </div>
      </div>
    </Section>
  );
}
