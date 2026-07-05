import { useEffect } from "react";
import { Link } from "react-router";
import { CheckCircle2 } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { PrimaryButton } from "../components/brand/PrimaryButton";

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

const taskGroups = [
  ["Administrative tasks", ["Inbox triage", "Calendar coordination", "Data entry", "File organization", "Meeting preparation"]],
  ["Customer support", ["Shared inbox monitoring", "Ticket organization", "Template-based replies", "Escalation routing", "Follow-up reminders"]],
  ["E-commerce and web", ["Order checks", "Product update support", "Catalog notes", "Website content updates", "Basic reporting"]],
  ["Operations support", ["SOP cleanup", "Tracker updates", "Weekly summaries", "CRM hygiene", "Recurring checklist management"]],
];

export default function OutsourcedSupportForSmallBusinesses() {
  usePageMeta({
    title: "Outsourced Support for Small Businesses | SageStone Inc",
    description:
      "Learn how outsourced support can help small businesses manage admin work, customer support, e-commerce tasks, reporting, and daily operations without overloading internal teams.",
    keywords: "outsourced support for small businesses, small business outsourcing support, outsourced admin support",
  });

  useEffect(() => {
    const pageUrl = `${SITE_URL}/outsourced-support-for-small-businesses/`;
    setJsonLd("small-business-support-jsonld", {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Outsourced Support for Small Businesses",
      description:
        "Remote administrative, customer support, e-commerce, web, and business operations support for small businesses.",
      url: pageUrl,
      provider: { "@type": "Organization", name: "SageStone Inc", url: SITE_URL },
      areaServed: "Worldwide",
      serviceType: "Outsourced business support",
    });
    setJsonLd("small-business-support-breadcrumb-jsonld", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Outsourced Support for Small Businesses", item: pageUrl },
      ],
    });

    return () => {
      document.getElementById("small-business-support-jsonld")?.remove();
      document.getElementById("small-business-support-breadcrumb-jsonld")?.remove();
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-[0.875rem] text-stone-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-sage-700">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>Outsourced Support for Small Businesses</span>
          </nav>
          <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-sage-600 mb-4">Small Business Support</p>
          <h1 className="text-stone-900 tracking-tight mb-6" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.08 }}>
            Outsourced Support for Small Businesses
          </h1>
          <p className="text-stone-600 text-[1.125rem] leading-relaxed max-w-3xl">
            Small businesses often need reliable help before they are ready to expand an internal team. Outsourced support can create practical capacity for administrative work, customer communication, e-commerce tasks, reporting, and daily operations.
          </p>
          <div className="mt-8">
            <PrimaryButton to="/contact" tracking={{ location: "small_business_hero", cta_text: "Build Your Support Team" }}>Build Your Support Team</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <section>
            <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>Why small businesses use outsourced support</h2>
            <p className="text-stone-600 leading-relaxed">Owners, founders, and operators often carry too much daily execution themselves. Outsourced support helps move recurring work into clearer workflows so leaders can focus on customers, sales, strategy, and service delivery.</p>
          </section>

          <section>
            <h2 className="text-stone-900 mb-6" style={{ fontSize: "1.5rem", fontWeight: 720 }}>Common tasks to delegate</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {taskGroups.map(([title, items]) => (
                <article key={title as string} className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                  <h3 className="text-stone-900 mb-4" style={{ fontWeight: 680 }}>{title}</h3>
                  <ul className="space-y-2">
                    {(items as string[]).map((item) => <li key={item} className="flex gap-2 text-stone-600 text-[0.9375rem]"><CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-1" />{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>Customer support coverage</h2>
            <p className="text-stone-600 leading-relaxed">For small teams, customer messages can quickly compete with sales and delivery work. SageStone can help organize <Link to="/customer-support-outsourcing/" className="text-sage-600 underline underline-offset-4">customer support outsourcing</Link> workflows with inbox coverage, ticket routing, approved response guidance, and escalation rules.</p>
          </section>

          <section>
            <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>Admin and operations support</h2>
            <p className="text-stone-600 leading-relaxed">Recurring admin, reporting, SOPs, CRM updates, and task tracking can be handled through <Link to="/virtual-assistant-services/" className="text-sage-600 underline underline-offset-4">virtual assistant services</Link> and <Link to="/business-operations-support/" className="text-sage-600 underline underline-offset-4">business operations support</Link> built around your current tools.</p>
          </section>

          <section>
            <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>E-commerce and web support</h2>
            <p className="text-stone-600 leading-relaxed">Online stores and service businesses can delegate product updates, order checks, customer questions, and recurring website changes through <Link to="/ecommerce-virtual-assistant/" className="text-sage-600 underline underline-offset-4">e-commerce virtual assistant</Link> support and <Link to="/web-maintenance-support/" className="text-sage-600 underline underline-offset-4">web maintenance support</Link> services.</p>
          </section>

          <section>
            <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>How to start small and scale responsibly</h2>
            <p className="text-stone-600 leading-relaxed">Start with a narrow task list, document examples, define review steps, and expand only after the workflow is stable. A careful ramp-up protects quality and helps both sides understand what good support looks like.</p>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-sage-50 p-7">
            <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>How SageStone Inc supports small business operations</h2>
            <p className="text-stone-600 leading-relaxed mb-6">SageStone Inc helps small businesses shape support plans around real workload, clear handoffs, and practical communication routines. We do not promise rankings, revenue, or fixed savings; we help build reliable operating capacity.</p>
            <PrimaryButton to="/contact" tracking={{ location: "small_business_bottom", cta_text: "Discuss Your Support Needs" }}>Discuss Your Support Needs</PrimaryButton>
          </section>
        </div>
      </section>
    </>
  );
}
