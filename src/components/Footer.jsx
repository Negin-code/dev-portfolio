const FOOTER_LINKS = [
  { label: "GitHub",   href: "https://github.com/Negin-code"       },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/neginasem/" },
  { label: "Email",    href: "mailto:iamneginasem@gmail.com"        },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)" }}>
        Negin Asem — Frontend &amp; Mobile Developer · Last updated Mar 2026
      </p>

      <div style={{ display: "flex", gap: 24 }}>
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {link.label}
          </a>
        ))}
      </div>

      <p style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)" }}>
        © 2025 · React + Tailwind
      </p>
    </footer>
  );
}
