import Section from "./Section.jsx";
import { SKILLS } from "../data/site.js";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I use often."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group) => (
          <div key={group.group} className="card p-5">
            <h3 className="mb-3 text-lg font-bold">{group.group}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span
                  key={s}
                  className="cursor-default select-none rounded-full border border-slate-300 px-2.5 py-0.5
                              text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200
                              transition-all duration-200 ease-out will-change-transform
                              hover:-translate-y-0.5 hover:scale-[1.03]
                              hover:bg-gradient-to-r hover:from-brand-400/20 hover:to-brand-600/20
                              hover:text-slate-900 hover:border-brand-500 hover:shadow hover:shadow-brand-500/25
                              dark:hover:text-white dark:hover:border-brand-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
