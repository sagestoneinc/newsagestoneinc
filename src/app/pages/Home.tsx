import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Megaphone,
  Headset,
  Target,
  Briefcase,
  Calculator,
  Home as HomeIcon,
  Palette,
  Search,
  Settings,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { Badge } from "../components/brand/Badge";
import { PrimaryButton } from "../components/brand/PrimaryButton";
import { SecondaryButton } from "../components/brand/SecondaryButton";
import { SectionHeader } from "../components/brand/SectionHeader";
import { ServiceCard } from "../components/brand/ServiceCard";
import { FeatureCard } from "../components/brand/FeatureCard";
import { ProcessStep } from "../components/brand/ProcessStep";
import { CTASection } from "../components/brand/CTASection";

const heroBadges = ["Remote-First", "Managed Support", "Worldwide Talent", "Flexible Plans"];

const whyFeatures = [
  {
    icon: CheckCircle2,
    title: "Dedicated vetted VAs",
    description: "Consistent support with a trusted assistant who learns your workflow and tools.",
  },
  {
    icon: Settings,
    title: "Flexible support plans",
    description: "Right-size coverage for your workload—then scale up as momentum grows.",
  },
  {
    icon: Briefcase,
    title: "U.S.-managed support",
    description: "Structured onboarding and ongoing oversight for reliable execution and quality.",
  },
];

const services = [
  {
    icon: ClipboardList,
    title: "Virtual Operations & Admin",
    description: "Calendar, inbox, documentation, project coordination, and workflow follow-through.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description: "Content coordination, scheduling, reporting, and campaign execution support.",
  },
  {
    icon: Headset,
    title: "Customer Service",
    description: "Inbox management, ticket support, and customer follow-ups that feel professional.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Prospect research, list building, and outreach support—kept consistent and organized.",
  },
  {
    icon: Briefcase,
    title: "Executive Assistance",
    description: "Proactive scheduling, travel coordination, task tracking, and priorities management.",
  },
  {
    icon: Calculator,
    title: "Bookkeeping Support",
    description: "Invoicing, expense tracking, reconciliations, and clean monthly reporting support.",
  },
  {
    icon: HomeIcon,
    title: "Real Estate VA Support",
    description: "Listing coordination, CRM updates, transaction coordination, and client follow-ups.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "On-brand social graphics, templates, presentations, and marketing collateral.",
  },
  {
    icon: Search,
    title: "Data & Web Research",
    description: "Accurate data entry, market research, competitor tracking, and list cleanup.",
  },
];

const opsFeatures = [
  {
    icon: ClipboardList,
    title: "Calendar & email management",
    description: "Keep schedules, inboxes, and follow-ups organized and moving.",
  },
  {
    icon: Briefcase,
    title: "Project coordination",
    description: "Stay on top of tasks, owners, timelines, and deliverables.",
  },
  {
    icon: Settings,
    title: "Workflow automation",
    description: "Reduce manual work with simple, reliable process improvements.",
  },
  {
    icon: Target,
    title: "CRM updates",
    description: "Maintain pipeline accuracy with clean notes, tasks, and statuses.",
  },
  {
    icon: ClipboardList,
    title: "Document organization",
    description: "Create order across folders, templates, and recurring documents.",
  },
  {
    icon: CheckCircle2,
    title: "Team follow-ups",
    description: "Proactive check-ins that keep projects from stalling.",
  },
];

const process = [
  {
    title: "Book a Discovery Call",
    description: "We learn your goals, workload, and support needs.",
  },
  {
    title: "Match & Onboard",
    description: "We align you with the right support structure and workflow.",
  },
  {
    title: "Execute & Scale",
    description: "Your SageStone support team helps you move faster with consistent execution.",
  },
];

const industries = [
  "Small businesses",
  "Real estate professionals",
  "Startups",
  "Agencies",
  "Consultants",
  "Finance teams",
  "Professional services",
];

const homeFaqs = [
  {
    q: "How do your managed virtual assistant services work?",
    a: "We start with a discovery call, then match you with the right support structure and onboarding plan. You get consistent execution with clear workflows, regular check-ins, and U.S.-managed oversight.",
  },
  {
    q: "What kinds of tasks can I delegate?",
    a: "Most clients start with admin and operations tasks like scheduling, inbox triage, documentation, CRM updates, and project coordination. We also support marketing execution, lead generation, customer service, bookkeeping support, and real estate coordination.",
  },
  {
    q: "Do you offer flexible plans?",
    a: "Yes. We offer support plans that adapt to your workload so you can scale coverage up or down as needs change—without long-term complexity.",
  },
  {
    q: "How quickly can we get started?",
    a: "After your discovery call, onboarding is typically quick. The timeline depends on scope and tools, but our goal is to get support in motion efficiently with clear expectations and processes.",
  },
];

function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before getting started with SageStone."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {homeFaqs.map((item, i) => (
            <div
              key={i}
              className="border border-[color:var(--border)] rounded-[18px] overflow-hidden bg-[color:var(--brand-cloud)]/70 hover:border-[color:var(--brand-olive-sage)] transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-[color:var(--brand-charcoal)] text-[0.9375rem]" style={{ fontWeight: 600 }}>
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-black/45 shrink-0 transition-transform duration-200 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-black/65 text-[0.875rem] leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta({
    title: "Managed Virtual Assistant & Business Support Services",
    description:
      "SageStone Inc. delivers calm, U.S.-managed virtual assistant services for growing teams across admin, operations, marketing, bookkeeping, lead generation, and customer care.",
    keywords:
      "managed virtual assistant services, U.S.-managed VA support, outsourced business operations, remote admin support, marketing support, bookkeeping support, lead generation support, real estate VA support"
  });

  useEffect(() => {
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Managed Virtual Assistant & Business Support Services",
      description:
        "Managed remote virtual assistant and operational support services for growing businesses, including admin, marketing, bookkeeping, lead generation, real estate VA support, and customer service.",
      url: "https://sagestoneinc.com/solutions",
      provider: {
        "@type": "Organization",
        name: "SageStone Inc",
        url: "https://sagestoneinc.com",
      },
      areaServed: "Worldwide",
    };

    const existingSvc = document.getElementById("home-service-jsonld");
    if (existingSvc && existingSvc.tagName === "SCRIPT") {
      (existingSvc as HTMLScriptElement).text = JSON.stringify(serviceJsonLd);
    } else {
      const svcScript = document.createElement("script");
      svcScript.type = "application/ld+json";
      svcScript.text = JSON.stringify(serviceJsonLd);
      svcScript.id = "home-service-jsonld";
      document.head.appendChild(svcScript);
    }

    return () => {
      const svcEl = document.getElementById("home-service-jsonld");
      if (svcEl) svcEl.remove();
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--brand-ivory)" }}>
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-[color:var(--brand-sage-mist)]/45 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 w-[620px] h-[620px] rounded-full bg-[color:var(--brand-soft-beige)]/55 blur-3xl" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2.5 mb-6">
                {heroBadges.map((b) => (
                  <Badge key={b}>{b}</Badge>
                ))}
              </div>
              <h1
                className="text-[color:var(--brand-charcoal)] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.25rem, 4.6vw, 3.6rem)", fontWeight: 780, lineHeight: 1.05 }}
              >
                Virtual Support That Keeps Your Business Moving
              </h1>
              <p className="text-black/65 text-[1.125rem] leading-relaxed mb-9 max-w-xl">
                Managed virtual assistant services for admin, marketing, bookkeeping, lead generation, real estate support,
                and business operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton to="/contact">Book a Discovery Call</PrimaryButton>
                <SecondaryButton to="/solutions">Explore Services</SecondaryButton>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-black/55 text-[0.875rem]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[color:var(--brand-deep-sage)]" />
                  <span>Reliable support without long-term complexity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[color:var(--brand-deep-sage)]" />
                  <span>Built for growing businesses</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 rounded-[28px] shadow-[0_24px_70px_rgba(46,46,46,0.10)]" />
                <div
                  className={
                    "relative rounded-[28px] border border-[color:var(--brand-stone-taupe)]/55 " +
                    "bg-[color:var(--brand-cloud)]/70 backdrop-blur overflow-hidden p-10"
                  }
                >
                  <div aria-hidden="true" className="absolute -top-10 -right-10 w-56 h-56 rounded-full border border-black/10" />
                  <div aria-hidden="true" className="absolute -bottom-14 -left-14 w-72 h-72 rounded-full border border-black/10" />

                  <div className="relative">
                    <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-black/55 mb-6">SageStone Inc.</p>
                    <div
                      className="mx-auto w-[220px] h-[220px] rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(250,248,243,0.85) 0%, rgba(230,223,210,0.65) 100%)",
                        boxShadow: "inset 0 2px 0 rgba(255,255,255,0.55)",
                        border: "1px solid rgba(199,189,177,0.65)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          fontFamily: "var(--font-family-heading)",
                          fontSize: "6.2rem",
                          lineHeight: 1,
                          color: "var(--brand-olive-sage)",
                          textShadow: "0 2px 0 rgba(255,255,255,0.5)",
                        }}
                      >
                        S
                      </span>
                    </div>
                    <p className="mt-8 text-black/65 text-[0.9375rem] leading-relaxed">
                      A calm, managed operations partner—designed to keep execution consistent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why SageStone"
            title="Why Choose SageStone?"
            subtitle="A smarter way to scale support without adding full-time overhead."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {whyFeatures.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
          <p className="mt-8 text-center text-black/60 text-[0.9375rem]">Worldwide remote talent for growing businesses.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-ivory)" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Services That Keep Work Moving"
            subtitle="Clean, reliable support across operations, marketing, customer service, and growth."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Virtual Operations & Admin"
            title="Virtual Operations & Admin"
            subtitle="Delegate the daily work so your team can focus on strategy and growth."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opsFeatures.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-ivory)" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="Simple Support, Built Around Your Business"
            subtitle="A clear 3-step process designed for calm, consistent execution."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((s, idx) => (
              <ProcessStep key={s.title} step={idx + 1} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            title="Support for Growing Teams Across Industries"
            subtitle="Reliable remote support that adapts to your tools, pace, and priorities."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((i) => (
              <div
                key={i}
                className="rounded-[18px] border border-[color:var(--border)] bg-[color:var(--card)] px-5 py-4 text-[0.9375rem] text-black/70"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFaq />

      <CTASection
        title="Ready to Delegate Smarter?"
        subtitle="Start building reliable remote support for your business today."
        buttonText="Book a Discovery Call"
        buttonTo="/contact"
        footerNote="Virtual Support. Real Results."
      />
    </>
  );
}

