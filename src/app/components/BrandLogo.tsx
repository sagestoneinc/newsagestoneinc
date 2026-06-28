type BrandLogoProps = {
  className?: string;
  variant?: "default" | "light";
};

function SageStoneMark({ className = "" }: { className?: string }) {
  return <img src="/logo-mark.svg" alt="" className={className} aria-hidden="true" />;
}

export function BrandLogo({ className = "", variant = "default" }: BrandLogoProps) {
  const sageColor = variant === "light" ? "#A7B889" : "#789462";
  const stoneColor = variant === "light" ? "#FFFFFF" : "#262B31";
  const incColor = variant === "light" ? "#FFFFFF" : "#262B31";
  const dividerColor = variant === "light" ? "#A7B889" : "#789462";
  const taglineColor = variant === "light" ? "rgba(255,255,255,0.84)" : "#3C4148";

  return (
    <span className={`inline-flex items-center gap-3 sm:gap-4 ${className}`} aria-label="SageStone Inc">
      <SageStoneMark className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
      <span aria-hidden="true" className="h-11 w-px shrink-0 sm:h-14" style={{ backgroundColor: dividerColor }} />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className="whitespace-nowrap text-[1.45rem] tracking-[-0.04em] sm:text-[1.9rem]"
          style={{
            fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 300,
          }}
        >
          <span style={{ color: sageColor, fontWeight: 400 }}>Sage</span>
          <span style={{ color: stoneColor }}>Stone</span>
          <span style={{ color: incColor, marginLeft: "0.35rem" }}>Inc</span>
        </span>
        <span
          className="mt-1 hidden whitespace-nowrap text-[0.42rem] font-bold uppercase tracking-[0.26em] sm:block"
          style={{ color: taglineColor }}
        >
          Virtual Assistants · Customer Support · Business Operations
        </span>
      </span>
    </span>
  );
}
