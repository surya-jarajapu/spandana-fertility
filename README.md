# Spandana Fertility Clinic — Website

Premium, production-ready website for **Spandana Fertility Clinic**, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** — App Router, file-based routing, metadata API, sitemap/robots generation
- **TypeScript** — strict mode
- **Tailwind CSS** — custom design tokens (colors, glass utilities, mesh gradients)
- **Framer Motion** — scroll reveals, hover states, the animated hero "cycle monitor" panel
- **next-themes** — automatic light/dark mode based on system preference, with manual toggle
- **lucide-react** — icon set

## Design System

| Token | Light | Dark |
|---|---|---|
| Background | `#FFFFFF` | `#0B1120` |
| Cards | `#FFFFFF` (glass) | `#111827` (glass) |
| Primary (rose) | `#D6336C` | `#D6336C` |
| Secondary (violet) | `#6D28D9` | `#6D28D9` |
| Accent (cyan) | `#06B6D4` | `#22D3EE` |
| Text | `#0F172A` | `#F8FAFC` |

- **Display font:** Fraunces (headlines, numerals)
- **Body font:** Inter (UI, paragraph text)
- Colors are a refined, slightly deepened variant of the original brief palette —
  see `tailwind.config.ts` → `theme.extend.colors` for the full `rose` / `violet`
  / `cyan` / `ink` scales.

## Project Structure

```
app/
├── page.tsx                 → Home
├── about/page.tsx           → About Dr. Spandana Nuthakki
├── treatments/page.tsx      → All treatments overview
├── ivf/page.tsx             → IVF detail page
├── icsi/page.tsx            → ICSI detail page
├── iui/page.tsx             → IUI detail page
├── videos/page.tsx          → Video gallery
├── contact/page.tsx         → Contact + form + map
├── layout.tsx               → Root layout, fonts, metadata, theme provider
├── globals.css              → Theme variables, glassmorphism utilities
├── sitemap.ts                → Auto-generated sitemap.xml
├── robots.ts                 → Auto-generated robots.txt
└── not-found.tsx             → Custom 404

components/
├── Navbar.tsx                → Sticky glass navbar, mobile menu, theme toggle
├── Hero.tsx                   → Home hero + "live monitor" signature panel
├── AboutSection.tsx           → About preview (home page)
├── TreatmentCards.tsx         → Reusable treatment card grid
├── WhyChooseUs.tsx            → 4-reason grid
├── VideoGallery.tsx           → YouTube Shorts → embed grid, click-to-play
├── Testimonials.tsx           → Patient outcome cards
├── FAQ.tsx                    → Reusable accordion (used on IVF/ICSI/IUI)
├── ContactForm.tsx            → Contact form with client-side validation
├── Footer.tsx                 → Site footer
├── WhatsAppButton.tsx          → Floating WhatsApp CTA
├── CallButton.tsx              → Floating Call CTA
├── PageHero.tsx                → Shared inner-page hero
├── ProcessTimeline.tsx         → Numbered step timeline (IVF/ICSI/IUI process + About timeline)
└── ThemeProvider.tsx            → next-themes wrapper

lib/
├── constants.ts               → Single source of truth: clinic info, nav, treatments, videos, testimonials, FAQs
└── utils.ts                    → `cn()` className merge helper
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Editing Content

Almost everything content-related — clinic address, phone numbers, treatment
descriptions, video IDs, testimonials, FAQs — lives in **`lib/constants.ts`**.
Update it there once and it propagates across every page that uses it.

### Updating videos
`VIDEOS` in `lib/constants.ts` only needs the YouTube **video ID** (the part
after `/shorts/` or `v=`). The `VideoGallery` component builds the embed URL
and thumbnail automatically:

```ts
{ id: "L4aMcGkffMk", title: "...", description: "..." }
```

### Updating the map
`CLINIC.mapsEmbedQuery` in `lib/constants.ts` controls the embedded Google Map
on the Contact page. Replace it with the real clinic address once available,
or swap in a Google Maps **Embed API** / Place ID URL for a pinned marker.

### Swapping the doctor photo
`AboutSection.tsx` and `app/about/page.tsx` currently use a styled initials
placeholder (`SN`) instead of a photo, since no image was provided. To add a
real photo:
1. Drop the image into `public/` (e.g. `public/dr-spandana.jpg`)
2. Replace the placeholder `<div>` block with:
   ```tsx
   import Image from "next/image";
   <Image src="/dr-spandana.jpg" alt="Dr. Spandana Nuthakki" fill className="object-cover" />
   ```

## Deployment (Vercel)

This project is Vercel-ready out of the box.

```bash
# Option A — CLI
npm i -g vercel
vercel

# Option B — Git integration
# 1. Push this repo to GitHub/GitLab/Bitbucket
# 2. Import the repo at vercel.com/new
# 3. Framework preset: Next.js (auto-detected)
# 4. Deploy
```

No environment variables are required for the current feature set (the
contact form is a simulated client-side submit — see "Connecting the contact
form" below).

### Before going live
- [ ] Update `CLINIC` object in `lib/constants.ts` with real phone, WhatsApp, email, and address
- [ ] Replace `metadataBase` URL in `app/layout.tsx` and the URLs in `sitemap.ts` / `robots.ts` with your real domain
- [ ] Add a real Open Graph image (`public/og-image.jpg`, 1200×630) and reference it in `app/layout.tsx` metadata
- [ ] Connect the contact form to a real backend (see below)
- [ ] Swap placeholder doctor image for a real photograph

### Connecting the contact form
`components/ContactForm.tsx` currently simulates a submission. To wire it up:
- **Simplest:** point the form at a service like Formspree, Resend, or a
  Vercel serverless function under `app/api/contact/route.ts` that emails the
  clinic team.
- Replace the `setTimeout` block in `handleSubmit` with a real `fetch()` call.

## Accessibility & Performance Notes

- All interactive elements have visible focus states (`:focus-visible` in `globals.css`)
- `prefers-reduced-motion` is respected globally
- Images use lazy loading; YouTube embeds only load on click (thumbnail-first)
- Dark/light mode follows system preference by default, with a manual override toggle in the navbar
