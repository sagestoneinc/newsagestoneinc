import { usePageMeta } from "../hooks/usePageMeta";

export default function Terms() {
  usePageMeta({
    title: "Terms of Service",
    description: "Review SageStone Inc. terms of service for website use, discovery calls, and managed virtual assistant support relationships.",
    keywords: "terms of service, SageStone Inc terms, virtual assistant service agreement, VA service terms, client obligations",
  });

  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-stone-900 tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}>
            Terms of Service
          </h1>
          <p className="text-stone-500 text-[0.9375rem]">
            Last updated: February 1, 2026
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-stone space-y-8">
            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>1. Acceptance of Terms</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                By accessing and using the SageStone Inc website (www.sagestoneinc.com) and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>2. Services</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                SageStone Inc provides virtual assistant services including but not limited to: virtual operations and administration, real estate support, bookkeeping, social media marketing, lead generation, graphic design, and data entry and web research. The specific scope, deliverables, and terms of each engagement are defined in individual service agreements between SageStone Inc and the client.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>3. Client Obligations</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed mb-3">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600 text-[0.9375rem] leading-relaxed">
                <li>Provide accurate information necessary for service delivery</li>
                <li>Respond to communications in a timely manner</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Not engage in any unlawful activities using our services</li>
                <li>Provide necessary tool access and credentials as required</li>
              </ul>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>4. Payment Terms</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                Payment terms are outlined in individual service agreements. Generally, services are billed monthly in advance. Late payments may be subject to a fee of 1.5% per month on the outstanding balance. SageStone Inc reserves the right to suspend services if payment is more than 15 days overdue.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>5. Termination</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                Either party may terminate a service engagement with 30 days written notice. SageStone Inc reserves the right to terminate services immediately in cases of non-payment, breach of these terms, or illegal activity. Upon termination, all outstanding fees become immediately due.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>6. Confidentiality</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. All virtual assistants sign comprehensive NDAs before beginning work. Confidentiality obligations survive the termination of the service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>7. Limitation of Liability</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                SageStone Inc's liability for any claim arising from services shall not exceed the total fees paid by the client in the three months preceding the claim. SageStone Inc shall not be liable for any indirect, incidental, special, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>8. Intellectual Property</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                All work product created by SageStone Inc virtual assistants as part of a client engagement belongs to the client upon full payment. The SageStone Inc brand, logo, and website content remain the intellectual property of SageStone Inc.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>9. Modifications</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                SageStone Inc reserves the right to modify these Terms of Service at any time. Clients will be notified of significant changes via email. Continued use of our services after modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>10. Contact</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:hello@sagestoneinc.com" className="text-sage-600 underline hover:text-sage-700">
                  hello@sagestoneinc.com
                </a>{" "}
                or call{" "}
                <a href="tel:+12149452234" className="text-sage-600 underline hover:text-sage-700">
                  +1 214-945-2234
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
