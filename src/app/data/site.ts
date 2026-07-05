export const SITE_URL = "https://www.sagestoneinc.com";
export const SITE_NAME = "SageStone Inc";
export const HOMEPAGE_TITLE = "Virtual Assistant Services & Business Operations Support | SageStone Inc";
export const HOMEPAGE_DESCRIPTION =
  "SageStone Inc provides virtual assistant services, customer support outsourcing, business operations support, inbox management, calendar support, CRM organization, and back-office support for growing teams.";
export const OG_IMAGE = `${SITE_URL}/assets/og-image.jpg`;

export type CanonicalRoute = {
  path: string;
  title: string;
  description: string;
  kind?: "page" | "service" | "blog" | "case-study";
};

export const canonicalRoutes: CanonicalRoute[] = [
  { path: "/", title: HOMEPAGE_TITLE, description: HOMEPAGE_DESCRIPTION, kind: "page" },
  {
    path: "/services",
    title: "Virtual Assistant & Operations Support Services | SageStone Inc",
    description:
      "Explore SageStone Inc services for virtual assistance, customer support outsourcing, ecommerce operations, CRM organization, inbox management, calendar support, and back-office workflows.",
    kind: "page",
  },
  {
    path: "/about",
    title: "About SageStone Inc | Virtual Assistant & Operations Support",
    description:
      "Learn how SageStone Inc provides calm, reliable virtual assistant services and business operations support for founders, small businesses, agencies, ecommerce brands, and growing teams.",
    kind: "page",
  },
  {
    path: "/experience",
    title: "Operations Support Experience | SageStone Inc",
    description:
      "Explore SageStone Inc experience across virtual assistance, customer support outsourcing, CRM organization, ecommerce support, calendar management, inbox management, and operational workflows.",
    kind: "page",
  },
  {
    path: "/faq",
    title: "Virtual Assistant Services FAQ | SageStone Inc",
    description:
      "Answers to common questions about SageStone Inc virtual assistant services, customer support outsourcing, ecommerce support, business operations support, and back-office workflows.",
    kind: "page",
  },
  {
    path: "/contact",
    title: "Contact SageStone Inc | Virtual Assistant & Operations Support",
    description:
      "Contact SageStone Inc to discuss virtual assistant services, customer support outsourcing, inbox management, calendar support, CRM organization, ecommerce support, or business operations support.",
    kind: "page",
  },
  {
    path: "/case-studies",
    title: "Virtual Assistant & Operations Case Studies | SageStone Inc",
    description:
      "Read SageStone Inc case studies showing how organized virtual assistant support, customer support workflows, ecommerce operations, and business operations support can improve daily execution.",
    kind: "page",
  },
  {
    path: "/operations-audit",
    title: "Operations Audit for Growing Teams | SageStone Inc",
    description:
      "A focused operations audit for founders and growing teams that need clearer handoffs, SOPs, CRM hygiene, inbox workflows, customer support processes, and back-office support.",
    kind: "service",
  },
  {
    path: "/blog",
    title: "Virtual Assistant & Operations Support Blog | SageStone Inc",
    description:
      "Practical articles on virtual assistant services, customer support outsourcing, ecommerce support, SOPs, CRM organization, inbox management, calendar support, and business operations.",
    kind: "page",
  },
  {
    path: "/fractional-customer-success-consultant",
    title: "Founder & Customer Operations Support | SageStone Inc",
    description:
      "SageStone Inc helps founders and growing teams organize customer workflows, support handoffs, CRM updates, follow-up routines, and recurring operations without adding internal overhead.",
    kind: "service",
  },
  {
    path: "/customer-success-operations-consultant",
    title: "Customer Operations Support Services | SageStone Inc",
    description:
      "Customer operations support for teams that need clearer workflows, CRM organization, onboarding handoffs, customer communication routines, support SOPs, and retention-ready processes.",
    kind: "service",
  },
  {
    path: "/shopify-ecommerce-operations-support",
    title: "Shopify Ecommerce Operations Support | SageStone Inc",
    description:
      "Shopify ecommerce operations support for customer inquiries, order follow-up, returns, support queues, product updates, SOPs, and recurring store operations.",
    kind: "service",
  },
  {
    path: "/customer-onboarding-consultant",
    title: "Customer Onboarding Support Services | SageStone Inc",
    description:
      "Support for customer onboarding workflows, kickoff coordination, handoffs, checklists, CRM updates, customer communication, and implementation follow-through.",
    kind: "service",
  },
  {
    path: "/customer-onboarding-workflow-cleanup",
    title: "Customer Onboarding Workflow Cleanup | SageStone Inc",
    description:
      "Cleanup support for onboarding checklists, handoffs, templates, CRM steps, customer follow-up, SOPs, and workflow visibility for growing service teams.",
    kind: "service",
  },
  {
    path: "/support-operations-consultant",
    title: "Support Operations Services | SageStone Inc",
    description:
      "Support operations services for ticket triage, inbox management, macros, escalation paths, knowledge base routines, customer follow-up, reporting, and QA support.",
    kind: "service",
  },
  {
    path: "/support-sops-crm-workflow-improvements",
    title: "Support SOPs & CRM Workflow Improvements | SageStone Inc",
    description:
      "Improve support SOPs, CRM workflows, documentation, inbox routing, customer communication, escalation paths, and recurring operational routines.",
    kind: "service",
  },
  {
    path: "/sop-consultant",
    title: "SOP Support for Business Operations | SageStone Inc",
    description:
      "SOP support for virtual assistant services, customer support outsourcing, ecommerce operations, CRM maintenance, inbox workflows, calendar routines, and back-office processes.",
    kind: "service",
  },
  {
    path: "/customer-retention-consultant",
    title: "Customer Retention Operations Support | SageStone Inc",
    description:
      "Operational support for retention workflows, customer follow-up, support summaries, renewal readiness, CRM updates, lifecycle communication, and post-onboarding routines.",
    kind: "service",
  },
  {
    path: "/shopify-operations-support",
    title: "Shopify Operations Support | SageStone Inc",
    description:
      "Shopify operations support for customer service workflows, order follow-up, returns, product updates, SOPs, ecommerce inboxes, and recurring store operations.",
    kind: "service",
  },
  {
    path: "/blog/improve-saas-customer-onboarding",
    title: "How to Improve Customer Onboarding Workflows | SageStone Inc",
    description:
      "A practical guide to improving customer onboarding with clearer milestones, handoffs, customer education, CRM visibility, and recurring workflow support.",
    kind: "blog",
  },
  {
    path: "/blog/shopify-customer-support-workflow-checklist",
    title: "Shopify Customer Support Workflow Checklist | SageStone Inc",
    description:
      "A Shopify support workflow checklist for customer inquiries, order questions, returns, macros, escalation rules, and recurring ecommerce support improvements.",
    kind: "blog",
  },
  {
    path: "/case-studies/saas-onboarding-workflow-case-study",
    title: "Customer Onboarding Workflow Case Study | SageStone Inc",
    description:
      "A case study showing how onboarding workflows can be clarified with better handoffs, milestones, SOPs, and customer communication visibility.",
    kind: "case-study",
  },
  {
    path: "/case-studies/shopify-support-operations-case-study",
    title: "Shopify Support Operations Case Study | SageStone Inc",
    description:
      "A case study showing how Shopify support operations can be improved with clearer queues, SOPs, templates, and escalation workflows.",
    kind: "case-study",
  },
];

export function canonicalUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/$/, "")}/`;
}

export function routeByPath(path: string) {
  return canonicalRoutes.find((route) => route.path === (path === "/" ? "/" : path.replace(/\/$/, "")));
}
