import { useState } from "react";
import { PROJECTS } from "../data";

function ProjectItem({ proj }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className={`proj-item${open ? " open" : ""}`}
      style={{ borderBottom: "1px solid #1e1e1e", overflow: "hidden" }}
    >
      {/* ── Header (clickable row) ── */}
      <div
        className="proj-header"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => e.key === "Enter" && toggle()}
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr auto auto",
          alignItems: "center",
          gap: 24,
          padding: "28px 0",
          position: "relative",
          cursor: "none",
          transition: "padding .4s",
        }}
      >
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "#333", letterSpacing: ".08em" }}>
          {proj.num}
        </span>

        <span style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: "clamp(1.4rem,3.5vw,2.4rem)", letterSpacing: "-.025em", color: "var(--white)" }}>
          {proj.name}
        </span>

        <span className="hidden md:block" style={{ fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#555", whiteSpace: "nowrap" }}>
          {proj.type}
        </span>

        <span
          className="proj-arrow"
          style={{ fontSize: 20, color: "#333", transition: "transform .4s cubic-bezier(.16,1,.3,1)", width: 28, textAlign: "center" }}
        >
          +
        </span>
      </div>

      {/* ── Accordion body ── */}
      <div className="proj-body">
        <div className="proj-body-inner">
          {/* Left col */}
          <div>
            <p className="proj-desc" style={{ fontSize: 14, color: "#aaa", lineHeight: 1.75, marginBottom: 16 }}>
              {proj.desc}
            </p>
            <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "#555", marginBottom: 24, fontStyle: "italic" }}>
              {proj.role}
            </p>
            <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--white)", borderLeft: "2px solid #fff", paddingLeft: 12, lineHeight: 1.6 }}>
              {proj.impact}
            </p>
          </div>

          {/* Right col */}
          <div>
            {/* Stack tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {proj.stack.map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".08em", border: "1px solid #444", color: "#888", padding: "5px 10px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {proj.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", border: "1px solid #333", color: "#888", padding: "10px 18px", transition: "all .2s", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--white)"; e.currentTarget.style.color = "var(--white)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#333";         e.currentTarget.style.color = "#888"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--black)", color: "var(--white)", padding: "80px 48px" }}
    >
      {/* Section label */}
      <div
        style={{
          fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".16em",
          textTransform: "uppercase", color: "var(--muted)",
          display: "flex", alignItems: "center", gap: 12, marginBottom: 48,
        }}
      >
        Selected Work
        <span style={{ flex: 1, height: 1, background: "#222", display: "block" }} />
      </div>

      {/* Project list */}
      <div style={{ borderTop: "1px solid #1e1e1e" }}>
        {PROJECTS.map((proj) => (
          <ProjectItem key={proj.num} proj={proj} />
        ))}
      </div>
    </section>
  );
}
