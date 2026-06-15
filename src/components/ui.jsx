import { useState } from "react";
import { C } from "../tokens";

const pillBase = {
  display: "inline-flex", alignItems: "center", gap: 8,
  padding: "10px 20px", borderRadius: 999,
  fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
  textTransform: "uppercase", cursor: "pointer",
  textDecoration: "none", border: "none", fontFamily: "inherit",
  transition: "opacity 0.2s",
};

export const Arr = ({ light }) => (
  <span style={{
    width: 20, height: 20,
    background: light ? "#fff" : C.indigo,
    borderRadius: "50%",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontSize: 10, flexShrink: 0,
    color: light ? C.indigo : "#fff",
  }}>↗</span>
);

export const Pill = ({ children, style = {}, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{ ...pillBase, background: C.dark, color: "#fff", opacity: hov ? 0.78 : 1, ...style }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
};

export const PillGhost = ({ children, style = {}, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{
        ...pillBase,
        background: hov ? C.dark : "transparent",
        color: hov ? "#fff" : C.dark,
        border: `1.5px solid ${C.dark}`,
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
};

export const SecLabel = ({ children, color }) => (
  <p style={{
    fontSize: 9, fontWeight: 800, letterSpacing: "0.16em",
    textTransform: "uppercase", color: color || C.indigo,
    marginBottom: 14,
  }}>
    {children}
  </p>
);

export const CTAButton = () => (
  <a
    href="mailto:iamneginasem@gmail.com"
    style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "#fff", color: C.indigo,
      padding: "12px 24px", borderRadius: 999,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
      textTransform: "uppercase", border: "none", cursor: "pointer",
      whiteSpace: "nowrap", flexShrink: 0,
      fontFamily: "inherit", textDecoration: "none", transition: "opacity 0.2s",
    }}
    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
  >
    Get in Touch <Arr light />
  </a>
);
