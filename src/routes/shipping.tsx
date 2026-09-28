import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping — Treenight" },
      { name: "description", content: "Complimentary insured shipping across India and worldwide delivery from the Treenight atelier." },
      { property: "og:title", content: "Shipping — Treenight" },
      { property: "og:url", content: "/shipping" },
    ],
    links: [{ rel: "canonical", href: "/shipping" }],
  }),
  component: Shipping,
});

function Shipping() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-[760px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Service</p>
            <h1 className="display-xl mt-6 text-charcoal">Shipping</h1>
            <div className="mt-12 space-y-8 text-[15px] leading-[1.85] text-muted-foreground">
              <p>Shipping within India is complimentary and insured. Each piece leaves the atelier within 2–4 working days and arrives in recycled, plastic-free packaging.</p>
              <p>International delivery is available at checkout, duties calculated at the border.</p>
              <p className="eyebrow">Live rates via our logistics partner arriving with Phase 3.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
