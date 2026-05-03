import type { LucideIcon } from "lucide-react";
import { IconCircle } from "./IconCircle";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      className={
        "p-7 rounded-[22px] border border-[color:var(--border)] " +
        "bg-[color:var(--card)] backdrop-blur " +
        "shadow-[0_12px_32px_rgba(46,46,46,0.08)] " +
        "hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(46,46,46,0.10)] " +
        "transition-all duration-300"
      }
    >
      <div className="mb-4">
        <IconCircle icon={icon} />
      </div>
      <h3
        className="text-[color:var(--brand-charcoal)] mb-2"
        style={{ fontSize: "1.0625rem", fontWeight: 650, lineHeight: 1.2 }}
      >
        {title}
      </h3>
      <p className="text-[0.9375rem] leading-relaxed text-black/65">{description}</p>
    </div>
  );
}

