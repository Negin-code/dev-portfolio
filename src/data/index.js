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
    accent: C.dark,
    desc: "Boosted mobile Lighthouse score from 48 to 92 and cut mobile LCP from 9.8s to 2.6s before a major product launch. Built a scalable Webflow component system translated from Figma.",
    tags: ["Webflow","Figma","Core Web Vitals","HTML","CSS","JavaScript"],
  },
  {
    title: "Arc Weather PWA",
    year: "2023",
    accent: C.indigo,
    desc: "Offline-first PWA with custom SVG data visualization. Installable on iOS and Android.",
    tags: ["PWA","Service Workers","SVG","Canvas API"],
  },
  {
    title: "Typeset — Open Source",
    year: "2023",
    accent: C.dark,
    desc: "Type scale generator used by 800+ designers. Outputs CSS custom properties and Tailwind config.",
    tags: ["Svelte","Open Source","Typography"],
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
  gigledger: {
    title: "GigLedger",
    subtitle: "Full-Stack PWA for Gig Economy Financial Management",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Progressive Web App",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL", "PWA", "Anthropic API", "Recharts", "Lovable"],
    url: null,
    accent: "#4F46E5",
    overview: "Full-stack PWA built from scratch — Supabase backend with row-level security, real-time data, and auth. AI financial assistant with dynamic context injection from live user data. Quarterly IRS tax estimation engine, multi-platform income tracking, and savings goal projection algorithm.",
    sections: [
      {
        title: "Backend Architecture",
        content: "Built on Supabase with PostgreSQL, implementing row-level security policies to ensure users can only access their own financial data. Real-time subscriptions keep the dashboard live without polling.",
      },
      {
        title: "AI Financial Assistant",
        content: "Integrated Anthropic API with dynamic context injection — the assistant receives the user's actual income, expenses, and goals as structured context, enabling personalised financial guidance rather than generic responses.",
      },
      {
        title: "Tax Estimation Engine",
        content: "Quarterly IRS tax estimation engine that calculates self-employment tax obligations based on income streams, deductions, and filing status — updated in real time as new income is logged.",
      },
      {
        title: "Income Tracking",
        content: "Multi-platform income tracking supports gig workers with income from multiple sources. Recharts powers the data visualisation layer with responsive charts for income trends and savings projections.",
      },
    ],
    takeaways: [
      "Row-level security in Supabase is declarative and composable — cleaner than application-layer auth checks.",
      "Dynamic context injection into LLM prompts produces dramatically more useful responses than static system prompts.",
      "PWA capabilities (offline support, installability) are high-value additions with relatively low implementation cost.",
    ],
  },
};
