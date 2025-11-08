import Section from "./Section.jsx";
import { EXPERIENCE } from "../data/site.js";

function Item({ job }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-500/20"></div>
      <div className="card p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold">
            {job.role} · {job.company}
          </h3>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {job.period}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {job.summary}
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
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
        <div className="relative border-l border-slate-200 dark:border-slate-800 space-y-6">
          {EXPERIENCE.map((j, idx) => (
            <Item key={idx} job={j} />
          ))}
        </div>
      </div>
    </Section>
  );
}
