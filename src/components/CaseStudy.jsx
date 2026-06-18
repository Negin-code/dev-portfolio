import { C } from "../tokens";
import { CTAButton } from "./ui";
import { useReveal, rv } from "../hooks/useReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { CASE_STUDIES } from "../data";

const pillBase = {
  display: "inline-flex", alignItems: "center", gap: 8,
  padding: "10px 20px", borderRadius: 999,
  fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
  textTransform: "uppercase", cursor: "pointer",
  textDecoration: "none", border: "none", fontFamily: "inherit",
  transition: "opacity 0.2s",
};

export default function CaseStudy({ id, onBack }) {
  const cs = CASE_STUDIES[id];
  const ref = useReveal();
  const isMobile = useIsMobile();

  if (!cs) return null;

  const px = isMobile ? "20px" : "40px";

  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
      {/* Back nav */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(249,247,244,0.95)", backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${C.border}`,
        padding: `14px ${px}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={onBack}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "inherit", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.09em", textTransform: "uppercase",
            color: C.textMuted, transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = C.textPrimary}
          onMouseLeave={e => e.currentTarget.style.color = C.textMuted}
        >
          ← {isMobile ? "Back" : "Back to Portfolio"}
        </button>
        {!isMobile && (
          <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.04em" }}>
            Negin<span style={{ color: C.indigo }}>.</span>
          </span>
        )}
        {cs.url ? (
          <a href={`https://${cs.url}`} target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase",
              color: C.indigo, textDecoration: "none",
              borderBottom: `1px solid ${C.indigo}`, paddingBottom: 2,
            }}>
            Live ↗
          </a>
        ) : (
          !isMobile && <span style={{ width: 80 }} />
        )}
      </div>

      <div ref={ref}>
        {/* Hero */}
        <div style={{ background: C.dark, padding: `${isMobile ? "48px" : "72px"} ${px}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div data-reveal style={{ ...rv(0), display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 10, height: 10, background: cs.accent, borderRadius: "50%", display: "inline-block" }} />
              <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#666" }}>
                {cs.type} · {cs.year}
              </span>
            </div>
            <h1 data-reveal style={{
              ...rv(80),
              fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 900,
              letterSpacing: "-0.04em", lineHeight: 1, color: "#fff", marginBottom: 16,
            }}>
              {cs.title}
            </h1>
            <p data-reveal style={{ ...rv(140), fontSize: 16, color: "#777", marginBottom: 40, maxWidth: 600 }}>
              {cs.subtitle}
            </p>

            {/* Meta grid */}
            <div data-reveal style={{
              ...rv(180),
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, auto) 1fr",
              gap: isMobile ? "16px 0" : 0,
              borderTop: "1px solid #1f1f1f", paddingTop: 28,
            }}>
              {[["Role", cs.role], ["Year", cs.year], ["Type", cs.type]].map(([label, val]) => (
                <div key={label} style={{
                  paddingRight: isMobile ? 0 : 40,
                  borderRight: isMobile ? "none" : "1px solid #1f1f1f",
                  marginRight: isMobile ? 0 : 40,
                }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", marginBottom: 6 }}>{label}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{val}</p>
                </div>
              ))}
              <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", marginBottom: 8 }}>Stack</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cs.stack.map(t => (
                    <span key={t} style={{ border: "1px solid #2a2a2a", borderRadius: 999, padding: "2px 10px", fontSize: 11, color: "#888" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div style={{ padding: `${isMobile ? "48px" : "80px"} ${px}`, borderBottom: cs.images ? "none" : `1px solid ${C.border}` }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto",
            display: isMobile ? "block" : "grid",
            gridTemplateColumns: "200px 1fr",
            gap: 64,
          }}>
            <p data-reveal style={{ ...rv(0), fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: C.indigo, marginBottom: isMobile ? 16 : 0 }}>Overview</p>
            <p data-reveal style={{ ...rv(80), fontSize: 17, lineHeight: 1.85, color: C.textSec }}>{cs.overview}</p>
          </div>
        </div>

        {/* Stats grid */}
        {cs.stats && (
          <div style={{ padding: `0 ${px} ${isMobile ? "48px" : "80px"}`, borderBottom: `1px solid ${C.border}` }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: 1, background: C.border, borderRadius: 12, overflow: "hidden",
              }}>
                {cs.stats.map((s, i) => (
                  <div key={i} data-reveal style={{ ...rv(i * 60), background: C.surface, padding: "36px 24px 28px" }}>
                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, marginBottom: 12 }}>{s.label}</p>
                    {s.before ? (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 10 }}>
                          <p style={{ fontSize: 11, color: C.textMuted }}>Before: <span style={{ fontWeight: 700, color: "#ef4444" }}>{s.before}</span></p>
                          <p style={{ fontSize: 11, color: C.textMuted }}>After: <span style={{ fontWeight: 700, color: "#22c55e" }}>{s.after}</span></p>
                        </div>
                        <p style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em", color: C.indigo }}>{s.delta}</p>
                      </>
                    ) : (
                      <>
                        <p style={{ fontSize: s.value.length > 4 ? 18 : 28, fontWeight: 900, letterSpacing: "-0.03em", color: C.textPrimary, marginBottom: 6 }}>{s.value}</p>
                        <p style={{ fontSize: 11, color: C.textMuted }}>{s.sub}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Image gallery */}
        {cs.images && (
          <div style={{ padding: `0 ${px} ${isMobile ? "48px" : "80px"}`, borderBottom: `1px solid ${C.border}` }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
                {cs.images.map((img, i) => (
                  <div key={i} data-reveal style={rv(i * 80)}>
                    <div style={{
                      borderRadius: 12, aspectRatio: "16/10", overflow: "hidden",
                      border: `1px solid ${C.border}`,
                      background: img.src ? C.dark : C.border,
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    }}>
                      {img.src ? (
                        <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                      ) : (
                        <>
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="m21 15-5-5L5 21"/>
                          </svg>
                          <p style={{ fontSize: 10, color: "#bbb", marginTop: 8 }}>{img.note}</p>
                        </>
                      )}
                    </div>
                    <p style={{ fontSize: 11, fontWeight: 600, color: C.textMuted, marginTop: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>{img.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sections */}
        {cs.sections.map((sec, i) => (
          <div key={sec.title} style={{
            padding: `${isMobile ? "40px" : "64px"} ${px}`, borderBottom: `1px solid ${C.border}`,
            background: i % 2 === 0 ? C.bg : C.surface,
          }}>
            <div style={{
              maxWidth: 1100, margin: "0 auto",
              display: isMobile ? "block" : "grid",
              gridTemplateColumns: "200px 1fr",
              gap: 64,
            }}>
              <div style={{ marginBottom: isMobile ? 16 : 0 }}>
                <p data-reveal style={{ ...rv(0), fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: C.indigo, marginBottom: 8 }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 data-reveal style={{ ...rv(60), fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: C.textPrimary, lineHeight: 1.3 }}>
                  {sec.title}
                </h3>
              </div>
              <div>
                <p data-reveal style={{ ...rv(100), fontSize: 15, lineHeight: 1.85, color: C.textSec, marginBottom: sec.code ? 24 : 0 }}>
                  {sec.content}
                </p>
                {sec.code && (
                  <div data-reveal style={{ ...rv(160), background: "#0D0D0D", borderRadius: 10, border: "1px solid #1f1f1f", overflow: "hidden" }}>
                    {sec.file && (
                      <div style={{ background: "#1e293b", padding: "6px 14px", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: "monospace", fontSize: 10, color: "#94a3b8" }}>{sec.file}</span>
                        <span style={{ fontFamily: "monospace", fontSize: 10, color: "#475569", textTransform: "uppercase" }}>TypeScript</span>
                      </div>
                    )}
                    <pre style={{ padding: isMobile ? "16px" : "24px 28px", overflowX: "auto", margin: 0, lineHeight: 1.7 }}>
                      <code style={{ fontFamily: "'Fira Code', 'Cascadia Code', 'Courier New', monospace", fontSize: isMobile ? 11 : 12.5, color: "#A5B4FC", whiteSpace: "pre" }}>
                        {sec.code}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Takeaways */}
        <div style={{ padding: `${isMobile ? "48px" : "80px"} ${px}`, background: C.dark }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p data-reveal style={{ ...rv(0), fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: C.indigoLight, marginBottom: 32 }}>
              Key Takeaways
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {cs.takeaways.map((t, i) => (
                <div key={i} data-reveal style={{
                  ...rv(i * 60),
                  display: "grid", gridTemplateColumns: "32px 1fr", gap: 20,
                  padding: "20px 0", borderBottom: "1px solid #1a1a1a", alignItems: "start",
                }}>
                  <span style={{ fontSize: 9, fontWeight: 800, color: C.indigo, paddingTop: 4 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#aaa" }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ padding: `${isMobile ? "40px" : "56px"} ${px}`, background: C.indigo }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto", width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 24,
          }}>
            <div>
              <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: C.indigoPale, marginBottom: 10 }}>
                Liked this project?
              </p>
              <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1 }}>
                Let's build something together.
              </h2>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={onBack} style={{ ...pillBase, background: "rgba(255,255,255,0.15)", color: "#fff", border: "none" }}>
                ← All Projects
              </button>
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
