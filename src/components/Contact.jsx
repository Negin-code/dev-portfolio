import { useState } from "react";
import { C } from "../tokens";
import { SecLabel, Pill, Arr, CTAButton } from "./ui";
import { useReveal, rv } from "../hooks/useReveal";
import { useIsMobile } from "../hooks/useIsMobile";

const LINKS = [
  ["Email", "iamneginasem@gmail.com", "mailto:iamneginasem@gmail.com"],
  ["GitHub", "github.com/Negin-code", "https://github.com/Negin-code"],
  ["LinkedIn", "linkedin.com/in/neginasem", "https://www.linkedin.com/in/neginasem/"],
];

export default function Contact() {
  const ref = useReveal();
  const isMobile = useIsMobile();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const inputStyle = {
    width: "100%", padding: "14px 0", border: "none",
    borderBottom: "1px solid #333", background: "transparent",
    fontSize: 15, color: "#fff", outline: "none",
    fontFamily: "inherit", transition: "border-color 0.2s",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" ref={ref}>
      {/* CTA banner */}
      <div style={{ background: C.indigo, padding: isMobile ? "40px 20px" : "56px 40px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: 24,
        }}>
          <div>
            <p style={{
              fontSize: 9, fontWeight: 800, letterSpacing: "0.16em",
              textTransform: "uppercase", color: C.indigoPale, marginBottom: 12,
            }}>Let's work together</p>
            <h2 style={{
              fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontWeight: 900,
              letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1, maxWidth: 320,
            }}>
              Got a project? Let's make something great.
            </h2>
          </div>
          <CTAButton />
        </div>
      </div>

      {/* Contact form + links */}
      <div style={{ background: C.dark, padding: isMobile ? "48px 20px" : "72px 40px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 48 : 64,
        }}>
          {/* Left: links */}
          <div>
            <div data-reveal style={rv(0)}><SecLabel color={C.indigoLight}>Contact</SecLabel></div>
            <p data-reveal style={{ ...rv(80), fontSize: 15, lineHeight: 1.85, color: "#666", marginBottom: 32 }}>
              Whether it's a full project, a contract role, or just a conversation — I'm always happy to talk shop.
            </p>
            <div data-reveal style={{ ...rv(140), display: "flex", flexDirection: "column", gap: 16 }}>
              {LINKS.map(([label, value, href]) => (
                <div key={label} style={{ display: "flex", gap: 20, alignItems: "baseline" }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.09em",
                    textTransform: "uppercase", color: "#555", width: 56, flexShrink: 0,
                  }}>{label}</span>
                  <a
                    href={href} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontSize: 14, color: "#fff", borderBottom: "1px solid #333",
                      paddingBottom: 2, textDecoration: "none", transition: "border-color 0.2s",
                      wordBreak: "break-all",
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "#818CF8"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#333"}
                  >{value}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div data-reveal style={rv(100)}>
            {status === "sent" ? (
              <div>
                <p style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: 8 }}>
                  Message sent.
                </p>
                <p style={{ fontSize: 15, color: "#666" }}>I'll get back to you within a day or two.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                {[{n:"name",l:"Your name",t:"text"},{n:"email",l:"Email address",t:"email"}].map(f => (
                  <input key={f.n} type={f.t} placeholder={f.l} required value={form[f.n]}
                    onChange={e => setForm({ ...form, [f.n]: e.target.value })}
                    style={{ ...inputStyle, marginBottom: 8 }}
                    onFocus={e => e.target.style.borderColor = C.indigoLight}
                    onBlur={e => e.target.style.borderColor = "#333"}
                  />
                ))}
                <textarea
                  placeholder="What are you working on?" required rows={4} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none", marginBottom: 28 }}
                  onFocus={e => e.target.style.borderColor = C.indigoLight}
                  onBlur={e => e.target.style.borderColor = "#333"}
                />
                <Pill style={{
                  opacity: status === "sending" ? 0.6 : 1,
                  alignSelf: "flex-start",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}>
                  {status === "sending" ? "Sending…" : "Send Message"} <Arr />
                </Pill>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
