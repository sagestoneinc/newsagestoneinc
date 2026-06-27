import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { CalendarCheck, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { trackCtaClick } from "../lib/analytics";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/#solutions" },
  { label: "Industries", path: "/#industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Resources", path: "/blog" },
  { label: "Company", path: "/about" },
  { label: "Careers", path: "/#contact" },
  { label: "Contact", path: "/contact" },
];

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--border)] bg-[color:var(--brand-cloud)]/88 shadow-[0_18px_50px_rgba(23,28,24,0.08)] backdrop-blur-2xl"
          : "bg-[color:var(--brand-cloud)]/70 backdrop-blur-2xl"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <BrandLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-full px-3.5 py-2 text-[0.875rem] font-semibold text-[color:var(--brand-charcoal)]/72 transition-all duration-200 hover:bg-[color:var(--brand-sage-mist)]/70 hover:text-[color:var(--brand-deep-sage)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-deep-sage)] px-5 py-2.5 text-[0.875rem] text-white shadow-[0_14px_34px_rgba(35,81,59,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--brand-charcoal)]"
              style={{ fontWeight: 600 }}
              onClick={() => trackCtaClick({ event_name: "booking_intent_click", location: "header_desktop", cta_text: "Schedule Strategy Call", target_url: CALENDLY_URL })}
            >
              <CalendarCheck className="w-4 h-4" />
              Schedule Strategy Call
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden rounded-full p-2 text-[color:var(--brand-charcoal)]/72 transition-colors hover:bg-[color:var(--brand-sage-mist)]/70 hover:text-[color:var(--brand-deep-sage)]"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-[color:var(--border)] bg-[color:var(--brand-cloud)]/96 shadow-[0_24px_60px_rgba(23,28,24,0.12)] backdrop-blur-2xl">
          <nav id="mobile-navigation" className="max-w-[1440px] mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block rounded-2xl px-4 py-3 text-[0.9375rem] text-[color:var(--brand-charcoal)]/78 transition-colors hover:bg-[color:var(--brand-sage-mist)]/60"
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block rounded-full bg-[color:var(--brand-deep-sage)] px-5 py-3 text-center text-[0.9375rem] text-white shadow-[0_14px_34px_rgba(35,81,59,0.22)] transition-colors hover:bg-[color:var(--brand-charcoal)]"
              style={{ fontWeight: 600 }}
              onClick={() => trackCtaClick({ event_name: "booking_intent_click", location: "header_mobile", cta_text: "Schedule Strategy Call", target_url: CALENDLY_URL })}
            >
              Schedule Strategy Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
