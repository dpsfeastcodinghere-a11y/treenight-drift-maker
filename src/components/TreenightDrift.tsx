import { useEffect, useMemo, useRef, useState } from "react";

/**
 * TREENIGHT DRIFT — signature ambient motion.
 *
 * 8-12 desktop / 5-6 mobile particles. Three nested elements per particle:
 *   outer .tn-drift-fall   — vertical fall (linear)
 *   middle .tn-drift-sway  — horizontal sway (ease-in-out)
 *   inner  .tn-drift-rot   — slow rotation (linear)
 *
 * Only transform + opacity animate. Paused when hero leaves viewport via
 * IntersectionObserver on `sentinelRef`. Renders nothing under
 * prefers-reduced-motion (also enforced in CSS). Opacity fades with scroll.
 */

type Petal = {
  id: number;
  left: number;              // vw
  size: number;              // px
  opacity: number;
  fallDur: number;
  fallDelay: number;
  swayDur: number;
  swayDelay: number;
  swayVariant: "a" | "b";
  swayAmp: number;
  rotDur: number;
  rotDelay: number;
  rotReverse: boolean;
  tint: string;
};

const TINTS = [
  "oklch(0.972 0.012 85)",  // ivory
  "oklch(0.9 0.03 78)",     // beige
  "oklch(0.82 0.04 80)",    // deep beige
  "oklch(0.55 0.05 155)",   // sage
  "oklch(0.36 0.045 155)",  // forest
];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => {
    const fallDur = rand(11, 18);
    const swayDur = rand(4, 7);
    const rotDur = rand(7, 12);
    return {
      id: i,
      left: rand(0, 100),
      size: rand(11, 26),
      opacity: rand(0.35, 0.7),
      fallDur,
      fallDelay: -rand(0, fallDur),
      swayDur,
      swayDelay: -rand(0, swayDur),
      swayVariant: Math.random() > 0.5 ? "a" : "b",
      swayAmp: rand(0.6, 1.4),
      rotDur,
      rotDelay: -rand(0, rotDur),
      rotReverse: Math.random() > 0.5,
      tint: TINTS[Math.floor(Math.random() * TINTS.length)],
    };
  });
}

export function TreenightDrift({ sentinelRef }: { sentinelRef?: React.RefObject<HTMLElement | null> }) {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(10);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMounted(true);
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    setCount(isMobile ? 6 : 10);
  }, []);

  useEffect(() => {
    if (!sentinelRef?.current) return;
    const el = sentinelRef.current;
    const io = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [sentinelRef]);

  // Fade drift out as user scrolls past hero.
  useEffect(() => {
    if (!mounted) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const vh = window.innerHeight || 1;
        const y = window.scrollY;
        const op = Math.max(0, 1 - y / (vh * 0.9));
        rootRef.current?.style.setProperty("--tn-drift-opacity", op.toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mounted]);

  const petals = useMemo(() => (mounted ? makePetals(count) : []), [mounted, count]);

  if (!mounted) return null;

  return (
    <div ref={rootRef} className="tn-drift" aria-hidden="true" data-paused={paused}>
      {petals.map((p) => (
        <div
          key={p.id}
          className="tn-drift-fall"
          style={{
            left: `${p.left}vw`,
            animationDuration: `${p.fallDur}s`,
            animationDelay: `${p.fallDelay}s`,
            opacity: p.opacity,
          }}
        >
          <div
            className="tn-drift-sway"
            style={{
              animationName: p.swayVariant === "a" ? "tn-sway-a" : "tn-sway-b",
              animationDuration: `${p.swayDur}s`,
              animationDelay: `${p.swayDelay}s`,
              transform: `scaleX(${p.swayAmp})`,
            }}
          >
            <svg
              className="tn-drift-rot"
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              style={{
                animationName: p.rotReverse ? "tn-rotate-rev" : "tn-rotate",
                animationDuration: `${p.rotDur}s`,
                animationDelay: `${p.rotDelay}s`,
              }}
            >
              {/* fabric petal / linen leaf */}
              <path
                d="M12 2 C 17 6, 20 12, 12 22 C 4 12, 7 6, 12 2 Z"
                fill={p.tint}
                opacity="0.9"
              />
              <path
                d="M12 4 C 12 10, 12 16, 12 20"
                stroke="oklch(0 0 0 / 0.12)"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
