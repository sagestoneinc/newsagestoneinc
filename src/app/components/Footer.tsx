import { Link } from "react-router";
import { Mail, Phone, Globe, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { trackCtaClick, trackEvent } from "../lib/analytics";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/#solutions" },
  { label: "How It Works", path: "/#process" },
  { label: "Who We Help", path: "/#industries" },
  { label: "FAQ", path: "/#faq" },
  { label: "Contact", path: "/contact" },
];

const solutionLinks = [
  { label: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { label: "Customer Support Outsourcing", path: "/customer-support-outsourcing" },
  { label: "E-Commerce Virtual Assistant", path: "/ecommerce-virtual-assistant" },
  { label: "Real Estate Virtual Assistant", path: "/real-estate-virtual-assistant" },
  { label: "Business Operations Support", path: "/business-operations-support" },
  { label: "Social Media Virtual Assistant", path: "/social-media-virtual-assistant" },
  { label: "Web Maintenance Support", path: "/web-maintenance-support" },
];

const legalLinks = [
  { label: "Terms of Service", path: "/terms" },
  { label: "Privacy Policy", path: "/privacy" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-mint)]/50 to-transparent" />
      <div aria-hidden="true" className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-[color:var(--brand-deep-sage)]/35 blur-3xl" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <BrandLogo variant="light" />
            </Link>
            <p className="text-white/58 text-[0.9375rem] leading-relaxed mb-6 max-w-sm">
              SageStone Inc
Virtual Assistant & Business Operations Support
Newark, Delaware
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@sagestoneinc.com" onClick={() => trackEvent("email_click", { location: "footer", target_url: "mailto:hello@sagestoneinc.com" })} className="flex items-center gap-3 text-white/58 hover:text-[color:var(--brand-mint)] transition-colors text-[0.875rem]">
                <Mail className="w-4 h-4 shrink-0" />
                hello@sagestoneinc.com
              </a>
              <a href="tel:+12149452234" onClick={() => trackEvent("phone_click", { location: "footer", target_url: "tel:+12149452234" })} className="flex items-center gap-3 text-white/58 hover:text-[color:var(--brand-mint)] transition-colors text-[0.875rem]">
                <Phone className="w-4 h-4 shrink-0" />
                +1 214-945-2234
              </a>
              <div className="flex items-center gap-3 text-white/58 text-[0.875rem]">
                <Globe className="w-4 h-4 shrink-0" />
                Newark, Delaware · Remote / Worldwide
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-[0.8125rem]">
              <a href="https://www.linkedin.com/company/sagestoneinc" className="text-white/58 hover:text-[color:var(--brand-mint)]">LinkedIn</a>
              <a href="https://www.instagram.com/sagestoneinc" className="text-white/58 hover:text-[color:var(--brand-mint)]">Instagram</a>
              <a href="https://clutch.co/profile/sagestone-inc" className="text-white/58 hover:text-[color:var(--brand-mint)]">Clutch profile</a>
              <a href="https://www.goodfirms.co/company/sagestone-inc" className="text-white/58 hover:text-[color:var(--brand-mint)]">GoodFirms profile</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white mb-4 text-[0.9375rem]" style={{ fontWeight: 600 }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/58 hover:text-[color:var(--brand-mint)] transition-colors text-[0.875rem]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-white mb-4 text-[0.9375rem]" style={{ fontWeight: 600 }}>Solutions</h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/58 hover:text-[color:var(--brand-mint)] transition-colors text-[0.875rem]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white mb-4 text-[0.9375rem]" style={{ fontWeight: 600 }}>Ready to Get Started?</h4>
            <p className="text-white/58 text-[0.875rem] leading-relaxed mb-5">
              Book a discovery call or request a workflow audit to identify what your team can delegate first.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--brand-mint)] text-[color:var(--brand-ink)] shadow-[0_18px_44px_rgba(191,230,200,0.18)] hover:bg-white transition-colors text-[0.875rem]"
              style={{ fontWeight: 500 }}
              onClick={() => trackCtaClick({ event_name: "contact_intent_click", location: "footer_cta", cta_text: "Book a Discovery Call", target_url: "/contact" })}
            >
              Book a Discovery Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/42 text-[0.8125rem]">
            &copy; {new Date().getFullYear()} SageStone Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/42 hover:text-white transition-colors text-[0.8125rem]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
