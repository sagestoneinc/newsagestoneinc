import { Link } from "react-router";
import { ArrowUpRight, CalendarCheck, Globe, Mail } from "lucide-react";
import { BrandLogo } from "../BrandLogo";
import { trackCtaClick, trackEvent } from "../../lib/analytics";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";

const services = [
  { label: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { label: "Customer Support", path: "/customer-support-virtual-assistant" },
  { label: "E-commerce Operations", path: "/ecommerce-virtual-assistant" },
  { label: "Real Estate Admin", path: "/real-estate-virtual-assistant" },
  { label: "GoHighLevel Support", path: "/gohighlevel-virtual-assistant" },
  { label: "Social Media Support", path: "/social-media-virtual-assistant" },
  { label: "Web Maintenance", path: "/web-maintenance-services" },
  { label: "Business Operations", path: "/business-operations-support" },
];

const navigation = [
  { label: "Services", path: "/#services" },
  { label: "How It Works", path: "/#how-it-works" },
  { label: "Why SageStone", path: "/#why-sagestone" },
  { label: "Tools", path: "/#tools" },
  { label: "FAQ", path: "/#faq" },
  { label: "Contact", path: "/#contact" },
];

export function BrandFooter() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-mint)]/45 to-transparent" />
      <div aria-hidden="true" className="absolute -right-36 top-10 h-96 w-96 rounded-full bg-[color:var(--brand-deep-sage)]/35 blur-3xl" />
      <div aria-hidden="true" className="absolute -left-36 bottom-0 h-80 w-80 rounded-full bg-[color:var(--brand-soft-beige)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2" aria-label="SageStone Inc home">
              <BrandLogo variant="light" />
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-white/62">
              Reliable virtual assistant, customer support, and business operations support for growing teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-mint)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-ink)] transition-colors hover:bg-white"
                onClick={() => trackCtaClick({ location: "footer_primary", cta_text: "Book a Discovery Call", target_url: CALENDLY_URL })}
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Discovery Call
              </a>
              <Link
                to="/free-workflow-assessment"
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.12]"
                onClick={() => trackCtaClick({ location: "footer_secondary", cta_text: "Get a Free Workflow Audit", target_url: "/free-workflow-assessment" })}
              >
                Get a Free Workflow Audit
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/42">Main services</p>
            <ul className="grid gap-2.5">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-sm text-white/62 transition-colors hover:text-[color:var(--brand-mint)]">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/42">Navigation</p>
            <ul className="grid gap-2.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-white/62 transition-colors hover:text-[color:var(--brand-mint)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/42">Contact</p>
            <div className="space-y-3 text-sm text-white/62">
              <a href="mailto:hello@sagestoneinc.com" onClick={() => trackEvent("email_click", { location: "footer", target_url: "mailto:hello@sagestoneinc.com" })} className="flex items-center gap-3 transition-colors hover:text-[color:var(--brand-mint)]">
                <Mail className="h-4 w-4" />
                hello@sagestoneinc.com
              </a>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4" />
                Remote / Worldwide
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/42">&copy; {new Date().getFullYear()} SageStone Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-xs text-white/42 transition-colors hover:text-white">Terms</Link>
            <Link to="/privacy" className="text-xs text-white/42 transition-colors hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
