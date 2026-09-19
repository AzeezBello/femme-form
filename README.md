# Femme Form Style

A fast, image-forward marketing site for **Femme Form** — a clothing brand
designed for the woman who finds confidence in her form, with pieces cut
across sizes 6 through 24.

Built with [Next.js](https://nextjs.org) (App Router), React 19, and
Tailwind CSS v4.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, React Server Components) |
| UI library | React 19 |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Fonts | `next/font/google` — Playfair Display (serif, display) + Inter (sans, body) |
| Icons | [lucide-react](https://lucide.dev) |
| Images | `next/image` with static imports (automatic width/height, blur placeholders, AVIF/WebP) |
| Language | TypeScript |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint
```

## Project structure

```
app/
  layout.tsx          Root layout — fonts, metadata, global <Header>/<Footer>
  globals.css         Tailwind import + design tokens (colors, .btn, .serif, .eyebrow, .container)
  page.tsx            Home — hero, featured collections, story teaser, lookbook preview, CTA
  collections/        Collections page — Everyday Ease / Co-ord Edit / After Hours
  lookbook/           Lookbook — reels + full photo gallery with a lightbox
  about/              Our Story — brand philosophy and fit approach
  size-guide/         Size chart (sizes 6–24) + how-to-measure guide
  contact/            Contact — Instagram CTA, sizing help, response times

components/
  header.tsx          Sticky header, active-route nav, mobile menu (client component)
  footer.tsx          Site footer with nav + social links
  social-links.tsx     Reusable social icon list (currently Instagram)
  gallery.tsx          Client-side lookbook grid + keyboard-navigable lightbox

lib/
  lookbook-images.ts   Static imports for every lookbook photo (single source of truth)

public/
  images/              Brand photography, size chart, and the Femme Form logo
  videos/              Brand reels (mp4)
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Landing page — hero, featured collections, brand story teaser, lookbook preview, Instagram CTA |
| `/collections` | The three current edits (Everyday Ease, Co-ord Edit, After Hours) with detail copy |
| `/lookbook` | Brand reels + the full photo gallery (click any image to open the lightbox) |
| `/about` | Brand philosophy and fit/sizing approach |
| `/size-guide` | Size chart (6–24, bust/waist/hip in inches) and a how-to-measure guide |
| `/contact` | Instagram-first contact CTA, sizing help, expected response time |

## Design notes

- **Colors, spacing, and type scale** live as CSS custom properties and
  utility classes in `app/globals.css` (`--background`, `--foreground`,
  `--muted`, `--line`, `--accent`, `.btn`, `.eyebrow`, `.serif`,
  `.container`). There's no `tailwind.config.js` — Tailwind v4 is
  configured entirely through the `@import "tailwindcss"` in that file.
- **Fonts** are self-hosted via `next/font/google` (no external font
  request at runtime, no layout shift).
- **Images** are all local, imported statically from `public/images`
  (e.g. `import hero from "@/public/images/....jpg"`), which lets
  `next/image` infer dimensions automatically, generate a blur-up
  placeholder, and serve responsively sized AVIF/WebP variants.
- **Path alias**: `@/*` maps to the project root (see `tsconfig.json`),
  so imports read as `@/components/header` or `@/public/images/....jpg`.
- **Mobile menu** and the **lookbook lightbox** are the only client
  components in the app (`components/header.tsx`, `components/gallery.tsx`);
  everything else renders as a React Server Component.

## Assets

All photography, the size chart, and both brand reels in `public/` are
used somewhere on the site — nothing in that folder is unreferenced. If
you add new photos, drop them in `public/images/` and either:

- add them to `lib/lookbook-images.ts` to include them in `/lookbook`, or
- import them directly into a page for a featured placement.

The logo (`public/images/femme-form-logo.jpg`) is used as the header/footer
mark and as the site favicon/Apple touch icon (set in `app/layout.tsx`).

## Social links

`components/social-links.tsx` currently lists Instagram
(`@femmeformstyle`), which is the brand's verified handle. Add more
platforms by extending the `socials` array with a `name`, `href`, and a
`lucide-react` icon.

## Deployment

This is a standard Next.js app and deploys as-is to
[Vercel](https://vercel.com/new) or any Node host that runs
`npm run build && npm run start`. No environment variables are required.
# femme-form
