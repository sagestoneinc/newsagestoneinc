import { Link } from "react-router";
import { BrandLogo } from "../BrandLogo";

const services = [
  { label: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { label: "Customer Support Outsourcing", path: "/customer-support-outsourcing" },
  { label: "E-Commerce VA Services", path: "/ecommerce-virtual-assistant" },
  { label: "Real Estate VA Support", path: "/real-estate-virtual-assistant" },
  { label: "Social Media Management", path: "/social-media-management-services" },
  { label: "Business Operations Support", path: "/business-operations-support" },
  { label: "Website Maintenance", path: "/web-design-maintenance" },
  { label: "All Solutions", path: "/solutions" },
  { label: "Case Studies", path: "/case-studies" },
];

export function BrandFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--brand-ivory) 0%, var(--brand-cloud) 100%)" }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0">
        <svg viewBox="0 0 1440 120" className="w-full h-[90px] text-[color:var(--brand-sage-mist)]">
          <path
            fill="currentColor"
            d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="grid gap-10 lg:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex flex-col items-start gap-2">
              <BrandLogo />
              <div>
                <p className="text-black/65 text-[0.875rem]">Virtual Support. Real Results.</p>
              </div>
            </Link>
            <p className="mt-5 text-black/65 text-[0.9375rem] leading-relaxed max-w-sm">
              SageStone Inc helps businesses scale with virtual assistants, customer support, e-commerce operations, social media support, web maintenance, and business operations services.
            </p>
            <p className="mt-5 text-black/60 text-[0.875rem]">
              <a className="hover:underline" href="https://www.sagestoneinc.com" rel="noreferrer">
                www.sagestoneinc.com
              </a>
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-black/60 mb-4">Services</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {services.map((s) => (
                <Link
                  key={s.label}
                  to={s.path}
                  className="text-black/70 hover:text-black transition-colors text-[0.875rem]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-black/60 mb-4">Contact</p>
            <div className="space-y-2.5 text-[0.875rem]">
              <Link to="/contact" className="text-black/70 hover:text-black transition-colors">
                Book a free operations consultation
              </Link>
              <a href="mailto:hello@sagestoneinc.com" className="block text-black/70 hover:text-black transition-colors">
                hello@sagestoneinc.com
              </a>
              <a href="tel:+12149452234" className="block text-black/70 hover:text-black transition-colors">
                +1 214-945-2234
              </a>
              <div className="text-black/65">Remote / Worldwide</div>
            </div>

          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--brand-stone-taupe)]/55 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black/55 text-[0.8125rem]">
            &copy; {new Date().getFullYear()} SageStone Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-black/55 hover:text-black/70 transition-colors text-[0.8125rem]">
              Terms
            </Link>
            <Link to="/privacy" className="text-black/55 hover:text-black/70 transition-colors text-[0.8125rem]">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
