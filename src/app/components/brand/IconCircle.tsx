import type { LucideIcon } from "lucide-react";

interface IconCircleProps {
  icon: LucideIcon;
}

export function IconCircle({ icon: Icon }: IconCircleProps) {
  return (
    <div
      className={
        "w-11 h-11 rounded-full flex items-center justify-center " +
        "bg-[color:var(--brand-olive-sage)] text-[color:var(--brand-cloud)] " +
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
      }
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </div>
  );
}

