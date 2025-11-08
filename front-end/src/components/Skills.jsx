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
                <span key={s} className="badge">
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
