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
        className="fade-up about-left flex flex-col justify-between relative overflow-hidden"
        style={{ background: "var(--black)", color: "var(--white)" }}
      >
        {/* Section label */}
        <div
          className="flex items-center gap-3 uppercase"
          style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".16em", color: "var(--color-cream)" }}
        >
          About
          <span className="flex-1 h-px block" style={{ background: "#1e1e1e" }} />
        </div>

        {/* Quote */}
        <div className="flex-1 flex items-center">
          <div
            className="pt-10 md:pt-2.5"
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
        <div className="flex flex-col gap-2.5">
          {META.map(([label, val]) => (
            <div
              key={label}
              className="flex items-center justify-between pt-2.5"
              style={{ borderTop: "1px solid #1e1e1e" }}
            >
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "#444", letterSpacing: ".1em", textTransform: "uppercase" }}>{label}</span>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "#888" }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Decorative ghost letters */}
        <div
          aria-hidden="true"
          className="about-ghost absolute pointer-events-none select-none"
          style={{
            right: -20, top: "15%",
            fontFamily: "var(--f-display)", fontWeight: 800,
            fontSize: "clamp(80px, 20vw, 260px)", color: "#0f0f0f", lineHeight: 1,
            letterSpacing: "-.05em",
          }}
        >
          dev
        </div>
      </div>

      {/* ── Light right panel ── */}
      <div
        className="fade-up about-right flex flex-col justify-center"
        style={{ transitionDelay: ".15s" }}
      >
        <h2
          className="mb-7"
          style={{ fontFamily: "var(--f-display)", fontWeight: 800, fontSize: "clamp(2rem,3.5vw,3rem)", letterSpacing: "-.04em" }}
        >
          A bit about<br />who I am.
        </h2>

        <p className="mb-[18px]" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8 }}>
          I came to development through self-teaching, drawn in by the immediate feedback loop of building something you can see and click. What started as curiosity became a{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>genuine craft I care about.</strong>
        </p>
        <p className="mb-[18px]" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8 }}>
          I focus on frontend and mobile because that's where code meets people. The decisions I make — how long a transition takes, whether a form announces errors to a screen reader, whether a tap target is big enough — affect real humans.
        </p>
        <p className="mb-[18px]" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8 }}>
          I care about shipping{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>small, well-tested slices</strong>{" "}
          and iterating with real feedback. Accessibility isn't a checkbox — it's part of the craft.
        </p>

        {/* Values grid */}
        <div
          className="grid grid-cols-2 gap-px mt-10"
          style={{ background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="value-cell p-5"
              style={{ background: "var(--white)" }}
            >
              <h4 className="mb-1.5" style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 14, letterSpacing: "-.02em" }}>{v.title}</h4>
              <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
