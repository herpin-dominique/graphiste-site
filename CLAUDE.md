# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Herpin Creative Studio (Lola Herpin), a graphic design and motion design studio. Built with SvelteKit, it showcases creative projects and services with a premium violet-themed visual identity.

## Tech Stack

- **Framework**: SvelteKit 2.x with TypeScript
- **Styling**: TailwindCSS with custom violet color palette
- **Animations**: AOS (Animate On Scroll) library
- **Icons**: lucide-svelte, phosphor-svelte
- **Deployment**: Vercel (via @sveltejs/adapter-vercel)
- **Build Tool**: Vite

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

SvelteKit file-based routing with the following pages:
- `/` - Home page with parallax banner and project grid
- `/portfolio` - Full portfolio gallery
- `/services` - Services offered
- `/contact` - Contact form
- `/tarifs` - Pricing information
- `/billing` - Billing page (uses React component)

### Layout System

- **Root Layout** ([src/routes/+layout.svelte](src/routes/+layout.svelte)): Provides global Header component with sticky/transparent behavior based on scroll position, and includes AOS initialization
- **Header** ([src/lib/components/Header.svelte](src/lib/components/Header.svelte)): Responsive navigation with mobile menu, supports transparent/solid modes
- Navigation links are defined in the root layout and passed as props

### Styling Architecture

- **Global styles**: [src/app.css](src/app.css) - Contains Tailwind directives, custom utility classes, and global element styling
- **Color palette**: Custom violet theme defined in [tailwind.config.cjs](tailwind.config.cjs)
  - Primary: violet (#7F00FF to #4B0082)
  - Accent colors: lavande, rose violacé
  - Dark backgrounds: purple-900, purple-950
- **Fonts**:
  - Body: Inter
  - Headings: Montserrat

### Component Organization

Components live in `src/lib/components/`:
- Svelte components for UI elements (Header, Footer, ProjectCard, etc.)
- React components are supported via vite-plugin-react (see ReactBilling.tsx)

### React Integration

The project supports React components alongside Svelte:
- React is enabled via `@vitejs/plugin-react` in [vite.config.ts](vite.config.ts)
- React components can be imported into Svelte files
- See [src/lib/components/ReactBilling.tsx](src/lib/components/ReactBilling.tsx) for example

### Static Assets

- Images in `/static` are publicly accessible at root path (e.g., `/BANNIERE.png`)
- Project images in `src/projets/` are referenced with `/src/projets/` path prefix
- Logo: `/LOGO HERPIN CREATIVE STUDIOb_4.svg`

## Development Notes

### Scroll Effects

The site uses multiple scroll-based effects:
- Parallax banner on home page (custom scroll listener)
- AOS animations throughout (initialized in `+layout.svelte`)
- Header transparency toggle based on scroll position

### Type Safety

- TypeScript strict mode enabled
- AOS types defined in [src/types/aos.d.ts](src/types/aos.d.ts)
- SvelteKit generates types in `.svelte-kit/tsconfig.json`

### Server Hooks

[src/hooks.server.ts](src/hooks.server.ts) blocks Chrome DevTools extension requests in development mode to prevent 404 noise.

## Design System

The site follows a premium/luxury aesthetic with:
- Heavy use of violet gradients and overlays
- Uppercase tracking for navigation
- Large, bold typography
- Hover animations with scale and brightness transitions
- Glassmorphism effects (backdrop-blur)
