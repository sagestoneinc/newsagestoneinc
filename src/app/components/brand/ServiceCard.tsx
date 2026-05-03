import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";
import { IconCircle } from "./IconCircle";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to?: string;
}

export function ServiceCard({ icon, title, description, to }: ServiceCardProps) {
  const inner = (
    <div
      className={
        "h-full p-7 rounded-[22px] border border-[color:var(--border)] " +
        "bg-[color:var(--card)] backdrop-blur " +
        "shadow-[0_12px_34px_rgba(46,46,46,0.08)] " +
        "group-hover:-translate-y-0.5 group-hover:border-[color:var(--brand-olive-sage)] " +
        "group-hover:shadow-[0_16px_40px_rgba(46,46,46,0.10)] " +
        "transition-all duration-300"
      }
    >
      <div className="mb-4">
        <IconCircle icon={icon} />
      </div>
      <h3 className="mb-2" style={{ fontSize: "1.0625rem", fontWeight: 650, lineHeight: 1.2 }}>
        {title}
      </h3>
      <p className="text-[0.9375rem] leading-relaxed text-black/65">{description}</p>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="group block h-full">
        {inner}
      </Link>
    );
  }

  return <div className="group h-full">{inner}</div>;
}

