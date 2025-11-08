import { SITE } from "../data/site.js";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:bg-slate-950/60 dark:border-slate-800/60">
      <nav className="container-px flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          {SITE.name}
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.resumeUrl}
            className="btn-primary hidden md:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
        {/* mobile */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={SITE.resumeUrl}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
