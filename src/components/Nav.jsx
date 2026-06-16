import { useState } from "react";
import { C } from "../tokens";
import { Pill, Arr } from "./ui";
import { useIsMobile } from "../hooks/useIsMobile";

const NAV_LINKS = [["About","about"],["Work","work"],["Skills","skills"],["Contact","contact"]];

export default function Nav({ scrolled, scrollTo }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const go = (id) => { scrollTo(id); setOpen(false); };

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: isMobile ? "14px 20px" : "14px 40px",
        background: scrolled ? "rgba(249,247,244,0.95)" : C.bg,
        borderBottom: `1px solid ${(scrolled || open) ? C.border : "transparent"}`,
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}>
        <span
          style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.04em", cursor: "pointer" }}
          onClick={() => go("hero")}
        >
          Negin<span style={{ color: C.indigo }}>.</span>
        </span>

        {!isMobile && (
          <div style={{ display: "flex", gap: 28 }}>
            {NAV_LINKS.map(([label, id]) => (
              <button key={id} onClick={() => go(id)}
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
        )}

        {isMobile ? (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 2, background: C.textPrimary, borderRadius: 2,
                transition: "transform 0.22s, opacity 0.22s",
                transformOrigin: "center",
                transform: open
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)"
                  : "scaleX(0)"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        ) : (
          <Pill onClick={() => go("contact")} style={{ fontSize: 11, padding: "11px 24px" }}>
            Hire Me <Arr />
          </Pill>
        )}
      </nav>

      {isMobile && open && (
        <div style={{
          background: C.bg, borderBottom: `1px solid ${C.border}`,
          padding: "8px 20px 20px", zIndex: 99,
        }}>
          {NAV_LINKS.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", borderBottom: `1px solid ${C.border}`,
                fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                color: C.textMuted, cursor: "pointer", fontFamily: "inherit", padding: "14px 0",
              }}
            >
              {label}
            </button>
          ))}
          <div style={{ paddingTop: 16 }}>
            <Pill onClick={() => go("contact")} style={{ fontSize: 11, padding: "11px 24px" }}>
              Hire Me <Arr />
            </Pill>
          </div>
        </div>
      )}
    </>
  );
}
