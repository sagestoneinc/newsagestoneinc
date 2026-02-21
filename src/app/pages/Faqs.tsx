import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  name: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    name: "Getting Started",
    items: [
      {
        question: "How do I get started with SageStone?",
        answer: "Simply book a free discovery call through our website. During the call, we'll discuss your business needs, the tasks you'd like to delegate, and recommend a support plan. From there, we match you with a vetted VA and begin onboarding—typically within 5–7 business days.",
      },
      {
        question: "Is there a minimum commitment or contract?",
        answer: "No. We operate on a month-to-month basis with no long-term contracts. You can scale up, scale down, or pause your service at any time with 30 days' notice. We believe you should stay because you're satisfied, not because you're locked in.",
      },
      {
        question: "How quickly can I get a virtual assistant assigned?",
        answer: "Most clients are matched and onboarded within 5–7 business days. For urgent needs, we can expedite the process. We always prioritize finding the right fit over rushing the match.",
      },
      {
        question: "What if the VA assigned to me isn't a good fit?",
        answer: "We offer a free replacement guarantee. If your VA isn't meeting expectations, we'll rematch you with a new assistant at no additional cost. Your satisfaction is our priority.",
      },
    ],
  },
  {
    name: "Services",
    items: [
      {
        question: "What services do your virtual assistants provide?",
        answer: "Our VAs provide a wide range of services including virtual operations & admin, real estate support, bookkeeping, social media marketing, lead generation, graphic design, and data entry & web research. Each VA is trained in specific skill areas to ensure expert-level support.",
      },
      {
        question: "Can one VA handle multiple types of tasks?",
        answer: "Yes, many of our VAs are skilled in multiple areas. However, for specialized tasks like bookkeeping or graphic design, we recommend dedicated specialists to ensure the highest quality. We'll advise the best setup for your needs during the discovery call.",
      },
      {
        question: "What tools and software do your VAs work with?",
        answer: "Our VAs are proficient in 50+ business tools including Google Workspace, Microsoft Office, Asana, Monday, Trello, HubSpot, Salesforce, QuickBooks, Xero, Canva, Adobe Creative Suite, Hootsuite, Buffer, and many more. If you use a specific tool, chances are we know it.",
      },
      {
        question: "Do you offer project-based support or only ongoing?",
        answer: "Both! We offer flexible engagement models including part-time ongoing support (10–20 hrs/week), full-time ongoing support (40 hrs/week), and project-based engagements for one-time needs. We'll help you choose the right model.",
      },
    ],
  },
  {
    name: "Process",
    items: [
      {
        question: "How does the onboarding process work?",
        answer: "After the discovery call, we match you with a VA based on your needs and industry. Then we set up a kick-off meeting where you'll share your processes, tools, and preferences. We create a task board, establish communication channels, and begin with a ramp-up period to ensure a smooth transition.",
      },
      {
        question: "How do I communicate with my VA?",
        answer: "You can communicate through your preferred channels—email, Slack, Microsoft Teams, Zoom, WhatsApp, or any other tool. We adapt to your existing workflow. Most clients set up a shared project management tool for task tracking.",
      },
      {
        question: "How do you ensure quality and accountability?",
        answer: "Every VA has a U.S.-based account manager who conducts regular check-ins, reviews work quality, and tracks KPIs. We also do monthly performance reviews and gather client feedback systematically. If any issues arise, your account manager is your immediate escalation point.",
      },
      {
        question: "What are the working hours for VAs?",
        answer: "Our VAs are flexible with time zones. Most work during your business hours, whether that's EST, CST, PST, or international. We also offer after-hours and weekend support for specific needs. Schedules are discussed and agreed upon during onboarding.",
      },
    ],
  },
  {
    name: "Security",
    items: [
      {
        question: "How do you protect my business data?",
        answer: "All VAs sign comprehensive NDAs and data protection agreements before starting. We use encrypted communication channels, secure password management tools, and follow industry-standard data handling practices. Your data security is a top priority.",
      },
      {
        question: "Do you conduct background checks on VAs?",
        answer: "Yes. Every VA undergoes identity verification, reference checks, and skills assessments. For roles involving financial data or sensitive information, we conduct enhanced screening. We only work with vetted professionals.",
      },
      {
        question: "Can you work with industry-specific compliance requirements?",
        answer: "Absolutely. We have experience supporting clients in healthcare (HIPAA-aware), finance, legal, and other regulated industries. We'll discuss specific compliance requirements during onboarding and ensure our processes align.",
      },
    ],
  },
  {
    name: "Pricing",
    items: [
      {
        question: "How much do your virtual assistant services cost?",
        answer: "Pricing depends on the service type, hours needed, and skill level required. We offer competitive hourly and monthly packages starting from affordable rates. Contact us for a custom quote tailored to your specific needs—we're transparent with no hidden fees.",
      },
      {
        question: "Are there any setup fees or hidden charges?",
        answer: "No setup fees, no hidden charges. The price we quote is the price you pay. We believe in complete transparency. Your investment covers your VA's time, management oversight, training, and quality assurance.",
      },
      {
        question: "Do you offer discounts for higher volume or longer commitments?",
        answer: "Yes, we offer tiered pricing for clients who need more hours or commit to longer engagements. The more you work with us, the better the value. Ask about our volume packages during your discovery call.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, ACH transfers, wire transfers, and invoicing with Net-15 or Net-30 terms for established clients. Billing is done monthly on a consistent schedule.",
      },
    ],
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden bg-white hover:border-sage-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-stone-900 text-[0.9375rem]" style={{ fontWeight: 500 }}>{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-stone-500 text-[0.875rem] leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Faqs() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);

  usePageMeta({
    title: "FAQs",
    description: "Find answers to frequently asked questions about SageStone Inc's virtual assistant services, pricing, onboarding process, and how we support your business.",
    keywords: "virtual assistant FAQ, SageStone pricing, VA onboarding, virtual assistant questions, remote support FAQ",
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6" style={{ fontWeight: 500 }}>
            FAQs
          </span>
          <h1 className="text-stone-900 tracking-tight mb-5 max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15 }}>
            Frequently Asked <span className="text-sage-500">Questions</span>
          </h1>
          <p className="text-stone-500 text-[1.0625rem] max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, pricing, and more. Can't find what you're looking for? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Category Sidebar */}
            <div className="lg:sticky lg:top-[96px] lg:self-start">
              <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`px-4 py-2.5 rounded-lg text-[0.875rem] whitespace-nowrap transition-colors text-left ${
                      activeCategory === cat.name
                        ? "bg-sage-50 text-sage-600 border border-sage-200"
                        : "text-stone-600 hover:bg-stone-50 border border-transparent"
                    }`}
                    style={{ fontWeight: activeCategory === cat.name ? 500 : 400 }}
                  >
                    {cat.name}
                    <span className="ml-2 text-stone-400 text-[0.75rem]">({cat.items.length})</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* FAQ Accordion */}
            <div>
              {faqCategories
                .filter((cat) => cat.name === activeCategory)
                .map((cat) => (
                  <div key={cat.name} className="space-y-3">
                    <h3 className="text-stone-900 mb-4" style={{ fontSize: '1.25rem', fontWeight: 600 }}>{cat.name}</h3>
                    {cat.items.map((item, i) => {
                      const key = `${cat.name}-${i}`;
                      return (
                        <AccordionItem
                          key={key}
                          item={item}
                          isOpen={!!openItems[key]}
                          onToggle={() => toggleItem(key)}
                        />
                      );
                    })}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-sage-50 text-sage-600 flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h2 className="text-stone-900 tracking-tight mb-3" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Still Have Questions?
            </h2>
            <p className="text-stone-500 text-[0.9375rem] leading-relaxed mb-6">
              Our team is happy to answer any questions you might have. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-all duration-200 text-[0.9375rem]"
              style={{ fontWeight: 500 }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}