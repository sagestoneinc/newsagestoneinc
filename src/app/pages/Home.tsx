import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  DatabaseZap,
  Headphones,
  Inbox,
  LayoutDashboard,
  Megaphone,
  MonitorCog,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackCtaClick } from "../lib/analytics";

const SITE_URL = "https://www.sagestoneinc.com";
const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";
const OG_IMAGE = `${SITE_URL}/logo-mark.svg`;

const serviceBadges = ["Customer Support", "Admin Support", "E-commerce Ops", "CRM", "Marketing Support", "Web Maintenance"];

const problemCards = [
  { icon: Inbox, title: "Too many admin tasks", description: "Daily admin can quietly consume hours your team should spend on higher-value work." },
  { icon: Headphones, title: "Slow customer response times", description: "Missed messages and delayed replies can hurt trust, retention, and revenue." },
  { icon: DatabaseZap, title: "Messy CRM or backend systems", description: "Disorganized data makes sales, follow-ups, and reporting harder than they should be." },
  { icon: LayoutDashboard, title: "No time for consistent operations", description: "Without reliable processes, your team keeps reacting instead of building momentum." },
];

const services = [
  { icon: ClipboardList, title: "Virtual Assistant Services", path: "/virtual-assistant-services", description: "Inbox, calendar, research, data entry, documentation, and daily admin support." },
  { icon: Headphones, title: "Customer Support", path: "/customer-support", description: "Helpdesk, email, chat, ticket handling, follow-ups, and customer communication." },
  { icon: PackageCheck, title: "E-commerce Operations", path: "/ecommerce-operations-support", description: "Order support, product updates, inventory coordination, customer inquiries, and backend store tasks." },
  { icon: DatabaseZap, title: "CRM & Admin Support", path: "/crm-admin-support", description: "CRM cleanup, lead updates, pipeline tracking, reporting, and contact management." },
  { icon: Megaphone, title: "Social Media Support", path: "/social-media-support", description: "Scheduling, content organization, engagement tracking, and basic creative coordination." },
  { icon: MonitorCog, title: "Web Maintenance Support", path: "/web-maintenance-support", description: "Website updates, content edits, page checks, links, forms, and routine maintenance." },
];

const tasks = [
  "Inbox and calendar management", "Customer support tickets", "Live chat support", "CRM updates", "Lead research", "Data entry",
  "Order support", "Product updates", "Social media scheduling", "Reporting", "SOP documentation", "Web content updates",
];

const process = [
  { title: "Discovery Call", description: "We learn your business, bottlenecks, tools, and support needs." },
  { title: "Workflow Mapping", description: "We identify what to delegate first and document the process." },
  { title: "Support Setup", description: "We help organize the tools, tasks, and communication flow needed for reliable support." },
  { title: "Ongoing Optimization", description: "We improve handoffs, reporting, response times, and daily operations as your business grows." },
];

const audiences = ["Founders", "Small business owners", "Startups", "Agencies", "Consultants", "E-commerce brands", "Service-based businesses"];

const whyPoints = [
  "We help document repeatable processes",
  "We support the tools your team already uses",
  "We focus on operational clarity, not just task completion",
  "We help reduce founder and team workload",
  "We make delegation feel easier and more controlled",
];

const faqs = [
  { q: "What does SageStone Inc do?", a: "SageStone Inc provides virtual assistant, customer support, admin, CRM, e-commerce operations, social media, web maintenance, and business operations support for growing businesses." },
  { q: "Who does SageStone work with?", a: "SageStone works with founders, startups, small businesses, agencies, consultants, e-commerce brands, and service-based businesses that need reliable operational support." },
  { q: "Can SageStone help with customer support?", a: "Yes. SageStone can help manage email support, chat support, helpdesk tickets, customer follow-ups, order questions, and general customer communication." },
  { q: "Can SageStone support e-commerce businesses?", a: "Yes. SageStone can assist with order support, product updates, customer inquiries, inventory coordination, backend store tasks, and routine e-commerce operations." },
  { q: "How do I get started?", a: "You can book a discovery call or request a free workflow audit so SageStone can understand your needs and recommend the best support setup." },
];

function CtaButton({ children, location, variant = "primary", className = "" }: { children: string; location: string; variant?: "primary" | "secondary"; className?: string }) {
  const isSecondary = variant === "secondary";
  const href = isSecondary ? "/free-workflow-assessment" : CALENDLY_URL;
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)] focus-visible:ring-offset-2 ${
    isSecondary
      ? "border border-[color:var(--brand-stone-taupe)]/80 bg-white/55 text-[color:var(--brand-charcoal)] hover:bg-white hover:shadow-[0_18px_40px_rgba(46,46,46,0.08)]"
      : "bg-[color:var(--brand-charcoal)] text-white shadow-[0_18px_40px_rgba(46,46,46,0.18)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-deep-sage)]"
  } ${className}`;

  if (isSecondary) {
    return <Link to={href} className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: href })}>{content}</Link>;
  }
  return <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: href })}>{content}</a>;
}

function SectionIntro({ eyebrow, title, children, align = "center" }: { eyebrow: string; title: string; children: string; align?: "center" | "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--brand-deep-sage)]">{eyebrow}</p>
      <h2 className="text-balance text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2rem, 4vw, 3.35rem)", fontWeight: 760, lineHeight: 1.04 }}>{title}</h2>
      <p className="mt-5 text-pretty text-[1.0625rem] leading-8 text-black/66">{children}</p>
    </div>
  );
}

function HomeFaq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="faq" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}>
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="FAQ" title="Questions before you delegate">Clear answers for teams evaluating virtual assistant, customer support, and business operations support.</SectionIntro>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, i) => (
            <article key={item.q} className="overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-white/65 shadow-[0_12px_34px_rgba(46,46,46,0.04)]">
              <button className="flex w-full items-center justify-between gap-6 p-5 text-left" onClick={() => setOpenIdx(openIdx === i ? -1 : i)} aria-expanded={openIdx === i}>
                <span className="font-semibold text-[color:var(--brand-charcoal)]">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--brand-deep-sage)] transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && <p className="px-5 pb-5 text-sm leading-7 text-black/64">{item.a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowVisual() {
  const cards = ["Customer Support", "CRM Cleanup", "Inbox Management", "Order Support", "Web Updates", "SOP Documentation"];
  return (
    <div className="hero-dashboard relative mx-auto max-w-xl rounded-[34px] border border-white/50 bg-white/58 p-5 shadow-[0_30px_90px_rgba(46,46,46,0.15)] backdrop-blur-xl">
      <div className="rounded-[28px] bg-[color:var(--brand-charcoal)] p-5 text-white">
        <div className="mb-5 flex items-center justify-between">
          <div><p className="text-xs uppercase tracking-[0.2em] text-white/55">Operations desk</p><h2 className="mt-1 text-2xl font-semibold text-white">Delegation map</h2></div>
          <ShieldCheck className="h-10 w-10 text-[color:var(--brand-sage-mist)]" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {cards.map((card, i) => <div key={card} className="float-card rounded-2xl border border-white/10 bg-white/[0.08] p-4" style={{ animationDelay: `${i * 120}ms` }}><CheckCircle2 className="mb-3 h-5 w-5 text-[color:var(--brand-sage-mist)]" /><p className="font-semibold">{card}</p><p className="mt-1 text-xs text-white/55">Assigned · tracked · optimized</p></div>)}
        </div>
        <div className="mt-5 rounded-2xl bg-white p-4 text-[color:var(--brand-charcoal)]"><div className="mb-3 flex items-center justify-between text-sm font-semibold"><span>Weekly workflow clarity</span><span>92%</span></div><div className="h-2 overflow-hidden rounded-full bg-[color:var(--brand-soft-beige)]"><div className="h-full w-[92%] rounded-full bg-[color:var(--brand-olive-sage)]" /></div></div>
      </div>
    </div>
  );
}

export default function Home() {
  usePageMeta({
    title: "Virtual Assistant Services, Customer Support & Business Operations | SageStone Inc",
    description: "SageStone Inc provides reliable virtual assistant, customer support, e-commerce operations, CRM, admin, and marketing support for growing businesses. Book a discovery call.",
    keywords: "virtual assistant services, customer support, e-commerce operations support, CRM support, business operations support, admin support",
    image: OG_IMAGE,
    imageAlt: "SageStone Inc logo mark",
  });

  useEffect(() => {
    const data = [
      { "@context": "https://schema.org", "@type": "Organization", name: "SageStone Inc", url: `${SITE_URL}/`, logo: OG_IMAGE },
      { "@context": "https://schema.org", "@type": "WebSite", name: "SageStone Inc", url: `${SITE_URL}/` },
      { "@context": "https://schema.org", "@type": "Service", name: "Virtual assistant and business operations support", provider: { "@type": "Organization", name: "SageStone Inc", url: `${SITE_URL}/` }, areaServed: "Worldwide", serviceType: services.map((service) => service.title), description: "Virtual assistant, customer support, CRM, e-commerce, social media, web maintenance, and business operations support for growing teams." },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "home-jsonld";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => document.getElementById("home-jsonld")?.remove();
  }, []);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-8" style={{ background: "linear-gradient(135deg, var(--brand-ivory), var(--brand-cloud) 52%, #e8eee3)" }}>
        <div aria-hidden="true" className="absolute inset-0 -z-10"><div className="ambient-orb absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[color:var(--brand-sage-mist)]/65 blur-3xl" /><div className="ambient-orb ambient-orb-delayed absolute -left-36 bottom-0 h-[520px] w-[520px] rounded-full bg-[color:var(--brand-soft-beige)]/70 blur-3xl" /></div>
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div className="reveal-up">
            <p className="mb-5 inline-flex rounded-full border border-[color:var(--brand-stone-taupe)]/70 bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-deep-sage)]">Premium virtual operations support</p>
            <h1 className="max-w-5xl text-balance text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2.85rem, 7vw, 6.6rem)", fontWeight: 780, lineHeight: 0.94 }}>Reliable Virtual Assistant & Operations Support for Growing Teams</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-black/68 lg:text-xl">SageStone helps founders, agencies, e-commerce brands, and service-based businesses delegate customer support, admin, CRM, web maintenance, and back-office tasks without adding operational noise.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><CtaButton location="homepage_hero">Book a Discovery Call</CtaButton><CtaButton location="homepage_hero" variant="secondary">Get a Free Workflow Audit</CtaButton></div>
          </div>
          <WorkflowVisual />
        </div>
      </section>

      <section className="overflow-hidden border-y border-[color:var(--border)] bg-[color:var(--brand-charcoal)] py-7 text-white"><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><p className="mb-5 text-center text-sm text-white/70">Trusted support for founders, small businesses, agencies, consultants, and growing teams.</p><div className="trust-marquee flex flex-wrap justify-center gap-3">{serviceBadges.map((badge) => <span key={badge} className="rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm text-white/86">{badge}</span>)}</div></div></section>

      <section id="problems" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Problems we solve" title="Stop letting operational noise set the agenda">Running a growing business means your time gets pulled into repetitive tasks, inboxes, customer questions, CRM updates, e-commerce admin, and operational follow-ups. SageStone gives you reliable support so your team can focus on revenue, clients, and growth.</SectionIntro><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{problemCards.map((item) => <article key={item.title} className="premium-card rounded-[26px] border border-[color:var(--border)] bg-white/62 p-6"><item.icon className="mb-5 h-9 w-9 text-[color:var(--brand-deep-sage)]" /><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-black/64">{item.description}</p></article>)}</div></div></section>

      <section id="services" className="py-20 lg:py-28" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Core services" title="Business support that adapts to your backend">Choose focused help for daily execution, customer communication, systems maintenance, and repeatable operations.</SectionIntro><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <Link key={service.title} to={service.path} className="premium-card group rounded-[28px] border border-[color:var(--border)] bg-white/58 p-7"><div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-deep-sage)]"><service.icon className="h-6 w-6" /></div><h3 className="text-2xl font-semibold text-[color:var(--brand-charcoal)]">{service.title}</h3><p className="mt-3 min-h-[84px] text-sm leading-7 text-black/64">{service.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-deep-sage)]">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><SectionIntro align="left" eyebrow="Tasks off your plate" title="A cleaner operating rhythm, without hiring full-time">SageStone turns scattered recurring tasks into a visible support board so your team knows what is handled, what is pending, and what needs review.</SectionIntro><div className="rounded-[30px] border border-[color:var(--border)] bg-white/66 p-5 shadow-[0_24px_70px_rgba(46,46,46,0.08)]"><div className="grid gap-3 sm:grid-cols-2">{tasks.map((task) => <div key={task} className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--brand-cloud)]/80 p-4"><CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--brand-deep-sage)]" /><span className="text-sm font-medium text-[color:var(--brand-charcoal)]">{task}</span></div>)}</div></div></div></section>

      <section id="how-it-works" className="py-20 lg:py-28" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="How it works" title="From discovery to dependable daily support">A simple, documented process helps delegation feel controlled from the first call through ongoing optimization.</SectionIntro><div className="relative grid gap-6 lg:grid-cols-4"><div aria-hidden="true" className="workflow-line absolute left-0 right-0 top-12 hidden h-px bg-[color:var(--brand-stone-taupe)] lg:block" />{process.map((step, index) => <article key={step.title} className="premium-card relative rounded-[26px] border border-[color:var(--border)] bg-white/66 p-6"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand-charcoal)] text-lg font-bold text-white">{index + 1}</div><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{step.title}</h3><p className="mt-3 text-sm leading-7 text-black/64">{step.description}</p></article>)}</div></div></section>

      <section id="who-we-help" className="py-20 lg:py-28" style={{ background: "var(--brand-charcoal)" }}><div className="mx-auto max-w-[1440px] px-4 text-white sm:px-6 lg:px-8"><SectionIntro eyebrow="Who we help" title="Built for teams that need reliable backend capacity">Whether you need a few hours of admin help or ongoing operations support, SageStone helps you build a smoother backend without hiring full-time.</SectionIntro><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((audience) => <div key={audience} className="rounded-[22px] border border-white/10 bg-white/[0.07] p-5"><UsersRound className="mb-4 h-6 w-6 text-[color:var(--brand-sage-mist)]" /><p className="font-semibold text-white">{audience}</p></div>)}</div></div></section>

      <section className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto grid max-w-[1180px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--brand-deep-sage)]">Why SageStone</p><h2 className="text-balance text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 760, lineHeight: 1.05 }}>Support that feels organized, reliable, and built around your workflow.</h2></div><div className="space-y-3">{whyPoints.map((point) => <div key={point} className="flex gap-3 rounded-2xl border border-[color:var(--border)] bg-white/64 p-4"><Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand-deep-sage)]" /><p className="font-medium text-[color:var(--brand-charcoal)]">{point}</p></div>)}</div></div></section>

      <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1180px] rounded-[34px] border border-[color:var(--brand-stone-taupe)]/55 bg-[color:var(--brand-charcoal)] p-8 text-center text-white shadow-[0_28px_80px_rgba(46,46,46,0.18)] sm:p-12"><CalendarCheck className="mx-auto mb-5 h-10 w-10 text-[color:var(--brand-sage-mist)]" /><h2 className="text-balance text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.35rem)", fontWeight: 760, lineHeight: 1.05 }}>Ready to build a smoother backend for your business?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">Book a discovery call or request a free workflow audit so SageStone can help identify what to delegate first.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><CtaButton location="homepage_cta" className="bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-charcoal)] hover:bg-white">Book a Discovery Call</CtaButton><CtaButton location="homepage_cta" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/18">Get a Free Workflow Audit</CtaButton></div></div></section>

      <HomeFaq />
    </>
  );
}
