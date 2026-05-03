import { PrimaryButton } from "./PrimaryButton";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonTo: string;
  footerNote?: string;
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  buttonTo,
  footerNote,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(216,222,210,0.0) 0%, rgba(216,222,210,0.55) 45%, rgba(216,222,210,0.0) 100%)" }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0">
        <svg viewBox="0 0 1440 120" className="w-full h-[90px] text-[color:var(--brand-sage-mist)]">
          <path
            fill="currentColor"
            d="M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,74.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            opacity="0.65"
          />
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={
            "rounded-[28px] border border-[color:var(--brand-stone-taupe)]/55 " +
            "bg-[color:var(--brand-cloud)]/70 backdrop-blur " +
            "shadow-[0_18px_48px_rgba(46,46,46,0.10)] px-8 sm:px-12 py-14 text-center"
          }
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 750, lineHeight: 1.15 }}>
            {title}
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-black/65 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-9 flex justify-center">
            <PrimaryButton to={buttonTo}>{buttonText}</PrimaryButton>
          </div>
          {footerNote && (
            <p className="mt-8 text-[0.875rem] text-black/55">{footerNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}

