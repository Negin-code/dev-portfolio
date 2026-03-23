import { SKILL_CLOUD, SKILL_TABLE, LEVEL_STYLES } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "80px 48px", borderTop: "1px solid var(--border)" }}
    >
      {/* ── Header ── */}
      <div
        className="fade-up"
        style={{
          display: "flex", alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 64, flexWrap: "wrap", gap: 16,
        }}
      >
        <h2 style={{ fontFamily: "var(--f-display)", fontWeight: 800, fontSize: "clamp(3rem,7vw,6rem)", letterSpacing: "-.04em", lineHeight: ".9" }}>
          Skills &amp;<br />Tools
        </h2>

        {/* Legend */}
        <div style={{ display: "flex", gap: 20, alignItems: "center", fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)" }}>
          <span><span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ink)", display: "inline-block", marginRight: 4 }} /> Strong</span>
          <span><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#888", display: "inline-block", marginRight: 4 }} /> Comfortable</span>
          <span><span style={{ width: 4, height: 4, borderRadius: "50%", background: "#bbb", display: "inline-block", marginRight: 4 }} /> Familiar</span>
        </div>
      </div>

      {/* ── Typographic cloud ── */}
      <div
        className="fade-up"
        style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "baseline", marginBottom: 56, transitionDelay: ".1s" }}
      >
        {SKILL_CLOUD.map((skill) => (
          <span
            key={skill.label}
            className="sk"
            style={{
              fontFamily: "var(--f-display)", fontWeight: 700,
              letterSpacing: "-.02em",
              borderBottom: "2px solid transparent", paddingBottom: 2,
              transition: "border-color .2s, color .2s",
              lineHeight: 1,
              ...LEVEL_STYLES[skill.level],
            }}
          >
            {skill.label}
          </span>
        ))}
      </div>

      {/* ── Detail table ── */}
      <div
        className="fade-up"
        style={{ borderTop: "1px solid var(--border)", marginTop: 32, transitionDelay: ".2s" }}
      >
        {SKILL_TABLE.map((row) => (
          <div
            key={row.name}
            className="st-row"
            style={{
              display: "grid", gridTemplateColumns: "200px 140px 1fr",
              gap: 24, alignItems: "center",
              padding: "14px 0", borderBottom: "1px solid var(--border)",
              transition: "background .15s",
            }}
          >
            <span style={{ fontWeight: 500, fontSize: 14 }}>{row.name}</span>
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)" }}>{row.level}</span>
            <span className="st-note">{row.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
