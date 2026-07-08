import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Treenight" },
      { name: "description", content: "Reach the Treenight atelier. Studio visits, custom orders, and press." },
      { property: "og:title", content: "Contact — Treenight" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-40">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="eyebrow">Say Hello</p>
            <h1 className="display-xl mt-6 text-charcoal">Contact</h1>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              We answer every letter, slowly and with care. Studio visits by appointment.
            </p>
            <dl className="mt-12 space-y-6 text-sm">
              <div><dt className="eyebrow">Email</dt><dd className="mt-2 font-display text-xl">hello@treenight.in</dd></div>
              <div><dt className="eyebrow">WhatsApp</dt><dd className="mt-2 font-display text-xl">+91 · By appointment</dd></div>
              <div><dt className="eyebrow">Atelier</dt><dd className="mt-2 font-display text-xl">Jaipur, India</dd></div>
            </dl>
          </Reveal>
          <Reveal delay={0.15}>
            <form className="space-y-6">
              {["Name", "Email", "Subject"].map((f) => (
                <div key={f}>
                  <label className="eyebrow">{f}</label>
                  <input className="mt-3 w-full border-b border-charcoal/30 bg-transparent py-3 text-sm outline-none focus:border-forest" />
                </div>
              ))}
              <div>
                <label className="eyebrow">Message</label>
                <textarea rows={5} className="mt-3 w-full border-b border-charcoal/30 bg-transparent py-3 text-sm outline-none focus:border-forest" />
              </div>
              <button type="button" className="border border-charcoal bg-charcoal px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory transition-opacity hover:opacity-80">
                Send letter
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
