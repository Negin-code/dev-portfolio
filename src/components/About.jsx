const VALUES = [
  { title: "Accessibility", text: "WCAG AA, keyboard nav, and screen reader passes — every time." },
  { title: "Performance",   text: "Bundle budgets, TTI, and perceived speed. Fast is a feature." },
  { title: "Collaboration", text: "Clear code, clear comments, because teammates deserve it." },
  { title: "Learning",      text: "Ship imperfect things early. Iterate with real feedback." },
];

const META = [
  ["Location", "Vancouver, BC"],
  ["Status",   "Open to junior roles"],
  ["Focus",    "Frontend & Mobile"],
];

export default function About() {
  return (
    <section id="about">
      {/* ── Dark left panel ── */}
      <div
        className="fade-up about-left"
        style={{
          background: "var(--black)",
          color: "var(--white)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Section label */}
        <div
          style={{
            fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".16em",
            textTransform: "uppercase", color: "#333",
            display: "flex", alignItems: "center", gap: 12,
          }}
        >
          About
          <span style={{ flex: 1, height: 1, background: "#1e1e1e", display: "block" }} />
        </div>

        {/* Quote */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "var(--f-display)", fontWeight: 800,
              fontSize: "clamp(2.8rem,5.5vw,5rem)",
              lineHeight: ".92", letterSpacing: "-.04em",
              marginBottom: 40, marginTop: "auto",
            }}
          >
            Code<br />meets<br />
            <em style={{ WebkitTextStroke: "1px var(--white)", color: "transparent", fontStyle: "italic", fontWeight: 300, fontFamily: "var(--f-body)" }}>
              people.
            </em>
          </div>
        </div>

        {/* Meta rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {META.map(([label, val]) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #1e1e1e", paddingTop: 10 }}
            >
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "#444", letterSpacing: ".1em", textTransform: "uppercase" }}>{label}</span>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "#888" }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Decorative ghost letters */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
            fontFamily: "var(--f-display)", fontWeight: 800,
            fontSize: 260, color: "#0f0f0f", lineHeight: 1,
            pointerEvents: "none", userSelect: "none", letterSpacing: "-.05em",
          }}
        >
          dev
        </div>
      </div>

      {/* ── Light right panel ── */}
      <div
        className="fade-up about-right"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transitionDelay: ".15s",
        }}
      >
        <h2 style={{ fontFamily: "var(--f-display)", fontWeight: 800, fontSize: "clamp(2rem,3.5vw,3rem)", letterSpacing: "-.04em", marginBottom: 28 }}>
          A bit about<br />who I am.
        </h2>

        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 18 }}>
          I came to development through self-teaching, drawn in by the immediate feedback loop of building something you can see and click. What started as curiosity became a{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>genuine craft I care about.</strong>
        </p>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 18 }}>
          I focus on frontend and mobile because that's where code meets people. The decisions I make — how long a transition takes, whether a form announces errors to a screen reader, whether a tap target is big enough — affect real humans.
        </p>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 18 }}>
          I care about shipping{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>small, well-tested slices</strong>{" "}
          and iterating with real feedback. Accessibility isn't a checkbox — it's part of the craft.
        </p>

        {/* Values grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)", marginTop: 40, border: "1px solid var(--border)" }}>
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="value-cell"
              style={{ background: "var(--white)", padding: 20 }}
            >
              <h4 style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 14, letterSpacing: "-.02em", marginBottom: 6 }}>{v.title}</h4>
              <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
