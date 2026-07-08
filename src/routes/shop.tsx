import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Treenight" },
      { name: "description", content: "Handwoven linen, cotton and silk. Considered pieces for every day." },
      { property: "og:title", content: "Shop — Treenight" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">The Full Edit</p>
            <h1 className="display-xl mt-6 text-charcoal">Shop</h1>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Our full collection is being loomed. Return soon for the complete edit — with filters, sizes, and the entire archive.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
