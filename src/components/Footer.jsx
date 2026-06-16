import { useState } from "react";
import { C } from "../tokens";
import { useIsMobile } from "../hooks/useIsMobile";

const ICONS = [
  {
    key: "email",
    label: "Email",
    action: () => { window.location.href = "mailto:iamneginasem@gmail.com"; },
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    action: () => window.open("https://www.linkedin.com/in/neginasem/", "_blank"),
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    key: "github",
    label: "GitHub",
    action: () => window.open("https://github.com/Negin-code", "_blank"),
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
];

export default function Footer() {
  const [hov, setHov] = useState(null);
  const isMobile = useIsMobile();

  return (
    <footer style={{
      background: C.dark,
      borderTop: "1px solid #1a1a1a",
      padding: isMobile ? "24px 20px" : "24px 40px",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isMobile ? 16 : 0,
      }}>
        <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.04em", color: "#fff" }}>
          Negin<span style={{ color: C.indigoLight }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 12 }}>
          {ICONS.map(({ key, label, action, svg }, i) => (
            <button key={key} onClick={action} title={label}
              style={{
                width: 48, height: 48,
                border: `1.5px solid ${hov === i ? "#818CF8" : "#333"}`,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: hov === i ? "#818CF8" : "#888",
                cursor: "pointer", background: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              {svg}
            </button>
          ))}
        </div>
        <span style={{
          fontSize: 9, color: "#444", fontWeight: 600,
          letterSpacing: "0.06em", textTransform: "uppercase",
        }}>© 2026 Negin</span>
      </div>
    </footer>
  );
}
