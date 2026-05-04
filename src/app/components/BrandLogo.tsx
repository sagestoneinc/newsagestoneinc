import { useId } from "react";

type BrandLogoProps = {
  className?: string;
  variant?: "default" | "light";
};

function SageStoneMark({ className = "" }: { className?: string }) {
  const id = useId();
  const greenId = `${id}-green`;
  const stoneId = `${id}-stone`;
  const shadowId = `${id}-shadow`;

  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={greenId} x1="22" y1="24" x2="101" y2="127" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9AA081" />
          <stop offset="1" stopColor="#6F765C" />
        </linearGradient>
        <linearGradient id={stoneId} x1="104" y1="42" x2="60" y2="139" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9D0C4" />
          <stop offset="1" stopColor="#AFA599" />
        </linearGradient>
        <filter id={shadowId} x="8" y="8" width="144" height="144" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#2E2E2E" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter={`url(#${shadowId})`}>
        <path
          d="M29.5 128V67.7C29.5 57 34.4 46.8 42.7 40L80 9.5L128.5 43.6L116.7 58.5L80.8 33.5L55.2 54.8C49.9 59.2 46.9 65.8 46.9 72.7V128C39.8 126 34.1 126 29.5 128Z"
          fill={`url(#${greenId})`}
        />
        <path
          d="M49.4 121.3C53.2 90.9 70.9 62.4 102.1 42.7V84.3C95.4 106.4 75.7 122.4 49.4 137.2V121.3Z"
          fill={`url(#${greenId})`}
        />
        <path
          d="M47.8 121.4C57.8 94.4 74 72.4 96.4 55.4"
          stroke="#F8F5EF"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        <path
          d="M108.2 47.7L133.2 62.9V93.6L106.8 76.4L92.8 85.5L133.5 111.7V131.3L83 150.5L48.6 130L65.7 118.3L84.8 129.8L113.9 118.6L73.5 92.3V72.6L108.2 47.7Z"
          fill={`url(#${stoneId})`}
        />
        <path
          d="M108.2 47.7L133.2 62.9V93.6L106.8 76.4L92.8 85.5L133.5 111.7V131.3L83 150.5L48.6 130L65.7 118.3L84.8 129.8L113.9 118.6L73.5 92.3V72.6L108.2 47.7Z"
          stroke="#948C82"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export function BrandLogo({ className = "", variant = "default" }: BrandLogoProps) {
  const sageColor = variant === "light" ? "#D8DED2" : "#70765B";
  const stoneColor = variant === "light" ? "#E6DFD2" : "#6A645C";
  const incColor = variant === "light" ? "#C7BDB1" : "#8C8379";

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`} aria-label="SageStone Inc">
      <SageStoneMark className="h-9 w-9 shrink-0 sm:h-11 sm:w-11" />
      <span
        className="whitespace-nowrap text-[1.35rem] leading-none sm:text-[1.7rem]"
        style={{
          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
          fontWeight: 400,
        }}
      >
        <span style={{ color: sageColor }}>Sage</span>
        <span style={{ color: stoneColor }}>Stone</span>
        <span style={{ color: incColor, fontSize: "0.52em", marginLeft: "0.2rem" }}>Inc.</span>
      </span>
    </span>
  );
}
