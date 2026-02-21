import { useEffect } from "react";
import { useLocation } from "react-router";

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string;
}

const SITE_NAME = "SageStone Inc";
const SITE_BASE_URL = "https://sagestoneinc.com";

export function usePageMeta({ title, description, keywords }: PageMetaOptions) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords || "");
    }

    const canonicalUrl = `${SITE_BASE_URL}${location.pathname}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${title} | ${SITE_NAME}`);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", `${title} | ${SITE_NAME}`);
    }

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }
  }, [title, description, keywords, location.pathname]);
}
