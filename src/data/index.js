import { C } from "../tokens";

export const PROJECTS = [
  {
    title: "GigLedger",
    year: "2026",
    accent: C.indigo,
    href: "gigledger",
    desc: "Full-stack PWA built from scratch — Supabase backend with row-level security, real-time data, and auth. AI financial assistant with dynamic context injection from live user data. Quarterly IRS tax estimation engine, multi-platform income tracking, and savings goal projection algorithm.",
    tags: ["React","TypeScript","Supabase","Tailwind CSS","PostgreSQL","PWA","Anthropic API","Recharts","Lovable"],
  },
  {
    title: "Kiddo Style Cycle",
    year: "2025",
    accent: C.dark,
    href: "kiddo",
    desc: "Educational web app teaching children about sustainable fashion through an interactive, character-led experience. Built mobile-first with four routes — Home, Learn, Game, and Act.",
    tags: ["React","React Router","Tailwind CSS","Vite","Vercel"],
  },
  {
    title: "Envia — Web Performance",
    year: "2025",
    accent: C.indigo,
    href: "envia",
    desc: "Boosted mobile Lighthouse score from 48 to 92 and cut mobile LCP from 9.8s to 2.6s before a major product launch. Built a scalable Webflow component system translated from Figma.",
    tags: ["Webflow","Figma","Core Web Vitals","HTML","CSS","JavaScript"],
  },
];

export const SKILLS = [
  ["TypeScript","Language"],
  ["React 18","Framework"],
  ["Next.js 14","Framework"],
  ["Figma","Design"],
  ["Tailwind CSS","Styling"],
  ["Framer Motion","Motion"],
  ["Storybook","Tooling"],
  ["Vitest","Tooling"],
  ["WCAG 2.1 AA","A11y"],
  ["Turborepo","Tooling"],
];

export const CASE_STUDIES = {
  kiddo: {
    title: "Kiddo Style Cycle",
    subtitle: "A Kid-Friendly Educational Web App for Sustainable Fashion",
    year: "2025",
    role: "Web Developer & UI Designer",
    type: "Educational Web Application",
    stack: ["React", "React Router v6", "Tailwind CSS", "Vite", "Vercel"],
    url: "termproject-qa.vercel.app",
    accent: "#0A0A0A",
    overview: "Kiddo Style Cycle is a multi-page educational web application built with React that teaches children about sustainable fashion through an interactive, character-led experience. Guided by a friendly mascot named Lina, the app walks kids through the lifecycle of clothing, the problems of fast fashion, and concrete actions they can take. Everything is written in age-appropriate language with a playful visual design.",
    images: [
      { label: "Home Page", note: "Add screenshot of home page here" },
      { label: "Learn Page", note: "Add screenshot of Learn route here" },
      { label: "Game Page", note: "Add screenshot of Game route here" },
    ],
    sections: [
      {
        title: "The Challenge",
        content: "Designing for children required a fundamentally different content and UX standard. Sentences needed to be short, touch targets large, and the entire experience character-driven from start to finish. The app needed to make complex environmental concepts accessible and genuinely engaging without talking down to its young audience.",
      },
      {
        title: "Architecture",
        content: "The site is structured around four routes: Home, Learn, Game, and Act. Each targets a different dimension of environmental literacy. A shared Layout component wraps every page with a persistent NavBar and Footer via React Router's Outlet pattern, so navigation is mounted once and stays consistent across all route changes.",
        code: `// Layout.jsx
const Layout = () => (
  <>
    <NavBar />
    <Outlet /> {/* page content renders here */}
    <Footer />
  </>
);

// Home.jsx
const Home = () => (
  <>
    <HeroSection />
    <ExploreSection />
  </>
);`,
      },
      {
        title: "NavBar — Active State",
        content: "The NavBar uses React Router's NavLink which provides an isActive boolean that dynamically applies CSS classes. The active and hover styles are expressed entirely through Tailwind utility classes, including a pseudo-element that animates a green pill background into place.",
        code: `// NavBar.jsx — active pill animation via Tailwind pseudo-element
className={({ isActive }) => \`
  relative rounded-full transition-all duration-200
  before:absolute before:inset-0 before:rounded-full before:bg-[#4CAF50]
  before:-z-10 before:transition-all before:duration-200
  \${isActive
    ? 'text-white before:opacity-100 before:scale-100'
    : 'hover:before:opacity-100 hover:before:scale-100 before:opacity-0 before:scale-90'
  }
\`}`,
      },
      {
        title: "Reusable Button Component",
        content: "All buttons are rendered through a single Button component that accepts size and variant props, enforcing visual consistency and mirroring the design system defined in Figma. The component also handles a disabled state that reduces opacity and removes pointer events.",
        code: `// Button.jsx — prop-driven design system component
const sizeStyles = {
  hero:   'w-[240px] h-[60px] text-xl px-6 py-3',
  large:  'w-[200px] h-[48px] text-xl px-6 py-3',
  medium: 'w-[140px] h-[48px] text-xl px-5 py-2',
  small:  'w-[100px] h-[32px] text-lg px-4 py-2',
};
const variantStyles = {
  primary: 'bg-[#b30047] hover:bg-[#9a003d] text-white',
  outline: 'border-2 border-[#b30047] text-[#b30047] hover:bg-[#b30047] hover:text-white',
  green:   'bg-[#4CAF50] hover:bg-[#22c55e] text-white',
};`,
      },
      {
        title: "EducationCard — Data-Driven Component",
        content: "The three feature cards on the Home page are all rendered from a single EducationCard component. Every aspect of the card is passed in as a prop, making the component fully data-driven. It also includes a graceful fallback: if no imageUrl prop is provided, it renders a styled placeholder with an SVG icon.",
        code: `// ExploreSection.jsx — three cards, one component
<EducationCard
  title='Soft & Green!'
  description='Some clothes are made from soft stuff...'
  buttonText='Let\\'s Learn!'
  buttonVariant='primary'
  bgColor='bg-white-50'
  imageUrl={SoftGreenImage}
/>`,
      },
      {
        title: "Responsive Layout",
        content: "Built mobile-first using Tailwind's responsive prefixes. The Hero section stacks vertically on small screens and switches to a horizontal split on large screens. The card grid shifts from one column on mobile to two on tablet to three on desktop.",
        code: `// ExploreSection.jsx — responsive grid
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

// Hero.jsx — responsive flex direction
<div className='flex flex-col lg:flex-row items-center justify-center'>

// Footer.jsx — responsive copyright
<p className='hidden md:block'>© 2025 Kiddo Style Cycle</p>`,
      },
    ],
    takeaways: [
      "Prop-driven component systems pay off quickly. New variants required zero new code.",
      "React Router v6 NavLink isActive is more elegant than managing active state manually in useState.",
      "Tailwind pseudo-element classes enable CSS transitions without writing any custom CSS or JavaScript.",
      "A tight Figma-to-Tailwind workflow keeps design and implementation in sync from day one.",
      "The Layout and Outlet pattern meant NavBar and Footer only needed to be written and debugged once.",
    ],
  },
  envia: {
    title: "Envia",
    subtitle: "Web Performance Optimization and Webflow Implementation",
    year: "2025",
    role: "Web Developer",
    type: "Performance Engineering & Front-End Architecture",
    stack: ["Webflow", "Figma", "Google Lighthouse", "Core Web Vitals", "HTML", "CSS", "JavaScript"],
    url: "enviatogether.com",
    accent: "#4F46E5",
    overview: "Envia is a logistics and shipping technology company based in Vancouver, BC. In the months leading up to a major product launch, I was engaged to solve two interconnected problems: diagnosing and resolving critical performance bottlenecks in the web application, and translating Figma design specifications into a maintainable, component-driven Webflow build. All work was delivered before the public launch date.",
    stats: [
      { label: "Mobile Score", before: "48/100", after: "92/100", delta: "+44%" },
      { label: "Desktop Score", before: "72/100", after: "98/100", delta: "+36%" },
      { label: "Mobile LCP", before: "9.8s", after: "2.6s", delta: "73% faster" },
      { label: "Layout Shift", before: "0.108", after: "0.002", delta: "98% reduction" },
    ],
    sections: [
      {
        title: "The Challenge",
        content: "At the start of the engagement, the Envia web application had three distinct problems. Mobile performance was severely degraded with a Largest Contentful Paint of 9.8 seconds — nearly four times Google's Poor threshold. A Cumulative Layout Shift score of 0.108 was causing disorienting layout jumps on page load. And there was no scalable front-end architecture, meaning every future update required redundant manual effort across multiple pages.",
      },
      {
        title: "Performance Audit",
        content: "The engagement began with a systematic audit of the application architecture to identify the root causes of poor mobile performance. The strategy addressed site architecture holistically covering asset delivery, render-blocking resources, image loading, and layout stability.",
        code: `// Key optimizations applied

// 1. Deferred non-critical resource loading
<link rel="preload" href="hero.webp" as="image" fetchpriority="high" />
<script src="analytics.js" defer></script>

// 2. Lazy loading below-fold images
<img src="feature.webp" loading="lazy" decoding="async" />

// 3. Reserved space to eliminate CLS
.hero-image {
  width: 100%;
  aspect-ratio: 16 / 9; /* prevents layout shift */
}

// 4. Priority hints for LCP element
<img src="hero.webp" fetchpriority="high" />`,
      },
      {
        title: "Core Web Vitals Results",
        content: "Two metrics were treated as primary engineering targets. Mobile LCP was reduced from 9.8 seconds to 2.6 seconds, a 73% improvement that moved the application from a Poor to a Good Core Web Vitals rating. CLS was reduced from 0.108 to 0.002, a 98% reduction that virtually eliminated visual instability. Both were confirmed before launch.",
      },
      {
        title: "Webflow Component System",
        content: "Design specifications were translated from Figma into production-ready interfaces in Webflow. The implementation prioritised long-term maintainability over one-off builds. Global reusable components including a site-wide Navigation module and FAQ module were built as Webflow Symbols so that a single edit propagates automatically across every page.",
        code: `// Webflow Symbol approach — edit once, update everywhere

// JSON schema defined for CMS collections
{
  "collection": "FAQ",
  "fields": {
    "question": { "type": "PlainText", "required": true },
    "answer":   { "type": "RichText",  "required": true },
    "category": { "type": "Option",    "validations": ["General", "Shipping", "Billing"] }
  }
}

// Responsive breakpoint config per component
// Desktop → Tablet → Mobile Landscape → Mobile Portrait
// Navigation collapses to hamburger toggle at mobile breakpoint`,
      },
      {
        title: "Responsive Engineering",
        content: "Full responsive behaviour was engineered across all four breakpoints — desktop, tablet, mobile landscape, and mobile portrait — for every component. Webflow's flexbox and grid layout systems replaced fixed-pixel layouts with percentage-based and min/max-constrained structures that reflow gracefully at each breakpoint.",
        code: `/* Replaced fixed-pixel layout */
.nav-container {
  /* Before */
  width: 1200px;

  /* After — fluid with constraints */
  width: 100%;
  max-width: 1200px;
  padding: 0 clamp(16px, 4vw, 48px);
}

/* Typography scaling per breakpoint */
.hero-heading {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
}`,
      },
      {
        title: "AI Design Framework Documentation",
        content: "This engagement included authoring structured internal documentation to bridge the gap between conversational UX principles and implementable development guidelines. Informal AI-assisted design discussions were translated into a formal framework document, giving the development team actionable guidelines for applying conversational UX principles consistently and reducing ambiguity in future design-to-development handoffs.",
      },
    ],
    takeaways: [
      "LCP is almost always a resource loading problem first. Preload hints and fetchpriority solve it faster than architectural changes.",
      "CLS is a layout reservation problem. Setting explicit dimensions and aspect ratios before assets load eliminates nearly all instability.",
      "Webflow Symbols are the correct abstraction for shared UI. A navigation built as a Symbol takes one edit to update everywhere.",
      "Figma-to-Webflow fidelity depends on design tokens being explicit. Ambiguous specs produce inconsistent implementations.",
      "Performance benchmarking needs to happen at the component level, not just at the page level, to isolate root causes accurately.",
    ],
  },
  gigledger: {
    title: "GigLedger",
    subtitle: "Full-stack PWA for gig workers — AI-powered financial assistant, quarterly IRS tax estimator, and multi-platform income tracker built with React, TypeScript, and Supabase.",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Progressive Web App",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "TanStack Query", "TanStack Router", "Tailwind CSS", "Recharts", "PWA", "Anthropic API"],
    url: null,
    accent: "#4F46E5",
    overview: "67 million Americans do gig work. Most juggle multiple income streams — rideshare, freelance design, content creation — with income that is irregular, untaxed at source, and invisible to generic finance apps built for salaried workers. GigLedger solves this with a production-ready full-stack PWA: multi-platform income tracking, a weighted IRS quarterly tax estimator, an AI financial assistant with live data context injection, and a savings goal projection algorithm.",
    stats: [
      { label: "Pages", value: "6", sub: "Routes" },
      { label: "DB Tables", value: "4", sub: "RLS Secured" },
      { label: "AI Context", value: "Live Data", sub: "Dynamic injection" },
      { label: "Deployment", value: "PWA", sub: "Installable" },
    ],
    sections: [
      {
        title: "Architecture",
        content: "The stack was chosen for code ownership and production readiness. React with TypeScript provides type-safe component architecture with all data shapes typed via Income, Expense, and Goal interfaces. TanStack Router handles file-based type-safe routing — each page is a self-contained route module. TanStack Query manages server state with automatic cache invalidation through custom hooks.",
        file: "stack overview",
        code: `// Layer          Choice              Reason
// Frontend       React + TypeScript  Type-safe components, typed interfaces
// Routing        TanStack Router     File-based, type-safe, route-level auth
// Data fetching  TanStack Query      Cache invalidation, custom hooks
// Backend        Supabase            PostgreSQL + auth + RLS
// AI             Anthropic API       claude-sonnet-4-6 with live context
// Mobile         PWA                 Installable, offline-capable`,
      },
      {
        title: "Data Layer — Queries & Mutations",
        content: "All data fetching is centralised in a single queries file. Each entity has a typed query hook and a shared useMutateRow mutation factory that handles both insert and update via an upsert pattern, with automatic cache invalidation on success. The presence of an id field determines whether the operation is an UPDATE or INSERT — a simple abstraction that eliminated 6 near-identical mutation functions.",
        file: "src/lib/queries.ts",
        code: `export function useIncome() {
  return useQuery({
    queryKey: ["income"],
    queryFn: async (): Promise<Income[]> => {
      const { data, error } = await supabase
        .from("income").select("*")
        .order("entry_date", { ascending: false });
      if (error) throw error;
      return data as Income[];
    },
  });
}

// Shared mutation factory — handles insert and update
export function useMutateRow(table: "income" | "expenses" | "goals", invalidateKey: string) {
  const qc = useQueryClient();
  const upsert = useMutation({
    mutationFn: async (row: any) => {
      const uid = await getUserId();
      const payload = { ...row, user_id: uid };
      if (row.id) {
        const { id, ...rest } = payload;
        const { error } = await supabase.from(table).update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from(table).insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: [invalidateKey] }),
  });
  return { upsert };
}`,
      },
      {
        title: "Tax Estimation Engine",
        content: "The core differentiating feature. The calculation lives inside a useMemo hook using a weighted average tax rate — not a flat rate. Each income row stores its own tax_rate. A $3,000 Freelance Design payment at 28% and a $300 Content Creator payment at 25% produce a weighted effective rate of 27.7% — not the 26.5% a simple average would give. The difference compounds across a full year.",
        file: "src/pages/tax.tsx",
        code: `function quarterDeadlines(year: number) {
  return [
    { q: "Q1", range: "Jan–Mar", due: new Date(year, 3, 15) },
    { q: "Q2", range: "Apr–May", due: new Date(year, 5, 15) },
    { q: "Q3", range: "Jun–Aug", due: new Date(year, 8, 15) },
    { q: "Q4", range: "Sep–Dec", due: new Date(year + 1, 0, 15) },
  ];
}

const { totalIncome, annualTax, effRate, quarterly } = useMemo(() => {
  const yearIncome = income.filter(i => i.month.endsWith(String(year)));
  const total = yearIncome.reduce((a, i) => a + Number(i.amount), 0);

  // Weighted: each entry contributes amount × its own tax_rate
  const tax = yearIncome.reduce(
    (a, i) => a + Number(i.amount) * Number(i.tax_rate), 0
  );
  return {
    totalIncome: total,
    annualTax: tax,
    effRate: total > 0 ? (tax / total) * 100 : 0,
    quarterly: tax / 4,
  };
}, [income, year]);`,
      },
      {
        title: "Goal Projection Algorithm",
        content: "The Goals page calculates two values per goal: months needed to reach the target at the current contribution rate, and months remaining until the deadline. Comparing them produces the on-track or behind-schedule status. The monthsUntil helper uses year × 12 + month arithmetic — a December to January deadline returns 1 month, not negative 11.",
        file: "src/pages/goals.tsx",
        code: `function monthsUntil(deadline: string) {
  const d = new Date(deadline + "T00:00:00");
  const now = new Date();
  return (d.getFullYear() - now.getFullYear()) * 12
    + (d.getMonth() - now.getMonth());
}

const monthsNeeded = g.monthly_contribution && Number(g.monthly_contribution) > 0
  ? Math.ceil(remaining / Number(g.monthly_contribution))
  : null;

const monthsLeft = g.deadline ? monthsUntil(g.deadline) : null;

const onTrack = monthsNeeded != null && monthsLeft != null
  ? monthsNeeded <= monthsLeft
  : null;

// "✓ At $400/month, you'll reach this goal in 9 months — On track"
// "⚠ At $200/month, you'll reach this goal in 9 months — Behind schedule"`,
      },
      {
        title: "Dashboard — Charts & Visualisation",
        content: "The dashboard builds both chart datasets inside useMemo hooks. The income chart uses a Map keyed by month string to accumulate platform amounts in a single pass — faster and more readable than nested reduce calls. The _sort field added to each row enables correct chronological ordering. Charts only recompute when income or expenses actually change.",
        file: "src/pages/dashboard.tsx",
        code: `const chartData = useMemo(() => {
  const platforms = Array.from(
    new Set(income.map(i => platformLabel(i.platform, i.platform_custom)))
  );
  const byMonth = new Map<string, any>();

  income.forEach(i => {
    const key = i.month;
    if (!byMonth.has(key)) {
      const row: any = {
        month: new Date(i.month + " 1").toLocaleString("en-US", { month: "short" }),
        _sort: new Date(i.month + " 1").getTime(),
      };
      platforms.forEach(p => (row[p] = 0));
      byMonth.set(key, row);
    }
    const row = byMonth.get(key);
    const p = platformLabel(i.platform, i.platform_custom);
    row[p] = (row[p] ?? 0) + Number(i.amount);
  });

  return { data: Array.from(byMonth.values()).sort((a, b) => a._sort - b._sort), platforms };
}, [income]);

export const PLATFORM_COLORS: Record<string, string> = {
  "Freelance Design": "var(--chart-1)",
  "Content Creator":  "var(--chart-2)",
  Rideshare:          "var(--chart-3)",
  Fiverr:             "oklch(0.65 0.15 145)",
};`,
      },
      {
        title: "AI Financial Assistant",
        content: "Uses claude-sonnet-4-6 with dynamic context injection per session from live Supabase data. The assistant receives the user's actual income, expenses, and goals as structured context — enabling personalised financial guidance rather than generic responses. TanStack Router's /_authenticated/ prefix enforces auth at the route level so unauthenticated users are redirected before any data is fetched.",
        file: null,
        code: null,
      },
    ],
    takeaways: [
      "TanStack Router's createFileRoute with the /_authenticated/ prefix enforces auth at the route level — unauthenticated users are redirected before any data is fetched, not after.",
      "The useMutateRow factory eliminated 6 near-identical mutation functions. The presence of an id field as the UPDATE vs INSERT branch condition is a simple but powerful abstraction.",
      "Per-entry tax rates produce meaningfully different estimates. A $3,000 entry at 28% and a $300 entry at 25% give 27.7% weighted — not 26.5% averaged. Over a full year the difference matters.",
      "Building chart data with a Map keyed by month string in a single forEach pass is faster and more readable than nested reduce calls.",
      "The monthsUntil helper using year × 12 + month arithmetic handles year boundaries correctly — a December to January deadline returns 1 month, not negative 11.",
    ],
  },
};
