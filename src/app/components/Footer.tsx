import { Link } from "react-router";
import { Mail, Phone, Globe, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { trackCtaClick, trackEvent } from "../lib/analytics";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/#services" },
  { label: "How It Works", path: "/#how-it-works" },
  { label: "Who We Help", path: "/#who-we-help" },
  { label: "FAQ", path: "/#faq" },
  { label: "Contact", path: "/#contact" },
];

const solutionLinks = [
  { label: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { label: "Customer Support", path: "/customer-support" },
  { label: "E-commerce Operations", path: "/ecommerce-operations-support" },
  { label: "CRM & Admin Support", path: "/crm-admin-support" },
  { label: "Social Media Support", path: "/social-media-support" },
  { label: "Web Maintenance Support", path: "/web-maintenance-support" },
];

const legalLinks = [
  { label: "Terms of Service", path: "/terms" },
  { label: "Privacy Policy", path: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-charcoal)] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <BrandLogo variant="light" />
            </Link>
            <p className="text-stone-400 text-[0.9375rem] leading-relaxed mb-6 max-w-sm">
              Reliable virtual assistant, customer support, and business operations support for growing teams.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@sagestoneinc.com" onClick={() => trackEvent("email_click", { location: "footer", target_url: "mailto:hello@sagestoneinc.com" })} className="flex items-center gap-3 text-stone-400 hover:text-sage-400 transition-colors text-[0.875rem]">
                <Mail className="w-4 h-4 shrink-0" />
                hello@sagestoneinc.com
              </a>
              <a href="tel:+12149452234" onClick={() => trackEvent("phone_click", { location: "footer", target_url: "tel:+12149452234" })} className="flex items-center gap-3 text-stone-400 hover:text-sage-400 transition-colors text-[0.875rem]">
                <Phone className="w-4 h-4 shrink-0" />
                +1 214-945-2234
              </a>
              <div className="flex items-center gap-3 text-stone-400 text-[0.875rem]">
                <Globe className="w-4 h-4 shrink-0" />
                Remote / Worldwide
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white mb-4 text-[0.9375rem]" style={{ fontWeight: 600 }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-stone-400 hover:text-sage-400 transition-colors text-[0.875rem]">
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
                  <Link to={link.path} className="text-stone-400 hover:text-sage-400 transition-colors text-[0.875rem]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white mb-4 text-[0.9375rem]" style={{ fontWeight: 600 }}>Ready to Get Started?</h4>
            <p className="text-stone-400 text-[0.875rem] leading-relaxed mb-5">
              Book a discovery call or request a workflow audit to identify what your team can delegate first.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors text-[0.875rem]"
              style={{ fontWeight: 500 }}
              onClick={() => trackCtaClick({ event_name: "contact_intent_click", location: "footer_cta", cta_text: "Book a Discovery Call", target_url: "/contact" })}
            >
              Book a Discovery Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-[0.8125rem]">
            &copy; {new Date().getFullYear()} SageStone Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-stone-500 hover:text-stone-300 transition-colors text-[0.8125rem]"
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
