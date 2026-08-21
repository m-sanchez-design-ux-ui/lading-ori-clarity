# Origin Clarity AI — Landing Page

A responsive marketing landing page for **Origin Clarity AI**, a corporate AI assistant built on a RAG (Retrieval-Augmented Generation) architecture, available on WhatsApp, Microsoft Teams and Telegram.

## Scope

This repository contains the **brand identity and landing page**: visual design, design system, and front-end implementation. The AI assistant itself (the RAG pipeline and backend logic) was built separately by Origin Solutions' development team and is not part of this repository.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling, extended with a custom design token system
- **Express** — minimal backend, deployed as a Netlify Function
- **React Router** — client-side routing

## Design System

Colors, typography, spacing, and component states (default / hover / pressed) are implemented as design tokens in `tailwind.config.ts`, kept in sync with the source Figma file:

- A primitive color scale (`blue-clarity-ai`, steps 50–950)
- Semantic aliases built on top of it (`brand-primary`, `title`, `paragraph`, `body`, `highlight`, `surface-*`, etc.)

This mapping is intentional: primitives document the full brand palette, while semantic tokens are what components actually consume, so a future color update only requires touching one layer.

## Project Structure

```
client/
  components/       Header, Footer, and the reusable Button (with a
                     Figma-synced "brand" variant)
  components/ui/     Base component library (shadcn/ui), scaffolded by
                     the project's original Builder.io template
  pages/             Index (the landing page itself) and NotFound
  hooks/             Shared hooks (e.g. use-toast)
public/
  assets/images/     Illustrations, icons, logos and photos used on
                     the page
netlify/
  functions/         Express API, deployed as a Netlify Function
```

## Getting Started

This project uses [pnpm](https://pnpm.io/).

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Type-check
pnpm typecheck

# Production build (client + server)
pnpm build

# Run the production build locally
pnpm start
```

## Deployment

Deployed on **Netlify**. The client builds to `dist/spa`, and the Express API is bundled as a Netlify Function, with `/api/*` requests redirected to it (see `netlify.toml`).
