import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  Clock,
  DollarSign,
  HeartHandshake,
  Cog,
  TrendingUp,
  Sparkles,
  Award,
  Headphones,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";

const advantages = [
  {
    icon: Users,
    title: "Dedicated, Not Shared",
    desc: "Your VA works exclusively on your account—building deep knowledge of your business, preferences, and processes.",
  },
  {
    icon: Shield,
    title: "U.S.-Managed Quality",
    desc: "Every engagement is overseen by a U.S.-based account manager who ensures standards are met consistently.",
  },
  {
    icon: Clock,
    title: "Fast Onboarding",
    desc: "Go from discovery call to fully operational support in under 7 business days. We move at your pace.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprise charges. Simple hourly or monthly plans with clear deliverables.",
  },
  {
    icon: HeartHandshake,
    title: "No Long-Term Contracts",
    desc: "Month-to-month flexibility means you're never locked in. Stay because you're satisfied, not obligated.",
  },
  {
    icon: Cog,
    title: "Tool Agnostic",
    desc: "Our VAs are proficient in 50+ tools—from Monday and Asana to HubSpot and QuickBooks. We adapt to your stack.",
  },
];

const comparisons = [
  { feature: "Dedicated VA assigned to your account", sagestone: true, others: false },
  { feature: "U.S.-based account management", sagestone: true, others: false },
  { feature: "No long-term contracts required", sagestone: true, others: false },
  { feature: "Start in under 7 business days", sagestone: true, others: false },
  { feature: "Industry-specific training", sagestone: true, others: false },
  { feature: "Regular quality audits & KPI tracking", sagestone: true, others: false },
  { feature: "Transparent, all-inclusive pricing", sagestone: true, others: false },
  { feature: "Free VA replacement if not a fit", sagestone: true, others: false },
];

const results = [
  { icon: TrendingUp, stat: "40%", label: "Average increase in productivity reported by clients" },
  { icon: Clock, stat: "20+ hrs", label: "Saved per week on average per client" },
  { icon: DollarSign, stat: "60%", label: "Cost savings vs. hiring a full-time employee" },
  { icon: Sparkles, stat: "98%", label: "Client satisfaction rate across all engagements" },
];

export default function WhySageStone() {
  usePageMeta({
    title: "Why Choose SageStone?",
    description: "See why growing businesses choose SageStone Inc. for dedicated vetted VAs, flexible support plans, calm managed oversight, and reliable remote execution.",
    keywords: "why choose SageStone, dedicated vetted VAs, managed virtual assistant support, flexible support plans, remote team benefits",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6" style={{ fontWeight: 500 }}>
            Why SageStone?
          </span>
          <h1 className="text-stone-900 tracking-tight mb-5 max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15 }}>
            Not All Virtual Assistants Are <span className="text-sage-500">Created Equal</span>
          </h1>
          <p className="text-stone-500 text-[1.0625rem] max-w-2xl mx-auto leading-relaxed mb-8">
            SageStone delivers dedicated, U.S.-managed virtual support that goes beyond task completion—we become a true extension of your team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-all duration-200 shadow-lg shadow-sage-500/25 text-[0.9375rem]"
            style={{ fontWeight: 600 }}
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The SageStone Difference"
            title="What Sets Us Apart"
            subtitle="We've built our service model around what matters most to growing businesses."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="p-7 rounded-2xl border border-stone-200 hover:border-sage-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center mb-5">
                  <a.icon className="w-6 h-6" />
                </div>
                <h3 className="text-stone-900 mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>{a.title}</h3>
                <p className="text-stone-500 text-[0.875rem] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Compare"
            title="SageStone vs. Typical VA Services"
            subtitle="See the difference a dedicated, quality-focused approach makes."
          />
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white">
              <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px] bg-stone-900 text-white">
                <div className="p-4 text-[0.8125rem]" style={{ fontWeight: 600 }}>Feature</div>
                <div className="p-4 text-center text-[0.8125rem]" style={{ fontWeight: 600 }}>SageStone</div>
                <div className="p-4 text-center text-[0.8125rem]" style={{ fontWeight: 600 }}>Others</div>
              </div>
              {comparisons.map((c, i) => (
                <div
                  key={c.feature}
                  className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px] ${i % 2 === 0 ? "bg-white" : "bg-stone-50"} border-b border-stone-100 last:border-b-0`}
                >
                  <div className="p-4 text-stone-700 text-[0.875rem]">{c.feature}</div>
                  <div className="p-4 flex justify-center">
                    <CheckCircle2 className="w-5 h-5 text-sage-500" />
                  </div>
                  <div className="p-4 flex justify-center">
                    {c.others ? (
                      <CheckCircle2 className="w-5 h-5 text-sage-500" />
                    ) : (
                      <span className="w-5 h-5 rounded-full border-2 border-stone-300 block" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Results"
            title="Real Impact, Measurable Outcomes"
            subtitle="Our clients consistently report significant improvements in efficiency, cost, and growth."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r) => (
              <div key={r.label} className="text-center p-7 rounded-2xl bg-sage-50 border border-sage-100">
                <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-600 flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-6 h-6" />
                </div>
                <div className="text-sage-600 mb-1" style={{ fontSize: '2rem', fontWeight: 800 }}>{r.stat}</div>
                <p className="text-stone-500 text-[0.8125rem] leading-relaxed">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Experience the SageStone Difference"
        subtitle="See firsthand why businesses choose us over traditional VA services. Book your free consultation today."
        buttonText="Book a Discovery Call"
        buttonLink="/contact"
      />
    </>
  );
}
