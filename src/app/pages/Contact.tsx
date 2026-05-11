import { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import { Mail, Phone, Globe, MapPin, Clock, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const serviceOptions = [
  "Virtual Operations & Admin",
  "Real Estate Virtual Assistant",
  "Bookkeeping Support",
  "Social Media Marketing Support",
  "Lead Generation Support",
  "Graphic Design Support",
  "Data Entry & Web Research",
  "Multiple Services",
  "Not Sure Yet",
];

const workloadOptions = [
  "Part-Time (10–20 hrs/week)",
  "Full-Time (40 hrs/week)",
  "Project-Based (one-time)",
  "Not Sure Yet",
];

export default function Contact() {
  usePageMeta({
    title: "Contact Us",
    description: "Book a SageStone discovery call to discuss dedicated virtual assistant support for operations, admin, marketing, bookkeeping, lead generation, or customer service.",
    keywords: "contact SageStone Inc, book discovery call, virtual assistant consultation, managed VA support, business support inquiry",
  });

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    workload: "",
    tools: "",
    message: "",
    consent: false,
    _honeypot: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data: { success?: boolean; error?: string; message?: string };
      try {
        data = await res.json();
      } catch {
        setErrorMessage(`We couldn't reach the server (HTTP ${res.status}). Please try again or email us at hello@sagestoneinc.com.`);
        return;
      }

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Unable to send your message. Please try again or email us at hello@sagestoneinc.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-32 lg:py-40 bg-gradient-to-br from-sage-50 via-white to-stone-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-stone-900 tracking-tight mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Message Sent!
          </h1>
          <p className="text-stone-500 text-[1.0625rem] leading-relaxed mb-8">
            Thank you for reaching out! We've received your message and a team member will get back to you within 24 hours. A confirmation email has been sent to your inbox.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors text-[0.9375rem]"
            style={{ fontWeight: 500 }}
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-600 border border-sage-200 rounded-full text-[0.8125rem] mb-6" style={{ fontWeight: 500 }}>
            Get In Touch
          </span>
          <h1 className="text-stone-900 tracking-tight mb-5 max-w-3xl mx-auto" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}>
            Let's Talk About Your <span className="text-sage-500">Support Needs</span>
          </h1>
          <p className="text-stone-500 text-[1.0625rem] max-w-2xl mx-auto leading-relaxed">
            Ready to get started or just have questions? Fill out the form below and we'll reach out within 24 hours to schedule your free discovery call.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-stone-900 mb-6" style={{ fontSize: "1.375rem", fontWeight: 700 }}>
                Contact Information
              </h2>
              <p className="text-stone-500 text-[0.9375rem] leading-relaxed mb-8">
                Prefer to reach out directly? Here's how to get in touch with our team.
              </p>

              <div className="space-y-5 mb-10">
                <a href="mailto:hello@sagestoneinc.com" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-sage-50 text-sage-600 flex items-center justify-center shrink-0 group-hover:bg-sage-100 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-[0.875rem]" style={{ fontWeight: 600 }}>Email</p>
                    <p className="text-stone-500 text-[0.875rem]">hello@sagestoneinc.com</p>
                  </div>
                </a>
                <a href="tel:+12149452234" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-sage-50 text-sage-600 flex items-center justify-center shrink-0 group-hover:bg-sage-100 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-[0.875rem]" style={{ fontWeight: 600 }}>Phone</p>
                    <p className="text-stone-500 text-[0.875rem]">+1 214-945-2234</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-sage-50 text-sage-600 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-[0.875rem]" style={{ fontWeight: 600 }}>Website</p>
                    <p className="text-stone-500 text-[0.875rem]">www.sagestoneinc.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-sage-50 text-sage-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-[0.875rem]" style={{ fontWeight: 600 }}>Location</p>
                    <p className="text-stone-500 text-[0.875rem]">Remote / Worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-sage-50 text-sage-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-[0.875rem]" style={{ fontWeight: 600 }}>Response Time</p>
                    <p className="text-stone-500 text-[0.875rem]">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="p-6 rounded-2xl bg-sage-50 border border-sage-100">
                <h3 className="text-stone-900 mb-3" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
                  What happens after you submit?
                </h3>
                <ol className="space-y-2.5">
                  {[
                    "We review your submission within 24 hours",
                    "A team member reaches out to schedule a call",
                    "We discuss your needs on a free discovery call",
                    "We create a custom support proposal for you",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center text-[0.6875rem] shrink-0 mt-0.5" style={{ fontWeight: 600 }}>
                        {i + 1}
                      </span>
                      <span className="text-stone-600 text-[0.8125rem]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8 lg:p-10">
              <h2 className="text-stone-900 mb-2" style={{ fontSize: "1.375rem", fontWeight: 700 }}>
                Send Us a Message
              </h2>
              <p className="text-stone-500 text-[0.875rem] mb-8">
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from real users, catches bots */}
                <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
                  <label htmlFor="_honeypot">Leave this empty</label>
                  <input
                    type="text"
                    id="_honeypot"
                    name="_honeypot"
                    value={formData._honeypot || ""}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[0.875rem]">
                    {errorMessage}
                  </div>
                )}
                {/* Name + Business */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem]"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Company LLC"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem]"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem]"
                    />
                  </div>
                </div>

                {/* Service + Workload */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem] appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23A3ADB2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="workload" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                      Expected Workload
                    </label>
                    <select
                      id="workload"
                      name="workload"
                      value={formData.workload}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem] appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23A3ADB2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="">Select workload...</option>
                      {workloadOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <label htmlFor="tools" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                    Current Tools / Software
                  </label>
                  <input
                    type="text"
                    id="tools"
                    name="tools"
                    value={formData.tools}
                    onChange={handleChange}
                    placeholder="e.g. Slack, Google Workspace, HubSpot, QuickBooks..."
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-stone-700 text-[0.8125rem] mb-1.5" style={{ fontWeight: 500 }}>
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what tasks you'd like help with..."
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 focus:outline-none transition-all text-[0.875rem] resize-none"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckbox}
                    required
                    className="mt-1 w-4 h-4 rounded border-stone-300 text-sage-500 focus:ring-sage-400"
                  />
                  <label htmlFor="consent" className="text-stone-500 text-[0.8125rem] leading-relaxed cursor-pointer" style={{ fontWeight: 400 }}>
                    I agree to be contacted by SageStone Inc regarding my inquiry. I understand my information will be handled in accordance with the{" "}
                    <a href="/privacy" className="text-sage-600 underline hover:text-sage-700">Privacy Policy</a>.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-all duration-200 shadow-lg shadow-sage-500/25 hover:shadow-xl text-[0.9375rem] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontWeight: 600 }}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
