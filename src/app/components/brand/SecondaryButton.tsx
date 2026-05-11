import { Link } from "react-router";
import type React from "react";
import { trackCtaClick } from "../../lib/analytics";

interface SecondaryButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  tracking?: Record<string, string | number | boolean | undefined>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function SecondaryButton({ to, children, className = "", tracking, onClick }: SecondaryButtonProps) {
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
      onClick={(event) => {
        trackCtaClick({ cta_text: typeof children === "string" ? children : undefined, target_url: to, ...tracking });
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
