import { SITE } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container-px py-8 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <a
              className="underline hover:text-slate-700 dark:hover:text-slate-200"
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>{" "}
            &
            <a
              className="ml-1 underline hover:text-slate-700 dark:hover:text-slate-200"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
