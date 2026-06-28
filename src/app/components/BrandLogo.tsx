type BrandLogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function BrandLogo({ className = "", variant = "default" }: BrandLogoProps) {
  const logoSrc = variant === "light" ? "/logo-full-dark.svg" : "/logo-full-light.svg";

  return (
    <img
      src={logoSrc}
      alt="SageStone Inc"
      className={`block h-auto w-[min(68vw,17rem)] sm:w-[19rem] ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
