import { useEffect } from "react";
import { useLocation } from "react-router";

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const SITE_NAME = "SageStone Inc";
const SITE_BASE_URL = "https://www.sagestoneinc.com";

function ensureMeta(selector: string, attrs: Record<string, string>) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
}

function ensureLink(selector: string, attrs: Record<string, string>) {
  let element = document.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
}

function buildCanonicalUrl(pathname: string) {
  if (pathname === "/") return `${SITE_BASE_URL}/`;
  const normalizedPath = pathname.replace(/\/$/, "");
  return `${SITE_BASE_URL}${normalizedPath}/`;
}

export function usePageMeta({
  title,
  description,
  keywords,
  image,
  imageAlt,
  type = "website",
  noindex = false,
}: PageMetaOptions) {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = buildCanonicalUrl(location.pathname);
    const isVercelPreview = typeof window !== "undefined" && window.location.hostname === "newsagestoneinc.vercel.app";
    const robots = noindex || isVercelPreview ? "noindex, nofollow" : "index, follow, max-image-preview:large";

    document.title = pageTitle;
    document.documentElement.lang = "en-US";

    ensureMeta('meta[name="description"]', { name: "description" }).setAttribute("content", description);
    ensureMeta('meta[name="robots"]', { name: "robots" }).setAttribute("content", robots);
    ensureMeta('meta[name="author"]', { name: "author" }).setAttribute("content", SITE_NAME);
    ensureMeta('meta[name="theme-color"]', { name: "theme-color" }).setAttribute("content", "#F3EFE7");

    if (keywords) {
      ensureMeta('meta[name="keywords"]', { name: "keywords" }).setAttribute("content", keywords);
    } else {
      document.querySelector('meta[name="keywords"]')?.remove();
    }

    ensureLink('link[rel="canonical"]', { rel: "canonical" }).setAttribute("href", canonicalUrl);

    ensureMeta('meta[property="og:type"]', { property: "og:type" }).setAttribute("content", type);
    ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", canonicalUrl);
    ensureMeta('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", pageTitle);
    ensureMeta('meta[property="og:description"]', { property: "og:description" }).setAttribute("content", description);
    ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).setAttribute("content", SITE_NAME);
    const existingOgImage = document.querySelector('meta[property="og:image"]');
    const existingOgImageAlt = document.querySelector('meta[property="og:image:alt"]');
    const existingOgImageWidth = document.querySelector('meta[property="og:image:width"]');
    const existingOgImageHeight = document.querySelector('meta[property="og:image:height"]');
    const existingTwitterImage = document.querySelector('meta[name="twitter:image"]');
    const existingTwitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');

    if (image) {
      ensureMeta('meta[property="og:image"]', { property: "og:image" }).setAttribute("content", image);
      ensureMeta('meta[property="og:image:width"]', { property: "og:image:width" }).setAttribute("content", "1200");
      ensureMeta('meta[property="og:image:height"]', { property: "og:image:height" }).setAttribute("content", "630");
      ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute("content", image);
      if (imageAlt) {
        ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }).setAttribute("content", imageAlt);
        ensureMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }).setAttribute("content", imageAlt);
      }
    } else {
      existingOgImage?.remove();
      existingOgImageAlt?.remove();
      existingOgImageWidth?.remove();
      existingOgImageHeight?.remove();
      existingTwitterImage?.remove();
      existingTwitterImageAlt?.remove();
    }

    ensureLink('link[rel="icon"]', { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" });

    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).setAttribute("content", "summary_large_image");
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", pageTitle);
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute("content", description);
  }, [description, image, imageAlt, keywords, location.pathname, noindex, title, type]);
}
