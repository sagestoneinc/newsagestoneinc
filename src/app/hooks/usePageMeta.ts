import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
}

const SITE_NAME = "SageStone Inc";

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
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
  }, [title, description]);
}
