import { useState } from "react";
import { C } from "../tokens";
import { SecLabel, PillGhost } from "./ui";
import { useReveal, rv } from "../hooks/useReveal";
import { PROJECTS } from "../data";

export default function Projects({ onCaseStudy }) {
  const ref = useReveal();
  const [hov, setHov] = useState(null);

  return (
    <section id="work" ref={ref} style={{
      padding: "100px 40px", background: C.bg,
      borderTop: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
          <div data-reveal style={rv(0)}><SecLabel>Selected Work</SecLabel></div>
          <div data-reveal style={rv(0)}>
            <PillGhost
              onClick={() => window.open("https://github.com/Negin-code", "_blank")}
              style={{ fontSize: 9, padding: "6px 16px" }}
            >
              View All ↗
            </PillGhost>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={{
                ...rv(i * 70),
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "5px 1fr auto",
                cursor: p.href ? "pointer" : "default",
                boxShadow: hov === i ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
                transform: hov === i ? "translateY(-2px)" : "translateY(0)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onClick={() => p.href && onCaseStudy(p.href)}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div style={{ background: p.accent }} />
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                  <p style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.01em" }}>{p.title}</p>
                  <p style={{ fontSize: 11, color: C.textMuted, fontWeight: 600 }}>{p.year}</p>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: C.textSec, marginBottom: 14, maxWidth: 600 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      border: "1px solid #ddd", borderRadius: 999,
                      padding: "2px 10px", fontSize: 11, color: "#666",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: 20, display: "flex", alignItems: "center" }}>
                <div style={{
                  width: 32, height: 32, background: p.accent, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, color: "#fff",
                }}>↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
