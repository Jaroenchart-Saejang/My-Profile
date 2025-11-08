import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Decorative gradient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {/* Big swimmer */}
        <div
          className="blob-x"
          style={{
            "--w": "80rem",
            "--h": "50rem",
            "--dur-x": "16s",
            "--dur-y": "11s",
          }}
        >
          <div className="blob-y">
            <div
              className="h-full w-full rounded-full bg-amber-400/50 dark:bg-sky-500/40 blur-3xl
                    animate-[twinkle-soft_8s_ease-in-out_infinite]"
              style={{
                animationName: "twinkle-soft, wobble",
                animationDuration: "8s, 6s",
                animationTimingFunction: "ease-in-out, ease-in-out",
                animationIterationCount: "infinite, infinite",
              }}
            />
          </div>
        </div>

        {/* Second swimmer (smaller, faster, phase-shifted) */}
        <div
          className="blob-x"
          style={{
            "--w": "42rem",
            "--h": "34rem",
            "--dur-x": "12s",
            "--dur-y": "8s",
          }}
        >
          <div className="blob-y">
            <div
              className="h-full w-full rounded-full bg-amber-400/30 dark:bg-sky-500/30 blur-3xl opacity-70
                   animate-[twinkle-soft_4s_ease-in-out_infinite]"
              style={{
                animationName: "twinkle-soft, wobble",
                animationDuration: "4s, 5.4s",
                animationTimingFunction: "ease-in-out, ease-in-out",
                animationIterationCount: "infinite, infinite",
                animationDelay: "2.1s, 1.2s",
              }}
            />
          </div>
        </div>
      </div>

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
