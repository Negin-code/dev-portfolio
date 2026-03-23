import { useState } from "react";
import { CONNECT_LINKS } from "../data";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1300)); // simulate network
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", background: "transparent", border: "none",
    borderBottom: "1px solid var(--border)",
    padding: "10px 0", fontFamily: "var(--f-body)", fontSize: 15,
    color: "var(--ink)", outline: "none", transition: "border-color .2s",
  };

  const labelStyle = {
    display: "block", fontFamily: "var(--f-mono)", fontSize: 10,
    letterSpacing: ".12em", textTransform: "uppercase",
    color: "var(--muted)", marginBottom: 8,
  };

  const focusBorder  = (e) => (e.target.style.borderColor = "var(--ink)");
  const blurBorder   = (e) => (e.target.style.borderColor = "var(--border)");

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "48px 0" }}>
        <div style={{ width: 56, height: 56, border: "1px solid var(--border)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, margin: "0 auto 20px" }}>
          ✓
        </div>
        <h3 style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: "1.5rem", marginBottom: 8 }}>
          Message sent.
        </h3>
        <p style={{ fontSize: 14, color: "var(--muted)" }}>
          I'll get back to you within 1–2 business days.
        </p>
        <br />
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", msg: "" }); }}
          style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)", background: "none", border: "none", borderBottom: "1px solid var(--border)", paddingBottom: 2 }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="fn" style={labelStyle}>Name</label>
        <input id="fn" type="text" name="name" required placeholder="Your name" value={form.name} onChange={update("name")} style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="fe" style={labelStyle}>Email</label>
        <input id="fe" type="email" name="email" required placeholder="you@email.com" value={form.email} onChange={update("email")} style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="fm" style={labelStyle}>Message</label>
        <textarea
          id="fm" name="msg" required placeholder="Tell me about the role or project…"
          value={form.msg} onChange={update("msg")}
          style={{ ...inputStyle, resize: "none", height: 100 }}
          onFocus={focusBorder} onBlur={blurBorder}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: 28, width: "100%",
          background: "var(--black)", color: "var(--white)",
          fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".14em",
          textTransform: "uppercase", border: "none", padding: "18px 24px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          transition: "background .2s", opacity: loading ? 0.5 : 1,
        }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.background = "#1a1a1a")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--black)")}
      >
        {loading ? <span className="spinner" /> : "Send Message →"}
      </button>

      <p style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "#bbb", textAlign: "center", marginTop: 12 }}>
        Your data is never stored or shared.
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "80px 48px 0", borderTop: "1px solid var(--border)" }}
    >
      <div className="contact-grid">
        {/* ── Left: heading + connect links ── */}
        <div className="fade-up">
          <h2 style={{ fontFamily: "var(--f-display)", fontWeight: 800, fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-.04em", lineHeight: ".92" }}>
            Let's work<br />together.
          </h2>

          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginTop: 24, maxWidth: 340 }}>
            Open to junior frontend and mobile roles, freelance, and open source.
            Even if you just want to talk about React or accessibility — I'd love to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 40 }}>
            {CONNECT_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="connect-link"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "18px 0", fontSize: 14, transition: "all .2s",
                  borderBottom: "1px solid var(--border)",
                  borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                }}
              >
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", width: 80, flexShrink: 0 }}>
                  {link.label}
                </span>
                <span style={{ flex: 1, color: "var(--ink)" }}>{link.val}</span>
                <span className="connect-arrow" style={{ color: "var(--border)", transition: "color .2s, transform .2s" }}>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="fade-up" style={{ transitionDelay: ".15s" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
