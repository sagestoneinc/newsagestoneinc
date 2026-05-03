import type React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center px-4 py-1.5 rounded-full text-[0.8125rem] " +
        "bg-[color:var(--brand-cloud)]/65 border border-[color:var(--brand-stone-taupe)]/55 " +
        "text-[color:var(--brand-charcoal)]"
      }
      style={{ fontWeight: 500 }}
    >
      {children}
    </span>
  );
}
