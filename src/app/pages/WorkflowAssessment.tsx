import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Route,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackCtaClick, trackLead } from "../lib/analytics";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";
const assessmentAnchor = "#assessment-form";

const trustIndicators = ["Dedicated Support", "Reliable Communication", "Flexible Solutions", "Managed Operations Support"];

const painPoints = [
  { icon: Mail, title: "Endless emails", copy: "Inbox triage, follow-ups, and decision clutter that quietly consume leadership time." },
  { icon: CalendarClock, title: "Scheduling conflicts", copy: "Meeting coordination and shifting calendars that interrupt client-facing priorities." },
  { icon: MessageCircle, title: "Customer inquiries", copy: "Questions, updates, and service requests that need prompt, polished responses." },
  { icon: FileText, title: "Administrative backlog", copy: "Documents, reports, and recurring admin tasks waiting for consistent ownership." },
  { icon: LayoutDashboard, title: "CRM maintenance", copy: "Pipeline notes, records, and task updates that must stay accurate to be useful." },
  { icon: Clock3, title: "Repetitive daily tasks", copy: "Low-leverage work that slows growth when it remains on an owner's desk." },
];

const assessmentIncludes = [
  { icon: Workflow, title: "Workflow Review", copy: "Analysis of current business processes and where handoffs are creating friction." },
  { icon: ClipboardCheck, title: "Administrative Audit", copy: "Identify time-consuming tasks that are pulling focus away from strategic work." },
  { icon: Route, title: "Delegation Opportunities", copy: "Discover which responsibilities can be delegated with clarity and confidence." },
  { icon: Sparkles, title: "Efficiency Recommendations", copy: "Practical improvements you can implement immediately to reduce operational drag." },
  { icon: BriefcaseBusiness, title: "Support Roadmap", copy: "Personalized recommendations from SageStone for a calmer, more organized operating rhythm." },
];

const benefits = [
  "More Time for Growth",
  "Better Organization",
  "Improved Client Experience",
  "Streamlined Processes",
  "Reduced Administrative Burden",
];

const faqs = [
  {
    question: "How long does the assessment take?",
    answer: "The form takes about five minutes to complete. SageStone then reviews your responses and prepares a focused workflow assessment based on your current operational challenges.",
  },
  {
    question: "What happens after I submit my assessment?",
    answer: "You will see a thank-you state with the option to book a discovery call. Our team reviews your submission and follows up with next steps and recommended opportunities for operational improvement.",
  },
  {
    question: "Is there any cost or obligation?",
    answer: "No. The Workflow Assessment is complimentary and designed to help you identify bottlenecks before deciding whether ongoing support is the right fit.",
  },
  {
    question: "How quickly can support begin?",
    answer: "Timing depends on scope, tools, and workload. After the assessment and discovery call, SageStone can outline a practical onboarding path and support roadmap.",
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with agency owners, consultants, real estate and property management teams, insurance agencies, e-commerce operators, and professional service businesses.",
  },
];

const industries = [
  "Marketing Agency",
  "Real Estate",
  "Property Management",
  "Insurance",
  "Consulting",
  "E-commerce",
  "Professional Services",
  "Other",
];

const employeeRanges = ["1–5", "6–10", "11–25", "26–50", "50+"];
const adminHours = ["Less than 5", "5–10", "10–20", "More than 20"];

type AssessmentFormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  employees: string;
  adminHours: string;
  challenge: string;
  _honeypot: string;
};

const initialFormData: AssessmentFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  employees: "",
  adminHours: "",
  challenge: "",
  _honeypot: "",
};

function scrollToAssessment() {
  document.getElementById("assessment-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CalendlyEmbed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget min-h-[760px] w-full overflow-hidden rounded-[2rem] border border-[color:var(--brand-stone-taupe)]/45 bg-white shadow-[0_24px_70px_rgba(46,46,46,0.08)]"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f3efe7&text_color=2e2e2e&primary_color=8f987a`}
      title="Schedule a complimentary discovery call with SageStone Inc."
      aria-label="Calendly scheduling widget"
    />
  );
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-[color:var(--brand-charcoal)]">
      {children}
    </label>
  );
}

export default function WorkflowAssessment() {
  const [formData, setFormData] = useState<AssessmentFormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  usePageMeta({
    title: "Free Workflow Assessment | SageStone Inc.",
    description:
      "Discover operational bottlenecks and reclaim valuable time with SageStone’s complimentary Workflow Assessment. Get actionable recommendations and expert support guidance.",
    keywords:
      "free workflow assessment, operations support, business workflow audit, administrative audit, delegation support, SageStone Inc",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/workflow-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your assessment right now.");
      }

      setStatus("success");
      setFormData(initialFormData);
      trackLead({ location: "workflow_assessment_page", form_name: "workflow_assessment" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit your assessment right now.");
    }
  };

  return (
    <div className="bg-[color:var(--brand-ivory)] text-[color:var(--brand-charcoal)]">
      <nav className="sticky top-[72px] z-40 border-b border-[color:var(--brand-stone-taupe)]/30 bg-[color:var(--brand-ivory)]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)] sm:inline">
            Free Workflow Assessment
          </span>
          <div className="ml-auto flex w-full items-center justify-end gap-2 sm:w-auto">
            <a
              href={assessmentAnchor}
              onClick={(event) => {
                event.preventDefault();
                trackCtaClick({ cta_text: "Get My Free Workflow Assessment", location: "sticky_nav", target_url: assessmentAnchor });
                scrollToAssessment();
              }}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-[color:var(--brand-olive-sage)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(111,127,103,0.18)] transition hover:bg-[color:var(--brand-deep-sage)] sm:flex-none"
            >
              Get My Free Workflow Assessment
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCtaClick({ cta_text: "Book a Discovery Call", location: "sticky_nav", target_url: CALENDLY_URL })}
              className="hidden rounded-full border border-[color:var(--brand-olive-sage)] px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-charcoal)] transition hover:bg-[color:var(--brand-sage-mist)] sm:inline-flex"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(216,222,210,0.95),transparent_34%),linear-gradient(135deg,#F3EFE7_0%,#E6DFD2_100%)]" />
        <div className="absolute right-[-10rem] top-20 -z-10 h-72 w-72 rounded-full bg-[color:var(--brand-sage-mist)] blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-[fadeUp_0.7s_ease-out_both]">
            <p className="mb-5 inline-flex rounded-full border border-[color:var(--brand-stone-taupe)]/50 bg-white/55 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">
              Virtual Support. Real Results.
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-[color:var(--brand-charcoal)] sm:text-6xl lg:text-7xl">
              Discover Where Your Business Is Losing Time
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              Our complimentary Workflow Assessment identifies operational bottlenecks, administrative overload, and opportunities to improve efficiency through smarter delegation and support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={assessmentAnchor}
                onClick={(event) => {
                  event.preventDefault();
                  trackCtaClick({ cta_text: "Get My Free Workflow Assessment", location: "hero", target_url: assessmentAnchor });
                  scrollToAssessment();
                }}
                className="inline-flex items-center justify-center gap-3 rounded-[1.25rem] bg-[color:var(--brand-olive-sage)] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(111,127,103,0.24)] transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-deep-sage)]"
              >
                Get My Free Workflow Assessment <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackCtaClick({ cta_text: "Book a Discovery Call", location: "hero", target_url: CALENDLY_URL })}
                className="inline-flex items-center justify-center rounded-[1.25rem] border border-[color:var(--brand-olive-sage)] bg-white/35 px-7 py-4 text-base font-semibold text-[color:var(--brand-charcoal)] transition hover:bg-[color:var(--brand-sage-mist)]/80"
              >
                Book a Discovery Call
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustIndicators.map((indicator) => (
                <div key={indicator} className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm font-semibold text-stone-700">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--brand-olive-sage)]" aria-hidden="true" />
                  {indicator}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-[fadeUp_0.7s_0.12s_ease-out_both]">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/50 p-5 shadow-[0_28px_90px_rgba(46,46,46,0.12)] backdrop-blur-xl">
              <div className="rounded-[2rem] bg-[color:var(--brand-charcoal)] p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">Assessment Snapshot</span>
                  <Sparkles className="h-6 w-6 text-[color:var(--brand-sage-mist)]" aria-hidden="true" />
                </div>
                <div className="space-y-4">
                  {["Operational bottlenecks", "Delegation readiness", "Admin workload exposure", "Support roadmap"].map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="mb-3 flex items-center justify-between text-sm text-white/72">
                        <span>{item}</span>
                        <span>{index === 0 ? "High" : index === 1 ? "Ready" : index === 2 ? "12–20 hrs" : "Next steps"}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 rounded-full bg-[color:var(--brand-sage-mist)]" style={{ width: `${82 - index * 9}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[color:var(--brand-sage-mist)] p-5">
                  <p className="text-3xl font-semibold">5</p>
                  <p className="mt-1 text-sm text-stone-700">Assessment focus areas</p>
                </div>
                <div className="rounded-3xl bg-[color:var(--brand-soft-beige)] p-5">
                  <p className="text-3xl font-semibold">24h</p>
                  <p className="mt-1 text-sm text-stone-700">Review window</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">The operational drag</p>
            <h2 id="problem-heading" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Why Growth Starts to Feel Overwhelming</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Growth often creates more moving parts before it creates more freedom. These are the recurring pressure points that make an otherwise healthy business feel harder to lead.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="group rounded-[2rem] border border-[color:var(--brand-stone-taupe)]/35 bg-white/60 p-6 shadow-[0_16px_48px_rgba(46,46,46,0.05)] transition hover:-translate-y-1 hover:bg-white">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-deep-sage)] transition group-hover:bg-[color:var(--brand-olive-sage)] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-sage-mist)]/55 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="receive-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">What you’ll receive</p>
            <h2 id="receive-heading" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Your Complimentary Workflow Assessment Includes</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {assessmentIncludes.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-[1.75rem] border border-white/60 bg-[color:var(--brand-ivory)]/80 p-6 shadow-[0_18px_55px_rgba(46,46,46,0.06)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[color:var(--brand-olive-sage)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="assessment-form" className="scroll-mt-36 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="form-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">Lead assessment</p>
            <h2 id="form-heading" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Request Your Free Workflow Assessment</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Share a few details about your business, workload, and biggest operational challenge. SageStone will review your responses and identify practical opportunities for better delegation and support.
            </p>
            <div className="mt-8 rounded-[2rem] bg-[color:var(--brand-charcoal)] p-6 text-white">
              <Inbox className="mb-4 h-8 w-8 text-[color:var(--brand-sage-mist)]" aria-hidden="true" />
              <h3 className="text-2xl font-semibold">After submission</h3>
              <p className="mt-3 leading-7 text-white/75">
                You’ll receive a thank-you confirmation and an immediate opportunity to schedule your complimentary discovery call.
              </p>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-[color:var(--brand-stone-taupe)]/40 bg-white/80 p-5 shadow-[0_28px_90px_rgba(46,46,46,0.08)] sm:p-8">
            {status === "success" ? (
              <div className="text-center" role="status" aria-live="polite">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-deep-sage)]">
                  <Check className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-semibold">Your assessment request has been received.</h3>
                <p className="mx-auto mt-4 max-w-xl leading-8 text-stone-700">
                  Thank you. SageStone will review your workflow details and follow up with recommendations. If you are ready to talk through your priorities now, book a discovery call below.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCtaClick({ cta_text: "Book a Discovery Call", location: "assessment_success", target_url: CALENDLY_URL })}
                  className="mt-7 inline-flex items-center justify-center gap-3 rounded-[1.25rem] bg-[color:var(--brand-olive-sage)] px-7 py-4 font-semibold text-white transition hover:bg-[color:var(--brand-deep-sage)]"
                >
                  Book a Discovery Call <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
                  <label htmlFor="_honeypot">Leave this empty</label>
                  <input id="_honeypot" name="_honeypot" value={formData._honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                {status === "error" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
                    {errorMessage}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                    <input id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} autoComplete="name" className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
                    <input id="companyName" name="companyName" required value={formData.companyName} onChange={handleChange} autoComplete="organization" className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} autoComplete="email" className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} autoComplete="tel" className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <FieldLabel htmlFor="industry">Industry</FieldLabel>
                    <select id="industry" name="industry" required value={formData.industry} onChange={handleChange} className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]">
                      <option value="">Select one</option>
                      {industries.map((industry) => <option key={industry} value={industry}>{industry}</option>)}
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="employees">Number of Employees</FieldLabel>
                    <select id="employees" name="employees" required value={formData.employees} onChange={handleChange} className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]">
                      <option value="">Select</option>
                      {employeeRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="adminHours">Weekly Admin Hours</FieldLabel>
                    <select id="adminHours" name="adminHours" required value={formData.adminHours} onChange={handleChange} className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]">
                      <option value="">Select</option>
                      {adminHours.map((hours) => <option key={hours} value={hours}>{hours}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="challenge">What is your biggest operational challenge?</FieldLabel>
                  <textarea id="challenge" name="challenge" required minLength={10} rows={5} value={formData.challenge} onChange={handleChange} className="w-full rounded-2xl border border-[color:var(--brand-stone-taupe)]/50 bg-[color:var(--brand-ivory)] px-4 py-3.5 outline-none transition focus:border-[color:var(--brand-olive-sage)] focus:ring-4 focus:ring-[color:var(--brand-sage-mist)]" />
                </div>

                <button type="submit" disabled={status === "submitting"} className="inline-flex w-full items-center justify-center gap-3 rounded-[1.25rem] bg-[color:var(--brand-olive-sage)] px-7 py-4 font-semibold text-white shadow-[0_18px_42px_rgba(111,127,103,0.22)] transition hover:bg-[color:var(--brand-deep-sage)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                  {status === "submitting" ? "Submitting..." : "Get My Assessment"}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-charcoal)] px-4 py-20 text-white sm:px-6 lg:px-8" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-sage-mist)]">Why SageStone</p>
            <h2 id="why-heading" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">A Partner Focused on Operational Excellence</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              SageStone brings calm, structured support to the operational details that shape your client experience, team rhythm, and ability to grow without constant administrative strain.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-charcoal)]">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="discovery-heading">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">Discovery call</p>
          <h2 id="discovery-heading" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Ready to Reclaim Your Time?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-700">
            Schedule a complimentary discovery call and learn how SageStone can help simplify your operations.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={() => trackCtaClick({ cta_text: "Book a Discovery Call", location: "discovery_cta", target_url: CALENDLY_URL })} className="mt-8 inline-flex items-center justify-center gap-3 rounded-[1.25rem] bg-[color:var(--brand-olive-sage)] px-7 py-4 font-semibold text-white shadow-[0_18px_42px_rgba(111,127,103,0.22)] transition hover:bg-[color:var(--brand-deep-sage)]">
            Book a Discovery Call <ArrowRight className="h-5 w-5" />
          </a>
          <div className="mt-10">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-soft-beige)]/70 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">FAQ</p>
            <h2 id="faq-heading" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[1.5rem] border border-[color:var(--brand-stone-taupe)]/35 bg-white/70 p-6 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold">
                  {faq.question}
                  <HelpCircle className="h-5 w-5 shrink-0 text-[color:var(--brand-olive-sage)]" aria-hidden="true" />
                </summary>
                <p className="mt-4 leading-8 text-stone-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[linear-gradient(135deg,#2E2E2E,#5C6855)] p-8 text-center text-white shadow-[0_30px_90px_rgba(46,46,46,0.18)] sm:p-12 lg:p-16">
          <Users className="mx-auto mb-5 h-10 w-10 text-[color:var(--brand-sage-mist)]" aria-hidden="true" />
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Let’s Build a More Efficient Business Together</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Take the first step toward reclaiming valuable time and focusing on growth.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={assessmentAnchor} onClick={(event) => { event.preventDefault(); trackCtaClick({ cta_text: "Get My Free Workflow Assessment", location: "final_cta", target_url: assessmentAnchor }); scrollToAssessment(); }} className="inline-flex items-center justify-center gap-3 rounded-[1.25rem] bg-white px-7 py-4 font-semibold text-[color:var(--brand-charcoal)] transition hover:bg-[color:var(--brand-sage-mist)]">
              Get My Free Workflow Assessment <ArrowRight className="h-5 w-5" />
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={() => trackCtaClick({ cta_text: "Book a Discovery Call", location: "final_cta", target_url: CALENDLY_URL })} className="inline-flex items-center justify-center rounded-[1.25rem] border border-white/50 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
