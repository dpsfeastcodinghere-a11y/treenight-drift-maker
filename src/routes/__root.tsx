import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4 text-charcoal">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-6 font-display text-6xl font-light tracking-tight">Off the loom</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has drifted away. Return to the atelier.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-charcoal px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] transition-colors hover:bg-charcoal hover:text-ivory"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4 text-charcoal">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something unravelled</p>
        <h1 className="mt-6 font-display text-4xl font-light">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Try again, or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-charcoal bg-charcoal px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory transition-opacity hover:opacity-80"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-charcoal px-8 py-3 text-[11px] font-medium uppercase tracking-[0.28em] transition-colors hover:bg-charcoal hover:text-ivory"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Treenight — Quiet Luxury. Honest Craft." },
      {
        name: "description",
        content:
          "Treenight is a premium Indian textile and fashion house — handwoven linens, considered silhouettes, made for generations.",
      },
      { name: "author", content: "Treenight" },
      { name: "theme-color", content: "#f4efe4" },
      { property: "og:site_name", content: "Treenight" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Treenight — Quiet Luxury. Honest Craft." },
      {
        property: "og:description",
        content: "Handwoven Indian textiles and considered silhouettes.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Treenight",
          url: "/",
          description:
            "Premium Indian textile and fashion house — handwoven linens and considered silhouettes.",
          areaServed: "IN",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
