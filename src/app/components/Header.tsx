import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { CalendarCheck, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { trackCtaClick } from "../lib/analytics";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";

const navLinks = [
  { label: "Services", path: "/#services" },
  { label: "How It Works", path: "/#how-it-works" },
  { label: "Who We Help", path: "/#who-we-help" },
  { label: "FAQ", path: "/#faq" },
  { label: "Contact", path: "/#contact" },
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
          ? "bg-white/82 backdrop-blur-xl shadow-[0_10px_34px_rgba(46,46,46,0.08)]"
          : "bg-white/72 backdrop-blur-xl"
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
                className="rounded-full px-3 py-2 text-[0.875rem] font-medium text-stone-600 transition-colors duration-200 hover:bg-sage-50/80 hover:text-sage-700"
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[color:var(--brand-charcoal)] text-white rounded-full hover:bg-[color:var(--brand-deep-sage)] transition-colors duration-200 text-[0.875rem] shadow-sm"
              style={{ fontWeight: 600 }}
              onClick={() => trackCtaClick({ event_name: "booking_intent_click", location: "header_desktop", cta_text: "Book a Discovery Call", target_url: CALENDLY_URL })}
            >
              <CalendarCheck className="w-4 h-4" />
              Book a Discovery Call
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-stone-200 shadow-lg">
          <nav className="max-w-[1440px] mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block rounded-lg px-4 py-3 text-[0.9375rem] text-stone-700 transition-colors hover:bg-stone-50"
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="block text-center mt-3 px-5 py-3 bg-[color:var(--brand-charcoal)] text-white rounded-full hover:bg-[color:var(--brand-deep-sage)] transition-colors text-[0.9375rem]"
              style={{ fontWeight: 600 }}
              onClick={() => trackCtaClick({ event_name: "booking_intent_click", location: "header_mobile", cta_text: "Book a Discovery Call", target_url: CALENDLY_URL })}
            >
              Book a Discovery Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
