import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  ArrowRight,
  Settings,
  Home as HomeIcon,
  BarChart3,
  Rocket,
  ClipboardList,
  Calculator,
  Share2,
  Target,
  Palette,
  Database,
  CheckCircle2,
  Star,
  Quote,
  Building2,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  GraduationCap,
  Scale,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const pillars = [
  {
    icon: Settings,
    title: "Virtual Operations",
    desc: "Streamline your day-to-day admin, scheduling, and project coordination with dedicated support.",
    color: "bg-sage-50 text-sage-600",
  },
  {
    icon: HomeIcon,
    title: "Real Estate Support",
    desc: "From listing coordination to CRM management, keep your transactions running smoothly.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Share2,
    title: "Marketing Support",
    desc: "Social media, content creation, and campaign management to grow your brand visibility.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Rocket,
    title: "Growth Support",
    desc: "Lead generation, data research, and strategic outreach to fuel your business pipeline.",
    color: "bg-amber-50 text-amber-600",
  },
];

const solutions = [
  { icon: ClipboardList, title: "Virtual Operations & Admin", desc: "Calendar, email, project management, and workflow automation." },
  { icon: HomeIcon, title: "Real Estate Virtual Assistant", desc: "Listing coordination, CRM updates, transaction support." },
  { icon: Calculator, title: "Bookkeeping Support", desc: "Invoicing, expense tracking, reconciliation, and reports." },
  { icon: Share2, title: "Social Media Marketing", desc: "Content scheduling, community management, analytics reporting." },
  { icon: Target, title: "Lead Generation Support", desc: "Prospect research, outreach campaigns, list building." },
  { icon: Palette, title: "Graphic Design Support", desc: "Brand assets, social graphics, presentations, and collateral." },
  { icon: Database, title: "Data Entry & Web Research", desc: "Accurate data management, market research, competitive analysis." },
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn about your business, pain points, and goals to craft the perfect support plan.",
  },
  {
    num: "02",
    title: "Match & Onboard",
    desc: "We match you with a skilled VA, set up tools, and establish clear workflows.",
  },
  {
    num: "03",
    title: "Execute & Scale",
    desc: "Your VA handles tasks daily while we monitor quality. Scale up or adjust anytime.",
  },
];

const whyBullets = [
  "Dedicated, vetted virtual assistants—not a revolving door",
  "U.S.-managed with worldwide remote talent",
  "Flexible plans: part-time, full-time, or project-based",
  "Transparent pricing with no hidden fees",
  "Rigorous quality assurance and regular check-ins",
  "Industry-specific expertise across 10+ verticals",
];

const industries = [
  { icon: Building2, label: "Real Estate" },
  { icon: ShoppingBag, label: "E-Commerce" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Briefcase, label: "Consulting" },
  { icon: GraduationCap, label: "Education" },
  { icon: Scale, label: "Legal" },
  { icon: BarChart3, label: "Finance" },
  { icon: Rocket, label: "Startups" },
];

const testimonials = [
  {
    quote: "SageStone's VA transformed how we handle operations. We've saved 20+ hours a week and our team can finally focus on growth.",
    name: "Sarah Mitchell",
    role: "CEO, Mitchell Property Group",
    avatar: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjI5ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "The marketing support has been outstanding. Our social engagement is up 300% and the content quality is consistently excellent.",
    name: "James Chen",
    role: "Founder, Chen Digital Agency",
    avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTYxMTg3OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    quote: "We needed bookkeeping and lead gen support fast. SageStone delivered within a week—reliable, professional, and thorough.",
    name: "Elena Rodriguez",
    role: "COO, Altitude Consulting",
    avatar: "https://images.unsplash.com/photo-1770364019841-b704d8630e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzcxNjMyNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const blogPosts = [
  {
    title: "5 Signs Your Business Needs a Virtual Assistant",
    excerpt: "If you're spending more time on admin than strategy, it might be time to delegate. Here are the top signals.",
    category: "Operations",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTYzMjA4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "How Remote Teams Are Redefining Productivity",
    excerpt: "Remote-first companies are outperforming traditional offices. Here's what the data says about distributed teams.",
    category: "Remote Work",
    date: "Feb 5, 2026",
    image: "https://images.unsplash.com/photo-1765648636118-6d1eaaeb669f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjByZW1vdGUlMjB3b3JrJTIwdGVhbXxlbnwxfHx8fDE3NzE2MzIwODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "The Real Estate VA Playbook: What to Delegate First",
    excerpt: "Agents who delegate listing coordination and CRM management close 40% more deals. Here's a step-by-step guide.",
    category: "Real Estate",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBtb2Rlcm4lMjBob21lfGVufDF8fHx8MTc3MTYzMjA4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function Home() {
  usePageMeta({
    title: "Virtual Assistant Services for Growing Businesses",
    description: "SageStone Inc provides expert virtual assistant services including admin support, bookkeeping, social media marketing, lead generation, and real estate VA services.",
  });

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-sage-50/40">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span
                className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6"
                style={{ fontWeight: 500 }}
              >
                Remote-First Virtual Support &mdash; Worldwide
              </span>
              <h1
                className="text-stone-900 tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1 }}
              >
                Virtual Assistant Services That Keep Your Business{" "}
                <span className="text-sage-500">Moving</span>
              </h1>
              <p className="text-stone-500 text-[1.125rem] leading-relaxed mb-8 max-w-xl">
                Dedicated, U.S.-managed virtual assistants delivering operations, marketing,
                and growth support to businesses worldwide. Focus on what matters—we'll handle the rest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-all duration-200 shadow-lg shadow-sage-500/25 hover:shadow-xl hover:shadow-sage-500/30 text-[0.9375rem]"
                  style={{ fontWeight: 600 }}
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-stone-700 border border-stone-200 rounded-lg hover:border-sage-300 hover:text-sage-600 transition-all duration-200 text-[0.9375rem]"
                  style={{ fontWeight: 500 }}
                >
                  Explore Solutions
                </Link>
              </div>
              {/* Trust indicators */}
              <div className="mt-10 flex items-center gap-6 text-stone-400 text-[0.8125rem]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-500" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-500" />
                  <span>Start in under 7 days</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-500" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage-100/50 rounded-3xl rotate-3" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTYzMjA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Virtual assistant professional workspace"
                  className="relative rounded-2xl w-full aspect-[4/3] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4 PILLAR CARDS ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="Four Pillars of Support"
            subtitle="Whether you need help with daily operations or strategic growth, our specialized teams have you covered."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group p-7 rounded-2xl border border-stone-200 hover:border-sage-200 hover:shadow-lg hover:shadow-sage-100/50 transition-all duration-300 bg-white"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${p.color}`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-stone-900 mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {p.title}
                </h3>
                <p className="text-stone-500 text-[0.875rem] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTIONS PREVIEW GRID ========== */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Solutions"
            title="Comprehensive Virtual Support Services"
            subtitle="From admin to design, we provide end-to-end solutions tailored to your industry and workflow."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to="/solutions"
                className="group p-6 rounded-xl bg-white border border-stone-200 hover:border-sage-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-600 flex items-center justify-center mb-4 group-hover:bg-sage-500 group-hover:text-white transition-colors duration-300">
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className="text-stone-900 mb-1.5" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  {s.title}
                </h4>
                <p className="text-stone-500 text-[0.8125rem] leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 text-[0.9375rem] transition-colors"
              style={{ fontWeight: 500 }}
            >
              View All Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Get Started in Three Simple Steps"
            subtitle="We've streamlined the process so you can go from overwhelmed to supported in days, not months."
          />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative text-center">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-sage-200" />
                )}
                <div className="w-20 h-20 rounded-2xl bg-sage-50 border-2 border-sage-200 flex items-center justify-center mx-auto mb-6">
                  <span className="text-sage-600" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{step.num}</span>
                </div>
                <h3 className="text-stone-900 mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-stone-500 text-[0.9375rem] leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY SAGESTONE TEASER ========== */}
      <section className="py-20 lg:py-24 bg-sage-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block px-4 py-1.5 bg-sage-100 text-sage-600 rounded-full text-[0.8125rem] mb-5"
                style={{ fontWeight: 500 }}
              >
                Why SageStone?
              </span>
              <h2
                className="text-stone-900 tracking-tight mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2 }}
              >
                Built for Businesses That <br className="hidden lg:block" />
                Value Reliability
              </h2>
              <div className="space-y-4 mb-8">
                {whyBullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage-500 mt-0.5 shrink-0" />
                    <span className="text-stone-600 text-[0.9375rem]">{b}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/why-sagestone"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 text-[0.9375rem] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Learn Why Businesses Choose Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-sage-200/30 rounded-3xl -rotate-2" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE1MjQ4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business team collaboration"
                className="relative rounded-2xl w-full aspect-[4/3] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries We Serve"
            title="Trusted Across Diverse Sectors"
            subtitle="Our virtual assistants bring industry-specific expertise to every engagement."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-stone-200 hover:border-sage-200 hover:bg-sage-50/50 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-stone-100 text-stone-600 flex items-center justify-center">
                  <ind.icon className="w-5 h-5" />
                </div>
                <span className="text-stone-700 text-[0.8125rem] text-center" style={{ fontWeight: 500 }}>
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the businesses we've helped grow."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl bg-white border border-stone-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-sage-200 mb-3" />
                <p className="text-stone-600 text-[0.9375rem] leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <ImageWithFallback
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-stone-900 text-[0.875rem]" style={{ fontWeight: 600 }}>{t.name}</p>
                    <p className="text-stone-500 text-[0.8125rem]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BLOG PREVIEW ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="From the Blog"
            title="Insights & Resources"
            subtitle="Tips, strategies, and stories to help you make the most of virtual support."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                to="/blog"
                className="group rounded-2xl overflow-hidden border border-stone-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-sage-50 text-sage-600 rounded-full text-[0.75rem]" style={{ fontWeight: 500 }}>
                      {post.category}
                    </span>
                    <span className="text-stone-400 text-[0.75rem]">{post.date}</span>
                  </div>
                  <h3 className="text-stone-900 mb-2 group-hover:text-sage-600 transition-colors" style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-[0.8125rem] leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 text-[0.9375rem] transition-colors"
              style={{ fontWeight: 500 }}
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <CTABanner
        title="Let's Build Your Dream Support Team"
        subtitle="Whether you need one VA or an entire remote team, SageStone is ready to help. Start with a free consultation."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
