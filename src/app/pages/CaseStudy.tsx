import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { CTABanner } from "../components/CTABanner";
import { getCaseStudy } from "../data/caseStudies";

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

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug);
  const canonicalUrl = study ? `${SITE_URL}/case-studies/${study.slug}/` : `${SITE_URL}/case-studies/`;

  usePageMeta({
    title: study?.title ?? "Case Study Not Found | SageStone Inc",
    description: study?.metaDescription ?? "The SageStone Inc case study you are looking for could not be found.",
    keywords: study ? `${study.clientType}, SageStone case study, virtual assistant support, business operations support` : "SageStone case studies",
    type: study ? "article" : "website",
    noindex: !study,
  });

  useEffect(() => {
    if (!study) return;

    setJsonLd("case-study-jsonld", {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": study.h1,
      "description": study.metaDescription,
      "url": canonicalUrl,
      "author": { "@type": "Organization", "name": "SageStone Inc", "url": SITE_URL },
      "publisher": { "@type": "Organization", "name": "SageStone Inc", "url": SITE_URL },
      "about": study.services.map((service) => service.label),
      "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    });

    setJsonLd("case-study-breadcrumb-jsonld", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/case-studies/` },
        { "@type": "ListItem", "position": 3, "name": study.h1, "item": canonicalUrl },
      ],
    });

    return () => {
      document.getElementById("case-study-jsonld")?.remove();
      document.getElementById("case-study-breadcrumb-jsonld")?.remove();
    };
  }, [canonicalUrl, study]);

  if (!study) {
    return (
      <section className="py-32 lg:py-40 bg-gradient-to-br from-sage-50 via-white to-stone-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h1 className="text-stone-900 tracking-tight mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Case Study Not Found
          </h1>
          <p className="text-stone-500 text-[1.0625rem] leading-relaxed mb-8">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors text-[0.9375rem]" style={{ fontWeight: 500 }}>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Case Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sage-600 text-[0.875rem] mb-6 hover:text-sage-700 transition-colors" style={{ fontWeight: 500 }}>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Case Studies
          </Link>
          <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-sage-600 mb-4">{study.clientType}</p>
          <h1 className="text-stone-900 tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}>
            {study.h1}
          </h1>
          <p className="text-stone-500 text-[1.0625rem] leading-relaxed max-w-3xl">{study.summary}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {study.services.map((service) => (
              <Link key={service.path} to={service.path} onClick={() => trackInternalLinkClick({ event_name: "case_study_to_service_click", location: "case_study_hero", content_type: "case_study", content_title: study.title, target_url: service.path })} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-sage-700 hover:border-sage-200 transition-colors text-[0.875rem]">
                {service.label}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {study.sections.map((section) => (
              <section key={section.heading} className="border-b border-stone-100 pb-8 last:border-b-0">
                <h2 className="text-stone-900 mb-4" style={{ fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.3 }}>
                  {section.heading}
                </h2>
                <p className="text-stone-600 text-[1rem] leading-relaxed mb-5">{section.body}</p>
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-stone-600 text-[0.9375rem] leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build a More Reliable Support Workflow?"
        subtitle="Contact SageStone Inc to discuss your service needs, tools, recurring workload, and the safest way to delegate next."
        buttonText="Start the Conversation"
        buttonLink="/contact"
        variant="sage"
        tracking={{ location: "case_study_end", content_type: "case_study", content_title: study.title }}
      />
    </>
  );
}
