import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import { ArrowRight, Target, Eye, Heart, Users, Globe, Shield, Award, Zap } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const values = [
  { icon: Shield, title: "Reliability", desc: "We show up every day with the same dedication as your in-house team." },
  { icon: Award, title: "Excellence", desc: "Rigorous vetting and continuous training ensure top-tier support." },
  { icon: Heart, title: "Client-First", desc: "Your goals become our goals. We adapt to your workflow, not the other way around." },
  { icon: Globe, title: "Accessibility", desc: "Remote-first means we serve businesses anywhere, anytime." },
  { icon: Zap, title: "Efficiency", desc: "Streamlined processes that save you time and reduce operational friction." },
  { icon: Users, title: "Partnership", desc: "We're not just a vendor—we're an extension of your team." },
];

const stats = [
  { value: "150+", label: "Businesses Served" },
  { value: "50+", label: "Virtual Assistants" },
  { value: "10+", label: "Industries Covered" },
  { value: "98%", label: "Client Retention Rate" },
];

export default function About() {
  usePageMeta({
    title: "About Us",
    description: "Learn about SageStone Inc, our mission to empower businesses with dedicated virtual assistant services, and how we help companies streamline operations and scale efficiently.",
    keywords: "about SageStone Inc, virtual assistant company, remote support team, business support services, company mission",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6" style={{ fontWeight: 500 }}>
                About SageStone Inc
              </span>
              <h1 className="text-stone-900 tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15 }}>
                Your Business Deserves <span className="text-sage-500">Dedicated</span> Support
              </h1>
              <p className="text-stone-500 text-[1.0625rem] leading-relaxed mb-6">
                SageStone Inc was founded with a simple conviction: every business—whether a solo entrepreneur or a growing company—deserves access to reliable, skilled, and affordable operational support.
              </p>
              <p className="text-stone-500 text-[1.0625rem] leading-relaxed mb-8">
                We're a U.S.-managed, remote-first virtual assistant company that matches businesses with dedicated VAs who integrate seamlessly into existing workflows. No revolving doors, no impersonal call centers—just consistent, quality support.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-all duration-200 shadow-lg shadow-sage-500/25 text-[0.9375rem]"
                style={{ fontWeight: 600 }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-sage-100/50 rounded-3xl rotate-2" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765648636118-6d1eaaeb669f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjByZW1vdGUlMjB3b3JrJTIwdGVhbXxlbnwxfHx8fDE3NzE2MzIwODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="SageStone remote team"
                className="relative rounded-2xl w-full aspect-[4/3] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 lg:p-10 rounded-2xl bg-sage-50 border border-sage-100">
              <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-600 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-stone-900 mb-3" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Our Mission</h3>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                To empower businesses of all sizes with affordable, reliable virtual assistant services that free up time, reduce overhead, and accelerate growth—delivered by dedicated professionals who truly care.
              </p>
            </div>
            <div className="p-8 lg:p-10 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-600 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-stone-900 mb-3" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Our Vision</h3>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                To be the most trusted name in virtual assistance—known for quality, consistency, and genuine partnership with every client we serve, no matter their size or industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-sage-400 mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>{s.value}</div>
                <div className="text-stone-400 text-[0.875rem]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Everything We Do"
            subtitle="These core principles guide how we hire, train, and deliver virtual support."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl border border-stone-200 hover:border-sage-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-sage-50 text-sage-600 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5" />
                </div>
                <h4 className="text-stone-900 mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>{v.title}</h4>
                <p className="text-stone-500 text-[0.875rem] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Know More?"
        subtitle="Schedule a call and we'll walk you through how SageStone can support your specific business needs."
        buttonText="Book a Discovery Call"
        buttonLink="/contact"
      />
    </>
  );
}
