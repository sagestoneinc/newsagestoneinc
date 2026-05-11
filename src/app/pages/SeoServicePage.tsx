import { useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getSeoServicePage } from "../data/seoServicePages";
import { seoServicePages } from "../data/seoServicePages";
import { usePageMeta } from "../hooks/usePageMeta";
import { Badge } from "../components/brand/Badge";
import { PrimaryButton } from "../components/brand/PrimaryButton";
import { SecondaryButton } from "../components/brand/SecondaryButton";
import { CTASection } from "../components/brand/CTASection";

const SITE_URL = "https://www.sagestoneinc.com";

function setJsonLd(id: string, data: unknown) {
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

export default function SeoServicePage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const page = getSeoServicePage(slug);

  usePageMeta({
    title: page?.title ?? "Services | SageStone Inc",
    description: page?.metaDescription ?? "Explore SageStone Inc business support services.",
  });

  useEffect(() => {
    if (!page) return;

    const pageUrl = `${SITE_URL}/${page.slug}/`;
    setJsonLd("service-page-jsonld", {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.metaDescription,
      url: pageUrl,
      provider: {
        "@type": "Organization",
        name: "SageStone Inc",
        url: SITE_URL,
      },
      serviceType: page.eyebrow,
      areaServed: "Worldwide",
    });

    setJsonLd("service-faq-jsonld", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });

    setJsonLd("service-breadcrumb-jsonld", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: pageUrl,
        },
      ],
    });

    return () => {
      document.getElementById("service-page-jsonld")?.remove();
      document.getElementById("service-faq-jsonld")?.remove();
      document.getElementById("service-breadcrumb-jsonld")?.remove();
    };
  }, [page]);

  if (!page) {
    return <Navigate to="/solutions" replace />;
  }

  const otherServices = seoServicePages.filter((service) => service.slug !== page.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--brand-ivory)" }}>
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-[color:var(--brand-sage-mist)]/45 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 w-[620px] h-[620px] rounded-full bg-[color:var(--brand-soft-beige)]/55 blur-3xl" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="mb-8 text-[0.875rem] text-black/60" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[color:var(--brand-deep-sage)]">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>{page.h1}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Badge>{page.eyebrow}</Badge>
              <h1
                className="text-[color:var(--brand-charcoal)] tracking-tight mt-6 mb-6"
                style={{ fontSize: "clamp(2.25rem, 4.6vw, 3.6rem)", fontWeight: 780, lineHeight: 1.05 }}
              >
                {page.h1}
              </h1>
              <p className="text-black/65 text-[1.125rem] leading-relaxed mb-8 max-w-2xl">{page.heroSummary}</p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton to="/contact">Book a Free Operations Consultation</PrimaryButton>
                <SecondaryButton to="/contact">Discuss Your Support Needs</SecondaryButton>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-[color:var(--brand-stone-taupe)]/55 bg-[color:var(--brand-cloud)]/75 p-8 shadow-[0_24px_70px_rgba(46,46,46,0.10)]">
                <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-black/55 mb-5">Support highlights</p>
                <ul className="space-y-4">
                  {page.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-black/70">
                      <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-deep-sage)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="py-16 lg:py-20" style={{ background: "var(--brand-cloud)" }}>
          <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[color:var(--brand-charcoal)] mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}>
              Practical support built around your workflow
            </h2>
            <p className="text-black/65 text-[1.0625rem] leading-relaxed">{page.intro}</p>
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ background: "var(--brand-ivory)" }}>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            {page.sections.map((section) => (
              <article key={section.heading} className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[0_12px_34px_rgba(46,46,46,0.08)]">
                <h2 className="text-[color:var(--brand-charcoal)] mb-3" style={{ fontSize: "1.35rem", fontWeight: 680, lineHeight: 1.25 }}>
                  {section.heading}
                </h2>
                <p className="text-black/65 leading-relaxed">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-black/65 text-[0.9375rem]">
                        <CheckCircle2 className="w-4 h-4 text-[color:var(--brand-deep-sage)] shrink-0 mt-1" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ background: "var(--brand-cloud)" }}>
          <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[color:var(--brand-charcoal)] mb-8 text-center" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}>
              FAQs
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[18px] border border-[color:var(--border)] bg-[color:var(--brand-cloud)]/70 p-6">
                  <h2 className="text-[color:var(--brand-charcoal)] mb-2" style={{ fontSize: "1.0625rem", fontWeight: 650 }}>
                    {faq.question}
                  </h2>
                  <p className="text-black/65 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ background: "var(--brand-ivory)" }}>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-[color:var(--brand-charcoal)] mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}>
                Related services
              </h2>
              <p className="text-black/65 leading-relaxed">
                Build a stronger support system with related SageStone Inc services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {page.related.map((link) => (
                <Link key={link.path} to={link.path} className="group rounded-[18px] border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:border-[color:var(--brand-olive-sage)] transition-colors">
                  <span className="text-[color:var(--brand-charcoal)]" style={{ fontWeight: 650 }}>{link.label}</span>
                  <ArrowRight className="w-4 h-4 mt-4 text-[color:var(--brand-deep-sage)] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p className="text-center text-black/60 text-[0.9375rem]">
              You can also return to the <Link to="/" className="text-[color:var(--brand-deep-sage)] underline underline-offset-4">SageStone Inc homepage</Link> or explore {" "}
              {otherServices.map((service, index) => (
                <span key={service.slug}>
                  <Link to={`/${service.slug}`} className="text-[color:var(--brand-deep-sage)] underline underline-offset-4">{service.h1.toLowerCase()}</Link>
                  {index < otherServices.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>
        </section>
      </div>

      <CTASection
        title="Ready to Build Your Support Team?"
        subtitle="Tell SageStone Inc where your team needs support, and we will help you shape a practical next step."
        buttonText="Discuss Your Support Needs"
        buttonTo="/contact"
        footerNote="Virtual Support. Real Results."
      />
    </>
  );
}
