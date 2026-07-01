import { Link, useLocation } from "react-router";
import { useEffect, useMemo } from "react";
import { canonicalUrl, OG_IMAGE, routeByPath, SITE_NAME, SITE_URL } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const answers: Record<string, { q: string; a: string }> = {
  "/fractional-customer-success-consultant": { q: "What is a fractional customer success consultant?", a: "A fractional customer success consultant is a part-time senior customer success operator who improves onboarding, customer health, retention workflows, and account operations without requiring a full-time hire." },
  "/customer-success-operations-consultant": { q: "What does customer success operations consulting include?", a: "Customer success operations consulting includes lifecycle workflow design, CRM cleanup, onboarding systems, customer health tracking, reporting, SOPs, handoff improvements, and retention process optimization." },
  "/shopify-ecommerce-operations-support": { q: "When should a Shopify team hire operations support?", a: "A Shopify team should hire operations support when customer questions, returns, order follow-up, product updates, and SOP maintenance are slowing growth or creating inconsistent customer experiences." },
  "/operations-audit": { q: "What is an operations audit?", a: "An operations audit is a structured review of workflows, tools, handoffs, SOPs, and customer journey gaps so a team can prioritize practical fixes that reduce friction and improve customer outcomes." },
};

function setJsonLd(id: string, data: unknown) {
  const existing = document.getElementById(id) as HTMLScriptElement | null;
  const json = JSON.stringify(data);
  if (existing) existing.textContent = json;
  else {
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = json;
    document.head.appendChild(script);
  }
}

export default function JeselSeoPage() {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, "") || "/";
  const route = routeByPath(path);
  const title = route?.title ?? "Customer Success Operations Consulting | Jesel Cura";
  const description = route?.description ?? "Customer success operations consulting for SaaS, Shopify, and service teams.";
  usePageMeta({ title, description, image: OG_IMAGE, imageAlt: `${SITE_NAME} social preview`, type: route?.kind === "blog" || route?.kind === "case-study" ? "article" : "website" });

  const crumbs = useMemo(() => {
    const base = [{ name: "Home", item: canonicalUrl("/") }];
    if (route?.kind === "blog") base.push({ name: "Blog", item: canonicalUrl("/blog") });
    else if (route?.kind === "case-study") base.push({ name: "Case Studies", item: canonicalUrl("/case-studies") });
    else if (route?.kind === "service") base.push({ name: "Services", item: canonicalUrl("/services") });
    if (path !== "/") base.push({ name: title.replace(/ \| Jesel Cura$/, ""), item: canonicalUrl(path) });
    return base;
  }, [path, route?.kind, title]);

  useEffect(() => {
    setJsonLd("breadcrumb-jsonld", { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })) });
    if (route?.kind === "blog") setJsonLd("article-jsonld", { "@context": "https://schema.org", "@type": "BlogPosting", headline: title.replace(/ \| Jesel Cura$/, ""), description, author: { "@type": "Person", name: SITE_NAME }, publisher: { "@type": "Person", name: SITE_NAME }, mainEntityOfPage: canonicalUrl(path), datePublished: "2026-06-30", dateModified: "2026-06-30", image: OG_IMAGE, url: canonicalUrl(path) });
    else document.getElementById("article-jsonld")?.remove();
    if (path === "/about") setJsonLd("about-page-jsonld", { "@context": "https://schema.org", "@type": "AboutPage", name: title.replace(/ \| Jesel Cura$/, ""), description, url: canonicalUrl(path), mainEntity: { "@type": "Person", name: SITE_NAME, url: SITE_URL, image: OG_IMAGE } });
    else document.getElementById("about-page-jsonld")?.remove();
  }, [crumbs, description, path, route?.kind, title]);

  const answer = answers[path];
  return <main className="min-h-screen bg-[color:var(--brand-cloud)]"><section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8"><nav className="mb-8 text-sm text-black/55">{crumbs.map((c, i) => <span key={c.item}>{i > 0 && " / "}<Link className="underline underline-offset-4" to={new URL(c.item).pathname}>{c.name}</Link></span>)}</nav><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--brand-deep-sage)]">Customer operations</p><h1 className="max-w-4xl text-balance text-[clamp(2.4rem,7vw,4.5rem)] font-[760] leading-none text-[color:var(--brand-charcoal)]">{title.replace(/ \| Jesel Cura$/, "")}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-black/68">{description}</p>{answer && <section className="mt-10 rounded-[28px] border border-[color:var(--border)] bg-white/80 p-7 shadow-[0_16px_46px_rgba(35,81,59,0.08)]"><h2 className="text-2xl font-semibold text-[color:var(--brand-charcoal)]">{answer.q}</h2><p className="mt-4 text-base leading-8 text-black/68">{answer.a}</p></section>}<section className="mt-10 grid gap-4 md:grid-cols-3">{["Workflow clarity", "SOPs and CRM hygiene", "Retention readiness"].map((item) => <article key={item} className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-6"><h2 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{item}</h2><p className="mt-3 text-sm leading-7 text-black/60">Practical, documented improvements that help teams serve customers consistently and reduce operational drag.</p></article>)}</section><div className="mt-10"><Link to="/contact" className="inline-flex rounded-full bg-[color:var(--brand-deep-sage)] px-6 py-3 text-sm font-semibold text-white">Discuss your workflow</Link></div></section></main>;
}
