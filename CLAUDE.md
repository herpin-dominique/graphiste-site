# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Herpin Creative Studio (Lola Herpin), a graphic design and motion design studio based in Giberville (Caen), Normandie. Built with SvelteKit, it showcases creative projects and services with a premium violet-themed visual identity.

## Tech Stack

- **Framework**: SvelteKit 2.x with TypeScript
- **Styling**: TailwindCSS with custom violet color palette
- **Animations**: AOS (Animate On Scroll) library
- **Icons**: lucide-svelte, phosphor-svelte
- **Deployment**: Vercel (via @sveltejs/adapter-vercel) — auto-deploys from `main` branch on GitHub
- **Build Tool**: Vite
- **Forms**: Formspree (contact form submissions)

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev -- --open    # Start dev server and open browser

# Type Checking
npm run check            # Run svelte-check once
npm run check:watch      # Run svelte-check in watch mode

# Production
npm run build            # Build for production
npm run preview          # Preview production build
```

## Architecture

### Routing Structure

- `/` — Home page with parallax banner and project grid
- `/portfolio` — Full portfolio gallery with lightbox and swiper
- `/services` — Services offered
- `/contact` — Contact form (Formspree)
- `/tarifs` — Pricing information
- `/billing` — Password-protected invoice management tool (not linked in nav, hidden from public)
- `/blog` — Blog listing page
- `/blog/[slug]` — Individual blog articles (dynamic route)
- `/mentions-legales` — French LCEN legal page

### Layout System

- **Root Layout** ([src/routes/+layout.svelte](src/routes/+layout.svelte)): Wraps every page. Defines `navLinks`, renders `<Header>`, handles AOS init, and contains the global `<Footer>` with social links
- **Header** ([src/lib/components/Header.svelte](src/lib/components/Header.svelte)): Responsive nav with mobile menu. Transitions between transparent (top) and solid violet (scrolled) modes

### Key Data Files

- **Blog posts**: [`src/lib/data/blog-posts.ts`](src/lib/data/blog-posts.ts) — Array of `BlogPost` objects with `slug`, `title`, `excerpt`, `content: string[]` (HTML blocks), `date`, `category`, `categoryColor`, `readingTime`. Add new articles here; the dynamic route reads this at load time.

### Billing System (protected)

The `/billing` route is a standalone invoice management tool for Lola's internal use:
- **Auth**: [`src/lib/stores/auth.ts`](src/lib/stores/auth.ts) — `authStore` / `isAuthenticated` derived store. Uses SHA-256 hashed password comparison + `localStorage` session (24h TTL). Password: `HerpinStudio2024!`
- **Invoices**: [`src/lib/stores/billing.ts`](src/lib/stores/billing.ts) — `billingStore` manages invoice CRUD with `localStorage` persistence
- **PDF**: [`src/lib/utils/pdfGenerator.ts`](src/lib/utils/pdfGenerator.ts) — Generates invoice PDFs with jsPDF
- **Components**: `LoginForm.svelte`, `SendHistory.svelte`

### Styling Architecture

- **Global styles**: [src/app.css](src/app.css) — Tailwind directives, custom utility classes, global element styling
- **Color palette**: [tailwind.config.cjs](tailwind.config.cjs)
  - Primary: violet (#7F00FF to #4B0082)
  - Dark backgrounds: `purple-900`, `purple-950`
- **Fonts**: Body → Inter, Headings → Montserrat
- **Design language**: violet gradients, glassmorphism (`backdrop-blur`), uppercase tracking for nav, scale/brightness hover transitions

### React Integration

React is enabled alongside Svelte via `@vitejs/plugin-react` in [vite.config.ts](vite.config.ts). See [src/lib/components/ReactBilling.tsx](src/lib/components/ReactBilling.tsx) for the pattern.

### Static Assets

- `/static/og-image.png` — 1200×630 OG image for WhatsApp/social previews
- `/static/BANNIERE.png` — Main hero banner (4000×2000)
- Logo: `/LOGO HERPIN CREATIVE STUDIOb_4.svg`
- Project images: `/static/projets/` (referenced as `/projets/...` in code)

### SEO

Every page has full Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:locale: fr_FR`, `og:site_name`) and Twitter Card tags in `<svelte:head>`. The homepage also includes a Schema.org `LocalBusiness` JSON-LD block. Sitemap at [`static/sitemap.xml`](static/sitemap.xml) — update it when adding pages or blog articles.

### Server Hooks

[src/hooks.server.ts](src/hooks.server.ts) blocks Chrome DevTools extension requests in development to prevent 404 noise.
