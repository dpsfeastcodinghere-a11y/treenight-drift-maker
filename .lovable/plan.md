## Heads-up on stack

Your brief specifies Next.js 15. This project is built on **TanStack Start (React 19 + Vite + Tailwind v4)**, which is Lovable's supported stack. I'll deliver the same architecture, components, motion, and quality bar — just on TanStack Start (file-based routes under `src/routes/`, server functions instead of route handlers). Everything else (Framer Motion, shadcn/ui, Tailwind, Lucide, RHF+Zod, SEO, image optimization) is identical.

If you strictly need Next.js, we should stop and move to a Next.js project instead.

## Scope reality-check

The full brief (11 homepage sections, PDP, PLP with filters, About, Contact, Cart, Wishlist, Search, Account, legal pages, admin dashboard, Razorpay, Shiprocket, reviews, coupons, back-in-stock, GST invoices, order tracking) is a **multi-week engagement**, not a single build. I'll ship it in phases so each phase is polished, not skeletal.

## A few questions before I start (I'll ask separately if you confirm the phasing)

1. **Logo asset** — you said "the logo is final." Please upload the SVG/PNG. Until then I'll use a refined wordmark placeholder ("TREENIGHT" in the serif).
2. **Hero imagery** — do you have brand photography, or should I generate cinematic editorial images (weaving, fabric macros, model in ivory linen)?
3. **Backend now or later?** — Enabling Lovable Cloud unlocks products, cart persistence, orders, admin, auth. Razorpay/Shiprocket require secrets and live integration and are Phase 3.

## Phase 1 — Foundation + Homepage (this build)

**Design system** (`src/styles.css`)
- Palette tokens: `--ivory` (warm background), `--forest` (deep primary), `--charcoal` (text), `--beige` (borders), `--paper` (card). All `oklch`.
- Type: Cormorant Garamond (headings, serif), Inter (body). Loaded via `<link>` in `__root.tsx`, mapped via `--font-display` / `--font-sans` in `@theme`.
- Radii, subtle shadow tokens (`--shadow-paper`), fabric-texture background utility.
- Motion tokens: `--ease-luxe: cubic-bezier(0.22, 1, 0.36, 1)`.

**Signature Drift component** (`src/components/TreenightDrift.tsx`)
- Pure CSS keyframes, three nested elements per particle (fall / sway / rotate) exactly as specified.
- 8–12 particles desktop, 5–6 mobile, negative delays, transform+opacity only, `will-change: transform`.
- `pointer-events: none`, fixed under navbar z-index.
- IntersectionObserver pauses when hero leaves viewport.
- Respects `prefers-reduced-motion` (renders nothing).
- Opacity fades with scroll past hero via a single scroll listener updating a CSS variable.
- Particle asset: inline SVG petal (ivory/beige/forest tints, randomized).

**Homepage sections** (`src/routes/index.tsx`)
1. Tall luxury nav (transparent over hero, gains blur + hairline border after scroll).
2. Cinematic hero — full viewport, Ken Burns image, drift overlay, minimal headline with letter-spacing fade-in, two CTAs.
3. Featured collection — magazine layout (large image + small image + pull quote + Discover →).
4. Best sellers — refined 4-up grid, hover cross-fade to secondary image, quick-add slide-up.
5. New arrivals — editorial row.
6. Brand story — split editorial with generous whitespace, subtle parallax on imagery.
7. Premium fabric section — macro imagery + typographic callouts.
8. Why Treenight — 3 restrained value pillars.
9. Reviews — quiet testimonial carousel.
10. Instagram gallery — 6-tile masonry.
11. Newsletter — single-field elegant form.
12. Minimal footer.

**Global motion**: Framer Motion wrapper for scroll reveals (fade + 20–30px up, 80–120ms stagger), soft ease, `prefers-reduced-motion` respected everywhere.

**Placeholder shop routes** — `/shop`, `/collections`, `/product/$slug`, `/about`, `/contact`, `/cart`, `/wishlist` created as stubs with head() metadata so nav works and SEO is set.

**SEO** — real `head()` on `__root.tsx` and every route (title, description, og:*, twitter:*), sitemap.xml, robots.txt.

## Phase 2 — Commerce surfaces (next build)
Full PLP with filters/sort/grid-list, full PDP with gallery/variants/size guide/badges/sticky ATC/related/recently viewed, cart drawer, wishlist, search, About, Contact, legal pages.

## Phase 3 — Backend + integrations (later builds)
Lovable Cloud: products, variants, inventory, orders, users, reviews, coupons, wishlist persistence, back-in-stock, admin dashboard. Razorpay checkout. Shiprocket order push. GST invoice PDF. Order tracking.

## Deliverable this turn
Design system + Drift component + full homepage + nav + footer + stub routes + SEO + sitemap/robots. Polished, not skeletal.

---

Approve to proceed with Phase 1 on TanStack Start, or tell me to switch to a Next.js project.
