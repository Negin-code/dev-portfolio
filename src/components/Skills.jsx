import { C } from "../tokens";
import { SecLabel } from "./ui";
import { useReveal, rv } from "../hooks/useReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { SKILLS } from "../data";

export default function Skills() {
  const ref = useReveal();
  const isMobile = useIsMobile();
  const half = Math.ceil(SKILLS.length / 2);

  return (
    <section id="skills" ref={ref} style={{
      padding: isMobile ? "60px 20px" : "100px 40px", background: C.bg,
      borderTop: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div data-reveal style={rv(0)}><SecLabel>Skills</SecLabel></div>

        {isMobile ? (
          <div data-reveal style={rv(80)}>
            {SKILLS.map(([name, cat]) => (
              <div key={name} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "13px 0", borderBottom: `1px solid ${C.border}`,
              }}>
                <span style={{ fontSize: 15, fontWeight: 700 }}>{name}</span>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.09em",
                  textTransform: "uppercase", color: C.textMuted,
                }}>{cat}</span>
              </div>
            ))}
          </div>
        ) : (
          <div data-reveal style={{ ...rv(80), display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {[SKILLS.slice(0, half), SKILLS.slice(half)].map((col, ci) => (
              <div key={ci} style={{
                borderRight: ci === 0 ? `1px solid ${C.border}` : "none",
                paddingRight: ci === 0 ? 32 : 0,
                paddingLeft: ci === 1 ? 32 : 0,
              }}>
                {col.map(([name, cat]) => (
                  <div key={name} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "13px 0", borderBottom: `1px solid ${C.border}`,
                  }}>
                    <span style={{ fontSize: 15, fontWeight: 700 }}>{name}</span>
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.09em",
                      textTransform: "uppercase", color: C.textMuted,
                    }}>{cat}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
