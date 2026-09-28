import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Returns & Exchanges — Treenight" },
      { name: "description", content: "Seven-day returns and complimentary exchanges on unworn Treenight pieces." },
      { property: "og:title", content: "Returns & Exchanges — Treenight" },
      { property: "og:url", content: "/returns" },
    ],
    links: [{ rel: "canonical", href: "/returns" }],
  }),
  component: Returns,
});

function Returns() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-[760px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Service</p>
            <h1 className="display-xl mt-6 text-charcoal">Returns</h1>
            <div className="mt-12 space-y-8 text-[15px] leading-[1.85] text-muted-foreground">
              <p>You have seven days from delivery to return any unworn piece, with tags attached, for a full refund or exchange. Return shipping within India is on us.</p>
              <p>Begin a return by writing to hello@treenight.in with your order number — we will arrange the courier.</p>
              <p className="eyebrow">Self-serve returns arriving with Phase 3.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
