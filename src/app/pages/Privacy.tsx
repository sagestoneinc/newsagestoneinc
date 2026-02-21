export default function Privacy() {
  return (
    <>
      <section className="bg-gradient-to-br from-sage-50 via-white to-stone-50 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-stone-900 tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}>
            Privacy Policy
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
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>1. Information We Collect</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed mb-3">
                SageStone Inc collects information you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600 text-[0.9375rem] leading-relaxed">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information (company name, industry, website)</li>
                <li>Service inquiry details (requested services, project scope)</li>
                <li>Communication records (messages, emails, call notes)</li>
                <li>Website usage data (pages visited, time on site, referral source)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>2. How We Use Your Information</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed mb-3">
                We use collected information to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600 text-[0.9375rem] leading-relaxed">
                <li>Respond to inquiries and service requests</li>
                <li>Provide and improve our virtual assistant services</li>
                <li>Communicate updates, offers, and relevant resources</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>3. Data Sharing</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                SageStone Inc does not sell your personal information to third parties. We may share information with trusted service providers who assist us in operating our business (e.g., email services, analytics tools) under strict confidentiality agreements. We may also disclose information when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>4. Data Security</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information, including encrypted connections (SSL/TLS), secure data storage, access controls, and regular security audits. While no system is 100% secure, we strive to protect your data to the best of our ability.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>5. Cookies and Tracking</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>6. Your Rights</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600 text-[0.9375rem] leading-relaxed">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability</li>
              </ul>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed mt-3">
                To exercise any of these rights, contact us at hello@sagestoneinc.com.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>7. Data Retention</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                We retain personal information only as long as necessary for the purposes for which it was collected, or as required by law. Client engagement data is typically retained for the duration of the business relationship plus a reasonable period afterward for record-keeping purposes.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>8. Children's Privacy</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                Our services are intended for business use and are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>9. Changes to This Policy</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                We may update this Privacy Policy from time to time. Material changes will be communicated via email or a prominent notice on our website. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-stone-900 mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>10. Contact Us</h2>
              <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your data, contact us at{" "}
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
