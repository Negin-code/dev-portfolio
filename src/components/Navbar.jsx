import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 400,
          padding: "0 48px", height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "background .4s, border-color .4s",
          background:    scrolled ? "rgba(247,245,240,.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom:  scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "var(--f-display)", fontWeight: 800,
            fontSize: 15, letterSpacing: "-.03em",
          }}
        >
          Negin Asem
        </a>

        {/* Desktop links — absolutely centred */}
        <ul
          className="hidden md:flex"
          style={{
            position: "absolute", left: "50%", transform: "translateX(-50%)",
            gap: 40, listStyle: "none",
          }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link-item"
                style={{
                  fontFamily: "var(--f-mono)", fontSize: 13,
                  letterSpacing: ".12em", textTransform: "uppercase",
                  color: "var(--muted)", transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          style={{
            background: "none", border: "none", padding: 4, cursor: "pointer",
          }}
        >
          <span style={{ display: "block", width: 24, height: 1, background: menuOpen ? "var(--white)" : "var(--ink)", transition: "all .3s", transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 1, background: menuOpen ? "var(--white)" : "var(--ink)", transition: "all .3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 1, background: menuOpen ? "var(--white)" : "var(--ink)", transition: "all .3s", transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
        </button>
      </header>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          role="dialog"
          aria-label="Navigation"
          className="md:hidden"
          style={{
            position: "fixed", inset: 0, zIndex: 390,
            background: "var(--black)", color: "var(--white)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 40,
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(2.5rem,8vw,4rem)",
                fontWeight: 800, color: "var(--white)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
