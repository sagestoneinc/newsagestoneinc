import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  HeartPulse,
  HomeIcon,
  Landmark,
  MailCheck,
  Megaphone,
  MessageSquareText,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackCtaClick } from "../lib/analytics";

const SITE_URL = "https://www.sagestoneinc.com";
const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";
const OG_IMAGE = `${SITE_URL}/logo-mark.svg`;

const ecosystem = ["Google Workspace", "Microsoft", "Slack", "ClickUp", "Asana", "HubSpot", "Yardi", "AppFolio", "QuickBooks", "Teams"];
const workflowNodes = ["Executive Support", "Recruitment", "Property Management", "Marketing", "Customer Support", "Reporting", "Calendar", "CRM", "Operations"];

const problemCards = [
  { title: "Capacity disappears into coordination.", description: "Leaders spend their best hours approving, reminding, chasing, scheduling, and repairing workflows instead of moving the business forward." },
  { title: "Internal hiring is slower than growth.", description: "Recruiting, training, payroll, benefits, and management overhead make every new operations role a long-term commitment." },
  { title: "Freelancers create inconsistent execution.", description: "Fragmented handoffs and undocumented context make quality dependent on the person instead of the operating system." },
  { title: "Systems take years to mature.", description: "SOPs, reporting, tool hygiene, and accountability rhythms rarely get built while the team is already at capacity." },
];

const solutions = [
  { icon: CalendarDays, title: "Executive Support", path: "/virtual-assistant-services", description: "Calendar, inbox, travel, research, briefing notes, and proactive founder support." },
  { icon: HomeIcon, title: "Real Estate Virtual Assistant Services", path: "/real-estate-virtual-assistant", description: "CRM updates, listing coordination, transaction tasks, client follow-up, and agent admin support." },
  { icon: Megaphone, title: "Social Media Virtual Assistant", path: "/social-media-virtual-assistant", description: "Content calendars, approved post scheduling, engagement tracking, asset organization, and reporting support." },
  { icon: UsersRound, title: "Business Operations Support", path: "/business-operations-support", description: "SOPs, CRM hygiene, reporting, meeting notes, trackers, project coordination, and back-office follow-through." },
  { icon: FileText, title: "Web Maintenance Support", path: "/web-maintenance-support", description: "Website content updates, landing page edits, form checks, link reviews, QA, and publishing coordination." },
  { icon: MessageSquareText, title: "Customer Support Outsourcing", path: "/customer-support-outsourcing", description: "Email, chat, ticket triage, scripted responses, escalation paths, and customer follow-through." },
  { icon: Target, title: "E-Commerce Virtual Assistant Services", path: "/ecommerce-virtual-assistant", description: "Shopify support, orders, returns, product updates, customer inboxes, and store operations tasks." },
  { icon: ClipboardCheck, title: "Virtual Assistant Services", path: "/virtual-assistant-services", description: "Inbox, calendar, admin, research, CRM updates, reporting, documentation, and recurring coordination." },
];

const industries = [
  { icon: HomeIcon, title: "Virtual Assistant Services for Real Estate Agents", path: "/real-estate-virtual-assistant", text: "CRM updates, lead follow-up, listings, transaction tasks, and client communication support." },
  { icon: BarChart3, title: "Virtual Assistant Services for E-Commerce Brands", path: "/ecommerce-virtual-assistant", text: "Orders, returns, product data, customer tickets, vendor coordination, and store operations reporting." },
  { icon: Sparkles, title: "Virtual Assistant Services for Agencies", path: "/virtual-assistant-services", text: "Client operations, production tracking, reporting, inbox support, and campaign administration." },
  { icon: Zap, title: "Virtual Assistant Services for Startups", path: "/business-operations-support", text: "Founder leverage, customer operations, documentation, CRM hygiene, and weekly metrics support." },
];

const comparison = [
  { metric: "Time to capacity", traditional: "6–12 weeks of recruiting and onboarding", sagestone: "Structured support can begin in days" },
  { metric: "Cost profile", traditional: "Salary, benefits, tools, management time", sagestone: "Flexible capacity aligned to operational need" },
  { metric: "Operational quality", traditional: "Depends on one hire and limited documentation", sagestone: "SOP-led execution, QA, and continuous improvement" },
  { metric: "Flexibility", traditional: "Fixed role, fixed cost, fixed skill set", sagestone: "Adaptable team coverage across workflows" },
  { metric: "Risk", traditional: "Turnover can erase context", sagestone: "Shared systems preserve process memory" },
];

const process = ["Discovery", "Planning", "Matching", "Training", "Launch", "Continuous Improvement"].map((title, index) => ({
  title,
  description: [
    "We map the work, the business context, and the outcomes worth protecting.",
    "We define priorities, success measures, communication rhythms, and operating standards.",
    "We align dedicated support capacity to your tools, industry, and workflow complexity.",
    "We document SOPs, access, escalation paths, QA expectations, and reporting cadence.",
    "Your team begins with focused workflows, transparent ownership, and tight feedback loops.",
    "We measure, refine, and improve capacity as your business evolves.",
  ][index],
}));

const caseStudies = [
  { metric: "38 hrs", label: "saved per month", title: "Founder regained strategic capacity", description: "Executive support, inbox triage, and recurring reporting removed low-leverage work from leadership." },
  { metric: "42%", label: "faster responses", title: "Customer operations became predictable", description: "Ticket routing, response templates, and daily QA improved speed without compromising tone." },
  { metric: "91%", label: "workflow completion", title: "Property admin stabilized at scale", description: "Work order tracking, vendor follow-up, and tenant communication reduced operational noise." },
];

const software = ["Yardi", "AppFolio", "QuickBooks", "HubSpot", "Salesforce", "ClickUp", "Asana", "Slack", "Teams", "Google Workspace", "Canva", "Figma"];
const insights = ["Operations", "Business Growth", "Hiring", "Property Management", "Leadership", "AI", "Remote Teams"];
const faqs = [
  { q: "Is SageStone a virtual assistant agency?", a: "SageStone provides dedicated operational capacity. Assistants may be part of the model, but the offer is broader: documented workflows, communication cadence, quality standards, and continuous improvement." },
  { q: "How quickly can support begin?", a: "After discovery and planning, focused workflows can often launch within days. More complex operating models may require a longer setup period to protect quality and access control." },
  { q: "Can SageStone work inside our existing tools?", a: "Yes. SageStone is designed to work across common business systems including Google Workspace, Microsoft, Slack, Teams, HubSpot, Yardi, AppFolio, QuickBooks, Asana, and ClickUp." },
  { q: "What makes this different from hiring internally?", a: "Internal hiring creates fixed capacity and management overhead. SageStone gives you flexible operational support, documented process, QA, and cross-functional coverage without growing payroll." },
  { q: "Do you support enterprise clients?", a: "Yes. The operating model is built for professional handoffs, access discipline, consistent communication, and measurable outcomes for established and fast-growing teams." },
];

function CtaButton({ children, location, variant = "primary", href, className = "" }: { children: string; location: string; variant?: "primary" | "secondary"; href?: string; className?: string }) {
  const isSecondary = variant === "secondary";
  const target = href ?? (isSecondary ? "/#solutions" : CALENDLY_URL);
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)] focus-visible:ring-offset-2 ${isSecondary ? "border border-[color:var(--brand-deep-sage)]/18 bg-white/68 text-[color:var(--brand-charcoal)] hover:bg-white hover:shadow-[0_18px_40px_rgba(35,81,59,0.10)]" : "bg-[color:var(--brand-deep-sage)] text-white shadow-[0_18px_46px_rgba(35,81,59,0.22)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-charcoal)]"} ${className}`;
  const content = <>{children}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" /></>;
  return target.startsWith("/") ? <Link to={target} className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: target })}>{content}</Link> : <a href={target} target="_blank" rel="noreferrer" className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: target })}>{content}</a>;
}

function SectionIntro({ eyebrow, title, children, dark = false }: { eyebrow: string; title: string; children?: string; dark?: boolean }) {
  return <div className="mx-auto mb-12 max-w-3xl text-center"><p className={`mb-3 text-xs font-bold uppercase tracking-[0.24em] ${dark ? "text-[color:var(--brand-mint)]" : "text-[color:var(--brand-deep-sage)]"}`}>{eyebrow}</p><h2 className={`text-balance ${dark ? "text-white" : "text-[color:var(--brand-charcoal)]"}`} style={{ fontSize: "clamp(2.25rem, 4.6vw, 4.25rem)", fontWeight: 760, lineHeight: 0.98 }}>{title}</h2>{children && <p className={`mt-5 text-pretty text-lg leading-8 ${dark ? "text-white/68" : "text-black/64"}`}>{children}</p>}</div>;
}

function OperationsDashboard() {
  return <div className="premium-shell relative mx-auto max-w-2xl rounded-[2rem] p-4 lg:p-5" aria-label="Animated operations dashboard showing connected SageStone workflows"><div className="relative overflow-hidden rounded-[1.65rem] bg-[color:var(--brand-ink)] p-5 text-white"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.22em] text-white/45">SageStone operating layer</p><h2 className="mt-1 text-2xl font-semibold text-white">Connected capacity</h2></div><div className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-xs text-white/62">Live workflows</div></div><div className="relative grid gap-3 sm:grid-cols-3"><div aria-hidden="true" className="operation-beam absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[color:var(--brand-mint)]/70 to-transparent" /><div aria-hidden="true" className="operation-beam operation-beam-delay absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[color:var(--brand-mint)]/70 to-transparent" />{workflowNodes.map((node, index) => <div key={node} className="float-card relative rounded-2xl border border-white/10 bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur" style={{ animationDelay: `${index * 90}ms` }}><Network className="mb-3 h-4 w-4 text-[color:var(--brand-mint)]" aria-hidden="true" /><p className="text-sm font-semibold">{node}</p><p className="mt-1 text-xs text-white/45">Owned · measured</p></div>)}</div></div></div>;
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const schema = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }), []);
  useEffect(() => { const script = document.createElement("script"); script.type = "application/ld+json"; script.id = "home-faq-jsonld"; script.text = JSON.stringify(schema); document.head.appendChild(script); return () => document.getElementById("home-faq-jsonld")?.remove(); }, [schema]);
  return <section id="faq" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="FAQ" title="Questions leaders ask before trusting us with operations" /><div className="mx-auto max-w-3xl space-y-3">{faqs.map((item, i) => <article key={item.q} className="overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-white/72 shadow-[0_12px_34px_rgba(46,46,46,0.04)]"><button className="flex w-full items-center justify-between gap-6 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)]" onClick={() => setOpenIdx(openIdx === i ? -1 : i)} aria-expanded={openIdx === i} aria-controls={`home-faq-${i}`}><span className="font-semibold text-[color:var(--brand-charcoal)]">{item.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--brand-deep-sage)] transition-transform ${openIdx === i ? "rotate-180" : ""}`} aria-hidden="true" /></button>{openIdx === i && <p id={`home-faq-${i}`} className="px-5 pb-5 text-sm leading-7 text-black/64">{item.a}</p>}</article>)}</div></div></section>;
}

export default function Home() {
  usePageMeta({ title: "Virtual Assistant Services & Operations Support | SageStone Inc", description: "SageStone Inc provides virtual assistant services, customer support outsourcing, e-commerce support, and business operations help for growing companies.", keywords: "virtual assistant services, customer support outsourcing, ecommerce virtual assistant, real estate virtual assistant, business operations support, social media virtual assistant, web maintenance support", image: OG_IMAGE, imageAlt: "SageStone Inc logo mark" });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "home-organization-jsonld";
    script.text = JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "SageStone Inc", url: SITE_URL, logo: OG_IMAGE, email: "hello@sagestoneinc.com", telephone: "+1-214-945-2234", address: { "@type": "PostalAddress", addressLocality: "Newark", addressRegion: "DE", addressCountry: "US" }, areaServed: "Worldwide", description: "Virtual Assistant & Business Operations Support for growing businesses, startups, agencies, real estate teams, and e-commerce brands.", sameAs: ["https://www.linkedin.com/company/sagestoneinc", "https://www.instagram.com/sagestoneinc", "https://clutch.co/profile/sagestone-inc", "https://www.goodfirms.co/company/sagestone-inc"] });
    document.head.appendChild(script);
    return () => document.getElementById("home-organization-jsonld")?.remove();
  }, []);

  return <>
    <section className="relative isolate overflow-hidden pt-8" style={{ background: "radial-gradient(circle at 80% 12%, rgba(221,234,215,.82), transparent 30rem), radial-gradient(circle at 12% 42%, rgba(239,228,209,.72), transparent 26rem), linear-gradient(135deg, var(--brand-cloud), var(--brand-ivory) 58%, #eef4e9)" }}><div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24"><div className="reveal-up"><p className="mb-5 inline-flex rounded-full pill-glow border border-[color:var(--brand-deep-sage)]/16 bg-white/72 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-deep-sage)]">Premium operations partner</p><h1 className="max-w-5xl text-balance text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(3.2rem, 7.2vw, 7rem)", fontWeight: 780, lineHeight: 0.9 }}>Virtual Assistant Services & Business Operations Support for Growing Teams</h1><p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-black/68 lg:text-xl">SageStone Inc helps growing businesses, startups, agencies, real estate teams, and e-commerce brands delegate administrative work, customer support, web maintenance, social media coordination, and day-to-day business operations without adding payroll.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><CtaButton location="homepage_hero">Book a Free Consultation</CtaButton><CtaButton location="homepage_hero" variant="secondary">Explore Our Services</CtaButton></div><div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm"><div><strong className="block text-2xl text-[color:var(--brand-charcoal)]">6</strong><span className="text-black/55">launch phases</span></div><div><strong className="block text-2xl text-[color:var(--brand-charcoal)]">8</strong><span className="text-black/55">solution teams</span></div><div><strong className="block text-2xl text-[color:var(--brand-charcoal)]">AA</strong><span className="text-black/55">accessibility mindset</span></div></div></div><OperationsDashboard /></div></section>

    <section aria-labelledby="trusted-by" className="border-y border-[color:var(--border)] bg-[color:var(--brand-cloud)]/80 py-10"><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><h2 id="trusted-by" className="sr-only">Software ecosystems SageStone works with</h2><p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--brand-deep-sage)]/70">Trusted inside the operating systems modern teams already use</p><div className="marquee-mask overflow-hidden"><div className="trust-marquee flex min-w-max gap-3">{[...ecosystem, ...ecosystem].map((logo, index) => <span key={`${logo}-${index}`} className="rounded-full border border-[color:var(--border)] bg-white/72 px-5 py-3 text-sm font-semibold text-[color:var(--brand-charcoal)]/72 shadow-[0_8px_24px_rgba(23,28,24,0.04)]">{logo}</span>)}</div></div></div></section>

    <section id="problem" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="The problem" title="Growth breaks when operations become fragmented.">Hiring internally is expensive. Managing freelancers is inconsistent. Building operational systems takes years. SageStone gives you calm, accountable capacity before the back office becomes the bottleneck.</SectionIntro><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{problemCards.map((item) => <article key={item.title} className="premium-card rounded-[28px] border border-[color:var(--border)] bg-white/70 p-6"><ShieldCheck className="mb-5 h-8 w-8 text-[color:var(--brand-deep-sage)]" aria-hidden="true" /><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-black/64">{item.description}</p></article>)}</div></div></section>

    <section id="solutions" className="py-20 lg:py-28" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Services We Provide" title="Virtual assistant and operations support services for growing teams.">Explore SageStone services with descriptive internal links to the support model that fits your current bottleneck.</SectionIntro><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{solutions.map((solution) => <article key={solution.title} className="premium-card group rounded-[28px] border border-[color:var(--border)] bg-white/74 p-6"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-deep-sage)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"><solution.icon className="h-6 w-6" aria-hidden="true" /></div><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{solution.title}</h3><p className="mt-3 min-h-[96px] text-sm leading-7 text-black/64">{solution.description}</p><Link to={solution.path} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-deep-sage)] hover:text-[color:var(--brand-charcoal)]">{solution.title} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article>)}</div></div></section>

    <section id="industries" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Industries We Support" title="Industry-focused virtual assistant support.">These long-tail service paths help buyers find support by industry and give SageStone room to build dedicated industry pages over time.</SectionIntro><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <Link key={industry.title} to={industry.path} className="premium-card rounded-[26px] border border-[color:var(--border)] bg-white/68 p-5"><industry.icon className="mb-4 h-7 w-7 text-[color:var(--brand-deep-sage)]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[color:var(--brand-charcoal)]">{industry.title}</h3><p className="mt-2 text-sm leading-6 text-black/62">{industry.text}</p></Link>)}</div></div></section>

    <section id="comparison" className="py-20 lg:py-28" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Why Businesses Choose SageStone" title="Flexible support with process, proof, and room to grow.">Dedicated virtual assistant support, remote capacity for growing teams, experience across admin, customer support, e-commerce, and operations, process-driven onboarding, and support tailored to your tools and workflows.</SectionIntro><div className="overflow-hidden rounded-[30px] border border-[color:var(--border)] bg-white/76 shadow-[0_24px_70px_rgba(23,28,24,0.08)]"><div className="grid grid-cols-3 bg-[color:var(--brand-ink)] px-5 py-4 text-sm font-semibold text-white"><span>Decision point</span><span>Traditional hiring</span><span>SageStone</span></div>{comparison.map((row) => <div key={row.metric} className="grid grid-cols-1 gap-3 border-t border-[color:var(--border)] px-5 py-5 text-sm md:grid-cols-3 md:gap-6"><strong className="text-[color:var(--brand-charcoal)]">{row.metric}</strong><span className="text-black/58">{row.traditional}</span><span className="flex gap-2 font-semibold text-[color:var(--brand-deep-sage)]"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{row.sagestone}</span></div>)}</div></div></section>

    <section id="process" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Process" title="A measured path from delegation to operating rhythm." /><div className="relative mx-auto max-w-3xl"><div aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px bg-[color:var(--brand-stone-taupe)]" />{process.map((step, index) => <article key={step.title} className="relative mb-5 ml-16 rounded-[26px] border border-[color:var(--border)] bg-white/72 p-6 shadow-[0_14px_40px_rgba(23,28,24,0.05)]"><div className="absolute -left-[4.55rem] top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-deep-sage)] text-sm font-bold text-white shadow-[0_12px_30px_rgba(35,81,59,0.22)]">{index + 1}</div><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{step.title}</h3><p className="mt-2 text-sm leading-7 text-black/64">{step.description}</p></article>)}</div></div></section>

    <section id="case-studies" className="py-20 lg:py-28" style={{ background: "var(--brand-ink)" }}><div className="mx-auto max-w-[1440px] px-4 text-white sm:px-6 lg:px-8"><SectionIntro eyebrow="Case studies" title="Operational outcomes that compound." dark>Representative outcomes from focused operations work: clearer ownership, faster response loops, and measurable executive leverage.</SectionIntro><div className="grid gap-5 md:grid-cols-3">{caseStudies.map((study) => <article key={study.title} className="rounded-[30px] border border-white/10 bg-white/[0.07] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"><p className="text-5xl font-semibold tracking-tight text-[color:var(--brand-mint)]">{study.metric}</p><p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/42">{study.label}</p><h3 className="mt-8 text-2xl font-semibold text-white">{study.title}</h3><p className="mt-3 text-sm leading-7 text-white/62">{study.description}</p></article>)}</div></div></section>

    <section id="software" className="py-20 lg:py-28" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Software expertise" title="Your tools stay in place. Your operations get stronger." /><div className="marquee-mask overflow-hidden"><div className="trust-marquee flex min-w-max gap-3">{[...software, ...software].map((tool, index) => <span key={`${tool}-${index}`} className="rounded-2xl border border-[color:var(--border)] bg-white/75 px-5 py-4 text-sm font-semibold text-[color:var(--brand-charcoal)]/72">{tool}</span>)}</div></div></div></section>

    <section id="insights" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Insights" title="Thinking for leaders building calmer operations." /><div className="grid gap-4 md:grid-cols-3">{insights.map((topic) => <Link key={topic} to="/blog" className="premium-card rounded-[24px] border border-[color:var(--border)] bg-white/72 p-6"><BookOpen className="mb-5 h-7 w-7 text-[color:var(--brand-deep-sage)]" aria-hidden="true" /><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{topic}</h3><p className="mt-2 text-sm leading-6 text-black/62">Practical guidance for improving capacity, quality, and operating cadence.</p></Link>)}</div></div></section>

    <FaqSection />

    <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1180px] rounded-[34px] border border-[color:var(--brand-stone-taupe)]/55 bg-[color:var(--brand-ink)] p-8 text-center text-white shadow-[0_28px_80px_rgba(46,46,46,0.18)] sm:p-12"><MailCheck className="mx-auto mb-5 h-10 w-10 text-[color:var(--brand-mint)]" aria-hidden="true" /><h2 className="text-balance text-white" style={{ fontSize: "clamp(2.2rem, 4.8vw, 4.5rem)", fontWeight: 760, lineHeight: 0.98 }}>Build the operating capacity your next stage requires.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">Start with a strategy call. We will identify the workflows to stabilize first, the capacity model that fits, and the operating rhythm that protects quality.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><CtaButton location="homepage_final_cta" className="bg-[color:var(--brand-mint)] text-[color:var(--brand-charcoal)] hover:bg-white">Book a Free Consultation</CtaButton><CtaButton location="homepage_final_cta" variant="secondary" href="/solutions" className="border-white/20 bg-white/10 text-white hover:bg-white/18">Explore Our Services</CtaButton></div></div></section>
  </>;
}
