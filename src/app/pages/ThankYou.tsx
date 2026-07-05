import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackCtaClick } from "../lib/analytics";

const CALENDLY_URL = "https://calendly.com/d/cym9-q4q-pnm";

export default function ThankYou() {
  usePageMeta({
    title: "Thank You | SageStone Inc",
    description: "Your SageStone discovery call has been requested. Review next steps and prepare for a productive operations support conversation.",
    keywords: "SageStone thank you, discovery call confirmation, workflow assessment next steps",
  });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--brand-ivory)" }}>
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[color:var(--brand-sage-mist)]/55 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[560px] w-[560px] rounded-full bg-[color:var(--brand-soft-beige)]/65 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--brand-sage-mist)] text-[color:var(--brand-deep-sage)]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <p className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-olive-sage)]">Discovery call confirmation</p>
        <h1 className="mx-auto max-w-3xl text-[color:var(--brand-charcoal)]" style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)", fontWeight: 760, lineHeight: 1 }}>
          Thank you. We’re ready to help you build calmer operations.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[1.125rem] leading-8 text-black/66">
          If your meeting is booked, you will receive a calendar confirmation from Calendly. If you have not selected a time yet, use the booking link below to schedule your complimentary discovery call.
        </p>

        <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
          {[
            ["1", "Confirm the meeting", "Check your inbox for the calendar invite and add any key team members who should join."],
            ["2", "Prepare your bottlenecks", "List the recurring admin, inbox, CRM, scheduling, and customer support work slowing you down."],
            ["3", "Expect clear next steps", "We will discuss workflow priorities and recommend the right managed support path."],
          ].map(([number, title, copy]) => (
            <div key={title} className="rounded-[24px] border border-[color:var(--border)] bg-white/60 p-6 shadow-[0_14px_34px_rgba(46,46,46,0.05)]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-olive-sage)] font-semibold text-white">{number}</div>
              <h2 className="text-xl font-semibold text-[color:var(--brand-charcoal)]">{title}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-black/62">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackCtaClick({ location: "thank_you", cta_text: "Book a Discovery Call", target_url: CALENDLY_URL })}
            className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-[color:var(--brand-olive-sage)] px-7 py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_12px_28px_rgba(111,127,103,0.22)] transition-colors hover:bg-[color:var(--brand-deep-sage)]"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link to="/contact#workflow-assessment" className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-[color:var(--brand-olive-sage)] bg-white/40 px-7 py-3.5 text-[0.9375rem] font-medium text-[color:var(--brand-charcoal)] transition-colors hover:bg-[color:var(--brand-sage-mist)]/70">
            <ClipboardList className="h-4 w-4" />
            Share Workflow Details
          </Link>
        </div>
      </div>
    </section>
  );
}
