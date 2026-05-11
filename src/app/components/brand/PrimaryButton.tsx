import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type React from "react";
import { trackCtaClick } from "../../lib/analytics";

interface PrimaryButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
  tracking?: Record<string, string | number | boolean | undefined>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function PrimaryButton({
  to,
  children,
  className = "",
  withArrow = true,
  tracking,
  onClick,
}: PrimaryButtonProps) {
  return (
    <Link
      to={to}
      className={
        "inline-flex items-center gap-2 px-7 py-3.5 rounded-[18px] " +
        "bg-[color:var(--brand-olive-sage)] text-[color:var(--brand-cloud)] " +
        "shadow-[0_12px_28px_rgba(111,127,103,0.22)] " +
        "hover:shadow-[0_16px_34px_rgba(111,127,103,0.26)] hover:bg-[color:var(--brand-deep-sage)] " +
        "transition-all duration-200 text-[0.9375rem] " +
        className
      }
      style={{ fontWeight: 600 }}
      onClick={(event) => {
        trackCtaClick({ cta_text: typeof children === "string" ? children : undefined, target_url: to, ...tracking });
        onClick?.(event);
      }}
    >
      <span>{children}</span>
      {withArrow && (
        <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </Link>
  );
}
