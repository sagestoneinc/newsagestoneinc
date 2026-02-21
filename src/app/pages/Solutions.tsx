import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  ArrowRight,
  ClipboardList,
  Home as HomeIcon,
  Calculator,
  Share2,
  Target,
  Palette,
  Database,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface SolutionData {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  image: string;
}

const solutionsData: SolutionData[] = [
  {
    id: "operations",
    icon: ClipboardList,
    title: "Virtual Operations & Admin",
    description: "Keep your business running like clockwork with dedicated admin support. From inbox management to project coordination, we handle the operational heavy lifting so you can focus on strategy.",
    deliverables: [
      "Email & calendar management",
      "Travel & expense coordination",
      "Project management & task tracking",
      "Document preparation & filing",
      "Meeting scheduling & minutes",
      "Workflow automation setup",
    ],
    outcomes: [
      "Save 15–25 hours per week on admin tasks",
      "Faster response times to clients and partners",
      "Organized, streamlined workflows",
    ],
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTYzMjA4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "real-estate",
    icon: HomeIcon,
    title: "Real Estate Virtual Assistant",
    description: "Purpose-built support for agents, brokers, and property managers. Our real estate VAs understand the industry inside and out—from MLS to transaction coordination.",
    deliverables: [
      "Listing coordination & MLS updates",
      "CRM management & lead follow-ups",
      "Transaction coordination & compliance",
      "Open house scheduling & marketing",
      "Showing feedback management",
      "Market research & comp analysis",
    ],
    outcomes: [
      "Close more deals with less admin overhead",
      "Never miss a lead or follow-up",
      "Professional client communication 24/7",
    ],
    image: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBtb2Rlcm4lMjBob21lfGVufDF8fHx8MTc3MTYzMjA4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "bookkeeping",
    icon: Calculator,
    title: "Bookkeeping Support",
    description: "Accurate, timely bookkeeping without the overhead of a full-time hire. Our bookkeeping VAs are trained in QuickBooks, Xero, FreshBooks, and more.",
    deliverables: [
      "Invoice creation & management",
      "Expense tracking & categorization",
      "Bank & credit card reconciliation",
      "Monthly financial reports",
      "Accounts payable & receivable",
      "Payroll preparation support",
    ],
    outcomes: [
      "Always-current financial records",
      "Fewer errors with trained professionals",
      "Tax season readiness year-round",
    ],
    image: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29ra2VlcGluZyUyMGFjY291bnRpbmclMjBmaW5hbmNlJTIwZGVza3xlbnwxfHx8fDE3NzE2MzI2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing Support",
    description: "Build your brand presence and engage your audience with strategic social media support. We plan, create, schedule, and analyze—you grow.",
    deliverables: [
      "Content calendar creation",
      "Post design, copywriting & scheduling",
      "Community management & engagement",
      "Analytics reporting & optimization",
      "Hashtag research & strategy",
      "Influencer outreach coordination",
    ],
    outcomes: [
      "Consistent brand presence across all platforms",
      "2–5x increase in engagement rates",
      "Data-driven content strategy",
    ],
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxNjMxOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "lead-gen",
    icon: Target,
    title: "Lead Generation Support",
    description: "Fill your pipeline with qualified prospects through systematic outreach and research. Our lead gen VAs combine technology with personal touch.",
    deliverables: [
      "Prospect research & list building",
      "Cold email campaign management",
      "LinkedIn outreach & connection requests",
      "CRM data entry & pipeline management",
      "Lead scoring & qualification",
      "Appointment setting",
    ],
    outcomes: [
      "Steady flow of qualified leads",
      "Reduced cost per lead vs. paid ads",
      "More meetings with decision-makers",
    ],
    image: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGFuYWx5dGljcyUyMGNoYXJ0fGVufDF8fHx8MTc3MTYzMjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "design",
    icon: Palette,
    title: "Graphic Design Support",
    description: "Professional visual content that elevates your brand. From social graphics to pitch decks, our design VAs deliver polished, on-brand assets.",
    deliverables: [
      "Social media graphics & templates",
      "Presentation & pitch deck design",
      "Brand asset creation & management",
      "Infographics & data visualization",
      "Email newsletter templates",
      "Print-ready marketing collateral",
    ],
    outcomes: [
      "Cohesive, professional visual identity",
      "Faster turnaround than agencies",
      "Unlimited revisions until you're satisfied",
    ],
    image: "https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjAwMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "data-entry",
    icon: Database,
    title: "Data Entry & Web Research",
    description: "Accurate, efficient data management and research that powers better decisions. Our VAs are meticulous with details and fast with delivery.",
    deliverables: [
      "Data entry & database management",
      "Data cleansing & deduplication",
      "Market research & competitive analysis",
      "Product research & pricing comparisons",
      "Web scraping & data compilation",
      "Spreadsheet creation & formatting",
    ],
    outcomes: [
      "99.9% data accuracy guarantee",
      "Actionable market intelligence",
      "Clean, organized databases",
    ],
    image: "https://images.unsplash.com/photo-1759156771079-6fef5b8d66c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW50cnklMjBsYXB0b3AlMjB3b3Jrc3BhY2UlMjBjbGVhbnxlbnwxfHx8fDE3NzE2MzI2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function Solutions() {
  usePageMeta({
    title: "Solutions",
    description: "Explore SageStone Inc's virtual assistant solutions: operations & admin, real estate VA, bookkeeping, social media marketing, lead generation, graphic design, and data entry services.",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6" style={{ fontWeight: 500 }}>
            Our Solutions
          </span>
          <h1 className="text-stone-900 tracking-tight mb-5 max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15 }}>
            End-to-End Virtual Support <span className="text-sage-500">Tailored to You</span>
          </h1>
          <p className="text-stone-500 text-[1.0625rem] max-w-2xl mx-auto leading-relaxed">
            From daily admin to strategic growth initiatives, explore the full range of solutions we offer to keep your business moving.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      {solutionsData.map((solution, idx) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 lg:py-24 ${idx % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center mb-5">
                  <solution.icon className="w-6 h-6" />
                </div>
                <h2 className="text-stone-900 tracking-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, lineHeight: 1.2 }}>
                  {solution.title}
                </h2>
                <p className="text-stone-500 text-[0.9375rem] leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-stone-800 mb-3 text-[0.875rem]" style={{ fontWeight: 600 }}>What We Deliver:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {solution.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sage-500 mt-0.5 shrink-0" />
                        <span className="text-stone-600 text-[0.8125rem]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-stone-800 mb-3 text-[0.875rem]" style={{ fontWeight: 600 }}>Expected Outcomes:</h4>
                  <div className="space-y-2">
                    {solution.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-sage-500 mt-0.5 shrink-0" />
                        <span className="text-stone-600 text-[0.8125rem]">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`relative ${idx % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div className={`absolute -inset-3 bg-sage-100/40 rounded-2xl ${idx % 2 === 0 ? "rotate-2" : "-rotate-2"}`} />
                <ImageWithFallback
                  src={solution.image}
                  alt={solution.title}
                  className="relative rounded-2xl w-full aspect-[4/3] object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Not Sure CTA */}
      <section className="py-20 lg:py-24 bg-sage-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-sage-100 text-sage-600 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-7 h-7" />
            </div>
            <h2 className="text-stone-900 tracking-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, lineHeight: 1.2 }}>
              Not Sure What You Need Yet?
            </h2>
            <p className="text-stone-500 text-[1.0625rem] leading-relaxed mb-8">
              That's completely okay. Book a free discovery call and we'll help you identify the right support
              for your business—no pressure, no commitment.
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
        </div>
      </section>
    </>
  );
}
