import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { CalendarCheck, ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { trackCtaClick } from "../lib/analytics";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";

const serviceLinks = [
  { label: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { label: "Customer Support Outsourcing", path: "/customer-support-outsourcing" },
  { label: "E-Commerce Virtual Assistant", path: "/ecommerce-virtual-assistant" },
  { label: "Real Estate Virtual Assistant", path: "/real-estate-virtual-assistant" },
  { label: "Business Operations Support", path: "/business-operations-support" },
  { label: "Social Media Virtual Assistant", path: "/social-media-virtual-assistant" },
  { label: "Web Maintenance Support", path: "/web-maintenance-support" },
];

const industryLinks = [
  { label: "Real Estate", path: "/real-estate-virtual-assistant" },
  { label: "E-Commerce", path: "/ecommerce-virtual-assistant" },
  { label: "Agencies", path: "/virtual-assistant-services" },
  { label: "Startups", path: "/business-operations-support" },
];

function DesktopMenu({ label, links }: { label: string; links: Array<{ label: string; path: string }> }) {
  return (
    <div className="group relative">
      <button className="nav-link inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[color:var(--brand-charcoal)]/72 transition-all duration-200 hover:bg-[color:var(--brand-sage-mist)]/70 hover:text-[color:var(--brand-deep-sage)]">
        {label}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 rounded-3xl border border-[color:var(--border)] bg-[color:var(--brand-cloud)]/98 p-3 opacity-0 shadow-[0_24px_70px_rgba(23,28,24,0.14)] backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {links.map((link) => (
          <Link key={link.path} to={link.path} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[color:var(--brand-charcoal)]/76 transition-colors hover:bg-[color:var(--brand-sage-mist)]/60 hover:text-[color:var(--brand-deep-sage)]">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-[color:var(--border)] bg-[color:var(--brand-cloud)]/88 shadow-[0_18px_50px_rgba(23,28,24,0.08)] backdrop-blur-2xl" : "bg-[color:var(--brand-cloud)]/70 backdrop-blur-2xl"}`}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="SageStone Inc home"><BrandLogo /></Link>
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            <Link to="/" className="nav-link rounded-full px-3.5 py-2 text-[color:var(--brand-charcoal)]/72 transition-all duration-200 hover:bg-[color:var(--brand-sage-mist)]/70 hover:text-[color:var(--brand-deep-sage)]">Home</Link>
            <DesktopMenu label="Services" links={serviceLinks} />
            <DesktopMenu label="Industries" links={industryLinks} />
            <Link to="/about" className="nav-link rounded-full px-3.5 py-2 text-[color:var(--brand-charcoal)]/72 transition-all duration-200 hover:bg-[color:var(--brand-sage-mist)]/70 hover:text-[color:var(--brand-deep-sage)]">About</Link>
            <Link to="/contact" className="nav-link rounded-full px-3.5 py-2 text-[color:var(--brand-charcoal)]/72 transition-all duration-200 hover:bg-[color:var(--brand-sage-mist)]/70 hover:text-[color:var(--brand-deep-sage)]">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="cta-button hidden items-center gap-2 rounded-full bg-[color:var(--brand-deep-sage)] px-5 py-2.5 text-white shadow-[0_14px_34px_rgba(35,81,59,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--brand-charcoal)] sm:inline-flex" onClick={() => trackCtaClick({ event_name: "booking_intent_click", location: "header_desktop", cta_text: "Book a Free Consultation", target_url: CALENDLY_URL })}>
              <CalendarCheck className="h-4 w-4" /> Book a Call
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full p-2 text-[color:var(--brand-charcoal)]/72 transition-colors hover:bg-[color:var(--brand-sage-mist)]/70 hover:text-[color:var(--brand-deep-sage)] xl:hidden" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--brand-cloud)]/96 shadow-[0_24px_60px_rgba(23,28,24,0.12)] backdrop-blur-2xl xl:hidden">
          <nav id="mobile-navigation" className="mx-auto max-h-[calc(100vh-72px)] max-w-[1440px] space-y-4 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
            <Link to="/" className="block rounded-2xl px-4 py-3 text-base font-semibold text-[color:var(--brand-charcoal)]/78 hover:bg-[color:var(--brand-sage-mist)]/60">Home</Link>
            <div><p className="px-4 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-deep-sage)]">Services</p>{serviceLinks.map((link) => <Link key={link.path} to={link.path} className="block rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--brand-charcoal)]/78 hover:bg-[color:var(--brand-sage-mist)]/60">{link.label}</Link>)}</div>
            <div><p className="px-4 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-deep-sage)]">Industries</p>{industryLinks.map((link) => <Link key={link.path} to={link.path} className="block rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--brand-charcoal)]/78 hover:bg-[color:var(--brand-sage-mist)]/60">{link.label}</Link>)}</div>
            <Link to="/about" className="block rounded-2xl px-4 py-3 text-base font-semibold text-[color:var(--brand-charcoal)]/78 hover:bg-[color:var(--brand-sage-mist)]/60">About</Link>
            <Link to="/contact" className="block rounded-2xl px-4 py-3 text-base font-semibold text-[color:var(--brand-charcoal)]/78 hover:bg-[color:var(--brand-sage-mist)]/60">Contact</Link>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="mt-3 block rounded-full bg-[color:var(--brand-deep-sage)] px-5 py-3 text-center text-base font-semibold text-white shadow-[0_14px_34px_rgba(35,81,59,0.22)] hover:bg-[color:var(--brand-charcoal)]" onClick={() => trackCtaClick({ event_name: "booking_intent_click", location: "header_mobile", cta_text: "Book a Free Consultation", target_url: CALENDLY_URL })}>Book a Free Consultation</a>
          </nav>
        </div>
      )}
    </header>
  );
}
