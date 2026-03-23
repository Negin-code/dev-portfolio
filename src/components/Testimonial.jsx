import FadeUp from "./FadeUp";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      style={{
        background: "var(--black)",
        color: "var(--white)",
        padding: "100px 48px",
        textAlign: "center",
      }}
    >
      <FadeUp>
        <p
          className="testi-size"
          style={{
            fontFamily: "var(--f-body)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#ccc",
            lineHeight: 1.6,
            maxWidth: 780,
            margin: "0 auto 32px",
          }}
        >
          "Alex brought real attention to detail and a genuine care for
          accessibility that made our team's work better. Reliable, curious,
          and remarkably easy to collaborate with."
        </p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            color: "#555",
            letterSpacing: ".1em",
          }}
        >
          — [Mentor / Team lead] · [Company]
        </p>
      </FadeUp>
    </section>
  );
}
