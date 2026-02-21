interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-[0.8125rem] mb-4 ${
            light
              ? "bg-sage-500/20 text-sage-300"
              : "bg-sage-50 text-sage-600 border border-sage-200"
          }`}
          style={{ fontWeight: 500 }}
        >
          {badge}
        </span>
      )}
      <h2
        className={`tracking-tight mb-4 ${light ? "text-white" : "text-stone-900"}`}
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[1.0625rem] leading-relaxed ${light ? "text-stone-300" : "text-stone-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
