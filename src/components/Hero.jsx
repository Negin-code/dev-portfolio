import { useState, useEffect } from "react";
import { C } from "../tokens";
import { Pill, PillGhost, Arr } from "./ui";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Hero({ scrollTo }) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (d) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${d}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${d}ms`,
  });

  return (
    <section id="hero" style={{
      minHeight: "88vh", display: "flex", alignItems: "center",
      padding: isMobile ? "48px 20px 40px" : "80px 40px 60px", background: C.bg,
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 200px",
        gap: 32,
        alignItems: "center", width: "100%", maxWidth: 1100, margin: "0 auto",
      }}>
        <div>
          <div style={{
            ...fade(0),
            display: "inline-flex", alignItems: "center", gap: 7,
            border: `1px solid ${C.border}`, borderRadius: 999,
            padding: "4px 14px", marginBottom: 28, background: C.surface,
          }}>
            <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: C.textMuted }}>
              Available for work
            </span>
          </div>

          <h1 style={{
            ...fade(100),
            fontSize: "clamp(2.6rem, 6vw, 4.8rem)", fontWeight: 900,
            lineHeight: 0.92, letterSpacing: "-0.04em", marginBottom: 24,
          }}>
            I build<br />interfaces<br /><span style={{ color: C.indigo }}>people trust.</span>
          </h1>

          <p style={{
            ...fade(200),
            fontSize: 15, lineHeight: 1.8, color: C.textSec,
            maxWidth: 380, marginBottom: 32,
          }}>
            Frontend developer with a design background. I work where typography,
            motion, and clean architecture intersect.
          </p>

          <div style={{ ...fade(290), display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <Pill onClick={() => scrollTo("work")}>View Work <Arr /></Pill>
            <PillGhost onClick={() => window.open("/cv.pdf", "_blank")}>Download CV</PillGhost>
          </div>
        </div>

        {!isMobile && (
          <div style={{
            position: "relative", height: 240,
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
          }}>
            <div aria-hidden="true" style={{
              fontSize: 148, fontWeight: 900, letterSpacing: "-0.08em",
              color: C.border, lineHeight: 1, userSelect: "none",
            }}>NG</div>
            <div style={{
              position: "absolute", bottom: 20, right: 0,
              background: C.dark, color: "#fff",
              padding: "12px 16px", borderRadius: 12, textAlign: "right",
            }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#666", marginBottom: 3 }}>
                Based in
              </p>
              <p style={{ fontSize: 13, fontWeight: 800 }}>Vancouver, CA</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
