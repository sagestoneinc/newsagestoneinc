import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "sage" | "dark";
}

export function CTABanner({
  title = "Ready to Streamline Your Business?",
  subtitle = "Book a free discovery call and let's find the right support for your needs.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  variant = "sage",
}: CTABannerProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={`py-20 lg:py-24 ${
        isDark
          ? "bg-stone-900"
          : "bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-white tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2 }}
        >
          {title}
        </h2>
        <p className="text-white/80 text-[1.0625rem] max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg transition-all duration-200 text-[0.9375rem] shadow-lg hover:shadow-xl ${
            isDark
              ? "bg-sage-500 text-white hover:bg-sage-600"
              : "bg-white text-sage-700 hover:bg-stone-50"
          }`}
          style={{ fontWeight: 600 }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
