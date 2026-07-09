import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowRight, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { TreenightDrift } from "@/components/TreenightDrift";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

import heroImg from "@/assets/hero.jpg";
import fabricImg from "@/assets/fabric.jpg";
import artisanImg from "@/assets/artisan.jpg";
import storyImg from "@/assets/story.jpg";
import col1 from "@/assets/collection-1.jpg";
import col2 from "@/assets/collection-2.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Treenight — Quiet Luxury. Honest Craft." },
      {
        name: "description",
        content:
          "Handwoven Indian linens and considered silhouettes. Made slowly, for generations.",
      },
      { property: "og:title", content: "Treenight — Quiet Luxury. Honest Craft." },
      { property: "og:description", content: "Handwoven Indian linens and considered silhouettes. Made slowly, for generations." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const products = [
  { img: p1, name: "Ivory Linen Shirt", price: "₹ 6,800", tag: "New" },
  { img: p2, name: "Forest Cotton Kurta", price: "₹ 8,400" },
  { img: p3, name: "Handwoven Beige Scarf", price: "₹ 3,200" },
  { img: p4, name: "Charcoal Silk Stole", price: "₹ 9,600", tag: "Best" },
];

const arrivals = [
  { img: p3, name: "Beige Wrap Dress", price: "₹ 12,400" },
  { img: p1, name: "Cotton Kaftan", price: "₹ 7,200" },
  { img: p4, name: "Raw Silk Jacket", price: "₹ 18,600" },
];

function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <SiteLayout overHero>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Model in ivory linen shirt and beige wide-leg trousers against a forest green backdrop"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="tn-kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/25 via-charcoal/15 to-charcoal/55" />

        <TreenightDrift sentinelRef={heroRef} />

        <div className="relative z-30 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
          <p className="tn-rise eyebrow text-ivory/85" style={{ animationDelay: "300ms" }}>
            Est. 2024 · Handwoven in India
          </p>
          <h1 className="tn-headline-in mt-6 max-w-4xl font-display text-5xl font-light text-ivory md:text-8xl">
            Dressed in<br />quiet.
          </h1>
          <p
            className="tn-rise mt-8 max-w-lg text-base leading-relaxed text-ivory/85"
            style={{ animationDelay: "900ms" }}
          >
            Quiet luxury from an old-world loom — considered silhouettes in pure linen, cotton and raw silk, made slowly by hand.
          </p>
          <div
            className="tn-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "1100ms" }}
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 border border-ivory bg-ivory px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-transform duration-300 hover:scale-[0.98] active:scale-[0.97]"
              style={{ transitionTimingFunction: "var(--ease-luxe)" }}
            >
              Explore Collection
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-ivory/60 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory transition-colors hover:bg-ivory/10"
            >
              Discover Our Story
            </Link>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-ivory/70">
          <div className="mx-auto h-10 w-px bg-ivory/40" />
        </div>
      </section>

      {/* FEATURED COLLECTION — magazine */}
      <section className="bg-ivory py-24 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">The Featured Edit</p>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-7">
              <div className="overflow-hidden">
                <img
                  src={col1}
                  alt="Folded ivory linen kurta on a wooden bench"
                  width={1400}
                  height={1750}
                  loading="lazy"
                  className="h-[70vh] w-full object-cover md:h-[80vh]"
                />
              </div>
              <p className="mt-6 eyebrow">Chapter 01 · Linen &amp; Light</p>
            </Reveal>

            <div className="flex flex-col justify-between md:col-span-5">
              <Reveal delay={0.15}>
                <h2 className="display-lg text-charcoal">
                  A season of stillness, cut from the softest linen.
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  Loomed in Bhagalpur and finished in Jaipur. Each piece carries the marks of the hand that made it — a slow answer to a fast wardrobe.
                </p>
                <Link
                  to="/collections"
                  className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-opacity hover:opacity-60"
                >
                  Discover <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </Reveal>

              <Reveal delay={0.3} className="mt-12">
                <div className="overflow-hidden">
                  <img
                    src={col2}
                    alt="Detail of green embroidery on ivory linen"
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="h-[40vh] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="border-t border-hairline bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex items-end justify-between">
            <Reveal>
              <p className="eyebrow">Quietly Beloved</p>
              <h2 className="display-lg mt-4 text-charcoal">Best sellers</h2>
            </Reveal>
            <Reveal delay={0.1} className="hidden md:block">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-opacity hover:opacity-60"
              >
                View all <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-4 md:gap-x-8 md:gap-y-16">
            {products.map((p) => (
              <StaggerItem key={p.name}>
                <Link to="/shop" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                    <img
                      src={p.img}
                      alt={p.name}
                      width={1000}
                      height={1250}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms]"
                      style={{ transitionTimingFunction: "var(--ease-luxe)" }}
                    />
                    <div
                      className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/5"
                    />
                    {p.tag && (
                      <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.24em] text-charcoal backdrop-blur-sm">
                        {p.tag}
                      </span>
                    )}
                    <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                         style={{ transitionTimingFunction: "var(--ease-luxe)" }}>
                      <button className="w-full bg-ivory py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory">
                        Quick add
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <p className="font-display text-lg text-charcoal">{p.name}</p>
                    <p className="text-sm text-charcoal/80">{p.price}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* NEW ARRIVALS — editorial row */}
      <section className="bg-paper tn-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Just Loomed</p>
            <h2 className="display-lg mt-4 max-w-2xl text-charcoal">New arrivals for the quiet season.</h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-8 md:grid-cols-3 md:gap-12">
            {arrivals.map((a, i) => (
              <StaggerItem key={a.name}>
                <Link to="/shop" className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.name}
                      width={1000}
                      height={1250}
                      loading="lazy"
                      className={`w-full object-cover ${i === 1 ? "aspect-[4/6] md:mt-16" : "aspect-[4/5]"}`}
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between">
                    <div>
                      <p className="eyebrow">No. 0{i + 1}</p>
                      <p className="mt-2 font-display text-2xl text-charcoal">{a.name}</p>
                    </div>
                    <p className="text-sm text-charcoal/80">{a.price}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-ivory py-24 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-10">
          <Reveal className="md:col-span-6">
            <div className="overflow-hidden">
              <img
                src={storyImg}
                alt="Woman in beige linen dress in an old courtyard"
                width={1400}
                height={1800}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="eyebrow">The Treenight Atelier</p>
              <h2 className="display-lg mt-6 text-charcoal">
                A house of quiet things,<br />built by patient hands.
              </h2>
              <p className="mt-8 text-[15px] leading-[1.85] text-muted-foreground">
                Treenight began under an old peepul tree in the weaver quarter of a small Indian town — a room, a loom, a promise. Today we are still a small house. We work with families of weavers who have spent generations at their craft, and we design clothes meant to be handed down.
              </p>
              <p className="mt-5 text-[15px] leading-[1.85] text-muted-foreground">
                Nothing is rushed. Nothing is loud. Everything is felt.
              </p>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-opacity hover:opacity-60"
              >
                Read our story <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FABRIC */}
      <section className="relative overflow-hidden bg-forest-deep py-24 text-ivory md:py-40">
        <img
          src={fabricImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-ivory/70">The Cloth</p>
              <h2 className="display-lg mt-4 text-ivory">Premium fabric,<br />sourced honestly.</h2>
            </Reveal>
          </div>
          <div className="grid gap-10 md:col-span-7 md:grid-cols-2">
            {[
              { t: "Handwoven Linen", d: "Long-staple flax, spun in Belgium, loomed in Bhagalpur. Cool, softening with wear." },
              { t: "Pima &amp; Kala Cotton", d: "Organic, rain-fed cotton from Kutch — breathable, durable, honest." },
              { t: "Raw Mulberry Silk", d: "Peace-silk from Karnataka, dyed in small batches with plant-based colour." },
              { t: "Kashmiri Pashmina", d: "Featherweight, hand-loomed, warm without weight — for the coldest months." },
            ].map((f) => (
              <Reveal key={f.t} className="border-t border-ivory/20 pt-6">
                <h3 className="font-display text-2xl text-ivory" dangerouslySetInnerHTML={{ __html: f.t }} />
                <p className="mt-3 text-sm leading-relaxed text-ivory/70" dangerouslySetInnerHTML={{ __html: f.d }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-hairline bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Stagger className="grid gap-14 md:grid-cols-3 md:gap-20">
            {[
              { n: "01", t: "Made slowly", d: "Ten to eighteen weeks from thread to finished piece. No shortcuts, no factories." },
              { n: "02", t: "Fair to the loom", d: "Direct partnerships with weaver families. Living wages, no middlemen." },
              { n: "03", t: "Kept for years", d: "Reinforced seams, natural dyes, complimentary mending for the life of every garment." },
            ].map((p) => (
              <StaggerItem key={p.n}>
                <p className="font-display text-4xl text-forest">{p.n}</p>
                <div className="rule mt-6 w-12 bg-forest" />
                <h3 className="mt-6 font-display text-2xl text-charcoal">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-paper tn-paper py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <div className="flex items-center justify-center gap-1 text-forest">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="eyebrow mt-4">From our customers</p>
            <blockquote className="mt-10 font-display text-3xl font-light leading-snug text-charcoal md:text-4xl">
              “The linen falls like water. It feels like a piece already lived in — but new. Nothing in my wardrobe compares.”
            </blockquote>
            <p className="mt-8 eyebrow">Ananya S. · Bangalore</p>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className="eyebrow">@treenight</p>
              <h2 className="display-lg mt-4 text-charcoal">From the atelier.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="#" className="text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal transition-opacity hover:opacity-60">
                Follow on Instagram →
              </a>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid grid-cols-2 gap-1 md:grid-cols-6">
            {[col1, artisanImg, p1, p2, fabricImg, col2].map((src, i) => (
              <StaggerItem key={i}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                    style={{ transitionTimingFunction: "var(--ease-luxe)" }}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </SiteLayout>
  );
}
