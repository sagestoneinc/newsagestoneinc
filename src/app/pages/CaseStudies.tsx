import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Briefcase } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { CTABanner } from "../components/CTABanner";
import { caseStudies } from "../data/caseStudies";

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

export default function CaseStudies() {
  usePageMeta({
    title: "Case Studies | SageStone Inc",
    description: "Explore SageStone Inc case studies showing how structured virtual assistant, customer support, e-commerce, real estate, and operations support can improve workflows.",
    keywords: "SageStone case studies, virtual assistant case studies, customer support case studies, e-commerce support, real estate operations support",
  });

  useEffect(() => {
    setJsonLd("case-studies-jsonld", {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "SageStone Inc Case Studies",
      "description": "Case studies about virtual assistant and operations support workflows.",
      "url": `${SITE_URL}/case-studies/`,
      "mainEntity": caseStudies.map((study) => ({
        "@type": "Article",
        "headline": study.h1,
        "description": study.metaDescription,
        "url": `${SITE_URL}/case-studies/${study.slug}/`,
      })),
    });

    return () => document.getElementById("case-studies-jsonld")?.remove();
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6" style={{ fontWeight: 500 }}>
            Case Studies
          </span>
          <h1 className="text-stone-900 tracking-tight mb-5 max-w-3xl mx-auto" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}>
            Practical Support Workflows for Growing Teams
          </h1>
          <p className="text-stone-500 text-[1.0625rem] max-w-2xl mx-auto leading-relaxed">
            See how structured virtual assistant, customer support, e-commerce, real estate, and operations support can help teams organize recurring work without fake claims or invented results.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <article key={study.slug} className="rounded-2xl border border-stone-200 bg-white p-6 lg:p-8 hover:shadow-lg hover:border-sage-200 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center mb-5">
                  <Briefcase className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-[0.75rem] uppercase tracking-[0.16em] text-stone-400 mb-3">{study.clientType}</p>
                <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3 }}>
                  {study.h1}
                </h2>
                <p className="text-stone-500 text-[0.9375rem] leading-relaxed mb-5">{study.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.map((service) => (
                    <Link key={service.path} to={service.path} className="px-3 py-1 rounded-full bg-stone-50 text-stone-600 hover:bg-sage-50 hover:text-sage-700 border border-stone-200 text-[0.75rem] transition-colors">
                      {service.label}
                    </Link>
                  ))}
                </div>
                <Link to={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 text-[0.9375rem]" style={{ fontWeight: 600 }} aria-label={`Read ${study.h1}`}>
                  Read the case study
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Support Workflow Like This?"
        subtitle="Tell SageStone Inc where your team needs more operational capacity, and we will help you define a practical next step."
        buttonText="Discuss Your Support Needs"
        buttonLink="/contact"
        variant="dark"
      />
    </>
  );
}
