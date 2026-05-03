import { Link } from "react-router";

const services = [
  { label: "Virtual Operations & Admin", path: "/solutions/virtual-operations-admin" },
  { label: "Marketing Support", path: "/solutions/social-media-marketing-support" },
  { label: "Customer Service", path: "/solutions" },
  { label: "Lead Generation", path: "/solutions/lead-generation-support" },
  { label: "Executive Assistance", path: "/solutions" },
  { label: "Bookkeeping Support", path: "/solutions/bookkeeping-support" },
  { label: "Real Estate VA Support", path: "/solutions/real-estate-virtual-assistant" },
  { label: "Graphic Design", path: "/solutions/graphic-design-support" },
  { label: "Data & Web Research", path: "/solutions/data-entry-web-research" },
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
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/logo-mark.svg"
                alt="SageStone Inc"
                className="w-10 h-10"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p style={{ fontSize: "1.25rem", fontWeight: 750, lineHeight: 1.1 }}>
                  SageStone Inc.
                </p>
                <p className="text-black/65 text-[0.875rem]">Remote Support. Real Business Momentum.</p>
              </div>
            </Link>
            <p className="mt-5 text-black/65 text-[0.9375rem] leading-relaxed max-w-sm">
              Reliable remote support that keeps business moving—delivered through a managed, calm, and organized virtual operations partnership.
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
                Book a discovery call
              </Link>
              <a href="mailto:hello@sagestoneinc.com" className="block text-black/70 hover:text-black transition-colors">
                hello@sagestoneinc.com
              </a>
              <a href="tel:+12149452234" className="block text-black/70 hover:text-black transition-colors">
                +1 214-945-2234
              </a>
              <div className="text-black/65">Remote / Worldwide</div>
            </div>

            <p className="mt-6 text-[0.8125rem] uppercase tracking-[0.18em] text-black/60 mb-3">Social</p>
            <div className="flex items-center gap-4 text-[0.875rem]">
              <a className="text-black/70 hover:text-black transition-colors" href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a className="text-black/70 hover:text-black transition-colors" href="#" aria-label="Instagram">
                Instagram
              </a>
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
