import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { BrandFooter } from "./brand/BrandFooter";

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
      logo: "https://www.sagestoneinc.com/logo-mark.svg",
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
      <Header />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <BrandFooter />
    </div>
  );
}
