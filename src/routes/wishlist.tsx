import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Treenight" },
      { name: "description", content: "Pieces you're keeping close." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Wishlist,
});

function Wishlist() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow">Kept Close</p>
            <h1 className="display-xl mt-6 text-charcoal">Wishlist</h1>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
