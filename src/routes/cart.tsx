import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — Treenight" },
      { name: "description", content: "Your Treenight cart." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Cart,
});

function Cart() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow">Your Selection</p>
            <h1 className="display-xl mt-6 text-charcoal">Cart</h1>
            <p className="mt-10 text-[15px] text-muted-foreground">Your cart is quiet.</p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
