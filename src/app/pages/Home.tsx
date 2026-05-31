import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Headset,
  Inbox,
  Layers3,
  MessageSquareText,
  Settings,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackCtaClick } from "../lib/analytics";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";

const trustIndicators = ["Dedicated Vetted VAs", "Flexible Support Plans", "Reliable Communication", "Managed Support"];

const painPoints = [
  {
    icon: Inbox,
    title: "Your inbox dictates the day",
    description: "Client messages, vendor follow-ups, and internal requests interrupt the strategic work only you can do.",
  },
  {
    icon: Clock3,
    title: "Admin work keeps expanding",
    description: "Scheduling, documentation, reminders, and recurring tasks quietly consume hours that should drive revenue.",
  },
  {
    icon: Headset,
    title: "Customer response times slip",
    description: "When support demands spike, missed replies and delayed follow-ups can weaken client trust.",
  },
  {
    icon: Layers3,
    title: "Operations live in your head",
    description: "Processes, handoffs, and priorities are not clear enough to scale without creating more bottlenecks.",
  },
];

const supportCategories = [
  {
    icon: UserCheck,
    title: "Executive Assistance",
    description: "Protect leadership time with proactive scheduling, follow-up management, travel coordination, and priority support.",
  },
  {
    icon: ClipboardCheck,
    title: "Administrative Support",
    description: "Keep routine work moving with dependable documentation, file organization, data entry, and task coordination.",
  },
  {
    icon: MessageSquareText,
    title: "Customer Service",
    description: "Improve responsiveness with inbox triage, customer follow-ups, ticket support, and escalation workflows.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar & Email Management",
    description: "Create calm, organized days through calendar control, inbox prioritization, reminders, and meeting prep.",
  },
  {
    icon: BarChart3,
    title: "CRM Management",
    description: "Maintain clean pipelines, accurate records, lead follow-ups, activity notes, and reporting visibility.",
  },
  {
    icon: Settings,
    title: "Operations Support",
    description: "Document workflows, coordinate projects, manage recurring processes, and reduce owner-dependent execution.",
  },
];

const benefits = [
  {
    title: "More Time",
    description: "Reclaim 10–20 hours every week by moving recurring work to a reliable support system.",
  },
  {
    title: "Better Organization",
    description: "Bring order to inboxes, calendars, CRMs, files, and follow-ups so nothing important gets buried.",
  },
  {
    title: "Faster Response Times",
    description: "Strengthen client confidence with consistent communication and proactive follow-through.",
  },
  {
    title: "Improved Client Experience",
    description: "Create a more polished, responsive operation from first inquiry through ongoing service delivery.",
  },
  {
    title: "Scalable Operations",
    description: "Build repeatable support rhythms that grow with your workload instead of adding pressure to your team.",
  },
];

const industries = [
  "Marketing Agencies",
  "Real Estate",
  "Property Management",
  "Insurance",
  "Consulting Firms",
  "Professional Services",
];

const process = [
  {
    title: "Book Discovery Call",
    description: "We clarify your goals, constraints, workload, and the operational friction costing you time.",
  },
  {
    title: "Workflow Assessment",
    description: "We identify what to delegate first, where handoffs need structure, and which outcomes matter most.",
  },
  {
    title: "Match With Support Team",
    description: "You receive managed support aligned to your tools, cadence, communication style, and business priorities.",
  },
  {
    title: "Scale Efficiently",
    description: "We refine workflows, expand coverage, and help your team operate with less owner dependency.",
  },
];

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most clients can begin shortly after the discovery call and workflow assessment. Timing depends on the complexity of your tools, documentation, and support scope, but the onboarding process is designed to move efficiently without sacrificing quality.",
  },
  {
    q: "Are assistants dedicated?",
    a: "Yes. SageStone is built around dependable, consistent support. We match you with vetted assistance and managed oversight so your support team can learn your business, communication preferences, and recurring workflows.",
  },
  {
    q: "What tasks can be delegated?",
    a: "Common delegations include executive assistance, inbox and calendar management, CRM updates, client follow-ups, administrative coordination, customer service, reporting, research, documentation, and operations support.",
  },
  {
    q: "Do you offer flexible plans?",
    a: "Yes. Support can be structured around your current workload and adjusted as your business grows, making SageStone a strong fit for teams that need premium support without immediately hiring full-time operations staff.",
  },
  {
    q: "How do communication and reporting work?",
    a: "We establish clear communication channels, response expectations, recurring check-ins, and reporting rhythms during onboarding so you always know what is being handled, what needs review, and where work stands.",
  },
];

function CalendlyButton({ children, location, className = "" }: { children: string; location: string; className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCtaClick({ location, cta_text: children, target_url: CALENDLY_URL })}
      className={`inline-flex items-center justify-center gap-2 rounded-[18px] bg-[color:var(--brand-olive-sage)] px-7 py-3.5 text-[0.9375rem] font-semibold text-[color:var(--brand-cloud)] shadow-[0_12px_28px_rgba(111,127,103,0.22)] transition-all duration-200 hover:bg-[color:var(--brand-deep-sage)] hover:shadow-[0_16px_34px_rgba(111,127,103,0.26)] ${className}`}
    >
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function SecondaryAssessmentButton({ location, className = "" }: { location: string; className?: string }) {
  return (
    <Link
      to="/contact#workflow-assessment"
      onClick={() => trackCtaClick({ location, cta_text: "Get a Free Workflow Assessment", target_url: "/contact#workflow-assessment" })}
      className={`inline-flex items-center justify-center rounded-[18px] border border-[color:var(--brand-olive-sage)] bg-white/40 px-7 py-3.5 text-[0.9375rem] font-medium text-[color:var(--brand-charcoal)] transition-colors duration-200 hover:bg-[color:var(--brand-sage-mist)]/70 ${className}`}
    >
      Get a Free Workflow Assessment
    </Link>
  );
}

function SectionIntro({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">{eyebrow}</p>
      <h2 className="text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)", fontWeight: 750, lineHeight: 1.08 }}>
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-black/65">{subtitle}</p>
    </div>
  );
}

function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="FAQ"
          title="Questions Before You Delegate"
          subtitle="Clear answers for leaders evaluating premium virtual assistant services and managed business operations support."
        />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, i) => (
            <div key={item.q} className="overflow-hidden rounded-[18px] border border-[color:var(--border)] bg-white/55 transition-colors hover:border-[color:var(--brand-olive-sage)]">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="text-[0.9375rem] font-semibold text-[color:var(--brand-charcoal)]">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-black/45 transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-[0.875rem] leading-relaxed text-black/65">{item.a}</p>
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
    title: "Premium Virtual Assistant Services & Business Operations Support | SageStone Inc",
    description:
      "SageStone Inc helps overwhelmed business owners reclaim time with managed virtual assistant services, executive assistant services, remote administrative support, and business operations support.",
    keywords:
      "Virtual Assistant Services, Executive Assistant Services, Remote Administrative Support, Business Operations Support, Virtual Operations Manager, Outsourced Administrative Services, Managed Virtual Support",
  });

  useEffect(() => {
    const homeJsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "SageStone Inc",
      url: "https://www.sagestoneinc.com",
      description:
        "Premium managed virtual support for business owners and growing companies that need executive assistance, remote administrative support, CRM management, customer service, and business operations support.",
      areaServed: "Worldwide",
      serviceType: [
        "Virtual Assistant Services",
        "Executive Assistant Services",
        "Remote Administrative Support",
        "Business Operations Support",
        "Managed Virtual Support",
      ],
    };

    const svcScript = document.createElement("script");
    svcScript.type = "application/ld+json";
    svcScript.text = JSON.stringify(homeJsonLd);
    svcScript.id = "home-service-jsonld";
    document.head.appendChild(svcScript);

    return () => {
      document.getElementById("home-service-jsonld")?.remove();
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--brand-ivory)" }}>
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[color:var(--brand-sage-mist)]/55 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 h-[620px] w-[620px] rounded-full bg-[color:var(--brand-soft-beige)]/65 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[color:var(--brand-stone-taupe)]/70 bg-white/45 px-4 py-2 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-olive-sage)]">
              Virtual Support. Real Results.
            </p>
            <h1 className="max-w-4xl text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", fontWeight: 760, lineHeight: 0.96 }}>
              Virtual Support That Keeps Your Business Moving
            </h1>
            <p className="mt-7 max-w-2xl text-[1.125rem] leading-8 text-black/68 lg:text-[1.25rem]">
              SageStone helps overwhelmed business owners and growing teams reclaim 10–20 hours every week with dependable virtual assistant services, managed remote administrative support, and operations systems built for scale.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CalendlyButton location="homepage_hero">Book a Discovery Call</CalendlyButton>
              <SecondaryAssessmentButton location="homepage_hero" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/45 px-4 py-2 text-[0.875rem] text-black/70">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-olive-sage)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[color:var(--brand-stone-taupe)]/60 bg-white/55 p-5 shadow-[0_24px_70px_rgba(46,46,46,0.10)] backdrop-blur">
            <div className="rounded-[28px] bg-[color:var(--brand-cloud)] p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-olive-sage)]">Operational clarity</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[color:var(--brand-charcoal)]">From reactive to reliable</h2>
                </div>
                <ShieldCheck className="h-10 w-10 text-[color:var(--brand-olive-sage)]" />
              </div>
              <div className="space-y-4">
                {[
                  ["Inbox and calendar controlled", "Daily triage, scheduling, reminders, and priority follow-ups."],
                  ["CRM and client records current", "Clean pipelines, accurate notes, and next-step visibility."],
                  ["Recurring work delegated", "Documented processes that reduce interruptions and owner dependency."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-[color:var(--border)] bg-white/65 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[color:var(--brand-olive-sage)]" />
                      <div>
                        <h3 className="text-base font-semibold text-[color:var(--brand-charcoal)]">{title}</h3>
                        <p className="mt-1 text-[0.875rem] leading-relaxed text-black/60">{copy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[color:var(--brand-olive-sage)] p-5 text-[color:var(--brand-cloud)]">
                <p className="text-[0.875rem] uppercase tracking-[0.18em] text-white/70">Outcome</p>
                <p className="mt-2 text-2xl font-semibold">More focus, cleaner execution, fewer missed opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The Bottleneck"
            title="Why Business Owners Feel Stuck"
            subtitle="Growth should create opportunity—not constant interruptions, inbox overload, scheduling issues, and operational work that pulls you away from leadership."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[color:var(--border)] bg-white/55 p-6 shadow-[0_14px_34px_rgba(46,46,46,0.05)]">
                <item.icon className="mb-5 h-9 w-9 text-[color:var(--brand-olive-sage)]" />
                <h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-black/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-ivory)" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="The SageStone Solution"
            title="How SageStone Helps"
            subtitle="We combine vetted virtual support with managed operations structure, helping you delegate outcomes—not just isolated tasks."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportCategories.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[color:var(--border)] bg-white/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(46,46,46,0.08)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-deep-sage)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-black/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Business Outcomes"
            title="What You Gain"
            subtitle="The right managed virtual support gives your business more than task completion—it creates capacity, confidence, and operational momentum."
          />
          <div className="grid gap-5 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[22px] border border-[color:var(--border)] bg-white/60 p-6">
                <Sparkles className="mb-4 h-7 w-7 text-[color:var(--brand-olive-sage)]" />
                <h3 className="text-lg font-semibold text-[color:var(--brand-charcoal)]">{benefit.title}</h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-black/62">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" style={{ background: "var(--brand-ivory)" }}>
        <div className="mx-auto max-w-[1180px] rounded-[30px] border border-[color:var(--brand-stone-taupe)]/60 bg-[color:var(--brand-charcoal)] p-8 text-center text-white shadow-[0_18px_48px_rgba(46,46,46,0.16)] sm:p-12">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-sage-mist)]">Mid-page decision point</p>
          <h2 className="mt-3 text-white" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 750, lineHeight: 1.08 }}>Ready to Reclaim Your Time?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-white/72">Book a complimentary discovery call and leave with a clearer view of what to delegate first.</p>
          <div className="mt-8">
            <CalendlyButton location="homepage_midpage" className="bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-charcoal)] hover:bg-white">Book a Discovery Call</CalendlyButton>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Industries"
            title="Who We Support"
            subtitle="SageStone adapts to the pace, tools, and client expectations of service-led companies that need reliable execution."
          />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-[20px] border border-[color:var(--border)] bg-white/58 p-5 text-[1rem] font-semibold text-[color:var(--brand-charcoal)]">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-ivory)" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Process"
            title="Getting Started Is Simple"
            subtitle="A premium support relationship should feel clear from the first conversation. Here is how we move from discovery to dependable execution."
          />
          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-[24px] border border-[color:var(--border)] bg-white/55 p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-olive-sage)] text-lg font-semibold text-white">{index + 1}</div>
                <h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-black/62">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Client Results"
            title="Trusted Support Stories Coming Soon"
            subtitle="This section is prepared for future testimonials from leaders who have improved response times, reclaimed focus, and scaled with SageStone support."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {["Operational clarity", "More leadership capacity", "Consistent client follow-through"].map((quote) => (
              <div key={quote} className="rounded-[24px] border border-dashed border-[color:var(--brand-stone-taupe)] bg-white/45 p-7">
                <p className="text-[0.875rem] uppercase tracking-[0.18em] text-[color:var(--brand-olive-sage)]">Future testimonial</p>
                <p className="mt-5 text-xl font-semibold leading-snug text-[color:var(--brand-charcoal)]">“Placeholder for a client story about {quote.toLowerCase()}.”</p>
                <div className="mt-8 h-px bg-[color:var(--border)]" />
                <p className="mt-5 text-[0.875rem] text-black/55">Client name, title, and company</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFaq />

      <section id="schedule" className="py-20 lg:py-24" style={{ background: "var(--brand-ivory)" }}>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Book Now"
            title="Schedule Your Complimentary Discovery Call"
            subtitle="Choose a time that works for you. In the call, we will discuss your current operational challenges, identify delegation opportunities, and recommend next steps."
          />
          <div className="overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-white shadow-[0_18px_48px_rgba(46,46,46,0.08)]">
            <iframe
              title="Schedule a SageStone discovery call"
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f3efe7&text_color=2e2e2e&primary_color=8f987a`}
              className="h-[760px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: "var(--brand-cloud)" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[color:var(--brand-stone-taupe)]/55 bg-white/60 px-8 py-14 text-center shadow-[0_18px_48px_rgba(46,46,46,0.10)] backdrop-blur sm:px-12">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">Next Step</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 760, lineHeight: 1.08 }}>
              Let’s Build a More Efficient Business Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-black/65">
              Discover how SageStone can help streamline your operations and free your team to focus on growth.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CalendlyButton location="homepage_final">Book a Discovery Call</CalendlyButton>
              <SecondaryAssessmentButton location="homepage_final" />
            </div>
            <p className="mt-8 text-[0.875rem] text-black/55">Premium managed virtual support for calm, consistent execution.</p>
          </div>
        </div>
      </section>
    </>
  );
}
