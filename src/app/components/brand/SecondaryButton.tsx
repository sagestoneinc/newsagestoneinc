import { Link } from "react-router";
import type React from "react";

interface SecondaryButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function SecondaryButton({ to, children, className = "" }: SecondaryButtonProps) {
  return (
    <Link
      to={to}
      className={
        "inline-flex items-center justify-center px-7 py-3.5 rounded-[18px] " +
        "border border-[color:var(--brand-olive-sage)] text-[color:var(--brand-charcoal)] " +
        "bg-transparent hover:bg-[color:var(--brand-sage-mist)]/70 transition-colors duration-200 " +
        "text-[0.9375rem] " +
        className
      }
      style={{ fontWeight: 500 }}
    >
      {children}
    </Link>
  );
}
