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
    try {
      const res = await fetch("https://formspree.io/f/mbdprjjj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.msg }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", background: "transparent", border: "none",
    borderBottom: "1px solid #333",
    padding: "12px 0", fontFamily: "var(--f-body)", fontSize: 15,
    color: "var(--white)", outline: "none", transition: "border-color .2s",
  };

  const labelStyle = {
    display: "block", fontFamily: "var(--f-mono)", fontSize: 10,
    letterSpacing: ".12em", textTransform: "uppercase",
    color: "#666", marginBottom: 8,
  };

  const focusBorder  = (e) => (e.target.style.borderColor = "var(--white)");
  const blurBorder   = (e) => (e.target.style.borderColor = "#333");

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 border border-[#333] rounded-full flex items-center justify-center text-xl mx-auto mb-5 text-[var(--white)]">
          ✓
        </div>
        <h3 style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--white)", marginBottom: 8 }}>
          Message sent.
        </h3>
        <p style={{ fontSize: 14, color: "#666" }}>
          I'll get back to you within 1–2 business days.
        </p>
        <br />
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", msg: "" }); }}
          style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "#666", background: "none", border: "none", borderBottom: "1px solid #333", paddingBottom: 2 }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-5">
        <label htmlFor="fn" style={labelStyle}>Name</label>
        <input id="fn" type="text" name="name" required placeholder="Your name" value={form.name} onChange={update("name")} style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
      </div>

      <div className="mb-5">
        <label htmlFor="fe" style={labelStyle}>Email</label>
        <input id="fe" type="email" name="email" required placeholder="you@email.com" value={form.email} onChange={update("email")} style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
      </div>

      <div className="mb-5">
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
        className="mt-7 w-full flex items-center justify-center gap-2.5 transition-opacity"
        style={{
          background: "var(--white)", color: "var(--black)",
          fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".14em",
          textTransform: "uppercase", border: "none", padding: "18px 24px",
          opacity: loading ? 0.5 : 1, cursor: loading ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {loading ? <span className="spinner" /> : "Send Message →"}
      </button>

      <p className="text-center mt-3" style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "#444" }}>
        Your data is never stored or shared.
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "var(--black)", color: "var(--white)" }}
    >
      {/* Top border */}
      <div style={{ borderTop: "1px solid #1e1e1e" }} />

      <div className="contact-grid px-6 md:px-12 pt-20 pb-0">
        {/* ── Left: heading + connect links ── */}
        <div className="fade-up">
          <h2
            className="contact-title-size"
            style={{ fontFamily: "var(--f-display)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: ".92" }}
          >
            Let's work<br />together.
          </h2>

          <p className="mt-6 max-w-sm" style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>
            Open to junior frontend and mobile roles, freelance, and open source.
            Even if you just want to talk about React or accessibility — I'd love to hear from you.
          </p>

          <div className="flex flex-col mt-10">
            {CONNECT_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="connect-link flex items-center justify-between py-4"
                style={{
                  fontSize: 14,
                  borderBottom: "1px solid #1e1e1e",
                  borderTop: i === 0 ? "1px solid #1e1e1e" : undefined,
                  color: "var(--white)",
                }}
              >
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "#555", letterSpacing: ".1em", textTransform: "uppercase", width: 80, flexShrink: 0 }}>
                  {link.label}
                </span>
                <span className="flex-1" style={{ color: "var(--white)" }}>{link.val}</span>
                <span className="connect-arrow" style={{ color: "#444", transition: "color .2s, transform .2s" }}>→</span>
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
