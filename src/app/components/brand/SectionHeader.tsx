interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {eyebrow && (
        <p className="text-[0.8125rem] uppercase tracking-[0.18em] text-black/60 mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-[color:var(--brand-charcoal)] mb-4"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.15 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[1.0625rem] leading-relaxed text-black/65">{subtitle}</p>
      )}
    </div>
  );
}

