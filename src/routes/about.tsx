import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import storyImg from "@/assets/story.jpg";
import artisanImg from "@/assets/artisan.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Journal — Treenight" },
      {
        name: "description",
        content:
          "The Treenight story — a small house of quiet things, built by patient hands in India.",
      },
      { property: "og:title", content: "Journal — Treenight" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow">Our House</p>
            <h1 className="display-xl mt-6 text-charcoal">Woven for generations.</h1>
            <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[1.9] text-muted-foreground">
              Treenight began under an old peepul tree in the weaver quarter of a small Indian town — a room, a loom, a promise. Today we are still a small house.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pb-24 md:pb-40">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-10">
          <Reveal>
            <img src={storyImg} alt="Woman in linen" width={1400} height={1800} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.15}>
            <img src={artisanImg} alt="Artisan weaver" width={1400} height={1750} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
