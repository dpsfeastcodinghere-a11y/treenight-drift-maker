import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Treenight" },
      { name: "description", content: "The terms that govern your purchases from the Treenight atelier." },
      { property: "og:title", content: "Terms of Service — Treenight" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-[760px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1 className="display-xl mt-6 text-charcoal">Terms</h1>
            <div className="mt-12 space-y-8 text-[15px] leading-[1.85] text-muted-foreground">
              <p>Every piece is made to order in small runs. Prices are in Indian Rupees and include GST. Placing an order is an offer to purchase; it is accepted when we confirm your piece has entered the atelier queue.</p>
              <p>Colours vary slightly by loom and dye batch — this is the nature of the hand, not a defect.</p>
              <p className="eyebrow">Full terms arriving with Phase 3.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
