export interface CaseStudy {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  clientType: string;
  summary: string;
  services: Array<{ label: string; path: string }>;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-support-response-times",
    title: "E-Commerce Support Response Time Case Study | SageStone Inc",
    metaDescription: "See how structured e-commerce support can help improve response workflows, customer communication, and daily operations for growing online stores.",
    h1: "E-Commerce Support Response Time Case Study",
    clientType: "E-commerce brand",
    summary: "A growing online store needed a more structured way to handle order questions, customer inquiries, returns, and daily support follow-through.",
    services: [
      { label: "e-commerce virtual assistant services", path: "/ecommerce-customer-support-outsourcing/" },
      { label: "customer support outsourcing", path: "/customer-support-outsourcing/" },
      { label: "outsourced support for small businesses", path: "/outsourced-support-for-small-businesses/" },
    ],
    sections: [
      {
        heading: "Client type",
        body: "The client type for this scenario is an e-commerce brand with recurring customer communication, order support, and catalog coordination needs. No client name, testimonial, logo, or unsupported metric is used.",
      },
      {
        heading: "Challenge",
        body: "The team was managing customer questions and operational updates across multiple tools. Routine messages, order checks, return questions, and product information updates competed with higher-value work. The priority was to make support more consistent while keeping brand voice and escalation control with the internal team.",
      },
      {
        heading: "Support model",
        body: "SageStone Inc structured support around defined queues, approved response guidance, recurring checks, and escalation rules. The model focused on practical visibility rather than unsupported performance claims.",
        bullets: [
          "Daily review of assigned support queues and order-related messages.",
          "Use of approved templates for common customer questions.",
          "Escalation paths for refunds, unusual order issues, and policy exceptions.",
          "Weekly summary notes to show recurring questions and operational blockers.",
        ],
      },
      {
        heading: "Work handled by SageStone Inc",
        body: "Support can include customer inquiry triage, order status checks, return and exchange coordination, CRM updates, product catalog notes, help desk organization, and reporting support. The work aligns with SageStone Inc's e-commerce virtual assistant and outsourced customer support services.",
      },
      {
        heading: "Operational improvements",
        body: "The engagement created a more organized support workflow, clearer ownership for routine tickets, better visibility into recurring customer questions, and a practical cadence for reporting issues back to the internal team. These improvements are described qualitatively to avoid inventing results or implying outcomes that have not been documented.",
      },
      {
        heading: "Lessons for e-commerce teams",
        body: "E-commerce support works best when policies, templates, tool access, and escalation rules are prepared before volume increases. A support partner can help keep routine communication moving while the internal team stays focused on inventory, merchandising, fulfillment decisions, and growth priorities.",
      },
    ],
  },
  {
    slug: "real-estate-operations-support",
    title: "Real Estate Operations Support Case Study | SageStone Inc",
    metaDescription: "See how real estate virtual assistant support can help teams manage leads, CRM updates, listing coordination, scheduling, and client communication.",
    h1: "Real Estate Operations Support Case Study",
    clientType: "Real estate operations team",
    summary: "A real estate operations team needed more consistent administrative support for leads, CRM hygiene, listing coordination, scheduling, and routine communication.",
    services: [
      { label: "real estate virtual assistant support", path: "/real-estate-virtual-assistant-services/" },
      { label: "business operations support", path: "/business-operations-support/" },
      { label: "virtual assistant services", path: "/virtual-assistant-services/" },
      { label: "outsourced support for small businesses", path: "/outsourced-support-for-small-businesses/" },
    ],
    sections: [
      {
        heading: "Client type",
        body: "The client type for this scenario is a real estate operations team. The case study uses a generic label and does not include a fabricated client name, testimonial, review, logo, certification, or exact performance metric.",
      },
      {
        heading: "Challenge",
        body: "Real estate teams often rely on timely follow-up, clean CRM records, accurate listing coordination, and organized scheduling. In this scenario, administrative work was distributed across inboxes, calendars, CRM notes, and checklists, making it harder for the team to maintain visibility and consistency.",
      },
      {
        heading: "Support model",
        body: "SageStone Inc organized support around recurring administrative tasks, lead and CRM updates, listing workflow checklists, and communication routing. The model kept licensed or strategic decisions with the real estate team while helping routine coordination stay on track.",
        bullets: [
          "Lead and contact record updates based on the team's workflow.",
          "Calendar coordination and reminder support.",
          "Listing checklist updates and document organization.",
          "Escalation of client questions that required internal or licensed expertise.",
        ],
      },
      {
        heading: "Work handled by SageStone Inc",
        body: "Support can include CRM updates, follow-up reminders, inbox triage, scheduling assistance, listing coordination, document organization, task tracking, and operations reporting. These tasks connect real estate virtual assistant support with broader business operations support.",
      },
      {
        heading: "Operational improvements",
        body: "The support structure helped create cleaner task visibility, more consistent administrative follow-through, better organized client and lead information, and clearer escalation paths. No exact results are claimed because outcomes vary by workflow, volume, tools, and internal responsiveness.",
      },
      {
        heading: "Lessons for real estate teams",
        body: "Real estate support is strongest when teams document lead stages, communication rules, CRM requirements, listing steps, and approval boundaries. With those guardrails in place, a virtual assistant can help reduce administrative drag without replacing the expertise of licensed professionals.",
      },
    ],
  },
];

export function getCaseStudy(slug: string | undefined) {
  return caseStudies.find((study) => study.slug === slug);
}
