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
  HomeIcon,
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

const trustLine = "Admin, customer support, CRM, e-commerce, real estate, social media, and web maintenance support.";

const problemCards = [
  { icon: Inbox, title: "Missed follow-ups", description: "Important replies, reminders, and sales opportunities can slip when every task competes for founder attention." },
  { icon: Headphones, title: "Slow customer responses", description: "Delayed email, chat, and ticket replies can weaken trust and create avoidable friction for your customers." },
  { icon: UsersRound, title: "Overloaded founders and teams", description: "Admin work grows quietly until leaders are spending their best hours on coordination instead of growth." },
  { icon: LayoutDashboard, title: "Disorganized workflows", description: "Unclear ownership, scattered tools, and outdated records make everyday execution harder than it needs to be." },
];

const services = [
  { icon: ClipboardList, title: "Executive Virtual Assistant", path: "/virtual-assistant-services", description: "Inbox management, calendar coordination, research, data entry, scheduling, and daily admin support." },
  { icon: Headphones, title: "Customer Support", path: "/customer-support-virtual-assistant", description: "Email support, chat support, ticket management, customer follow-ups, and response organization." },
  { icon: PackageCheck, title: "E-commerce Operations", path: "/ecommerce-virtual-assistant", description: "Order processing, product updates, Shopify support, customer inquiries, returns coordination, and backend admin." },
  { icon: DatabaseZap, title: "CRM & GoHighLevel Support", path: "/gohighlevel-virtual-assistant", description: "CRM cleanup, contact updates, pipeline tracking, follow-up tasks, workflow assistance, and lead management." },
  { icon: HomeIcon, title: "Real Estate Admin Support", path: "/real-estate-virtual-assistant", description: "Listing coordination, lead follow-up, appointment scheduling, document organization, and client communication support." },
  { icon: MonitorCog, title: "Social Media & Web Maintenance", path: "/social-media-virtual-assistant", description: "Content scheduling, basic website updates, page checks, asset uploads, social posting, and online presence support." },
];

const whyPillars = [
  { title: "Reliable Communication", description: "Stay updated with clear communication, organized task tracking, and consistent support." },
  { title: "Process-Driven Support", description: "We help document, follow, and improve daily workflows so nothing gets lost." },
  { title: "Flexible Operations Help", description: "Get support for the exact tasks your business needs without committing to a full-time local hire." },
  { title: "Professional Client-Facing Support", description: "Our assistants can help with customer communication, admin coordination, and backend operations with care and professionalism." },
];

const process = [
  { title: "Discovery Call", description: "We learn about your business, tasks, tools, and current bottlenecks." },
  { title: "Workflow Review", description: "We identify what can be delegated and how support should be structured." },
  { title: "Setup & Onboarding", description: "We align on tools, communication, SOPs, access, and expectations." },
  { title: "Ongoing Support", description: "Your assistant helps execute tasks, organize operations, and keep work moving." },
];

const tools = ["Google Workspace", "Microsoft Office", "Slack", "Microsoft Teams", "Shopify", "WordPress", "GoHighLevel", "Salesforce", "HubSpot", "Canva", "Trello", "Asana", "Notion", "Airtable", "ClickUp", "Zendesk"];

const proofCards = [
  { title: "Faster response workflows", description: "Add client testimonial here." },
  { title: "Cleaner admin systems", description: "Add measurable client result here." },
  { title: "More time for revenue-focused work", description: "Add client industry or use case here." },
];

const faqs = [
  { q: "What kind of businesses does SageStone support?", a: "SageStone supports growing businesses that need help with admin work, customer support, CRM updates, e-commerce operations, real estate admin, social media support, and web maintenance." },
  { q: "Can SageStone work with our existing tools?", a: "Yes. SageStone can work with tools such as Google Workspace, Microsoft Office, Slack, Teams, Shopify, WordPress, GoHighLevel, HubSpot, Salesforce, Trello, Asana, Notion, and other common business platforms." },
  { q: "How does onboarding work?", a: "We start with a discovery call, review your workflows, identify tasks that can be delegated, and set up communication, access, SOPs, and task tracking before support begins." },
  { q: "Do you offer customer-facing support?", a: "Yes. SageStone can help with email support, chat support, customer follow-ups, ticket management, and organized client communication." },
  { q: "How do I get started?", a: "Book a free consultation so we can understand your needs and recommend the right support structure." },
];

function CtaButton({ children, location, variant = "primary", className = "" }: { children: string; location: string; variant?: "primary" | "secondary"; className?: string }) {
  const isSecondary = variant === "secondary";
  const href = isSecondary ? "/#services" : CALENDLY_URL;
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)] focus-visible:ring-offset-2 ${isSecondary ? "border border-[color:var(--brand-deep-sage)]/20 bg-white/72 text-[color:var(--brand-charcoal)] hover:bg-white hover:shadow-[0_18px_40px_rgba(35,81,59,0.10)]" : "bg-[color:var(--brand-deep-sage)] text-white shadow-[0_18px_46px_rgba(35,81,59,0.24)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-charcoal)]"} ${className}`;
  const content = <>{children}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></>;

  return isSecondary ? <Link to={href} className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: href })}>{content}</Link> : <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={() => trackCtaClick({ location, cta_text: children, target_url: href })}>{content}</a>;
}

function SectionIntro({ eyebrow, title, children, align = "center", tone = "light" }: { eyebrow: string; title: string; children?: string; align?: "center" | "left"; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";

  return <div className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}><p className={`mb-3 text-xs font-bold uppercase tracking-[0.24em] ${isDark ? "text-[color:var(--brand-mint)]" : "text-[color:var(--brand-deep-sage)]"}`}>{eyebrow}</p><h2 className={`text-balance ${isDark ? "text-white" : "text-[color:var(--brand-charcoal)]"}`} style={{ fontSize: "clamp(2rem, 4vw, 3.35rem)", fontWeight: 760, lineHeight: 1.04 }}>{title}</h2>{children && <p className={`mt-5 text-pretty text-[1.0625rem] leading-8 ${isDark ? "text-white/72" : "text-black/66"}`}>{children}</p>}</div>;
}

function HomeFaq() {
  const [openIdx, setOpenIdx] = useState(0);
  return <section id="faq" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="FAQ" title="Frequently Asked Questions" /><div className="mx-auto max-w-3xl space-y-3">{faqs.map((item, i) => <article key={item.q} className="overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-white/70 shadow-[0_12px_34px_rgba(46,46,46,0.04)]"><button className="flex w-full items-center justify-between gap-6 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)]" onClick={() => setOpenIdx(openIdx === i ? -1 : i)} aria-expanded={openIdx === i} aria-controls={`home-faq-${i}`}><span className="font-semibold text-[color:var(--brand-charcoal)]">{item.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--brand-deep-sage)] transition-transform ${openIdx === i ? "rotate-180" : ""}`} /></button>{openIdx === i && <p id={`home-faq-${i}`} className="px-5 pb-5 text-sm leading-7 text-black/64">{item.a}</p>}</article>)}</div></div></section>;
}

function WorkflowVisual() {
  return <div className="hero-dashboard premium-shell relative mx-auto max-w-xl rounded-[38px] p-5 backdrop-blur-xl" aria-label="SageStone operations support dashboard illustration"><div className="relative overflow-hidden rounded-[30px] bg-[color:var(--brand-ink)] p-5 text-white"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.2em] text-white/55">Operations desk</p><h2 className="mt-1 text-2xl font-semibold text-white">Delegation map</h2></div><ShieldCheck className="h-10 w-10 text-[color:var(--brand-mint)]" aria-hidden="true" /></div><div className="grid gap-3 sm:grid-cols-2">{["Admin", "Customer replies", "CRM", "E-commerce", "Real estate", "Web updates"].map((card, i) => <div key={card} className="float-card rounded-2xl border border-white/10 bg-white/[0.07] p-4" style={{ animationDelay: `${i * 100}ms` }}><CheckCircle2 className="mb-3 h-5 w-5 text-[color:var(--brand-mint)]" aria-hidden="true" /><p className="font-semibold">{card}</p><p className="mt-1 text-xs text-white/55">Assigned · tracked · organized</p></div>)}</div></div></div>;
}

export default function Home() {
  usePageMeta({
    title: "Virtual Assistant Services for Admin, Customer Support & Business Operations | SageStone Inc",
    description: "SageStone Inc provides reliable virtual assistant services for admin support, customer service, CRM management, e-commerce operations, social media, web maintenance, and business workflows.",
    keywords: "virtual assistant services, customer support virtual assistant, e-commerce virtual assistant, CRM support, GoHighLevel virtual assistant, business operations support",
    image: OG_IMAGE,
    imageAlt: "SageStone Inc logo mark",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "home-jsonld";
    script.text = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) });
    document.head.appendChild(script);
    return () => document.getElementById("home-jsonld")?.remove();
  }, []);

  return <>
    <section className="relative isolate overflow-hidden pt-8" style={{ background: "radial-gradient(circle at 82% 18%, rgba(191,230,200,.62), transparent 26rem), linear-gradient(135deg, var(--brand-ivory), var(--brand-cloud) 50%, #edf7e9)" }}><div aria-hidden="true" className="absolute inset-0 -z-10"><div className="ambient-orb absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[color:var(--brand-mint)]/65 blur-3xl" /><div className="ambient-orb ambient-orb-delayed absolute -left-36 bottom-0 h-[520px] w-[520px] rounded-full bg-[color:var(--brand-soft-beige)]/70 blur-3xl" /></div><div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24"><div className="reveal-up"><p className="mb-5 inline-flex rounded-full pill-glow border border-[color:var(--brand-deep-sage)]/18 bg-white/72 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-deep-sage)]">Premium remote operations support</p><h1 className="max-w-5xl text-balance text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2.85rem, 7vw, 6.4rem)", fontWeight: 780, lineHeight: 0.94 }}>Virtual Assistant Services for Growing Businesses</h1><p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-black/68 lg:text-xl">SageStone Inc helps business owners stay organized, respond faster, and keep daily operations running smoothly through reliable virtual assistants, customer support, CRM, e-commerce, and admin support.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><CtaButton location="homepage_hero">Book a Free Consultation</CtaButton><CtaButton location="homepage_hero" variant="secondary">View Our Services</CtaButton></div><p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-[color:var(--brand-charcoal)]/70">{trustLine}</p></div><WorkflowVisual /></div></section>

    <section id="problems" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Problems we solve" title="Your business should not be buried in daily tasks">When inboxes pile up, customer replies slow down, CRM records fall behind, and admin work takes over your day, growth becomes harder. SageStone gives you reliable remote support so your team can focus on revenue, clients, and operations that matter.</SectionIntro><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{problemCards.map((item) => <article key={item.title} className="premium-card rounded-[26px] border border-[color:var(--border)] bg-white/68 p-6"><item.icon className="mb-5 h-9 w-9 text-[color:var(--brand-deep-sage)]" aria-hidden="true" /><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-black/64">{item.description}</p></article>)}</div></div></section>

    <section id="services" className="py-20 lg:py-28" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Core services" title="What SageStone Can Take Off Your Plate" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <article key={service.title} className="premium-card rounded-[28px] border border-[color:var(--border)] bg-white/72 p-7"><div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[color:var(--brand-mint)] text-[color:var(--brand-deep-sage)]"><service.icon className="h-6 w-6" aria-hidden="true" /></div><h3 className="text-2xl font-semibold text-[color:var(--brand-charcoal)]">{service.title}</h3><p className="mt-3 min-h-[84px] text-sm leading-7 text-black/64">{service.description}</p><Link to={service.path} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-deep-sage)] hover:text-[color:var(--brand-charcoal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-olive-sage)]">Learn more about {service.title}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article>)}</div></div></section>

    <section id="why-sagestone" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Why SageStone" title="Why Businesses Choose SageStone" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{whyPillars.map((pillar) => <article key={pillar.title} className="rounded-[26px] border border-[color:var(--border)] bg-white/70 p-6 shadow-[0_20px_60px_rgba(46,46,46,0.05)]"><Sparkles className="mb-5 h-7 w-7 text-[color:var(--brand-deep-sage)]" aria-hidden="true" /><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{pillar.title}</h3><p className="mt-3 text-sm leading-7 text-black/64">{pillar.description}</p></article>)}</div></div></section>

    <section id="how-it-works" className="py-20 lg:py-28" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="How it works" title="How It Works" /><div className="relative grid gap-6 lg:grid-cols-4"><div aria-hidden="true" className="workflow-line absolute left-0 right-0 top-12 hidden h-px bg-[color:var(--brand-stone-taupe)] lg:block" />{process.map((step, index) => <article key={step.title} className="premium-card relative rounded-[26px] border border-[color:var(--border)] bg-white/78 p-6"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--brand-deep-sage)] text-lg font-bold text-white">{index + 1}</div><h3 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{step.title}</h3><p className="mt-3 text-sm leading-7 text-black/64">{step.description}</p></article>)}</div><div className="mt-10 text-center"><CtaButton location="how_it_works">Start With a Free Consultation</CtaButton></div></div></section>

    <section id="tools" className="py-20 lg:py-28" style={{ background: "var(--brand-cloud)" }}><div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8"><SectionIntro eyebrow="Tool-friendly support" title="Tools We Work With" /><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">{tools.map((tool) => <div key={tool} className="rounded-2xl border border-[color:var(--border)] bg-white/72 px-4 py-3 text-center text-sm font-semibold text-[color:var(--brand-charcoal)] shadow-[0_10px_30px_rgba(46,46,46,0.035)]">{tool}</div>)}</div></div></section>

    <section id="proof" className="py-20 lg:py-28" style={{ background: "var(--brand-ink)" }}><div className="mx-auto max-w-[1440px] px-4 text-white sm:px-6 lg:px-8"><SectionIntro eyebrow="Proof-ready" title="Built for Busy Business Owners" tone="dark">SageStone is structured for business owners who need clearer workflows, responsive support, and calmer daily operations.</SectionIntro><div className="grid gap-5 md:grid-cols-3">{proofCards.map((card) => <article key={card.title} className="rounded-[26px] border border-white/10 bg-white/[0.07] p-6"><CheckCircle2 className="mb-5 h-7 w-7 text-[color:var(--brand-mint)]" aria-hidden="true" /><h3 className="text-xl font-semibold text-white">{card.title}</h3><p className="mt-3 text-sm leading-7 text-white/62">{card.description}</p></article>)}</div></div></section>

    <HomeFaq />

    <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8" style={{ background: "var(--brand-ivory)" }}><div className="mx-auto max-w-[1180px] rounded-[34px] border border-[color:var(--brand-stone-taupe)]/55 bg-[color:var(--brand-ink)] p-8 text-center text-white shadow-[0_28px_80px_rgba(46,46,46,0.18)] sm:p-12"><CalendarCheck className="mx-auto mb-5 h-10 w-10 text-[color:var(--brand-mint)]" aria-hidden="true" /><h2 className="text-balance text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.35rem)", fontWeight: 760, lineHeight: 1.05 }}>Ready to get daily operations off your plate?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">Let SageStone help you organize admin work, customer support, CRM tasks, e-commerce operations, and business workflows so you can focus on growth.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><CtaButton location="homepage_final_cta" className="bg-[color:var(--brand-mint)] text-[color:var(--brand-charcoal)] hover:bg-white">Book a Free Consultation</CtaButton><CtaButton location="homepage_final_cta" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/18">View Services</CtaButton></div></div></section>
  </>;
}
