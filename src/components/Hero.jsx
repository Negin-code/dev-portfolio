import { useEffect, useId, useRef } from "react";
import FadeUp from "./FadeUp";

const lines = [
  { text: "Frontend",  outline: false, delay: "0.05s" },
  { text: "& Mobile",  outline: true,  delay: "0.18s" },
  { text: "Developer", outline: false, delay: "0.31s" },
];

export default function Hero() {
  const linesRef = useRef([]);
  const badgeId  = useId();

  useEffect(() => {
    const timer = setTimeout(() => {
      linesRef.current.forEach((el) => el?.classList.add("up"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="
        pt-20 pb-10 px-4 sm:px-8
        md:pt-30 md:pb-15 md:px-12 md:min-h-svh
        md:grid md:grid-cols-[1fr_auto] md:grid-rows-[1fr_auto]
        relative overflow-hidden
      "
    >
      {/* Big title */}
      <div className="col-start-1 row-start-1 self-center pt-10 md:pt-5">
        {lines.map(({ text, outline, delay }, i) => (
          <span
            key={text}
            className={`block overflow-hidden text-[clamp(2rem,12vw,4rem)] md:text-[clamp(3rem,12vw,8rem)] xl:text-[clamp(4rem,13vw,12rem)] leading-[0.88] tracking-[-0.04em] ${outline ? "text-outline-dark" : "text-ink"}`}
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            <span
              ref={(el) => (linesRef.current[i] = el)}
              className="clip-inner"
              style={{ transitionDelay: delay }}
            >
              {text}
            </span>
          </span>
        ))}
      </div>

      {/* Rotating badge — hidden on mobile */}
      <div
        className="col-start-2 row-start-1 self-start pt-2 w-32.5 h-32.5 relative hero-badge"
        role="img"
        aria-label="Available for work · Vancouver ."
      >
        <svg className="badge-ring" viewBox="0 0 130 130" fill="none" width="130" height="130" aria-hidden="true">
          <path id={badgeId} d="M 65,65 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0" fill="none" />
          <text fontFamily="DM Mono,monospace" fontSize="10.5" fill="#888" letterSpacing="3.5">
            <textPath href={`#${badgeId}`}>AVAILABLE FOR WORK · VANCOUVER · 2025 · </textPath>
          </text>
        </svg>
        <div className="badge-dot absolute inset-0 flex items-center justify-center" />
      </div>

      {/* Bottom row */}
      <FadeUp
        delay={0.5}
        className="col-span-full row-start-2 pt-15 pb-12 md:pt-12 md:pb-0 hero-bottom"
      >
        <p className="text-[15px] text-muted leading-relaxed max-w-95">
          I build interfaces that feel{" "}
          <strong className="text-ink font-medium">fast and inclusive</strong> — from
          pixel-perfect web apps to cross-platform mobile. I care about the craft,
          the details, and shipping things that{" "}
          <strong className="text-ink font-medium">actually work.</strong>
        </p>

        <div className="flex gap-3 flex-wrap items-center">
<a
            href="#contact"
            className="inline-flex items-center gap-3 font-mono text-[13px] tracking-widest px-9 py-4 whitespace-nowrap hover:-translate-y-0.5 hover:opacity-80 transition-all duration-200"
            style={{ background: "var(--ink)", color: "var(--white)" }}
          >
            Say hello →
          </a>
        </div>
      </FadeUp>
    </section>
  );
}