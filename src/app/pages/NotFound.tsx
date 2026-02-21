import { Link } from "react-router";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-sage-50 via-white to-stone-50">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-sage-200 mb-6" style={{ fontSize: "8rem", fontWeight: 800, lineHeight: 1 }}>
          404
        </div>
        <h1 className="text-stone-900 tracking-tight mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.2 }}>
          Page Not Found
        </h1>
        <p className="text-stone-500 text-[1rem] leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors text-[0.9375rem]"
            style={{ fontWeight: 500 }}
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-700 border border-stone-200 rounded-lg hover:border-sage-300 transition-colors text-[0.9375rem]"
            style={{ fontWeight: 500 }}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
