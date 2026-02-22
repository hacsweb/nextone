import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

const SITE_NAME = "NEXT-ONE";

/**
 * Upserts a <meta> tag by property or name.
 * Returns the previous content value for cleanup.
 */
function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string
): string {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  const prev = el?.content ?? "";
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
  return prev;
}

/**
 * Sets document.title, <meta name="description">, and Open Graph tags
 * on mount. Resets to previous values on unmount so page transitions
 * keep metadata in sync.
 *
 * Note: OGP tags set via JS won't be read by most social-media crawlers
 * (they don't execute JS). For full OGP support, use SSR or a
 * prerendering service. Still valuable for in-browser SEO tools,
 * browser extensions, and future SSR migration.
 */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    /* ── document.title ── */
    const prevTitle = document.title;
    document.title = title;

    /* ── Standard meta ── */
    const prevDesc = upsertMeta("name", "description", description);

    /* ── Open Graph ── */
    const prevOgTitle = upsertMeta("property", "og:title", title);
    const prevOgDesc = upsertMeta("property", "og:description", description);
    const prevOgSite = upsertMeta("property", "og:site_name", SITE_NAME);
    const prevOgType = upsertMeta("property", "og:type", "website");
    const prevOgUrl = upsertMeta(
      "property",
      "og:url",
      window.location.href
    );

    /* ── Twitter Card ── */
    const prevTwCard = upsertMeta("name", "twitter:card", "summary_large_image");
    const prevTwTitle = upsertMeta("name", "twitter:title", title);
    const prevTwDesc = upsertMeta("name", "twitter:description", description);

    return () => {
      document.title = prevTitle;
      upsertMeta("name", "description", prevDesc);
      upsertMeta("property", "og:title", prevOgTitle);
      upsertMeta("property", "og:description", prevOgDesc);
      upsertMeta("property", "og:site_name", prevOgSite);
      upsertMeta("property", "og:type", prevOgType);
      upsertMeta("property", "og:url", prevOgUrl);
      upsertMeta("name", "twitter:card", prevTwCard);
      upsertMeta("name", "twitter:title", prevTwTitle);
      upsertMeta("name", "twitter:description", prevTwDesc);
    };
  }, [title, description]);
}
