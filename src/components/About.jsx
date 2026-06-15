import { C } from "../tokens";
import { SecLabel, Pill, Arr } from "./ui";
import { useReveal, rv } from "../hooks/useReveal";

export default function About({ scrollTo }) {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} style={{ padding: "100px 40px", background: C.dark }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div data-reveal style={rv(0)}>
          <SecLabel color={C.indigoLight}>About</SecLabel>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <h2 data-reveal style={{
            ...rv(80),
            fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 1.2, color: "#fff",
          }}>
            I came to frontend through design — so I think in systems, not just screens.
          </h2>
          <div>
            <p data-reveal style={{ ...rv(140), fontSize: 15, lineHeight: 1.85, color: "#777", marginBottom: 16 }}>
              I focus on component architecture, performance, and the kind of accessibility work
              that usually gets skipped. I work best with teams who care about craft as much as deadlines.
            </p>
            <p data-reveal style={{ ...rv(190), fontSize: 15, lineHeight: 1.85, color: "#777", marginBottom: 28 }}>
              Before coding I studied interaction design — which gave me an eye for type scales,
              spacing systems, and motion that feels earned rather than decorative.
            </p>
            <div data-reveal style={rv(230)}>
              <Pill onClick={() => scrollTo("contact")} style={{ background: C.indigo }}>
                Get in Touch <Arr light />
              </Pill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
