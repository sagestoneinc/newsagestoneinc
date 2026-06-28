import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { BrandFooter } from "./brand/BrandFooter";
import { trackCtaClick } from "../lib/analytics";

function setSiteJsonLd(id: string, data: unknown) {
  const existing = document.getElementById(id);
  if (existing && existing.tagName === "SCRIPT") {
    existing.textContent = JSON.stringify(data);
    return;
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function SitewideSchema() {
  useEffect(() => {
    setSiteJsonLd("sitewide-organization-jsonld", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SageStone Inc",
      url: "https://www.sagestoneinc.com/",
      logo: "https://www.sagestoneinc.com/logo-full-light.svg",
      description:
        "SageStone Inc provides virtual assistant services, customer support outsourcing, e-commerce support, website maintenance, and business operations support.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@sagestoneinc.com",
        telephone: "+1-214-945-2234",
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
      areaServed: "Worldwide",
    });

    setSiteJsonLd("sitewide-website-jsonld", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SageStone Inc",
      url: "https://www.sagestoneinc.com/",
    });

    return () => {
      document.getElementById("sitewide-organization-jsonld")?.remove();
      document.getElementById("sitewide-website-jsonld")?.remove();
    };
  }, []);

  return null;
}

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";

function FloatingMobileCta() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCtaClick({ location: "mobile_floating_cta", cta_text: "Book a Call", target_url: CALENDLY_URL })}
      className="fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-olive-sage)] px-6 py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_16px_38px_rgba(46,46,46,0.22)] sm:hidden"
    >
      Book a Call
    </a>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SitewideSchema />
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <BrandFooter />
      <FloatingMobileCta />
    </div>
  );
}
