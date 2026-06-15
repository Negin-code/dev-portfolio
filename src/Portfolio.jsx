import { useState, useRef, useEffect } from "react";
import { C } from "./tokens";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudy from "./components/CaseStudy";

export default function Portfolio() {
  const containerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 40);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    const el = containerRef.current;
    if (!el) return;
    const target = el.querySelector(`#${id}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, sans-serif",
      background: C.bg,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      {caseStudy ? (
        <CaseStudy id={caseStudy} onBack={() => setCaseStudy(null)} />
      ) : (
        <>
          <Nav scrolled={scrolled} scrollTo={scrollTo} />
          <div ref={containerRef} style={{ flex: 1, overflowY: "auto" }}>
            <Hero scrollTo={scrollTo} />
            <About scrollTo={scrollTo} />
            <Projects onCaseStudy={setCaseStudy} />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
