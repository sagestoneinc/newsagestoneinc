import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

const rows = [
  ["Best fit", "Consistent onsite or deeply embedded internal admin needs.", "Flexible remote support for recurring admin, operations, and customer workflows."],
  ["Hiring path", "Recruiting, interviews, payroll setup, benefits, and internal onboarding.", "Scope planning, assistant matching, tool access, and workflow onboarding."],
  ["Flexibility", "Usually fixed role, schedule, and employment structure.", "Can start with focused tasks and adjust scope as needs change."],
  ["Management", "Direct internal management, training, coverage planning, and performance reviews.", "Still needs clear direction, but SageStone helps structure workflows and accountability."],
  ["Coverage", "Strong for in-office tasks and company-specific responsibilities.", "Strong for remote-friendly tasks such as inboxes, CRM updates, documentation, and support queues."],
];

export default function VirtualAssistantVsInHouseAdmin() {
  usePageMeta({
    title: "Virtual Assistant vs In-House Admin: Which Is Right for Your Business? | SageStone Inc",
    description:
      "Compare virtual assistant services and in-house admin hiring to understand costs, flexibility, onboarding, management needs, and the right support model for your business.",
    keywords: "virtual assistant vs in-house admin, virtual assistant vs employee, outsourced admin support",
    type: "article",
  });

  useEffect(() => {
    const pageUrl = `${SITE_URL}/virtual-assistant-vs-in-house-admin/`;
    setJsonLd("va-comparison-jsonld", {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Virtual Assistant vs In-House Admin: Which Is Right for Your Business?",
      description:
        "A balanced comparison of virtual assistant services and in-house admin hiring for growing businesses.",
      url: pageUrl,
      author: { "@type": "Organization", name: "SageStone Inc", url: SITE_URL },
      publisher: { "@type": "Organization", name: "SageStone Inc", url: SITE_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    });
    setJsonLd("va-comparison-breadcrumb-jsonld", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Virtual Assistant vs In-House Admin", item: pageUrl },
      ],
    });

    return () => {
      document.getElementById("va-comparison-jsonld")?.remove();
      document.getElementById("va-comparison-breadcrumb-jsonld")?.remove();
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-[0.875rem] text-stone-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-sage-700">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>Virtual Assistant vs In-House Admin</span>
          </nav>
          <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-sage-600 mb-4">Comparison Guide</p>
          <h1 className="text-stone-900 tracking-tight mb-6" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.08 }}>
            Virtual Assistant vs In-House Admin: Which Is Right for Your Business?
          </h1>
          <p className="text-stone-600 text-[1.125rem] leading-relaxed max-w-3xl">
            Both options can create valuable capacity. The right choice depends on your workload, management capacity, budget structure, required coverage, and whether the work needs to happen onsite or can be handled through documented remote workflows.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-stone-900 mb-6" style={{ fontSize: "1.75rem", fontWeight: 750 }}>Quick comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left text-[0.9375rem]">
              <thead className="bg-sage-50 text-stone-900">
                <tr><th className="p-4">Factor</th><th className="p-4">In-house admin</th><th className="p-4">Virtual assistant</th></tr>
              </thead>
              <tbody>
                {rows.map(([factor, inHouse, va]) => (
                  <tr key={factor} className="border-t border-stone-200 align-top">
                    <th className="p-4 text-stone-900">{factor}</th><td className="p-4 text-stone-600">{inHouse}</td><td className="p-4 text-stone-600">{va}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {[
            ["What an in-house admin is best for", "An in-house admin can be a strong choice when support requires physical presence, frequent onsite coordination, proprietary internal context, or a full-time role with responsibilities that change throughout the day."],
            ["What a virtual assistant is best for", "A virtual assistant can be a strong fit for remote-friendly recurring tasks such as inbox management, scheduling, CRM updates, documentation, reporting, customer follow-up, e-commerce support, and back-office coordination."],
            ["Cost and flexibility considerations", "Compare the full cost and operating model, not just hourly rates. In-house hiring may include recruiting time, payroll setup, benefits, equipment, and management overhead. Virtual assistant services may offer more flexibility, but they still require clear scope, access, and feedback."],
            ["Onboarding and management differences", "In-house employees need internal training, role clarity, and ongoing management. Virtual assistants also need onboarding, but the process works best when tasks are documented, tools are prepared, and escalation rules are clear from the start."],
          ].map(([heading, body]) => (
            <section key={heading}>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>{heading}</h2>
              <p className="text-stone-600 leading-relaxed">{body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-stone-900 mb-4" style={{ fontSize: "1.5rem", fontWeight: 720 }}>When to choose a virtual assistant</h2>
            <ul className="space-y-3">
              {["Your tasks are recurring, teachable, and remote-friendly.", "You need support capacity but not necessarily a full internal hire.", "You want help organizing admin, operations, customer support, or e-commerce workflows.", "You can provide tool access, examples, review cycles, and escalation guidance."].map((item) => <li key={item} className="flex gap-3 text-stone-600"><CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-stone-900 mb-4" style={{ fontSize: "1.5rem", fontWeight: 720 }}>When to hire in-house</h2>
            <ul className="space-y-3">
              {["The role requires onsite presence or physical office coordination.", "You have enough consistent work for a full internal position.", "The work requires deep internal context across many departments every day.", "Your team has the time and systems to recruit, train, and manage the role directly."].map((item) => <li key={item} className="flex gap-3 text-stone-600"><CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />{item}</li>)}
            </ul>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-7">
            <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.5rem", fontWeight: 720 }}>How SageStone Inc helps businesses build support capacity</h2>
            <p className="text-stone-600 leading-relaxed mb-5">
              SageStone Inc helps teams scope and manage remote support across <Link to="/virtual-assistant-services/" className="text-sage-600 underline underline-offset-4">virtual assistant services</Link>, <Link to="/business-operations-support/" className="text-sage-600 underline underline-offset-4">business operations support</Link>, and <Link to="/customer-support-outsourcing/" className="text-sage-600 underline underline-offset-4">customer support outsourcing</Link> so delegation can be practical, documented, and reviewable.
            </p>
            <PrimaryButton to="/contact" tracking={{ location: "comparison_page", cta_text: "Discuss Your Support Needs" }}>Discuss Your Support Needs</PrimaryButton>
          </section>
        </div>
      </section>
    </>
  );
}
