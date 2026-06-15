# Negin Portfolio

Personal portfolio site built with React + Vite.

## Project Structure

```
src/
├── Portfolio.jsx          # Root component
├── tokens.js              # Design tokens (colors)
├── index.css              # Global CSS reset
├── main.jsx               # App entry point
├── components/
│   ├── ui.jsx             # Shared primitives: Pill, PillGhost, SecLabel, Arr, CTAButton
│   ├── Nav.jsx            # Sticky navigation bar
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Projects.jsx       # Projects list
│   ├── Skills.jsx         # Skills table
│   ├── Contact.jsx        # Contact form + links
│   ├── Footer.jsx         # Site footer
│   └── CaseStudy.jsx      # Case study page
├── hooks/
│   └── useReveal.js       # Scroll-triggered reveal animation hook
└── data/
    └── index.js           # Projects, skills, and case study content
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — just click Deploy

## Customising Content

All content lives in `src/data/index.js`:
- **PROJECTS** — add/edit project cards
- **SKILLS** — update your skill list
- **CASE_STUDIES** — add full case study content

Colors are in `src/tokens.js`.

## Adding Real Images to Case Studies

In `src/data/index.js`, replace the `images` placeholder array with:
```js
images: [
  { label: "Home Page", src: "/screenshots/kiddo-home.png" },
]
```
Then update `CaseStudy.jsx` to render `<img src={img.src} />` instead of the SVG placeholder.

## Contact Form

The form currently simulates sending with a timeout. To wire it up for real,
replace the `handleSubmit` function in `Contact.jsx` with a call to:
- [Resend](https://resend.com) — simple email API
- [Formspree](https://formspree.io) — no-backend form handling
- [EmailJS](https://emailjs.com) — client-side email sending
