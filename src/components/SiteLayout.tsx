import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  overHero = false,
}: {
  children: ReactNode;
  overHero?: boolean;
}) {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav overHero={overHero} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
