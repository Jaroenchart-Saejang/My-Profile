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
        <div
          className="absolute -top-24 left-1/2 h-[50rem] w-[80rem] -translate-x-1/2
                  rounded-full bg-amber-400/50 dark:bg-sky-500/50 blur-3xl
                  will-change-[opacity,transform]
                  animate-[twinkle-soft_8s_ease-in-out_infinite]"
        />
        <div
          className="absolute -top-20 left-[30%] h-[34rem] w-[42rem]
                  rounded-full bg-amber-400/30 dark:bg-sky-500/30 blur-3xl
                  opacity-70 will-change-[opacity,transform]
                  animate-[twinkle-soft_4s_ease-in-out_infinite_2.1s]"
        />
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
