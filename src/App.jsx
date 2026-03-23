import { useScrollReveal } from "./hook/useScrollReveal";

import CustomCursor  from "./components/CustomCursor";
import GrainOverlay  from "./components/GrainOverlay";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import MarqueeStrip  from "./components/MarqueeStrip";
import Projects      from "./components/Projects";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

export default function App() {
  useScrollReveal();

  return (
    <>
      <GrainOverlay />
      <CustomCursor />

      <a href="#projects" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
