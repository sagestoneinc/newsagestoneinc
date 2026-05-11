import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { trackCtaClick } from "../lib/analytics";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  // { label: "Our Team", path: "/team" }, // Temporarily disabled
  { label: "Why SageStone?", path: "/why-sagestone" },
  { label: "Services", path: "/virtual-assistant-services" },
  { label: "FAQs", path: "/faqs" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
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
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
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
                className={`px-3 py-2 rounded-lg text-[0.875rem] transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-sage-600 bg-sage-50"
                    : "text-stone-600 hover:text-sage-600 hover:bg-sage-50/60"
                }`}
                style={{ fontWeight: location.pathname === link.path ? 500 : 400 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors duration-200 text-[0.875rem] shadow-sm"
              style={{ fontWeight: 500 }}
              onClick={() => trackCtaClick({ event_name: "contact_intent_click", location: "header_desktop", cta_text: "Book a Free Consultation", target_url: "/contact" })}
            >
              Book a Free Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
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
                className={`block px-4 py-3 rounded-lg text-[0.9375rem] transition-colors ${
                  location.pathname === link.path
                    ? "text-sage-600 bg-sage-50"
                    : "text-stone-700 hover:bg-stone-50"
                }`}
                style={{ fontWeight: location.pathname === link.path ? 500 : 400 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center mt-3 px-5 py-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors text-[0.9375rem]"
              style={{ fontWeight: 500 }}
              onClick={() => trackCtaClick({ event_name: "contact_intent_click", location: "header_mobile", cta_text: "Book a Free Consultation", target_url: "/contact" })}
            >
              Book a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
