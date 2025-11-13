import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  // Lazy init prevents the “mount then flip” flash
  const [theme, setTheme] = useState(() => getInitialTheme());

  // Apply to <html> and persist whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Optional: keep in sync with system when user hasn’t chosen explicitly
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = localStorage.getItem("theme"); // if user chose, don't override
    if (!stored) {
      const onChange = (e) => setTheme(e.matches ? "dark" : "light");
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
  }, []);

  // Optional: sync multiple toggles/tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "theme" && (e.newValue === "dark" || e.newValue === "light")) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? (
        // Sun icon (light mode target)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="currentColor" className="h-5 w-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm8 9a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2h-1ZM3 12a1 1 0 1 1 0-2H2a1 1 0 1 1 0 2h1Zm14.95 6.364a1 1 0 0 1 0-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0ZM3.929 7.05a1 1 0 1 1 1.414-1.414l.707.707A1 1 0 1 1 4.636 8.05l-.707-.707a1 1 0 0 1 0-1.414Zm13.435-1.414a1 1 0 1 1 1.414 1.414l-.707.707A1 1 0 1 1 16.364 7.05l.707-.707Z" />
        </svg>
      ) : (
        // Moon icon (dark mode target)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="currentColor" className="h-5 w-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 1 0 21 12.79Z" />
        </svg>
      )}
    </button>
  );
}
