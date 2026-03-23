export const PROJECTS = [
  {
    num: "01",
    name: "Luma",
    type: "Mobile · React Native · 2024",
    desc: "Local event-goers had no single curated source for city events — just scattered social posts and outdated websites. Luma fixes that with a clean, fast, offline-ready mobile app.",
    role: "Solo developer — designed and built end-to-end over 6 weeks.",
    impact: "Lighthouse a11y 98 · TTI < 1.8s · 200+ beta users",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Expo Router"],
    links: [
      { label: "Live Demo ↗", href: "#" },
      { label: "GitHub ↗",   href: "#" },
      { label: "Case Study →", href: "#" },
    ],
  },
  {
    num: "02",
    name: "Folia",
    type: "Web PWA · React · 2024",
    desc: "Plant owners forget watering schedules, killing plants they love. No lightweight, offline-first option existed. Folia is a PWA that works without internet.",
    role: "Frontend lead in a 3-person team. Owned UI, routing, and PWA setup.",
    impact: "Offline-ready PWA · Bundle < 80KB gzipped · 4.8 ⭐ Product Hunt",
    stack: ["React", "TypeScript", "Tailwind", "Workbox", "Vite"],
    links: [
      { label: "Live Demo ↗", href: "#" },
      { label: "GitHub ↗",   href: "#" },
      { label: "Case Study →", href: "#" },
    ],
  },
  {
    num: "03",
    name: "Clarity",
    type: "Web · React · 2023",
    desc: "Existing Pomodoro apps were cluttered and distracting — defeating the point. Clarity is the antidote: zero noise, full keyboard support, Lighthouse 100 across all categories.",
    role: "Solo project. Design, development, and full accessibility audit.",
    impact: "Lighthouse 100 all categories · Screen-reader + keyboard verified",
    stack: ["React", "CSS Modules", "Jest", "RTL"],
    links: [
      { label: "Live Demo ↗", href: "#" },
      { label: "GitHub ↗",   href: "#" },
      { label: "Case Study →", href: "#" },
    ],
  },
  {
    num: "04",
    name: "a11y-forms",
    type: "OSS Library · TypeScript · 2023",
    desc: "React form libraries rarely handle accessibility well. I contributed ARIA live region support and comprehensive test coverage to this open source library.",
    role: "Open source contributor. Added ARIA support, wrote test coverage.",
    impact: "94 GitHub ⭐ · 12K weekly npm downloads",
    stack: ["TypeScript", "React Testing Library", "Rollup"],
    links: [
      { label: "npm ↗",    href: "#" },
      { label: "GitHub ↗", href: "#" },
    ],
  },
];

export const SKILL_CLOUD = [
  { label: "React",        level: "strong"      },
  { label: "TypeScript",   level: "comfortable" },
  { label: "Tailwind",     level: "strong"      },
  { label: "React Native", level: "comfortable" },
  { label: "HTML/a11y",    level: "strong"      },
  { label: "Expo",         level: "comfortable" },
  { label: "Reanimated",   level: "familiar"    },
  { label: "Vite",         level: "comfortable" },
  { label: "Testing",      level: "familiar"    },
  { label: "Git",          level: "comfortable" },
  { label: "Supabase",     level: "familiar"    },
  { label: "Vercel",       level: "comfortable" },
];

export const SKILL_TABLE = [
  { name: "React",        level: "Comfortable", note: "Luma, Folia, Clarity — accessible components, code-splitting, custom hooks" },
  { name: "TypeScript",   level: "Comfortable", note: "Strict configs, shared types across web and mobile monorepos" },
  { name: "Tailwind CSS", level: "Strong",      note: "Primary styling tool across all recent projects, JIT mode, dark mode" },
  { name: "HTML / a11y",  level: "Strong",      note: "Semantic markup, ARIA only when needed, WCAG AA contrast verified" },
  { name: "React Native", level: "Comfortable", note: "Luma — navigation, offline cache, Expo SDK, gesture handling" },
  { name: "Expo / EAS",   level: "Comfortable", note: "Builds, OTA updates, Expo Router, push notifications" },
  { name: "Testing",      level: "Familiar",    note: "React Testing Library, Jest — unit and a11y snapshot tests" },
  { name: "Vite",         level: "Comfortable", note: "Build config, plugin setup, env handling, bundle analysis" },
];

export const NAV_LINKS = [
  { href: "#projects", label: "Work"    },
  { href: "#about",    label: "About"   },
  { href: "#skills",   label: "Skills"  },
  { href: "#contact",  label: "Contact" },
];

export const MARQUEE_ITEMS = [
  "React", "React Native", "TypeScript",
  "Tailwind CSS", "Expo", "Vite",
  "Accessibility", "Performance", "Open Source",
];

export const CONNECT_LINKS = [
  { label: "Email",    val: "hello@alexkim.dev", href: "mailto:hello@alexkim.dev" },
  { label: "LinkedIn", val: "in/alexkim",         href: "https://linkedin.com"     },
  { label: "GitHub",   val: "@alexkim",           href: "https://github.com"       },
];

export const LEVEL_STYLES = {
  strong:      { fontSize: "clamp(2rem,4vw,3.5rem)",    color: "var(--ink)" },
  comfortable: { fontSize: "clamp(1.3rem,2.5vw,2rem)",  color: "#444"       },
  familiar:    { fontSize: "clamp(.9rem,1.5vw,1.2rem)", color: "#999", fontWeight: 600 },
};
