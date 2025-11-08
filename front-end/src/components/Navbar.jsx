import { useEffect, useState, useCallback } from "react";
import { X, Lock, FileText } from "lucide-react";
import { SITE } from "../data/site.js";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Lock body scroll when the mobile menu is open
function useBodyScrollLock(isLocked) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isLocked) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isLocked]);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useBodyScrollLock(open);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  // Close when navigating via hash links
  const onNavClick = useCallback((e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) setOpen(false);
  }, []);

  // Full-row theme toggle (used inside the mobile menu)
  const toggleThemeInstant = useCallback(() => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:bg-slate-950/60 dark:border-slate-800/60">
      <nav className="container-px flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="text-sm md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          {SITE.name}
        </a>

        {/* Desktop nav */}
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

          {/* Explore (requires login) — keep icon */}
          <a
            href="/login"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <Lock className="h-4 w-4" aria-hidden="true" />
            <span>Explore</span>
            <span className="sr-only">(requires login)</span>
          </a>

          {/* Resume (icon button) */}
          <a
            href={SITE.resumeUrl}
            className="btn-primary hidden md:inline-flex !h-12 !w-12 items-center justify-center rounded-full
             [&>svg]:!h-10 [&>svg]:!w-10"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            title="Resume"
          >
            <FileText aria-hidden="true" />
            <span className="sr-only">Resume</span>
          </a>

          {/* Desktop theme toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile: right controls */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="/login"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <Lock className="h-4 w-4" aria-hidden="true" />
            <span>Explore</span>
          </a>
          {/* Text button (no hamburger icon) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={openMenu}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu — blurred backdrop + theme tile inside */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] md:hidden"
          onClick={closeMenu} // click outside the panel closes
        >
          {/* Backdrop with blur (covers page behind) */}
          <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-md" />

          {/* Centered panel (solid) */}
          <div
            className="relative z-10 flex min-h-full items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()} // keep clicks inside the panel
          >
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-white/10">
              {/* X button */}
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-900 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Section links (text-only) */}
              <div className="mt-2 flex flex-col items-stretch gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={onNavClick}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-center text-lg font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:text-white dark:hover:bg-slate-800"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* CTAs (keep icons) */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="/login"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Lock className="h-5 w-5" aria-hidden="true" />
                  <span>Explore</span>
                </a>
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <FileText className="h-5 w-5" aria-hidden="true" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Whole-row Theme toggle (button) */}
              <button
                type="button"
                onClick={toggleThemeInstant}
                className="mt-4 flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-2 text-left hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-800 dark:hover:bg-slate-800"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Theme
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700">
                  {/* sun (shown in light) / moon (shown in dark) via CSS */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 dark:hidden"
                  >
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm8 9a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2h-1ZM3 12a1 1 0 1 1 0-2H2a1 1 0 1 1 0 2h1Zm14.95 6.364a1 1 0 0 1 0-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0ZM3.929 7.05a1 1 0 1 1 1.414-1.414l.707.707A1 1 0 1 1 4.636 8.05l-.707-.707a1 1 0 0 1 0-1.414Zm13.435-1.414a1 1 0 1 1 1.414 1.414l-.707.707A1 1 0 1 1 16.364 7.05l.707-.707Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="hidden h-5 w-5 dark:block"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 1 0 21 12.79Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
