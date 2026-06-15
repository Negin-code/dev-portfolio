import { C } from "../tokens";
import { Pill, Arr } from "./ui";

export default function Nav({ scrolled, scrollTo }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 40px",
      background: scrolled ? "rgba(249,247,244,0.95)" : C.bg,
      borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      transition: "all 0.3s ease",
      backdropFilter: scrolled ? "blur(10px)" : "none",
    }}>
      <span
        style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.04em", cursor: "pointer" }}
        onClick={() => scrollTo("hero")}
      >
        Negin<span style={{ color: C.indigo }}>.</span>
      </span>

      <div style={{ display: "flex", gap: 28 }}>
        {[["About","about"],["Work","work"],["Skills","skills"],["Contact","contact"]].map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)}
            style={{
              background: "none", border: "none", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted,
              cursor: "pointer", fontFamily: "inherit", transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = C.textPrimary}
            onMouseLeave={e => e.currentTarget.style.color = C.textMuted}
          >
            {label}
          </button>
        ))}
      </div>

      <Pill onClick={() => scrollTo("contact")} style={{ fontSize: 11, padding: "11px 24px" }}>
        Hire Me <Arr />
      </Pill>
    </nav>
  );
}
