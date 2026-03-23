import { MARQUEE_ITEMS } from "../data";

// Duplicate items so the seamless loop works
const DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function MarqueeStrip() {
  return (
    <div
      className="marquee-strip"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "14px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 80, background: "linear-gradient(to right, var(--white), transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 80, background: "linear-gradient(to left,  var(--white), transparent)", zIndex: 2, pointerEvents: "none" }} />

      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        {DOUBLED.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--f-mono)", fontSize: 11,
                letterSpacing: ".14em", textTransform: "uppercase",
                color: "var(--muted)", padding: "0 28px", whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--border)", padding: "0 4px" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
