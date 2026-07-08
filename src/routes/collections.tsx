import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Treenight" },
      { name: "description", content: "Seasonal chapters from the Treenight atelier." },
      { property: "og:title", content: "Collections — Treenight" },
      { property: "og:url", content: "/collections" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: Collections,
});

function Collections() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Seasonal Chapters</p>
            <h1 className="display-xl mt-6 text-charcoal">Collections</h1>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
