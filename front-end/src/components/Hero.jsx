import { SITE } from "../data/site.js";

export default function Hero() {
  return (
    <section id="home" className="section-py container-px">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-700 dark:text-brand-300">
            {SITE.role} · {SITE.location}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {SITE.name}
          </h1>
          <p className="mt-5 text-lg text-slate-700 dark:text-slate-300">
            {SITE.hero.headline}
          </p>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            {SITE.hero.sub}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
              href={SITE.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="card p-4 md:p-6">
            <div className="aspect-square w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop"
                alt="workspace"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
              <div className="badge">React</div>
              <div className="badge">Tailwind</div>
              <div className="badge">Vite</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
