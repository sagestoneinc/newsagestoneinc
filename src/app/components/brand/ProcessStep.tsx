interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div
      className={
        "p-7 rounded-[22px] border border-[color:var(--border)] bg-[color:var(--card)] backdrop-blur " +
        "shadow-[0_12px_32px_rgba(46,46,46,0.08)]"
      }
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={
            "w-10 h-10 rounded-full flex items-center justify-center " +
            "bg-[color:var(--brand-cloud)]/70 border border-[color:var(--brand-stone-taupe)]/55 " +
            "text-[color:var(--brand-deep-sage)]"
          }
          style={{ fontWeight: 700 }}
        >
          {String(step).padStart(2, "0")}
        </div>
        <div className="h-px flex-1 bg-[color:var(--brand-stone-taupe)]/45" />
      </div>
      <h3 className="mb-2" style={{ fontSize: "1.0625rem", fontWeight: 650, lineHeight: 1.2 }}>
        {title}
      </h3>
      <p className="text-[0.9375rem] leading-relaxed text-black/65">{description}</p>
    </div>
  );
}

