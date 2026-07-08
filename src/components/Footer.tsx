import { Link } from "@tanstack/react-router";

const COLS = [
  {
    title: "Discover",
    links: [
      { label: "New Arrivals", to: "/shop" },
      { label: "Collections", to: "/collections" },
      { label: "Journal", to: "/about" },
      { label: "Craftsmanship", to: "/about" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Shipping", to: "/shipping" },
      { label: "Returns", to: "/returns" },
      { label: "Order Tracking", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ivory text-charcoal">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <span className="wordmark text-xl md:text-2xl">Treenight</span>
          <p className="mt-8 max-w-sm font-display text-2xl leading-snug text-charcoal md:text-3xl">
            Stay Connected.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Occasional letters — new collections, atelier notes, and the seasons of the loom.
          </p>
          <form className="mt-8 flex max-w-sm items-center border-b border-charcoal/40 pb-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              aria-label="Email"
            />
            <button
              type="submit"
              className="ml-4 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-opacity hover:opacity-70"
            >
              Subscribe
            </button>
          </form>
        </div>

        {COLS.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h4 className="eyebrow">{c.title}</h4>
            <ul className="mt-6 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-charcoal/80 transition-colors hover:text-charcoal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1">
          <h4 className="eyebrow">Social</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a href="#" className="text-charcoal/80 hover:text-charcoal">Instagram</a></li>
            <li><a href="#" className="text-charcoal/80 hover:text-charcoal">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Treenight. Woven in India.</p>
          <p className="tracking-[0.2em] uppercase">GST Registered · COD · 7-Day Returns</p>
        </div>
      </div>
    </footer>
  );
}
