import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Treenight" },
      { name: "description", content: "How Treenight collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Treenight" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-[760px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1 className="display-xl mt-6 text-charcoal">Privacy</h1>
            <div className="mt-12 space-y-8 text-[15px] leading-[1.85] text-muted-foreground">
              <p>We collect only what we need to fulfil your order and, if you choose, to write to you. We never sell your data, and we never share it beyond the partners who help us ship — our payment and logistics providers.</p>
              <p>You may ask at any time for a copy of your data, or for it to be removed from our records, by writing to hello@treenight.in.</p>
              <p className="eyebrow">Full policy arriving with Phase 3.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
