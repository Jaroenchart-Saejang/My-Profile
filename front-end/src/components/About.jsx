import Section from "./Section.jsx";
import { SITE } from "../data/site.js";

const chips = [
  "LLMs & Agents",
  "PyTorch",
  "scikit-learn",
  "PySpark",
  "Airflow",
  "dbt",
  "Kafka",
  "PostgreSQL",
  "Docker",
  "Terraform",
  "GCP",
  "Node/Express",
  "FastAPI",
  "React",
  "TailwindCSS",
];

export default function About() {
  return (
    <Section id="about" title="About" subtitle="A quick intro about me.">
      <div className="mx-auto max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          I’m an {SITE.role} based in {SITE.location}, focused on LLMs and
          agentic systems. I have working knowledge of classical ML (e.g.,
          Random Forests, XGBoost). I build production-ready models and reliable
          data pipelines, and I ship fast, accessible web apps.
        </p>

        <p className="mt-4">
          Day to day: PyTorch &amp; scikit-learn; PySpark, Airflow, dbt, Kafka,
          PostgreSQL; Docker &amp; Terraform on GCP; and full-stack with
          Node/Express, FastAPI, React, and Tailwind.
        </p>

        <p className="mt-4">
          Bootcamp: Super AI Engineer (Season 5, TH) alum and former intern at
          V89 Technology. I’m currently open to full-time roles—if my mix of
          AI/ML, data, and full-stack could help your team, let’s talk !!!.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {chips.map((c) => (
            <li
              key={c}
              tabIndex={0}
              role="button"
              className="cursor-pointer select-none rounded-full border border-slate-300 px-3 py-1
                  text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200
                  transition-all duration-200 ease-out will-change-transform
                  hover:-translate-y-1 hover:scale-105
                  hover:bg-gradient-to-r hover:from-brand-400/20 hover:to-brand-600/20
                  hover:text-slate-900 hover:border-brand-500
                  hover:shadow-lg hover:shadow-brand-500/30
                  dark:hover:text-white dark:hover:border-brand-400
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70
                  active:translate-y-0 active:scale-100"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
