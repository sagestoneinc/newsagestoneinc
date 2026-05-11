import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { PrimaryButton } from "../components/brand/PrimaryButton";

const SITE_URL = "https://www.sagestoneinc.com";

const industries = [
  {
    name: "Small businesses",
    pain: "Owners need help with daily admin, customer follow-up, and reporting without overloading a small internal team.",
    tasks: ["Inbox and calendar support", "CRM and tracker updates", "Weekly operations summaries"],
    links: [{ label: "Outsourced support for small businesses", path: "/outsourced-support-for-small-businesses/" }],
  },
  {
    name: "E-commerce brands",
    pain: "Order questions, returns, product updates, and customer messages can pile up during busy periods.",
    tasks: ["Order and customer inquiry support", "Catalog update assistance", "Support queue organization"],
    links: [{ label: "E-commerce virtual assistant services", path: "/ecommerce-customer-support-outsourcing/" }, { label: "Customer support outsourcing", path: "/customer-support-outsourcing/" }],
  },
  {
    name: "Real estate teams",
    pain: "Lead follow-up, CRM hygiene, scheduling, and listing coordination require timely administrative follow-through.",
    tasks: ["CRM updates", "Listing coordination", "Calendar and client communication support"],
    links: [{ label: "Real estate virtual assistant support", path: "/real-estate-virtual-assistant-services/" }],
  },
  {
    name: "Agencies",
    pain: "Client delivery teams need support with recurring admin, reporting, content coordination, and task tracking.",
    tasks: ["Project coordination", "Reporting support", "Content scheduling assistance"],
    links: [{ label: "Business operations support", path: "/business-operations-support/" }, { label: "Social media management services", path: "/social-media-management-services/" }],
  },
  {
    name: "Startups",
    pain: "Founders and operators need flexible support while processes, roles, and priorities are still evolving.",
    tasks: ["Founder admin support", "Documentation and SOP setup", "Customer and operations handoffs"],
    links: [{ label: "Virtual assistant services", path: "/virtual-assistant-services/" }, { label: "Business operations support", path: "/business-operations-support/" }],
  },
];

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

export default function IndustriesWeServe() {
  usePageMeta({
    title: "Industries We Serve | SageStone Inc",
    description: "See how SageStone Inc supports small businesses, e-commerce brands, real estate teams, agencies, and startups with virtual assistant and operations support.",
    keywords: "industries SageStone Inc, small business support, ecommerce support, real estate virtual assistant, agency operations support",
  });

  useEffect(() => {
    const pageUrl = `${SITE_URL}/industries-we-serve/`;
    setJsonLd("industries-webpage-jsonld", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Industries We Serve",
      description: "Industries SageStone Inc supports with remote virtual assistant, customer support, and operations services.",
      url: pageUrl,
      publisher: { "@type": "Organization", name: "SageStone Inc", url: SITE_URL },
    });
    setJsonLd("industries-breadcrumb-jsonld", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Industries We Serve", item: pageUrl },
      ],
    });
    return () => {
      document.getElementById("industries-webpage-jsonld")?.remove();
      document.getElementById("industries-breadcrumb-jsonld")?.remove();
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-[0.875rem] text-stone-500" aria-label="Breadcrumb"><Link to="/" className="hover:text-sage-700">Home</Link><span className="mx-2" aria-hidden="true">/</span><span>Industries We Serve</span></nav>
          <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-sage-600 mb-4">Industries</p>
          <h1 className="text-stone-900 tracking-tight mb-6" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.08 }}>Industries We Serve</h1>
          <p className="text-stone-600 text-[1.125rem] leading-relaxed max-w-3xl">SageStone Inc supports remote-friendly workflows for small businesses, e-commerce brands, real estate teams, agencies, startups, and operators that need practical help keeping daily work organized.</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <article key={industry.name} className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.375rem", fontWeight: 720 }}>{industry.name}</h2>
              <p className="text-stone-600 leading-relaxed mb-5">{industry.pain}</p>
              <h3 className="text-stone-900 mb-3" style={{ fontWeight: 650 }}>Support tasks</h3>
              <ul className="space-y-2 mb-5">
                {industry.tasks.map((task) => <li key={task} className="flex gap-2 text-stone-600 text-[0.9375rem]"><CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-1" />{task}</li>)}
              </ul>
              <div className="space-y-2 mb-6">
                {industry.links.map((link) => <Link key={link.path} to={link.path} className="flex items-center gap-2 text-sage-600 underline underline-offset-4 hover:text-sage-700">{link.label}<ArrowRight className="w-4 h-4" /></Link>)}
              </div>
              <PrimaryButton to="/contact" tracking={{ location: "industries_card", content_title: industry.name }} withArrow={false}>Discuss Support Needs</PrimaryButton>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
