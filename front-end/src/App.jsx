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
              className="blob h-full w-full rounded-full bg-amber-400/60 dark:bg-sky-500/70 blur-3xl"
              style={{
                "--glow-min": ".05",
                "--glow-max": ".20",
                "--glow-dur": "8s",
                "--swim-dur": "6s",
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
              className="blob h-full w-full rounded-full bg-amber-400/40 dark:bg-sky-500/70 blur-3xl opacity-70"
              style={{
                "--glow-min": ".05",
                "--glow-max": ".20",
                "--glow-dur": "4s",
                "--swim-dur": "5.4s",
                "--glow-delay": "2.1s",
                "--swim-delay": "1.2s",
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
