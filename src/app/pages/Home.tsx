import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  HomeIcon,
  MailCheck,
  Megaphone,
  MessageSquareText,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackCtaClick } from "../lib/analytics";
import { HOMEPAGE_DESCRIPTION, HOMEPAGE_TITLE, OG_IMAGE, SITE_NAME, SITE_URL } from "../data/site";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";
const HERO_IMAGE = "/assets/operations-hero.webp";

const tools = [
  { name: "Google Workspace", icon: FileText },
  { name: "Microsoft", icon: PanelsTopLeft },
  { name: "Slack", icon: MessageSquareText },
  { name: "ClickUp", icon: Check },
  { name: "Asana", icon: Target },
  { name: "HubSpot", icon: Workflow },
  { name: "Yardi", icon: HomeIcon },
  { name: "AppFolio", icon: Blocks },
  { name: "QuickBooks", icon: ClipboardCheck },
  { name: "Teams", icon: UsersRound },
];

const solutions = [
  {
    icon: CalendarDays,
    title: "Executive Support",
    path: "/virtual-assistant-services",
    description: "Inbox management, calendar coordination, travel planning, briefing notes, and remote admin support for founders who need fewer daily interruptions.",
  },
  {
    icon: MessageSquareText,
    title: "Customer Support Outsourcing",
    path: "/customer-support-outsourcing",
    description: "Customer service virtual assistant support for inboxes, helpdesk queues, approved responses, escalation paths, and more consistent customer follow-up.",
  },
  {
    icon: Target,
    title: "E-Commerce Virtual Assistant Services",
    path: "/ecommerce-virtual-assistant",
    description: "Ecommerce support services for orders, returns, product updates, customer messages, store admin, and the back-office tasks that slow growth.",
  },
  {
    icon: HomeIcon,
    title: "Real Estate Virtual Assistant Services",
    path: "/real-estate-virtual-assistant",
    description: "CRM organization, listing coordination, transaction admin, client follow-up, and operational support for agents and real estate teams.",
  },
  {
    icon: UsersRound,
    title: "Business Operations Support",
    path: "/business-operations-support",
    description: "Business operations support for SOPs, CRM hygiene, reporting, meeting notes, project trackers, and recurring back-office follow-through.",
  },
  {
    icon: Megaphone,
    title: "Social Media Virtual Assistant",
    path: "/social-media-virtual-assistant",
    description: "Structured marketing support for content calendars, approved scheduling, asset organization, engagement tracking, and simple reporting.",
  },
  {
    icon: FileText,
    title: "Web Maintenance Support",
    path: "/web-maintenance-support",
    description: "Website update support for content edits, landing page changes, form checks, link reviews, QA, and publishing coordination.",
  },
  {
    icon: ClipboardCheck,
    title: "Virtual Assistant Services",
    path: "/virtual-assistant-services",
    description: "Flexible virtual assistant support for admin work, research, documentation, CRM updates, reporting, and recurring coordination.",
  },
];

const industries = [
  { title: "Real estate teams", path: "/real-estate-virtual-assistant", text: "Listing coordination, CRM cleanup, client communication, transaction admin, and follow-up routines that keep deals moving." },
  { title: "E-commerce brands", path: "/ecommerce-virtual-assistant", text: "Order support, returns, product updates, customer tickets, vendor notes, and store operations reporting." },
  { title: "Agencies", path: "/virtual-assistant-services", text: "Client operations, production tracking, reporting, inbox support, and campaign administration across active accounts." },
  { title: "Startups", path: "/business-operations-support", text: "Founder support services for documentation, customer operations, CRM hygiene, weekly reporting, and internal coordination." },
];

const supportPath = [
  {
    title: "Map the work",
    description: "We identify recurring admin, inbox, calendar, CRM, customer support, and back-office workflows that need clearer ownership.",
  },
  {
    title: "Launch support",
    description: "Your assistant begins with documented priorities, tool access, communication rhythms, and escalation rules that protect quality.",
  },
  {
    title: "Refine the system",
    description: "We improve SOPs, reporting, and handoffs as the work becomes more predictable and your support needs evolve.",
  },
];

const comparison = [
  { metric: "Time to capacity", traditional: "Recruiting, interviews, onboarding, and training before work begins", sagestone: "Structured support can begin after focused scope and access planning" },
  { metric: "Cost profile", traditional: "Salary, benefits, tools, payroll, and internal management time", sagestone: "Flexible outsourced admin support aligned to current workload" },
  { metric: "Operational quality", traditional: "Quality depends on one hire and the documentation already in place", sagestone: "SOP-led execution, review rhythms, and continuous workflow improvement" },
  { metric: "Flexibility", traditional: "Fixed role, fixed cost, fixed skill set, and limited coverage range", sagestone: "Adaptable support across admin, customer support, CRM, and operations workflows" },
  { metric: "Risk", traditional: "Turnover can interrupt context, coverage, and process memory", sagestone: "Shared systems help preserve context and support continuity" },
];

const caseStudies = [
  { metric: "Focused", label: "leadership capacity", title: "Less founder context switching", description: "Inbox triage, calendar support, and recurring reporting give leaders more room for sales, strategy, and client work." },
  { metric: "Clearer", label: "customer follow-up", title: "Cleaner response workflows", description: "Ticket routing, approved response guidance, and escalation rules help customer questions move with less confusion." },
  { metric: "Steadier", label: "system follow-through", title: "More reliable operations", description: "CRM updates, vendor follow-up, and task tracking make back-office work easier to delegate and review." },
];

const resourceLinks = [
  { label: "Virtual assistant task planning", path: "/blog/virtual-assistant-tasks-to-delegate" },
  { label: "Customer support outsourcing", path: "/blog/customer-support-outsourcing-checklist" },
  { label: "Business operations guide", path: "/blog/business-operations-support-guide" },
  { label: "SOPs for virtual assistants", path: "/blog/how-to-create-sops-for-virtual-assistants" },
];

const faqs = [
  { q: "What does a virtual assistant service include?", a: "A virtual assistant service can include inbox management, calendar coordination, CRM updates, research, reporting, customer follow-up, documentation, and recurring administrative support." },
  { q: "How can a virtual assistant support a growing business?", a: "A virtual assistant helps growing teams move repeatable work out of the founder's day so leadership can focus on customers, sales, strategy, and service delivery." },
  { q: "Can SageStone help with customer support and operations?", a: "Yes. SageStone supports customer support outsourcing, business operations support, admin workflows, escalation paths, reporting, and follow-up routines." },
  { q: "Do you help with inbox, calendar, and CRM management?", a: "Yes. SageStone can support inbox management services, calendar management services, CRM organization, contact updates, reminders, and routine follow-up." },
  { q: "Is virtual assistant support better than hiring in-house?", a: "It depends on the workload. Virtual assistant support is often useful when you need flexible remote admin support before a full internal role makes sense." },
  { q: "Can SageStone support ecommerce businesses?", a: "Yes. SageStone can help ecommerce teams with customer messages, order support, returns coordination, product updates, store admin, and reporting support." },
  { q: "How does onboarding work?", a: "Onboarding starts by mapping workflows, access needs, priorities, communication preferences, approval rules, and the first tasks your assistant should own." },
  { q: "What makes SageStone different from hiring a freelancer?", a: "SageStone pairs virtual assistant support with managed workflows, documentation, review rhythms, and continuity so support is less dependent on one informal handoff." },
];

function CtaButton({
  children,
  location,
  variant = "primary",
  href,
  className = "",
}: {
  children: string;
  location: string;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
}) {
  const isSecondary = variant === "secondary";
  const target = href ?? (isSecondary ? "/#solutions" : CALENDLY_URL);
  const classes = [
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold leading-none transition duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)] focus-visible:ring-offset-2",
    "active:translate-y-px",
    isSecondary
      ? "border border-[color:var(--brand-deep-sage)]/20 bg-[color:var(--brand-cloud)]/82 text-[color:var(--brand-charcoal)] hover:-translate-y-0.5 hover:border-[color:var(--brand-deep-sage)]/34 hover:bg-white hover:shadow-[0_18px_40px_rgba(35,81,59,0.10)]"
      : "bg-[color:var(--brand-deep-sage)] text-white shadow-[0_18px_46px_rgba(35,81,59,0.22)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-charcoal)] hover:shadow-[0_22px_54px_rgba(35,81,59,0.26)]",
    className,
  ].join(" ");
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </>
  );

  if (target.startsWith("/")) {
    return (
      <Link to={target} className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: target })}>
        {content}
      </Link>
    );
  }

  return (
    <a href={target} target="_blank" rel="noreferrer" className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: target })}>
      {content}
    </a>
  );
}

function useHomeMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const root = document.documentElement;
    root.classList.add("motion-ready");

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);
}

function SectionIntro({
  label,
  title,
  children,
  align = "center",
}: {
  label?: string;
  title: string;
  children?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`mb-11 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {label && <p className="mb-3 text-[0.84rem] font-semibold leading-5 text-[color:var(--brand-deep-sage)]">{label}</p>}
      <h2 className="text-balance text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2rem, 4vw, 3.7rem)", fontWeight: 760, lineHeight: 1 }}>
        {title}
      </h2>
      {children && <p className={`mt-5 text-pretty text-[1.08rem] leading-8 text-black/66 ${centered ? "mx-auto" : ""}`}>{children}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 82% 8%, rgba(221,234,215,.74), transparent 29rem), radial-gradient(circle at 12% 38%, rgba(239,228,209,.7), transparent 24rem), linear-gradient(135deg, var(--brand-cloud), var(--brand-ivory) 64%, #eef4e9)",
      }}
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-8 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-20">
        <div className="max-w-3xl" data-reveal="hero-copy">
          <p className="mb-5 inline-flex rounded-full border border-[color:var(--brand-deep-sage)]/16 bg-white/76 px-4 py-2 text-[0.9rem] font-semibold leading-none text-[color:var(--brand-deep-sage)] shadow-[0_12px_28px_rgba(35,81,59,.1)]">
            Premium operations partner
          </p>
          <h1 className="text-balance text-[clamp(2.25rem,8.4vw,4rem)] font-[780] leading-[0.98] text-[color:var(--brand-charcoal)] lg:text-[clamp(3rem,3.35vw,3.35rem)]">
            Virtual assistant services for calmer, more scalable operations
          </h1>
          <p className="mt-5 max-w-[560px] text-pretty text-base leading-7 text-black/68 lg:mt-6 lg:text-lg lg:leading-8">
            SageStone helps founders and growing teams reduce operational drag with admin, customer support, inbox, calendar, CRM, and follow-up support built around your tools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton location="homepage_hero">Book a Free Consultation</CtaButton>
            <CtaButton location="homepage_hero" variant="secondary">Explore Services</CtaButton>
          </div>
        </div>

        <div className="relative max-w-[34rem] sm:max-w-none lg:pl-2" data-reveal="hero-image">
          <div className="absolute -inset-4 rounded-[2.4rem] bg-[color:var(--brand-sage-mist)]/58 blur-2xl" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-[2rem] border border-[color:var(--brand-deep-sage)]/14 bg-white/64 p-3 shadow-[0_30px_90px_rgba(23,28,24,0.14)]">
            <img
              src={HERO_IMAGE}
              alt="Organized workspace with calendar, headset, and abstract workflow screen for SageStone operations support"
              className="aspect-[16/8.5] w-full rounded-[1.45rem] object-cover sm:aspect-[16/10]"
              loading="eager"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function ToolStrip() {
  const renderTool = (tool: (typeof tools)[number]) => {
    const Icon = tool.icon;

    return (
      <li key={tool.name} className="tool-logo-item">
        <span className="tool-logo-mark" aria-hidden="true">
          <Icon className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <span className="tool-logo-label">{tool.name}</span>
      </li>
    );
  };

  return (
    <section aria-labelledby="tools-heading" className="border-y border-[color:var(--border)] bg-[color:var(--brand-cloud)]/86 py-7 sm:py-8" data-reveal="section">
      <div className="mx-auto grid max-w-[1440px] gap-6 px-4 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-center lg:px-8">
        <div>
          <h2 id="tools-heading" className="text-xl font-semibold text-[color:var(--brand-charcoal)]">
            Works inside familiar systems
          </h2>
          <p className="mt-2 max-w-sm text-[0.96rem] leading-7 text-black/62">Your tools stay in place. We bring structure to the work happening inside them.</p>
        </div>
        <div className="tool-logo-rail" aria-label="Common tools SageStone can work inside">
          <div className="tool-logo-motion">
            <ul className="tool-logo-group" role="list">
              {tools.map(renderTool)}
            </ul>
            <ul className="tool-logo-group" aria-hidden="true" role="list">
              {tools.map(renderTool)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesBento() {
  return (
    <section id="solutions" className="py-18 lg:py-24" style={{ background: "var(--brand-ivory)" }} data-reveal="section">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionIntro label="Services" title="Support shaped around the work that slows teams down.">
          Choose virtual assistant services, customer support outsourcing, and operations support by bottleneck, industry, or workflow.
        </SectionIntro>
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => {
            const featured = index === 0 || index === 1;
            return (
              <article
                key={solution.title}
                data-reveal="card"
                style={{ "--reveal-delay": `${Math.min(index, 5) * 55}ms` } as React.CSSProperties}
                className={[
                  "motion-card group relative overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] p-6",
                  featured ? "bg-[color:var(--brand-deep-sage)] text-white md:col-span-1 xl:col-span-2" : "bg-white/74 text-[color:var(--brand-charcoal)]",
                  index === 4 ? "bg-[color:var(--brand-sage-mist)]/72" : "",
                  index === 6 ? "bg-[color:var(--brand-soft-beige)]/62" : "",
                ].join(" ")}
              >
                <div className={featured ? "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color:var(--brand-mint)]/18" : "absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--brand-sage-mist)]/45"} aria-hidden="true" />
                <div className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${featured ? "bg-white/12 text-[color:var(--brand-mint)]" : "bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-deep-sage)]"}`}>
                  <solution.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className={`relative max-w-lg text-[1.45rem] font-semibold leading-tight ${featured ? "text-white" : "text-[color:var(--brand-charcoal)]"}`}>{solution.title}</h3>
                <p className={`relative mt-4 max-w-xl text-[0.98rem] leading-7 ${featured ? "text-white/72" : "text-black/66"}`}>{solution.description}</p>
                <Link to={solution.path} className={`relative mt-7 inline-flex items-center gap-2 text-[0.95rem] font-semibold ${featured ? "text-[color:var(--brand-mint)] hover:text-white" : "text-[color:var(--brand-deep-sage)] hover:text-[color:var(--brand-charcoal)]"}`}>
                  Explore support
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OperatingPath() {
  return (
    <section className="py-18 lg:py-24" style={{ background: "var(--brand-cloud)" }} data-reveal="section">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionIntro title="A calm path from delegation to operating rhythm.">
          SageStone turns loose tasks into owned workflows, then keeps improving the system as your needs change.
        </SectionIntro>
        <div className="grid gap-5 md:grid-cols-3">
          {supportPath.map((item, index) => (
            <article key={item.title} data-reveal="card" style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties} className="motion-card rounded-[1.75rem] border border-[color:var(--border)] bg-white/72 p-7 shadow-[0_16px_44px_rgba(23,28,24,0.05)]">
              <ShieldCheck className="mb-6 h-8 w-8 text-[color:var(--brand-deep-sage)]" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-[color:var(--brand-charcoal)]">{item.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-black/66">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesAndComparison() {
  return (
    <section id="industries" className="py-18 lg:py-24" style={{ background: "var(--brand-ivory)" }} data-reveal="section">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <div>
          <SectionIntro align="left" title="Built for teams with real operating pressure.">
            SageStone supports founders, agencies, e-commerce brands, real estate teams, and growing businesses that need reliable follow-through.
          </SectionIntro>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {industries.map((industry, index) => (
              <Link key={industry.title} to={industry.path} data-reveal="card" style={{ "--reveal-delay": `${index * 55}ms` } as React.CSSProperties} className="motion-card rounded-[1.4rem] border border-[color:var(--border)] bg-white/68 p-5">
                <h3 className="text-lg font-semibold text-[color:var(--brand-charcoal)]">{industry.title}</h3>
                <p className="mt-2 text-[0.96rem] leading-7 text-black/64">{industry.text}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[color:var(--border)] bg-white/76 p-4 shadow-[0_24px_70px_rgba(23,28,24,0.08)] sm:p-6" data-reveal="card">
          <div className="mb-4 rounded-[1.45rem] bg-[color:var(--brand-sage-mist)]/62 p-5">
            <h3 className="text-2xl font-semibold text-[color:var(--brand-charcoal)]">Why not just hire internally?</h3>
            <p className="mt-2 text-[0.96rem] leading-7 text-black/64">Hiring can be right later. SageStone helps when you need capacity before a full role makes sense.</p>
          </div>
          <div className="space-y-3">
            {comparison.map((row) => (
              <article key={row.metric} className="grid gap-3 rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--brand-cloud)]/72 p-4 md:grid-cols-[0.74fr_1fr_1.08fr]">
                <strong className="text-[0.96rem] text-[color:var(--brand-charcoal)]">{row.metric}</strong>
                <span className="text-[0.94rem] leading-6 text-black/58">{row.traditional}</span>
                <span className="flex gap-2 text-[0.94rem] font-semibold leading-6 text-[color:var(--brand-deep-sage)]">
                  <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  {row.sagestone}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofAndInsights() {
  return (
    <section className="py-18 lg:py-24" style={{ background: "var(--brand-cloud)" }} data-reveal="section">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr]">
          <div>
            <SectionIntro align="left" label="Proof" title="Operational outcomes that compound.">
              Representative outcomes from focused operations work: clearer ownership, faster response loops, and steadier executive capacity.
            </SectionIntro>
            <div className="grid gap-4 md:grid-cols-3">
              {caseStudies.map((study, index) => (
                <article key={study.title} data-reveal="card" style={{ "--reveal-delay": `${index * 65}ms` } as React.CSSProperties} className="motion-card rounded-[1.75rem] border border-[color:var(--border)] bg-white/76 p-6 shadow-[0_18px_54px_rgba(23,28,24,0.06)]">
                  <p className="text-4xl font-semibold tracking-tight text-[color:var(--brand-deep-sage)]">{study.metric}</p>
                  <p className="mt-1 text-[0.95rem] font-semibold text-black/50">{study.label}</p>
                  <h3 className="mt-7 text-xl font-semibold text-[color:var(--brand-charcoal)]">{study.title}</h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-black/64">{study.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--brand-sage-mist)]/58 p-7" data-reveal="card">
            <BookOpen className="mb-5 h-8 w-8 text-[color:var(--brand-deep-sage)]" aria-hidden="true" />
            <h2 className="text-3xl font-semibold leading-tight text-[color:var(--brand-charcoal)]">Guides for calmer operations</h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-black/64">Explore practical resources for virtual assistant services, founder support, customer support outsourcing, and repeatable operations.</p>
            <div className="mt-6 grid gap-2">
              {resourceLinks.map((resource) => (
                <Link key={resource.path} to={resource.path} className="group rounded-[1.1rem] border border-[color:var(--brand-deep-sage)]/14 bg-white/72 px-4 py-3 text-[0.95rem] font-semibold text-[color:var(--brand-charcoal)]/76 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[color:var(--brand-deep-sage)]">
                  <span className="flex items-center justify-between gap-3">
                    {resource.label}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    }),
    [],
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "home-faq-jsonld";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => document.getElementById("home-faq-jsonld")?.remove();
  }, [schema]);

  return (
    <section id="faq" className="py-18 lg:py-24" style={{ background: "var(--brand-ivory)" }} data-reveal="section">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <SectionIntro align="left" title="Questions leaders ask before trusting us with operations." />
        <div className="space-y-3" data-reveal="card">
          {faqs.map((item, i) => (
            <article key={item.q} className="overflow-hidden rounded-[1.4rem] border border-[color:var(--border)] bg-white/74 shadow-[0_12px_34px_rgba(46,46,46,0.04)]">
              <button
                className="flex w-full items-center justify-between gap-6 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)]"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                aria-expanded={openIdx === i}
                aria-controls={`home-faq-${i}`}
              >
                <span className="text-[1rem] font-semibold leading-6 text-[color:var(--brand-charcoal)]">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--brand-deep-sage)] transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <div className={`faq-panel grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${openIdx === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p id={`home-faq-${i}`} className="px-5 pb-5 text-[0.98rem] leading-7 text-black/66">
                    {item.a}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8" style={{ background: "var(--brand-cloud)" }} data-reveal="section">
      <div className="mx-auto grid max-w-[1180px] gap-8 overflow-hidden rounded-[2rem] border border-[color:var(--brand-stone-taupe)]/55 bg-[color:var(--brand-deep-sage)] p-8 text-white shadow-[0_28px_80px_rgba(46,46,46,0.18)] md:grid-cols-[0.7fr_0.3fr] md:p-10">
        <div>
          <MailCheck className="mb-5 h-10 w-10 text-[color:var(--brand-mint)]" aria-hidden="true" />
          <h2 className="max-w-3xl text-balance text-white" style={{ fontSize: "clamp(2.15rem, 4.6vw, 4rem)", fontWeight: 760, lineHeight: 1 }}>
            Build the operating capacity your next stage requires.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">Start with a consultation. We will identify the workflows to stabilize first and the support model that fits.</p>
        </div>
        <div className="flex flex-col justify-end gap-3">
          <CtaButton location="homepage_final_cta" className="bg-[color:var(--brand-mint)] text-[color:var(--brand-charcoal)] hover:bg-white">
            Book a Free Consultation
          </CtaButton>
          <CtaButton location="homepage_final_cta" variant="secondary" href="/solutions" className="border-white/20 bg-white/10 text-white hover:bg-white/18">
            Explore Services
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useHomeMotion();

  usePageMeta({
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    keywords:
      "virtual assistant services, business operations support, customer support outsourcing, inbox management services, calendar management services, CRM organization, outsourced admin support",
    image: OG_IMAGE,
    imageAlt: `${SITE_NAME} social preview`,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "home-service-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
      image: OG_IMAGE,
      areaServed: "Worldwide",
      description: HOMEPAGE_DESCRIPTION,
      serviceType: [
        "Virtual Assistant Services",
        "Customer Support Outsourcing",
        "Business Operations Support",
        "Inbox Management",
        "Calendar Management",
        "CRM Organization",
      ],
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    });
    document.head.appendChild(script);
    return () => document.getElementById("home-service-jsonld")?.remove();
  }, []);

  return (
    <>
      <Hero />
      <ToolStrip />
      <ServicesBento />
      <OperatingPath />
      <IndustriesAndComparison />
      <ProofAndInsights />
      <FaqSection />
      <FinalCta />
    </>
  );
}
