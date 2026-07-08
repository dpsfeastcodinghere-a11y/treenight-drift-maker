import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export function Nav({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color,color] duration-500 ${
          solid
            ? "bg-ivory/85 backdrop-blur-md border-b border-hairline text-charcoal"
            : "bg-transparent border-b border-transparent text-ivory"
        }`}
        style={{ transitionTimingFunction: "var(--ease-luxe)" }}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:h-24 md:px-10">
          {/* left */}
          <nav className="hidden flex-1 items-center gap-9 md:flex">
            {NAV.slice(0, 2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[11px] font-medium tracking-[0.28em] uppercase opacity-90 transition-opacity hover:opacity-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* logo */}
          <Link to="/" className="wordmark text-lg md:text-2xl md:tracking-[0.42em] tracking-[0.32em]">
            Treenight
          </Link>

          {/* right */}
          <div className="hidden flex-1 items-center justify-end gap-9 md:flex">
            {NAV.slice(2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[11px] font-medium tracking-[0.28em] uppercase opacity-90 transition-opacity hover:opacity-100"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex items-center gap-5">
              <Link to="/shop" aria-label="Search" className="opacity-90 hover:opacity-100">
                <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
              </Link>
              <Link to="/wishlist" aria-label="Wishlist" className="opacity-90 hover:opacity-100">
                <Heart className="h-[18px] w-[18px]" strokeWidth={1.25} />
              </Link>
              <Link to="/cart" aria-label="Cart" className="opacity-90 hover:opacity-100">
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
              </Link>
            </div>
          </div>

          {/* mobile */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
            </Link>
            <button aria-label="Menu" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-luxe)" }}
      >
        <div className="absolute inset-0 bg-charcoal/40" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-ivory p-8 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transitionTimingFunction: "var(--ease-luxe)" }}
        >
          <div className="flex items-center justify-between">
            <span className="wordmark text-base">Treenight</span>
            <button aria-label="Close" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-charcoal"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-16 flex gap-6 text-charcoal">
            <Link to="/wishlist" onClick={() => setOpen(false)}><Heart className="h-5 w-5" strokeWidth={1.25} /></Link>
            <Link to="/shop" onClick={() => setOpen(false)}><Search className="h-5 w-5" strokeWidth={1.25} /></Link>
            <Link to="/cart" onClick={() => setOpen(false)}><User className="h-5 w-5" strokeWidth={1.25} /></Link>
          </div>
        </div>
      </div>
    </>
  );
}
