import Section from "./Section.jsx";
import { SITE } from "../data/site.js";
import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let’s build something together."
    >
      <div className="mx-auto max-w-2xl">
        <div className="card p-6">
          <form
            className="grid grid-cols-1 gap-4"
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)] dark:border-slate-700"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)] dark:border-slate-700"
                  name="email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                rows="3"
                className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)] dark:border-slate-700"
                name="message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                {/* Links to resources with icons */}
                <a
                  className="inline-flex items-center gap-2 underline hover:text-slate-700 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in new tab)"
                  title="GitHub"
                >
                  <Github className="h-8 w-8" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 underline hover:text-slate-700 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
                  href={`mailto:${SITE.email}`}
                  aria-label="Send email"
                  title="Email"
                >
                  <Mail className="h-8 w-8" aria-hidden="true" />
                  <span>Email</span>
                </a>
                {/* The end of icons */}
              </div>
              <button type="submit" className="btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
