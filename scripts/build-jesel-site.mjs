import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const base = "https://www.jeselcura.me";

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Case Studies", "/case-studies"],
  ["About Jesel", "/about"],
  ["Resources", "/blog"],
  ["Contact", "/contact"],
];

const sitemapRoutes = [
  "/",
  "/services",
  "/operations-audit",
  "/case-studies",
  "/experience",
  "/about",
  "/faq",
  "/contact",
  "/blog",
  "/fractional-customer-success-manager",
  "/shopify-operations-support",
  "/customer-onboarding-workflows",
  "/sop-consulting",
  "/crm-workflow-cleanup",
  "/support-operations-consulting",
  "/ecommerce-operations-consultant",
  "/blog/build-sops-that-help-your-team-scale",
  "/blog/operating-rhythms-for-remote-teams",
  "/blog/real-estate-operations-reduce-friction",
  "/blog/ecommerce-back-office-operations",
  "/blog/improve-saas-customer-onboarding",
  "/blog/shopify-customer-support-workflow-checklist",
  "/case-studies/saas-onboarding-workflow-case-study",
  "/case-studies/shopify-support-operations-case-study",
];

const serviceCards = [
  {
    title: "Fractional Customer Success Manager",
    href: "/fractional-customer-success-manager",
    badge: "Recurring CS ownership",
    text: "Ongoing customer success and operations support for teams that need a steadier operating rhythm.",
  },
  {
    title: "Shopify Operations Support",
    href: "/shopify-operations-support",
    badge: "Shopify and ecommerce",
    text: "Cleaner order issue handling, response templates, escalation paths, and support SOPs.",
  },
  {
    title: "Operations Audit",
    href: "/operations-audit",
    badge: "Diagnostic starting point",
    text: "A focused review of onboarding, support, CRM, SOP, and handoff gaps with a practical action plan.",
  },
  {
    title: "Customer Onboarding Workflows",
    href: "/customer-onboarding-workflows",
    badge: "New customer starts",
    text: "Cleaner activation steps, welcome sequences, handoffs, and CRM visibility for new customers.",
  },
  {
    title: "SOP Consulting",
    href: "/sop-consulting",
    badge: "Repeatable systems",
    text: "Practical documentation for recurring support, onboarding, admin, and operations work.",
  },
  {
    title: "Support Operations Consulting",
    href: "/support-operations-consulting",
    badge: "Support consistency",
    text: "Inbox flows, ticket routing, escalation paths, macros, documentation, and response standards.",
  },
  {
    title: "CRM Workflow Cleanup",
    href: "/crm-workflow-cleanup",
    badge: "Customer visibility",
    text: "Cleaner records, ownership, lifecycle visibility, follow-up routines, and customer success handoffs.",
  },
  {
    title: "Ecommerce Operations Consultant",
    href: "/ecommerce-operations-consultant",
    badge: "Back-office relief",
    text: "Back-office workflows, fulfillment handoffs, SOPs, and customer communication for ecommerce teams.",
  },
];

const proofPoints = [
  ["Customer success operations", "Onboarding, lifecycle, and retention work with clearer ownership."],
  ["Shopify and ecommerce workflows", "Support and order issue paths that are easier to follow."],
  ["SOPs and handoffs", "Documentation that helps work move without founder translation."],
  ["Support team consistency", "Macros, escalation paths, and response habits that protect trust."],
  ["Founder-led operations relief", "Practical systems that reduce recurring customer admin."],
];

const pages = [
  {
    route: "/",
    title: "Fractional Customer Success Consultant for SaaS & Shopify | Jesel Cura",
    description: "Fractional customer success and operations support for SaaS, Shopify, and ecommerce teams. Improve onboarding, support workflows, SOPs, CRM visibility, and retention systems.",
    h1: "Fractional Customer Success & Operations Consultant",
    intro: "Clean up onboarding, support workflows, SOPs, customer handoffs, and retention operations so your team can scale with less chaos.",
    sections: [
      {
        type: "trustChips",
        id: "trust-chips",
        items: ["SaaS", "Shopify", "Ecommerce", "Customer success", "Support operations"],
      },
      {
        type: "proofStrip",
        id: "proof-strip",
        items: proofPoints,
      },
      {
        type: "serviceGrid",
        id: "service-discovery",
        title: "Choose the workflow that needs relief",
        text: "Start with the customer-facing work that is slowing response, onboarding, retention, or founder focus.",
      },
      {
        type: "audience",
        id: "who-this-is-for",
        title: "Who this is for",
        text: "Founder-led teams that need practical customer operations support without turning the business into a corporate machine.",
        items: [
          ["Founder-led teams", "You are still too involved in onboarding, support follow-up, or recurring customer admin."],
          ["Lean CS and support teams", "Customers need faster, warmer, more consistent answers, but the workflow behind support is scattered."],
          ["Shopify and ecommerce operators", "Order issues, customer questions, SOPs, and handoffs need a calmer operating rhythm."],
          ["SaaS teams preparing to scale", "Customer success needs cleaner activation, CRM visibility, and retention habits before the next hire."],
        ],
      },
      {
        type: "why",
        id: "why-this-works",
        title: "Why this works",
        text: "The work is useful because it turns customer friction into clear ownership, repeatable systems, and calmer team habits.",
        items: [
          ["Diagnose friction", "Find the handoffs, delays, and repeat questions that create customer or founder drag."],
          ["Clean up workflows", "Clarify the owner, tool, customer message, internal note, and next action."],
          ["Document repeatable systems", "Turn recurring support, onboarding, and admin work into practical SOPs."],
          ["Improve customer-facing consistency", "Make responses, escalation paths, and follow-up habits easier to trust."],
        ],
      },
      {
        type: "process",
        id: "how-work-starts",
        title: "How the work starts",
        items: [
          ["Identify the bottleneck", "Look at where customers wait, founders step in, or the team repeats the same explanation."],
          ["Map the workflow", "Clarify the trigger, owner, tool, customer message, internal note, and next action."],
          ["Prioritize the fixes", "Choose the practical changes that reduce customer friction without adding process weight."],
          ["Implement practical systems", "Improve the workflow with usable SOPs, better CRM visibility, and clearer communication."],
        ],
      },
      {
        type: "proof",
        id: "proof-preview",
        title: "Case study preview",
        text: "Proof should stay specific: the workflow before, the operational change, and the customer or team outcome.",
      },
      {
        type: "resources",
        id: "insight-preview",
        title: "Latest resources",
        text: "Practical writing for the recurring customer operations questions lean teams keep running into.",
      },
    ],
    heroImage: true,
    jsonType: "ProfessionalService",
  },
  {
    route: "/services",
    title: "Customer Success & Operations Consulting Services | Jesel Cura",
    description: "Explore operations audits, optimization sprints, onboarding support, SOP development, and fractional customer success operations support for SaaS and e-commerce teams.",
    h1: "Customer Success and Operations Consulting Services",
    intro: "Choose the engagement that matches your current customer operations bottleneck.",
    sections: [
      { type: "serviceGrid", title: "Core services", text: "Each service keeps a specific keyword intent and a specific operational outcome." },
      {
        type: "split",
        title: "Start with the workflow that creates the most drag",
        text: "The right starting point is usually the work that delays customer response, slows onboarding, creates CRM ambiguity, or keeps founders in recurring support admin.",
        bullets: ["Need a diagnosis first? Start with an operations audit.", "Need recurring ownership? Start with fractional CS support.", "Need documentation? Start with SOP consulting.", "Need ecommerce clarity? Start with Shopify or ecommerce operations support."],
      },
    ],
    jsonType: "CollectionPage",
  },
  {
    route: "/operations-audit",
    title: "Customer Success Operations Audit | Jesel Cura",
    description: "Audit SaaS or Shopify onboarding, support workflows, SOPs, handoffs, and operations bottlenecks with a prioritized action plan.",
    h1: "Customer Success and Operations Audit",
    intro: "A focused review of the workflows that shape onboarding quality, support consistency, handoffs, SOPs, CRM visibility, and retention risk.",
    sections: [
      { type: "cards", title: "Audit focus areas", items: [["Onboarding", "Activation steps, welcome handoffs, customer communication, and time-to-value blockers."], ["Support operations", "Inbox categories, ticket routing, escalations, macros, documentation, and response consistency."], ["CRM and SOPs", "Record quality, ownership, lifecycle stages, repeatable checklists, and process documentation."]] },
      { type: "split", title: "The outcome is a practical action plan", text: "You leave with prioritized fixes, not a vague strategy deck. The goal is to show what to clean up first, what to document, and what can wait.", bullets: ["Best for SaaS, Shopify, and lean service teams", "Useful before hiring or delegating", "Built around current tools and real customer workflows"] },
    ],
    jsonType: "Service",
  },
  {
    route: "/fractional-customer-success-manager",
    title: "Fractional Customer Success Manager for Lean SaaS & Ecommerce Teams | Jesel Cura",
    description: "Ongoing fractional customer success manager support for SaaS, Shopify, and ecommerce teams that need onboarding, support operations, SOPs, CRM visibility, and retention routines without hiring full time.",
    h1: "Fractional Customer Success Manager for Lean SaaS & Ecommerce Teams",
    intro: "Ongoing customer success and operations support for teams that need better customer rhythms before a full-time hire makes sense.",
    sections: [
      { type: "cards", title: "What support can include", items: [["Onboarding ownership", "Clarify customer handoffs, welcome steps, activation checkpoints, and follow-up routines."], ["Support workflow care", "Keep response templates, escalations, support notes, and recurring customer requests easier to manage."], ["Retention operations", "Improve lifecycle touchpoints, risk visibility, check-ins, renewal prep, and customer health routines."]] },
      { type: "process", title: "A steady support rhythm", items: [["Map", "Document current customer stages, tools, owners, and recurring gaps."], ["Clean up", "Improve the workflows that create repeated customer or founder friction."], ["Maintain", "Support recurring CS operations so the team is not rebuilding the same habits each week."]] },
    ],
    jsonType: "Service",
  },
  {
    route: "/shopify-operations-support",
    title: "Shopify Operations Support | Jesel Cura",
    description: "Shopify operations support for ecommerce teams improving support workflows, SOPs, order issue processes, and customer experience.",
    h1: "Shopify Operations Support for Growing Ecommerce Teams",
    intro: "Practical help with the support and operations workflows that sit behind a better Shopify customer experience.",
    sections: [
      { type: "cards", title: "Shopify support includes", items: [["Order issue workflows", "Document refund, return, exchange, fulfillment, and escalation steps so support can respond consistently."], ["Helpdesk cleanup", "Improve categories, macros, response templates, and recurring support notes."], ["Customer experience habits", "Clarify post-purchase communication, customer handoffs, and operations follow-up."]] },
      { type: "split", title: "For ecommerce operators who need less support chaos", text: "This work is best for Shopify and ecommerce teams with repeated customer questions, scattered SOPs, unclear escalation paths, or customer operations living in too many places.", bullets: ["Shopify support workflows", "Ecommerce operations support", "SOPs for recurring order issues", "Customer communication cleanup"] },
    ],
    jsonType: "Service",
  },
  {
    route: "/customer-onboarding-workflows",
    title: "Customer Onboarding Workflow Consulting | Jesel Cura",
    description: "Customer onboarding workflow consulting for cleaner onboarding steps, handoffs, documentation, checklists, CRM visibility, and customer communication.",
    h1: "Customer Onboarding Workflow Consulting",
    intro: "Cleaner onboarding steps, handoffs, checklists, customer communication, and CRM visibility for teams that want smoother customer starts.",
    sections: [
      { type: "cards", title: "Onboarding support", items: [["Welcome flow cleanup", "Clarify what customers receive, when they receive it, and who owns the next step."], ["Handoff visibility", "Improve the transition from sales or signup into delivery, support, or customer success."], ["Activation checklists", "Build practical steps that help customers reach value without extra founder follow-up."]] },
      { type: "split", title: "Better onboarding reduces later support load", text: "When onboarding is clear, customers ask fewer repeated questions and teams spend less time rebuilding context.", bullets: ["Customer onboarding consulting", "SaaS onboarding workflows", "Customer handoff cleanup", "CRM onboarding visibility"] },
    ],
    jsonType: "Service",
  },
  {
    route: "/sop-consulting",
    title: "SOP Consulting for Small Teams | Jesel Cura",
    description: "SOP consulting for small teams that need repeatable workflows, documentation, handoff notes, checklists, and process clarity before delegating work.",
    h1: "SOP Consulting for Small Teams",
    intro: "Turn recurring support, onboarding, CRM, and operations work into usable documentation that people can actually follow.",
    sections: [
      { type: "cards", title: "SOP work covers", items: [["Workflow capture", "Identify the recurring steps, owners, tools, exceptions, and escalation points."], ["Checklist design", "Create lightweight SOPs that support real work instead of sitting in a folder."], ["Delegation readiness", "Make recurring work easier to hand off without lowering standards or losing context."]] },
      { type: "split", title: "Documentation should reduce questions", text: "Good SOPs make work easier to repeat, review, train, and improve. They should not become another maintenance burden.", bullets: ["SOP consulting", "Process documentation", "Support SOPs", "Customer success documentation"] },
    ],
    jsonType: "Service",
  },
  {
    route: "/crm-workflow-cleanup",
    title: "CRM Workflow Cleanup for Customer Success and Operations Teams | Jesel Cura",
    description: "CRM workflow cleanup for cleaner records, better ownership, reliable follow-ups, lifecycle visibility, handoffs, and customer success operations.",
    h1: "CRM Workflow Cleanup for Customer Success and Operations Teams",
    intro: "Improve the CRM habits behind customer ownership, follow-up visibility, lifecycle stages, handoffs, and reporting confidence.",
    sections: [
      { type: "cards", title: "CRM cleanup areas", items: [["Record quality", "Clean up duplicates, missing fields, stale notes, unclear ownership, and lifecycle gaps."], ["Follow-up routines", "Make next steps, customer risks, renewals, and check-ins easier to see and act on."], ["Team visibility", "Create a CRM workflow that supports customer success, support, and operations handoffs."]] },
      { type: "split", title: "A CRM should answer operational questions", text: "The goal is not a prettier database. The goal is clearer ownership, better timing, and fewer customer details falling through the cracks.", bullets: ["CRM workflow consultant", "Customer success operations", "Lifecycle visibility", "Customer handoff cleanup"] },
    ],
    jsonType: "Service",
  },
  {
    route: "/support-operations-consulting",
    title: "Support Operations Consulting for Lean Teams | Jesel Cura",
    description: "Support operations consulting for inbox flows, ticket routing, escalation paths, response consistency, macros, SOPs, and support documentation.",
    h1: "Support Operations Consulting for Lean Teams",
    intro: "Build support workflows that make customer questions easier to route, answer, document, and improve over time.",
    sections: [
      { type: "cards", title: "Support operations focus", items: [["Inbox and ticket flow", "Clarify categories, routing, ownership, and escalation rules."], ["Response consistency", "Improve macros, templates, tone guidance, and support documentation."], ["Support insight", "Track repeated customer friction so operations improvements come from real patterns."]] },
      { type: "split", title: "For teams where support is becoming harder to manage", text: "Support operations consulting helps lean teams stay responsive without creating a bigger mess behind the scenes.", bullets: ["Support operations consulting", "Helpdesk workflow cleanup", "Support SOPs", "Customer communication systems"] },
    ],
    jsonType: "Service",
  },
  {
    route: "/ecommerce-operations-consultant",
    title: "Ecommerce Operations Consultant for Growing Teams | Jesel Cura",
    description: "Ecommerce operations consulting for back-office workflows, support operations, customer communication, fulfillment handoffs, SOPs, and process documentation.",
    h1: "Ecommerce Operations Consultant for Growing Teams",
    intro: "Improve the back-office and customer-facing operations that help ecommerce teams respond, fulfill, document, and grow with less friction.",
    sections: [
      { type: "cards", title: "Ecommerce operations support", items: [["Back-office workflows", "Clean up recurring tasks around customer communication, order issues, documentation, and admin."], ["Fulfillment handoffs", "Clarify what happens when order status, inventory, customer requests, or exceptions need attention."], ["Operations documentation", "Create SOPs and checklists that make repeat issues easier to handle consistently."]] },
      { type: "split", title: "For ecommerce teams preparing to scale", text: "Growth puts pressure on communication, support, documentation, and handoffs. Cleaner operations make that pressure easier to absorb.", bullets: ["Ecommerce operations consultant", "Shopify operations support", "Customer support workflows", "Back-office SOPs"] },
    ],
    jsonType: "Service",
  },
  {
    route: "/about",
    title: "About Jesel Cura | CS & Operations Consultant",
    description: "Learn how Jesel Cura helps SaaS, Shopify, and e-commerce businesses improve customer onboarding, support workflows, SOPs, retention, and operational consistency.",
    h1: "About Jesel Cura",
    intro: "Jesel helps lean teams bring calm structure to the customer-facing workflows that founders, operators, and support teams often carry manually.",
    sections: [
      { type: "split", title: "How I work", text: "My work is practical, organized, and grounded in the systems your team already uses. The goal is to make customer operations easier to run, not to create process theater.", bullets: ["Clear ownership", "Warm customer communication", "Workflow documentation", "Founder and operator relief"] },
      { type: "cards", title: "Operating principles", items: [["Practical clarity", "Recommendations need to turn into work your team can actually use."], ["Customer respect", "Support and onboarding should feel organized from the customer's side."], ["Calm execution", "Strong operations reduce urgency instead of creating more noise."]] },
    ],
    heroImage: true,
    jsonType: "Person",
  },
  {
    route: "/experience",
    title: "Customer Success & Operations Experience | Jesel Cura",
    description: "Explore Jesel Cura's experience across customer success, onboarding, support workflows, SOPs, Shopify operations, and operational execution.",
    h1: "Customer Success and Operations Experience",
    intro: "Experience across customer success, support operations, onboarding workflows, SOPs, Shopify operations, CRM cleanup, and remote team coordination.",
    sections: [
      { type: "cards", title: "Experience areas", items: [["Customer success operations", "Onboarding, lifecycle touchpoints, retention routines, and customer handoff cleanup."], ["Support and ecommerce", "Support workflows, helpdesk habits, Shopify operations, and customer communication systems."], ["Process and documentation", "SOPs, CRM cleanup, recurring admin, reporting, and team handoff routines."]] },
      { type: "split", title: "The common thread is operational relief", text: "The work helps teams move from reactive customer operations to repeatable systems with clearer ownership.", bullets: ["SaaS and ecommerce teams", "Founder-led operations", "Customer support workflows", "Remote coordination"] },
    ],
    jsonType: "ProfilePage",
  },
  {
    route: "/case-studies",
    title: "Customer Success & Operations Case Studies | Jesel Cura",
    description: "See how Jesel Cura helps SaaS and e-commerce teams improve onboarding, support operations, SOPs, retention workflows, and customer experience.",
    h1: "Customer Success and Operations Case Studies",
    intro: "Examples of how customer onboarding, support operations, Shopify workflows, and SOP cleanup can become clearer and easier to manage.",
    sections: [
      { type: "cards", title: "Featured studies", items: [["SaaS onboarding workflow", "A lean SaaS team needed clearer handoffs, activation steps, CRM visibility, and customer success ownership."], ["Shopify support operations", "An ecommerce team needed cleaner order issue workflows, support categories, response templates, and escalation rules."]] },
      { type: "split", title: "Proof structure to keep building", text: "Case studies should stay specific: workflow before, operational change, customer or team outcome, and what can be reused.", bullets: ["Onboarding workflow improvements", "Support SOP cleanup", "Shopify operations support", "Customer experience outcomes"] },
    ],
    jsonType: "CollectionPage",
  },
  {
    route: "/faq",
    title: "Customer Success Consulting FAQ | Jesel Cura",
    description: "Get answers about working with Jesel Cura for customer success consulting, onboarding workflows, support operations, Shopify operations, SOPs, and fractional support.",
    h1: "Frequently Asked Questions",
    intro: "Answers about audits, fractional support, Shopify operations, onboarding workflows, SOPs, CRM cleanup, and how engagements usually start.",
    sections: [
      { type: "faq", title: "Common questions", items: [["What does a customer success operations consultant do?", "A customer success operations consultant improves the workflows behind onboarding, support, customer communication, SOPs, CRM follow-up, and retention so teams can serve customers more consistently."], ["Can you help with Shopify support workflows?", "Yes. Shopify operations support can include helpdesk categories, response templates, escalation paths, order issue workflows, return or refund coordination, and Shopify SOPs."], ["Do you create SOPs and process documentation?", "Yes. SOP development and process documentation are core parts of the work, especially for onboarding, support operations, customer handoffs, CRM workflows, and recurring admin tasks."], ["How do we decide where to start?", "If the operational problem is unclear, start with an operations audit. If the need is recurring ownership, start with fractional customer success support."]] },
    ],
    jsonType: "FAQPage",
  },
  {
    route: "/blog",
    title: "CS & Operations Insights | Jesel Cura Blog",
    description: "Practical articles on onboarding, support operations, SOPs, retention workflows, Shopify operations, and customer success for lean teams.",
    h1: "Customer Success and Operations Insights",
    intro: "Practical writing for founders, customer success teams, Shopify operators, and lean teams building better customer operations.",
    sections: [
      { type: "blogGrid", title: "Latest resources" },
    ],
    jsonType: "Blog",
  },
  {
    route: "/contact",
    title: "Contact Jesel Cura | Discovery Call",
    description: "Contact Jesel Cura to discuss customer success consulting, operations support, onboarding workflows, SOPs, Shopify operations, and ecommerce support.",
    h1: "Contact Jesel Cura",
    intro: "Tell me where customer operations feel heavy. I will read the context and reply with a practical next step.",
    sections: [
      { type: "contact", title: "What happens next" },
      { type: "split", title: "Before you write", text: "A short note about the workflow, customer issue, tool stack, or operational drag is enough to start.", bullets: ["Customer onboarding cleanup", "Shopify or ecommerce support operations", "SOP and CRM workflow improvement", "Fractional customer success support"] },
    ],
    jsonType: "ContactPage",
  },
];

const extraPages = [];

const blogPosts = [
  {
    route: "/blog/build-sops-that-help-your-team-scale",
    title: "How to Build SOPs That Help Your Team Scale | Jesel Cura",
    description: "A practical guide to building SOPs for scaling teams without creating documentation nobody uses.",
    h1: "How to Build SOPs That Help Your Team Scale",
    intro: "Useful SOPs make recurring work easier to repeat, review, and hand off. They should reduce questions instead of creating another place to search.",
    topic: "SOP consulting",
  },
  {
    route: "/blog/operating-rhythms-for-remote-teams",
    title: "Operating Rhythms for Remote Teams | Jesel Cura",
    description: "How remote teams can use operating rhythms to clarify ownership, follow-ups, customer work, and weekly priorities.",
    h1: "Operating Rhythms for Remote Teams",
    intro: "A remote team needs a visible rhythm for ownership, handoffs, customer work, and follow-up. Without it, small delays become operating noise.",
    topic: "Operations support",
  },
  {
    route: "/blog/real-estate-operations-reduce-friction",
    title: "How Real Estate Operations Teams Can Reduce Friction | Jesel Cura",
    description: "Operational improvements for real estate teams that need clearer handoffs, vendor coordination, recurring process documentation, and customer communication.",
    h1: "How Real Estate Operations Teams Can Reduce Friction",
    intro: "Real estate operations depend on communication, documentation, and follow-up. Cleaner handoffs help teams stay responsive when many moving parts compete for attention.",
    topic: "Operations workflows",
  },
  {
    route: "/blog/ecommerce-back-office-operations",
    title: "Ecommerce Back-Office Operations: What to Clean Up Before Scaling | Jesel Cura",
    description: "A checklist for ecommerce back-office operations, including support workflows, customer communication, fulfillment handoffs, SOPs, and CRM/customer data cleanup.",
    h1: "Ecommerce Back-Office Operations: What to Clean Up Before Scaling",
    intro: "Before ecommerce growth feels smoother, the support, fulfillment, SOP, and customer communication workflows behind the store need to be easier to operate.",
    topic: "Ecommerce operations",
  },
  {
    route: "/blog/improve-saas-customer-onboarding",
    title: "Improve SaaS Customer Onboarding | Jesel Cura",
    description: "Learn how to improve SaaS customer onboarding with clearer handoffs, activation steps, customer communication, SOPs, and retention workflows.",
    h1: "How to Improve SaaS Customer Onboarding",
    intro: "Better SaaS onboarding usually comes from cleaner handoffs, clearer activation steps, better customer communication, and less hidden ownership.",
    topic: "SaaS onboarding",
  },
  {
    route: "/blog/shopify-customer-support-workflow-checklist",
    title: "Shopify Support Workflow Checklist | Jesel Cura",
    description: "Use this Shopify customer support workflow checklist to organize order issues, support categories, SOPs, escalation paths, and customer communication.",
    h1: "Shopify Customer Support Workflow Checklist",
    intro: "Shopify support gets easier when order issues, return questions, escalation paths, macros, and customer communication standards are documented clearly.",
    topic: "Shopify support",
  },
];

const caseStudies = [
  {
    route: "/case-studies/saas-onboarding-workflow-case-study",
    title: "SaaS Onboarding Case Study | Jesel Cura",
    description: "A SaaS onboarding workflow case study focused on customer handoffs, activation steps, CRM workflows, SOPs, and customer success operations.",
    h1: "SaaS Onboarding Workflow Case Study",
    intro: "A lean SaaS team needed a clearer onboarding path so customer handoffs, activation steps, CRM updates, and follow-up ownership were easier to see.",
    topic: "SaaS onboarding workflow",
    problem: "Customer handoffs, activation steps, and CRM updates were too hard to see.",
    changed: "The onboarding path was mapped into clearer owners, steps, and follow-up routines.",
    outcome: "The team had a cleaner way to guide new customers without repeated founder intervention.",
  },
  {
    route: "/case-studies/shopify-support-operations-case-study",
    title: "Shopify Support Ops Case Study | Jesel Cura",
    description: "A Shopify support operations case study focused on support workflows, order issue processes, SOPs, escalation paths, and customer experience.",
    h1: "Shopify Support Operations Case Study",
    intro: "A Shopify team needed cleaner support workflows for order issues, response templates, escalation paths, SOPs, and customer communication.",
    topic: "Shopify support operations",
    problem: "Recurring order questions, exceptions, and escalations were handled inconsistently.",
    changed: "Support categories, response templates, escalation paths, and SOPs were clarified.",
    outcome: "Customer-facing support became easier to answer, route, and document consistently.",
  },
];

const publicationDate = "2026-07-05";

const ctaByRoute = {
  "/": ["Book a Discovery Call", "/contact", "Explore Consulting Services", "/services"],
  "/services": ["Explore the Right Engagement", "/contact", "Book a Customer Success Operations Audit", "/operations-audit"],
  "/operations-audit": ["Book a Customer Success Operations Audit", "/contact", "Explore Consulting Services", "/services"],
  "/fractional-customer-success-manager": ["Discuss Fractional Customer Success Support", "/contact", "Explore Consulting Services", "/services"],
  "/customer-success-operations-consultant": ["Review Your Customer Success Operations", "/contact", "Book a Customer Success Operations Audit", "/operations-audit"],
  "/shopify-operations-support": ["Review Your Shopify Support Workflow", "/contact", "Read Shopify Case Study", "/case-studies/shopify-support-operations-case-study"],
  "/customer-onboarding-workflows": ["Review Your Customer Onboarding Workflow", "/contact", "Read SaaS Onboarding Case Study", "/case-studies/saas-onboarding-workflow-case-study"],
  "/sop-consulting": ["Discuss Your SOP Documentation", "/contact", "Read SOP Article", "/blog/build-sops-that-help-your-team-scale"],
  "/crm-workflow-cleanup": ["Review Your CRM Workflow", "/contact", "Book a Customer Success Operations Audit", "/operations-audit"],
  "/support-operations-consulting": ["Improve Your Support Operations", "/contact", "Explore Consulting Services", "/services"],
  "/ecommerce-operations-consultant": ["Discuss Your Ecommerce Operations", "/contact", "Read Shopify Case Study", "/case-studies/shopify-support-operations-case-study"],
  "/case-studies": ["Discuss a Similar Workflow Challenge", "/contact", "Explore Consulting Services", "/services"],
  "/faq": ["Still Have Questions? Book a Discovery Call", "/contact", "Explore Consulting Services", "/services"],
  "/blog": ["Get Your Workflow Reviewed", "/contact", "Explore Consulting Services", "/services"],
  "/contact": ["Send Your Operations Inquiry", "#contact-form", "Explore Consulting Services", "/services"],
};

const defaultFaqs = [
  ["What does a customer success operations consultant do?", "A customer success operations consultant improves the workflows behind onboarding, support, customer communication, SOPs, CRM follow-up, and retention so teams can serve customers more consistently."],
  ["Can you help with Shopify support workflows?", "Yes. Shopify operations support can include helpdesk categories, response templates, escalation paths, order issue workflows, return or refund coordination, and Shopify SOPs."],
  ["Do you create SOPs and process documentation?", "Yes. SOP development and process documentation are core parts of the work, especially for onboarding, support operations, customer handoffs, CRM workflows, and recurring administrative tasks."],
  ["How do we decide where to start?", "If the operational problem is unclear, start with an operations audit. If the need is recurring ownership, start with fractional customer success support."],
];

const faqByRoute = {
  "/services": [
    ["Which consulting service should I choose first?", "Start with the operational problem that creates the most customer friction. An operations audit is useful when the issue is unclear, while a service page is better when the need is already specific."],
    ["Do these services replace a full-time customer success hire?", "They can support work that often sits with a full-time hire, but the engagement is fractional, practical, and scoped around current onboarding, support, CRM, SOP, and retention workflows."],
    ["Can one engagement cover more than one workflow?", "Yes. Many teams begin with one bottleneck and then connect related workflows, such as onboarding handoffs, CRM stages, support escalation, and SOP documentation."],
  ],
  "/operations-audit": [
    ["What is included in a customer success operations audit?", "The audit reviews onboarding, support workflows, SOPs, CRM visibility, customer handoffs, recurring follow-up routines, and the points where customer ownership becomes unclear."],
    ["Who is the audit best for?", "It is best for lean SaaS, Shopify, ecommerce, service-based, and remote teams that feel customer work is too dependent on memory, manual reminders, or founder intervention."],
    ["What do we receive after the audit?", "You receive practical findings, prioritized workflow fixes, documentation opportunities, and clear next steps for improving customer success and operations without adding unnecessary process weight."],
  ],
  "/fractional-customer-success-manager": [
    ["What does a fractional customer success manager do?", "A fractional customer success manager helps growing teams manage onboarding, lifecycle ownership, customer communication, retention routines, CRM visibility, and recurring customer success operations without immediately hiring a full-time leader."],
    ["When does fractional customer success support make sense?", "It makes sense when customers need more consistent ownership, founders are still handling follow-up, onboarding lacks a steady rhythm, or the team needs customer success execution before a permanent hire."],
    ["Can this include Shopify or ecommerce teams?", "Yes. The work can support SaaS, Shopify, ecommerce, and service-based teams when the customer journey needs clearer ownership, better handoffs, and stronger follow-up routines."],
  ],
  "/customer-success-operations-consultant": [
    ["What does customer success operations consulting cover?", "Customer success operations consulting covers lifecycle structure, CRM workflows, handoffs, escalation paths, reporting routines, process documentation, and ownership rules that help teams serve customers consistently."],
    ["Is this different from fractional customer success support?", "Yes. Customer success operations consulting focuses more on systems, processes, documentation, tooling habits, and workflow design. Fractional customer success support can include more recurring ownership and execution."],
    ["Can you help implement the recommended workflows?", "Yes. Implementation support can include workflow mapping, SOPs, checklists, templates, CRM stage cleanup, customer handoff routines, and practical operating rhythms for the team."],
  ],
  "/shopify-operations-support": [
    ["What Shopify operations problems can you help with?", "Shopify operations support can help with support inbox workflows, order-status communication, refunds, payment exceptions, fulfillment handoffs, escalation paths, response templates, SOPs, and post-purchase follow-up."],
    ["Do you need access to our Shopify store?", "Access depends on the scope. Some work can begin from process notes, support examples, and existing SOPs. Tool access should only be shared when it is necessary and appropriate."],
    ["Can this support a small ecommerce team?", "Yes. This work is designed for lean ecommerce teams that need clearer customer support and operations workflows without building a heavy internal operations department."],
  ],
  "/customer-onboarding-workflows": [
    ["What are signs our onboarding workflow needs cleanup?", "Common signs include unclear handoffs, repeated customer questions, missing next steps, inconsistent welcome communication, CRM stages that do not reflect reality, and follow-up that depends on memory."],
    ["What deliverables can onboarding workflow consulting include?", "Deliverables can include an onboarding workflow map, lifecycle stage definitions, ownership checkpoints, onboarding checklists, customer communication templates, CRM visibility updates, and customer-risk review routines."],
    ["Can this help after the sale or signup?", "Yes. The work focuses on the transition from sales, signup, or purchase into the first successful customer experience, including ownership, communication, and early risk visibility."],
  ],
  "/sop-consulting": [
    ["What processes should be documented first?", "Start with repeatable work that affects customers, creates frequent questions, or slows delegation. Examples include onboarding, support routing, escalation paths, CRM updates, and recurring ecommerce operations."],
    ["How do you keep SOPs maintainable?", "SOPs stay maintainable when they are practical, owner-aware, easy to scan, tied to real workflow triggers, and reviewed as the team learns what exceptions appear most often."],
    ["Do SOPs include templates or checklists?", "Yes. SOP consulting can include templates, checklists, ownership notes, exception paths, review routines, and simple team adoption guidance."],
  ],
  "/crm-workflow-cleanup": [
    ["What is CRM workflow cleanup?", "CRM workflow cleanup improves customer records, lifecycle stages, ownership, follow-up visibility, handoffs, and customer success routines so the system reflects how the team actually works."],
    ["Which CRM tools do you work with?", "Tools are only named when they are part of the actual engagement. The cleanup approach focuses on workflow clarity, field purpose, ownership, and customer visibility rather than a generic tool list."],
    ["Can CRM cleanup support retention?", "Yes. Cleaner CRM visibility can make customer status, recurring follow-ups, risk signals, and ownership easier to see and act on."],
  ],
  "/support-operations-consulting": [
    ["What does support operations consulting improve?", "Support operations consulting improves inbox flows, ticket categories, response templates, escalation paths, SOPs, repeated issue tracking, and customer communication standards."],
    ["Is this only for teams with a helpdesk?", "No. The work can support teams using a helpdesk, shared inbox, CRM, or lighter customer support process, as long as the customer workflow needs clearer ownership."],
    ["Can this reduce repeated customer questions?", "It can make repeated questions easier to answer, route, document, and learn from by improving the workflow behind support responses."],
  ],
  "/ecommerce-operations-consultant": [
    ["What does an ecommerce operations consultant help with?", "An ecommerce operations consultant helps clarify customer support workflows, fulfillment handoffs, recurring back-office processes, SOPs, order issue paths, and customer communication routines."],
    ["Is this only for Shopify teams?", "No. Shopify is a common fit, but the same operational cleanup can support ecommerce teams using other tools when the customer and back-office workflows need structure."],
    ["What outcomes should we expect?", "The goal is clearer ownership, more consistent support, better handoffs, easier delegation, and stronger visibility into recurring customer operations issues."],
  ],
  "/faq": defaultFaqs,
};

function findPage(route) {
  return pages.find((page) => page.route === route);
}

function setPage(route, updates) {
  const page = findPage(route);
  if (!page) {
    pages.push({ route, ...updates });
    return;
  }
  Object.assign(page, updates);
}

function contentBlocks(title, text, blocks) {
  return { type: "contentBlocks", title, text, blocks };
}

function applyPageDefaults() {
  if (!sitemapRoutes.includes("/customer-success-operations-consultant")) {
    sitemapRoutes.splice(sitemapRoutes.indexOf("/fractional-customer-success-manager") + 1, 0, "/customer-success-operations-consultant");
  }
  if (!serviceCards.some((cardItem) => cardItem.href === "/customer-success-operations-consultant")) {
    serviceCards.splice(1, 0, {
      title: "Customer Success Operations Consultant",
      href: "/customer-success-operations-consultant",
      badge: "Systems and ownership",
      text: "Customer lifecycle structure, CRM workflows, handoffs, documentation, and operating routines.",
    });
  }
  for (const page of pages) {
    const cta = ctaByRoute[page.route] || ["Book a Discovery Call", "/contact", "Explore Consulting Services", "/services"];
    page.ctaPrimary = cta[0];
    page.ctaPrimaryHref = cta[1];
    page.ctaSecondary = cta[2];
    page.ctaSecondaryHref = cta[3];
    if (faqByRoute[page.route]) page.faqItems = faqByRoute[page.route];
  }
}

setPage("/operations-audit", {
  title: "Customer Success Operations Audit for SaaS & Ecommerce | Jesel Cura",
  description: "Audit SaaS, Shopify, and ecommerce onboarding, support workflows, SOPs, CRM visibility, customer handoffs, and retention bottlenecks with a practical action plan.",
});

setPage("/customer-success-operations-consultant", {
  title: "Customer Success Operations Consultant for Growing Teams | Jesel Cura",
  description: "Customer success operations consulting for lifecycle workflows, CRM cleanup, customer handoffs, escalation design, SOPs, reporting routines, and implementation support.",
  h1: "Customer Success Operations Consultant for Growing Teams",
  intro: "Systems, process, ownership, and documentation support for teams that need customer success operations to become easier to run and easier to improve.",
  jsonType: "Service",
  sections: [
    contentBlocks("What customer success operations consulting covers", "Customer success operations consulting connects the practical pieces behind the customer experience. The work looks at how customers move through the lifecycle, how status is tracked, who owns each handoff, how support escalates issues, and how the team documents recurring decisions.", [
      ["Common workflow problems", "Teams often have customer information in too many places, lifecycle stages that do not match real work, unclear handoffs after purchase or signup, and recurring support questions that never become process improvements.", ["Lifecycle gaps", "CRM ambiguity", "Customer handoff confusion", "Escalation paths that depend on memory"]],
      ["Lifecycle architecture", "The goal is to make customer stages, ownership, communication, and next steps easier to see. This can include stage definitions, handoff rules, customer-risk notes, and recurring review routines.", ["Lifecycle stage definitions", "Ownership checkpoints", "Follow-up routines", "Customer status visibility"]],
      ["Implementation support", "Recommendations are strongest when they can be put into use. Support can include templates, checklists, SOP drafts, CRM workflow cleanup, escalation notes, and team-facing operating rhythms.", ["SOP documentation", "Customer handoff templates", "CRM workflow notes", "Reporting routines"]],
    ]),
    { type: "cards", title: "Deliverables can include", items: [["Lifecycle workflow map", "A clear view of customer stages, owners, handoffs, and follow-up points."], ["CRM workflow recommendations", "Practical cleanup for fields, statuses, notes, and visibility."], ["Escalation and ownership rules", "Guidance for who handles common customer issues and when work moves to another owner."], ["Documentation and templates", "SOPs, checklists, and customer communication templates that support repeatable execution."]] },
    { type: "split", title: "Related audit and case study", text: "If the right starting point is not yet clear, begin with a customer success operations audit. If onboarding is the known issue, review the SaaS onboarding workflow case study.", bullets: ["Audit: /operations-audit", "Case study: /case-studies/saas-onboarding-workflow-case-study", "CTA: Review Your Customer Success Operations"] },
  ],
});

setPage("/fractional-customer-success-manager", {
  sections: [
    contentBlocks("When fractional CS support makes sense", "Fractional customer success support is useful when the customer experience needs stronger ownership but the team is not ready for a full-time customer success leader. It can steady onboarding, customer communication, CRM visibility, retention follow-up, and recurring customer operations while the team continues to grow.", [
      ["Who this engagement is for", "This engagement is built for lean SaaS, Shopify, ecommerce, service-based, and remote teams where founders or operators still carry too much recurring customer work.", ["Founder-led follow-up", "Lean support or CS teams", "Remote teams that need clearer ownership", "Teams preparing for a future hire"]],
      ["What ongoing support can include", "Support can include onboarding oversight, lifecycle ownership, customer communication routines, risk monitoring, reporting rhythms, process improvement, and team coordination.", ["Onboarding oversight", "Customer communication", "Risk monitoring", "Reporting routines"]],
      ["What the client receives", "The client receives practical execution and structure: clearer handoffs, repeatable checklists, customer follow-up templates, recurring review routines, and documentation that makes customer work easier to delegate.", ["Onboarding checklists", "Customer follow-up templates", "Ownership checkpoints", "Weekly customer-risk review routine"]],
    ]),
    { type: "process", title: "Engagement options", items: [["Stabilize", "Clarify the current customer lifecycle, known risks, and recurring communication gaps."], ["Operate", "Support weekly customer success routines, follow-ups, handoffs, and CRM visibility."], ["Improve", "Turn repeated customer friction into better templates, SOPs, and operating habits."], ["Transfer", "Make ownership easier for the internal team as processes become clearer."]] },
    { type: "split", title: "Related case study", text: "For a practical example of customer success workflow cleanup, review the SaaS onboarding workflow case study.", bullets: ["Clearer onboarding ownership", "Activation checkpoints", "Customer follow-up routines", "CRM visibility improvements"] },
  ],
});

setPage("/shopify-operations-support", {
  sections: [
    contentBlocks("Common Shopify operations problems", "Shopify customer experience depends on what happens behind the storefront. When support categories, order-status communication, payment exceptions, refund decisions, and fulfillment handoffs are unclear, customers receive inconsistent answers and the team spends too much time rebuilding context.", [
      ["Support inbox workflows", "Support work becomes easier when recurring issues are categorized, routed, and answered with consistent expectations.", ["Support issue categorization", "Ticket-routing rules", "Customer response templates", "Ownership rules for common ticket types"]],
      ["Order, refund, and fulfillment handoffs", "Ecommerce teams need clear steps for common exceptions such as order status questions, fulfillment delays, refund requests, payment issues, and post-purchase follow-up.", ["Order and fulfillment escalation matrix", "Refund and payment-exception workflow", "Post-purchase follow-up checklist"]],
      ["SOP documentation", "The goal is not to create a binder of process. The goal is to make repeated customer and order issues easier to handle the next time they appear.", ["Escalation paths", "Support SOPs", "Template updates", "Exception notes"]],
    ]),
    { type: "split", title: "Relevant case study", text: "The Shopify support operations case study shows how support categories, response templates, escalation paths, and SOPs can make recurring ecommerce questions easier to manage.", bullets: ["Support issue categories", "Ticket-routing rules", "Order exception workflow", "Customer response templates"] },
  ],
});

setPage("/customer-onboarding-workflows", {
  sections: [
    contentBlocks("Signs the onboarding process needs cleanup", "Customer onboarding needs attention when new customers ask the same questions, internal owners are unclear, CRM status is out of date, or the team relies on manual reminders to move customers forward. Cleaner onboarding makes the first customer experience easier to repeat and easier to improve.", [
      ["Lifecycle and stage definitions", "Customers need a clear path from signup or purchase into value. The team needs shared definitions for where each customer is, what has happened, and what comes next.", ["Lifecycle stages", "Activation checkpoints", "Risk signals", "Next-step visibility"]],
      ["Ownership and handoffs", "Onboarding works best when the owner, trigger, customer message, internal note, and next action are explicit at each step.", ["Sales or signup handoff", "Customer welcome steps", "Internal ownership notes", "Follow-up routines"]],
      ["Templates and checklists", "Useful onboarding assets include checklists, welcome templates, handoff notes, CRM status guidance, and customer-risk review routines.", ["Onboarding checklist", "Customer communication templates", "CRM status visibility", "Customer-risk review routine"]],
    ]),
    { type: "split", title: "Relevant case study", text: "The SaaS onboarding workflow case study is a useful next step if the main issue is customer handoff, activation, or CRM visibility.", bullets: ["End-to-end onboarding workflow map", "Lifecycle status definitions", "Ownership checkpoints", "Customer communication templates"] },
  ],
});

setPage("/sop-consulting", {
  title: "SOP Consulting for Small and Growing Teams | Jesel Cura",
  h1: "SOP Consulting for Small and Growing Teams",
  sections: [
    contentBlocks("Why SOPs become difficult to maintain", "SOPs become difficult when they are written too far away from the actual work, created without clear owners, or stored where the team will not use them. Good SOP consulting starts with real workflow discovery and ends with documentation that helps people repeat work with less explanation.", [
      ["What processes should be documented first", "Start with work that affects customers, creates repeated questions, slows delegation, or carries important exceptions.", ["Customer onboarding", "Support routing", "CRM updates", "Ecommerce order issues"]],
      ["Workflow discovery and SOP structure", "Each SOP should explain the trigger, owner, steps, tools, customer-facing message, internal note, exception path, and review cadence.", ["Trigger", "Owner", "Checklist", "Exception path"]],
      ["Team adoption and updates", "Documentation stays useful when it has an owner, a simple template, a clear review habit, and a way to capture changes as the workflow evolves.", ["Ownership", "Templates", "Review process", "Team adoption"]],
    ]),
    { type: "split", title: "Related article", text: "The SOP article explains how documentation can help a team scale without creating process nobody uses.", bullets: ["Build SOPs that support real work", "Use checklists and templates", "Make ownership visible", "Review documents as workflows change"] },
  ],
});

findPage("/fractional-customer-success-manager").sections.push(
  contentBlocks("Customer lifecycle ownership in practice", "Fractional CS support is most useful when it turns customer work into a steady operating rhythm. That rhythm can include onboarding review, customer status checks, follow-up ownership, support context, renewal preparation, and simple reporting that helps founders and teams see what needs attention.", [
    ["Onboarding oversight", "Onboarding oversight means watching the moments when new customers usually lose momentum. The work can include welcome steps, kickoff notes, activation checkpoints, customer questions, and the handoff into ongoing support or account ownership.", ["Welcome steps", "Activation checkpoints", "Customer questions", "Handoff into ongoing ownership"]],
    ["Risk monitoring", "Risk monitoring does not need to be complicated. It can start with visible customer status, missed follow-ups, repeated questions, support escalation notes, and a weekly review habit that helps the team see where a customer may need attention.", ["Customer status", "Missed follow-ups", "Repeated questions", "Weekly review habit"]],
    ["Team coordination", "Fractional support also helps the team know who owns what. Clear notes, next steps, and communication templates reduce the need for founders to translate every customer situation.", ["Ownership notes", "Next steps", "Communication templates", "Founder delegation"]],
  ]),
  { type: "split", title: "How ongoing support stays maintainable", text: "The engagement should not add process for its own sake. The goal is to keep customer success routines visible, useful, and easy for the team to continue as responsibilities change.", bullets: ["Use current tools when possible", "Document decisions as the workflow improves", "Keep customer communication warm and clear", "Make the next owner easy to identify"] }
);

findPage("/customer-success-operations-consultant").sections.push(
  contentBlocks("Designing customer operations that can hold up", "Customer success operations work is most valuable when it gives the team a shared operating model. The work connects lifecycle stages, CRM workflows, customer handoffs, support escalation, documentation, and reporting routines so the team can make better decisions from the same information.", [
    ["CRM workflows", "CRM workflows should answer practical questions: who owns this customer, what stage are they in, what changed recently, what follow-up is due, and where is risk showing up.", ["Owner", "Lifecycle stage", "Recent customer context", "Next follow-up"]],
    ["Customer handoffs", "Handoffs need more than a friendly note. A useful handoff captures the customer context, current status, open questions, promised next steps, internal owner, and escalation path.", ["Customer context", "Current status", "Promised next steps", "Escalation path"]],
    ["Reporting routines", "Reporting should help the team act. The right routine may be a simple customer-risk review, support pattern review, onboarding status review, or founder update that makes customer operations easier to manage.", ["Customer-risk review", "Support pattern review", "Onboarding status review", "Founder update"]],
  ]),
  { type: "split", title: "What implementation can look like", text: "Implementation can be lightweight and practical: map the current workflow, clarify ownership, document repeatable actions, update CRM habits, and create templates the team can use without extra explanation.", bullets: ["Workflow map", "Ownership structure", "SOP and template drafts", "Team-ready next steps"] }
);
findPage("/customer-success-operations-consultant").sections.push(
  { type: "split", title: "When to review customer success operations", text: "A review is especially useful before hiring, changing tools, adding a support process, or asking a founder to step out of recurring customer follow-up. The work creates a clearer baseline so the team can decide what should be fixed now, what should be documented, and what can wait until the workflow is more mature.", bullets: ["Before a CS or support hire", "Before a CRM cleanup", "Before delegating onboarding", "Before recurring customer reviews feel urgent"] }
);

findPage("/shopify-operations-support").sections.push(
  contentBlocks("What cleaner Shopify support gives the team", "Shopify support work becomes more manageable when the team can quickly understand the type of issue, the correct owner, the customer-facing message, and the internal next step. This is especially important when order questions, fulfillment status, returns, refunds, and payment exceptions repeat often.", [
    ["Order-status communication", "Customers usually want clear, calm answers about what happened, what is being checked, and when they should expect the next update. Response templates help the team stay consistent without sounding robotic.", ["Order status", "Customer update timing", "Template language", "Internal notes"]],
    ["Refund and payment exceptions", "Refunds and payment issues need clear rules so the team knows when to respond, when to escalate, what to document, and how to keep the customer informed.", ["Refund rules", "Payment exceptions", "Escalation notes", "Customer updates"]],
    ["Post-purchase follow-up", "Post-purchase follow-up can reduce confusion by making common next steps visible after the order. It can also help the team notice repeated issues that should become SOP updates.", ["Follow-up checklist", "Repeated issue tracking", "SOP updates", "Customer communication"]],
  ]),
  { type: "split", title: "Tools and access", text: "Tool access should match the work. Some projects can begin with exported examples, current SOPs, support categories, and process notes. Direct access should only be used when it is necessary for the engagement.", bullets: ["Review current support examples", "Map repeated issue types", "Document escalation rules", "Update templates and SOPs"] }
);
findPage("/shopify-operations-support").sections.push(
  contentBlocks("Turning repeated support issues into operations improvements", "A Shopify support workflow should help the team learn from repeated customer questions. When order issues, fulfillment exceptions, refund questions, or post-purchase confusion repeat, the workflow should capture that pattern and turn it into clearer documentation, routing, or customer communication.", [
    ["Support patterns", "Repeated issues can reveal where product information, fulfillment status, policies, or customer messages need more clarity.", ["Order questions", "Return questions", "Fulfillment status", "Policy confusion"]],
    ["Escalation confidence", "Support teams need to know when they can answer directly and when an issue requires operations, fulfillment, payment, or owner review.", ["Answer directly", "Escalate to operations", "Escalate to fulfillment", "Escalate to owner review"]],
  ])
);

findPage("/customer-onboarding-workflows").sections.push(
  contentBlocks("Making onboarding easier to repeat", "Customer onboarding works best when every step has a purpose, owner, customer message, internal note, and follow-up expectation. A cleaner onboarding workflow helps the customer understand what comes next and helps the team notice when progress is slowing down.", [
    ["Customer communication", "Communication should reduce uncertainty. Welcome messages, kickoff notes, activation reminders, and next-step templates help customers know what to do without waiting for a custom explanation each time.", ["Welcome message", "Kickoff note", "Activation reminder", "Next-step template"]],
    ["CRM status visibility", "CRM status should reflect reality. If a customer is waiting, blocked, active, at risk, or ready for handoff, the system should make that clear enough for the next owner to act.", ["Waiting", "Blocked", "Active", "At risk"]],
    ["Risk identification", "Early risk signals often come from missed steps, repeated questions, delayed responses, unclear ownership, or customers not reaching the expected activation point.", ["Missed steps", "Repeated questions", "Delayed responses", "Activation risk"]],
  ]),
  { type: "split", title: "How the workflow cleanup starts", text: "The first step is usually to map the current onboarding path exactly as it works today. From there, the work clarifies owners, customer messages, handoffs, checklists, and review routines.", bullets: ["Map the current path", "Identify repeated friction", "Clarify owners and customer messages", "Create checklists and templates"] }
);
findPage("/customer-onboarding-workflows").sections.push(
  contentBlocks("What stronger onboarding makes visible", "A stronger onboarding workflow gives the team a shared view of where each customer is, what they have received, what they still need, and who owns the next move. That visibility matters because onboarding problems often turn into later support issues, renewal risk, or founder intervention.", [
    ["Customer status", "Status should be clear enough for another teammate to understand the customer situation without asking for a private update.", ["Current stage", "Open questions", "Next step", "Owner"]],
    ["Handoff quality", "A good handoff includes enough context for the next owner to continue the customer relationship without making the customer repeat themselves.", ["Context", "Promises made", "Open risks", "Communication history"]],
  ])
);
findPage("/customer-onboarding-workflows").sections.push(
  { type: "split", title: "What the client receives", text: "The final shape depends on the current workflow, but the engagement can produce a practical onboarding map, owner checkpoints, customer communication templates, CRM status guidance, checklist updates, and a recurring review routine that helps the team keep onboarding visible after the cleanup is complete.", bullets: ["Onboarding map", "Owner checkpoints", "Customer templates", "Recurring review routine"] }
);

findPage("/sop-consulting").sections.push(
  contentBlocks("Building SOPs people can actually use", "SOP consulting should make recurring work easier, not heavier. The best documentation is written close to the workflow, names the owner, includes the common exceptions, and gives the team enough context to act without searching through scattered notes.", [
    ["Workflow discovery", "Discovery starts by watching how work actually moves. That includes the trigger, the person responsible, the tool used, the customer-facing message, the internal note, and what happens when the normal path does not apply.", ["Trigger", "Owner", "Tool", "Exception path"]],
    ["Templates and checklists", "Templates and checklists help SOPs stay usable. A checklist can guide recurring work, while a template can keep customer communication, internal notes, and handoffs consistent.", ["Checklist", "Customer message template", "Internal note template", "Handoff template"]],
    ["Review and update process", "SOPs need a review habit. When repeated exceptions show up, the document should improve so the team is not solving the same confusion from scratch.", ["Review owner", "Update cadence", "Exception capture", "Team feedback"]],
  ]),
  { type: "split", title: "Where SOP work connects to customer success", text: "SOPs support customer success when they make onboarding, support routing, CRM updates, escalation, and follow-up easier for the team to repeat with confidence.", bullets: ["Onboarding SOPs", "Support routing SOPs", "CRM update notes", "Escalation and follow-up checklists"] }
);
findPage("/sop-consulting").sections.push(
  contentBlocks("How SOP consulting supports delegation", "Delegation gets easier when the person receiving the work can see the expected outcome, the steps, the exceptions, and the point where they should ask for help. SOP consulting helps turn founder knowledge, support habits, and recurring operations work into documentation the team can actually use.", [
    ["Owner-ready documentation", "Each SOP should make the owner, decision point, customer impact, and review habit clear enough to support repeatable work.", ["Owner", "Decision point", "Customer impact", "Review habit"]],
    ["Practical adoption", "Adoption works best when SOPs are introduced through real workflows, not as a separate documentation project that nobody has time to maintain.", ["Use real examples", "Keep the format simple", "Assign a review owner", "Improve from exceptions"]],
  ])
);
findPage("/sop-consulting").sections.push(
  { type: "split", title: "What the client receives", text: "The output can include workflow notes, SOP drafts, checklists, templates, ownership guidance, exception paths, and a simple review process. The goal is documentation that helps a lean team delegate recurring work without lowering customer communication quality or losing operational context.", bullets: ["SOP drafts", "Workflow notes", "Exception paths", "Review process"] }
);

setPage("/about", {
  intro: "Jesel Cura is a Fractional Customer Success & Operations Consultant supporting lean SaaS, Shopify, ecommerce, service-based, and remote teams. She helps improve customer onboarding, support operations, SOP documentation, CRM visibility, customer handoffs, and recurring retention workflows.",
  sections: [
    { type: "cards", title: "What I Help Teams Improve", items: [["Customer onboarding workflows", "Cleaner starts, clearer activation steps, and more visible follow-up ownership."], ["Support operations", "Inbox flows, response consistency, escalation paths, and recurring support documentation."], ["SOP documentation", "Practical checklists and process notes that help founders and teams delegate repeatable work."], ["CRM organization", "Customer records, lifecycle stages, handoffs, follow-up routines, and retention visibility."]] },
    contentBlocks("Relevant Experience", "The site content supports experience across customer support operations, Shopify and ecommerce workflows, customer onboarding, CRM coordination, process documentation, remote team operations, administrative operations, customer communication, and implementation support.", [
      ["Customer-facing operations", "The work focuses on the systems behind customer communication, onboarding, support follow-up, and retention routines.", ["Customer support operations", "Customer onboarding", "Customer communication", "Implementation support"]],
      ["Operational documentation", "SOPs, checklists, handoff notes, and practical workflow maps help lean teams reduce repeated explanation.", ["SOP documentation", "Process documentation", "Administrative operations", "Remote team operations"]],
    ]),
    { type: "split", title: "How I Work", text: "My approach is practical, organized, collaborative, documentation-oriented, comfortable with asynchronous teams, focused on maintainable systems, and clear about ownership and next steps.", bullets: ["Practical workflow cleanup", "Collaborative implementation", "Clear ownership and next steps", "Documentation that supports real work"] },
    { type: "cards", title: "Industries and Team Types", items: [["SaaS", "Customer onboarding, lifecycle visibility, retention follow-up, and customer success workflows."], ["Shopify and ecommerce", "Support workflows, order issue paths, response templates, and operations documentation."], ["Service-based businesses", "Customer handoffs, recurring follow-up, documentation, and operational visibility."], ["Lean remote teams", "Asynchronous coordination, clear ownership, and maintainable operating rhythms."]] },
    { type: "split", title: "Remote Collaboration", text: "Remote engagements work best when expectations, ownership, next steps, and documentation are visible. Jesel supports distributed teams by making customer operations easier to understand without requiring every decision to happen in a meeting.", bullets: ["Asynchronous-friendly communication", "Visible workflow documentation", "Clear follow-up ownership", "Practical next steps"] },
    { type: "split", title: "Professional Profile", text: "Connect with Jesel on the verified professional LinkedIn profile already used across this site.", bullets: ["LinkedIn: https://www.linkedin.com/in/jeselcura", "Email: hello@jeselcura.me", "Focus: fractional customer success and operations consulting"] },
  ],
});

setPage("/experience", {
  sections: [
    contentBlocks("Professional Overview", "Jesel Cura's experience combines customer success operations, customer support workflows, ecommerce operations, administrative support, onboarding cleanup, SOP documentation, CRM organization, and remote team coordination. The common thread is practical operational relief for lean teams that need clearer customer ownership.", [
      ["Core Experience Areas", "The current site content supports work across customer success operations, customer support workflows, Shopify and ecommerce operations, customer onboarding, SOP and process documentation, CRM organization, remote team coordination, and administrative and operational support.", ["Customer Success Operations", "Customer Support Workflows", "Shopify and Ecommerce Operations", "Customer Onboarding", "SOP and Process Documentation", "CRM Organization", "Remote Team Coordination", "Administrative and Operational Support"]],
      ["Representative Responsibilities", "Representative responsibilities include organizing customer records, improving onboarding handoffs, documenting repeatable workflows, coordinating support escalations, managing recurring follow-ups, maintaining CRM visibility, supporting customer communication, improving team ownership, and creating checklists and templates.", ["Customer records", "Onboarding handoffs", "Support escalations", "Recurring follow-ups", "Checklists and templates"]],
    ]),
    { type: "split", title: "Tools and Platforms", text: "Tools and platforms are only listed here when they are explicitly documented in the repository or approved professional materials. The current verified site content supports Shopify, ecommerce workflows, CRM workflows, support workflows, and remote team operations as categories, not a fabricated tool stack.", bullets: ["Shopify and ecommerce workflows", "CRM workflow organization", "Support workflow documentation", "Remote team coordination"] },
    { type: "cards", title: "Selected Project Types", items: [["SaaS onboarding cleanup", "Clarifying onboarding stages, ownership, customer communication, and CRM visibility."], ["Shopify support operations", "Organizing support categories, escalation paths, response templates, and order issue workflows."], ["SOP documentation", "Turning recurring support, onboarding, admin, and operations work into usable documentation."], ["CRM workflow organization", "Improving customer records, lifecycle visibility, handoffs, and recurring follow-up routines."]] },
  ],
});

caseStudies[0].sections = [
  contentBlocks("Client context", "A lean SaaS team needed a clearer onboarding path so customer handoffs, activation steps, CRM updates, and follow-up ownership were easier to see. Client details and examples may be anonymized to protect confidentiality.", [
    ["Operational challenge", "Customer handoffs, activation steps, and CRM updates were too hard to see. The team needed a more reliable way to guide new customers without repeated founder intervention.", ["Unclear handoffs", "Activation steps lacked shared visibility", "CRM updates were inconsistent", "Follow-up ownership was too dependent on memory"]],
    ["Gaps identified", "The work surfaced gaps in lifecycle stage definitions, owner checkpoints, customer follow-up routines, and support or account handoff notes.", ["Lifecycle stages", "Ownership checkpoints", "Follow-up templates", "Handoff checklist"]],
    ["What changed", "The onboarding path was mapped into clearer owners, steps, customer communication points, and review routines.", ["End-to-end onboarding workflow map", "Defined lifecycle stages", "Ownership checkpoints", "Weekly customer-risk review routine"]],
    ["Deliverables", "Deliverables included an end-to-end onboarding workflow map, lifecycle status definitions, ownership checkpoints, onboarding checklist, customer follow-up templates, weekly customer-risk review routine, and support or account handoff checklist.", ["End-to-end onboarding workflow map", "Lifecycle status definitions", "Ownership checkpoints", "Onboarding checklist", "Customer follow-up templates", "Weekly customer-risk review routine", "Support or account handoff checklist"]],
    ["Outcome", "The team had a cleaner way to guide new customers, improved visibility into customer status, clearer customer handoffs, and less reliance on manual reminders.", ["Clearer ownership", "More consistent onboarding", "Improved visibility into customer status", "Easier team delegation"]],
    ["Related service", "This case study connects most closely to customer onboarding workflow consulting and the customer success operations audit.", ["Customer onboarding workflow consulting", "Customer success operations audit", "Contact Jesel about a similar workflow"]],
  ]),
];

caseStudies[1].sections = [
  contentBlocks("Client context", "A Shopify team needed cleaner support workflows for order issues, response templates, escalation paths, SOPs, and customer communication. Client details and examples may be anonymized to protect confidentiality.", [
    ["Operational challenge", "Recurring order questions, payment exceptions, fulfillment issues, and escalations were handled inconsistently.", ["Recurring order questions", "Payment exceptions", "Fulfillment handoffs", "Inconsistent support escalation"]],
    ["Gaps identified", "The work surfaced gaps in issue categories, ticket-routing rules, refund and payment-exception paths, customer response templates, and ownership rules for common ticket types.", ["Support issue categories", "Ticket-routing rules", "Refund workflow", "Ownership rules"]],
    ["What changed", "Support categories, response templates, escalation paths, and SOPs were clarified so the team had a more reliable way to answer, route, and document common issues.", ["Support issue categorization framework", "Ticket-routing rules", "Order and fulfillment escalation matrix", "Customer response templates"]],
    ["Deliverables", "Deliverables included a support issue categorization framework, ticket-routing rules, order and fulfillment escalation matrix, customer response templates, refund and payment-exception workflow, ownership rules for common ticket types, and post-purchase follow-up checklist.", ["Support issue categorization framework", "Ticket-routing rules", "Order and fulfillment escalation matrix", "Customer response templates", "Refund and payment-exception workflow", "Ownership rules for common ticket types", "Post-purchase follow-up checklist"]],
    ["Outcome", "Customer-facing support became easier to answer, route, and document consistently, with clearer ownership and more reliable support escalation.", ["Clearer ownership", "More reliable support escalation", "More consistent customer responses", "Easier team delegation"]],
    ["Related service", "This case study connects most closely to Shopify operations support and the customer success operations audit.", ["Shopify operations support", "Customer success operations audit", "Contact Jesel about a similar workflow"]],
  ]),
];

for (const post of blogPosts) {
  post.datePublished = publicationDate;
  post.dateModified = publicationDate;
}
for (const study of caseStudies) {
  study.datePublished = publicationDate;
  study.dateModified = publicationDate;
}

applyPageDefaults();

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function routeHref(route) {
  return route;
}

function canonical(route) {
  return `${base}${route === "/" ? "/" : route}`;
}

function active(route, href) {
  if (route === "/" && href === "/") return ' aria-current="page"';
  if (route !== "/" && href !== "/" && route === href) return ' aria-current="page"';
  return "";
}

function header(route) {
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <nav class="nav" aria-label="Primary navigation">
    <a class="brand" href="/" aria-label="Jesel Cura home"><img src="/jesel-cura-wordmark.svg" alt="Jesel Cura logo" width="340" height="74"></a>
    <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" data-nav-toggle><span></span><span></span><span></span></button>
    <div class="nav-links" data-nav-links>
      ${nav.map(([label, href]) => `<a href="${href}"${active(route, href)}>${label}</a>`).join("")}
      <a class="btn btn-primary nav-cta" href="/contact">Book a Discovery Call</a>
    </div>
  </nav>
</header>`;
}

function footer() {
  return `<footer class="footer">
  <div class="container footer-grid">
    <div>
      <a class="footer-brand" href="/"><img src="/jesel-cura-wordmark.svg" alt="Jesel Cura logo" width="260" height="58"></a>
      <p class="muted">Fractional customer success and operations consulting for SaaS, Shopify, and ecommerce teams.</p>
    </div>
    <div><h3>Explore</h3>${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>
    <div><h3>Priority Services</h3>
      <a href="/fractional-customer-success-manager">Fractional customer success</a>
      <a href="/shopify-operations-support">Shopify operations support</a>
      <a href="/operations-audit">Operations audit</a>
      <a href="/support-operations-consulting">Support operations consulting</a>
    </div>
    <div><h3>Get in Touch</h3>
      <a href="mailto:hello@jeselcura.me">hello@jeselcura.me</a>
      <a href="https://cal.com/jeselcura">Schedule a discovery call</a>
      <a href="https://www.linkedin.com/in/jeselcura">LinkedIn</a>
    </div>
  </div>
  <div class="container footer-bottom"><span>© 2026 Jesel Cura. All rights reserved.</span><span>Customer Success & Operations</span></div>
</footer>`;
}

function head(page) {
  const json = jsonLd(page);
  return `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical(page.route)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical(page.route)}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:image" content="${base}/assets/og-image.svg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Jesel Cura">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title)}">
  <meta name="twitter:description" content="${esc(page.description)}">
  <meta name="twitter:image" content="${base}/assets/og-image.svg">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/favicon.svg">
  <link rel="preload" href="/jesel-cura-wordmark.svg" as="image" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <script type="application/ld+json">${JSON.stringify(json)}</script>
</head>`;
}

function jsonLd(page) {
  const person = {
    "@type": "Person",
    "@id": `${base}/#person`,
    name: "Jesel Cura",
    url: `${base}/`,
    jobTitle: "Fractional Customer Success & Operations Consultant",
    email: "hello@jeselcura.me",
    sameAs: ["https://www.linkedin.com/in/jeselcura"],
    knowsAbout: [
      "Customer Success Operations",
      "Fractional Customer Success",
      "Shopify Operations",
      "Ecommerce Operations",
      "Customer Onboarding",
      "SOP Documentation",
      "CRM Workflow Cleanup",
      "Support Operations",
      "Customer Retention",
      "Remote Team Operations",
    ],
  };
  const website = {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: "Jesel Cura",
    url: `${base}/`,
    publisher: { "@id": `${base}/#person` },
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${canonical(page.route)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      ...(page.route === "/" ? [] : [{ "@type": "ListItem", position: 2, name: page.h1, item: canonical(page.route) }]),
    ],
  };
  const common = {
    "@type": page.jsonType || "WebPage",
    "@id": `${canonical(page.route)}#primary`,
    name: page.h1,
    headline: page.h1,
    url: canonical(page.route),
    description: page.description,
    isPartOf: { "@id": `${base}/#website` },
    breadcrumb: { "@id": `${canonical(page.route)}#breadcrumb` },
  };
  const graph = [person, website, breadcrumb];
  if (page.jsonType === "Service") {
    common.provider = { "@type": "Person", name: "Jesel Cura", url: base };
    common.areaServed = "Worldwide";
    common.serviceType = page.h1;
  }
  if (page.jsonType === "Person") {
    common["@type"] = "ProfilePage";
    common.mainEntity = { "@id": `${base}/#person` };
  }
  if (page.jsonType === "Article") {
    common["@type"] = page.articleType || "Article";
    common.author = { "@type": "Person", name: "Jesel Cura", url: `${base}/about` };
    common.publisher = { "@id": `${base}/#person` };
    common.datePublished = page.datePublished || publicationDate;
    common.dateModified = page.dateModified || page.datePublished || publicationDate;
    common.mainEntityOfPage = canonical(page.route);
  }
  if (page.jsonType === "FAQPage") {
    common["@type"] = "WebPage";
  }
  graph.push(common);
  if (page.faqItems?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical(page.route)}#faq-schema`,
      url: canonical(page.route),
      mainEntity: page.faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }
  if (page.route === "/") {
    graph.push({
      "@type": "ProfessionalService",
      "@id": `${base}/#professional-service`,
      name: "Jesel Cura",
      url: `${base}/`,
      image: `${base}/assets/og-image.svg`,
      provider: { "@id": `${base}/#person` },
      areaServed: "Worldwide",
      description: page.description,
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function hero(page) {
  const image = `<figure class="hero-visual" data-reveal style="--reveal-index: 1"><img src="/assets/images/jesel-portrait.jpg" alt="Jesel Cura, customer success and operations consultant" width="720" height="900"></figure>`;
  return `<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy" data-reveal style="--reveal-index: 0">
      <p class="kicker">Jesel Cura</p>
      <h1>${esc(page.h1)}</h1>
      <p class="lead">${esc(page.intro)}</p>
      <div class="button-row"><a class="btn btn-primary" href="${page.ctaPrimaryHref || "/contact"}">${esc(page.ctaPrimary || "Book a Discovery Call")}</a><a class="btn btn-secondary" href="${page.ctaSecondaryHref || "/services"}">${esc(page.ctaSecondary || "Explore Consulting Services")}</a></div>
    </div>
    ${image}
  </div>
</section>`;
}

function reveal(index = 0) {
  return ` data-reveal style="--reveal-index: ${index}"`;
}

function renderSection(section) {
  const id = section.id ? ` id="${section.id}"` : "";
  if (section.type === "trustChips") {
    return `<section class="trust-strip"${id}><div class="container trust-chips"${reveal()} aria-label="Jesel Cura support areas">${section.items.map((item, index) => `<span${reveal(index)}>${esc(item)}</span>`).join("")}</div></section>`;
  }
  if (section.type === "proofStrip") {
    return `<section class="proof-strip"${id}><div class="container proof-strip-grid"${reveal()} aria-label="Jesel Cura proof points">${section.items.map(([title, text], index) => `<article${reveal(index)}><h2>${esc(title)}</h2><p>${esc(text)}</p></article>`).join("")}</div></section>`;
  }
  if (section.type === "serviceGrid") {
    return `<section class="section service-section"${id || ' id="services"'}><div class="container"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p></div><div class="service-grid">${serviceCards.map((item, index) => card(item, index)).join("")}</div></div></section>`;
  }
  if (section.type === "cards") {
    return `<section class="section"${id}><div class="container"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2></div><div class="card-grid">${section.items.map(([title, text], index) => `<article class="card"${reveal(index)}><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div></div></section>`;
  }
  if (section.type === "split") {
    return `<section class="section band"${id}><div class="container split"><div${reveal()}><h2>${esc(section.title)}</h2><p class="section-copy">${esc(section.text)}</p></div><ul class="feature-list">${section.bullets.map((item, index) => `<li${reveal(index)}>${esc(item)}</li>`).join("")}</ul></div></section>`;
  }
  if (section.type === "process") {
    return `<section class="section process-section"${id}><div class="container"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2></div><div class="process-grid">${section.items.map(([title, text], index) => `<article class="process-card"${reveal(index)}><span>${index + 1}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div></div></section>`;
  }
  if (section.type === "contentBlocks") {
    return `<section class="section content-section"${id}><div class="container"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p></div><div class="content-block-grid">${section.blocks.map(([title, text, bullets = []], index) => `<article class="content-block"${reveal(index)}><h3>${esc(title)}</h3><p>${esc(text)}</p>${bullets.length ? `<ul class="feature-list compact-list">${bullets.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : ""}</article>`).join("")}</div></div></section>`;
  }
  if (section.type === "audience") {
    return `<section class="section audience-section band"${id}><div class="container audience-layout"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p></div><div class="audience-grid">${section.items.map(([title, text], index) => `<article class="audience-card"${reveal(index)}><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div></div></section>`;
  }
  if (section.type === "why") {
    return `<section class="section why-section"${id}><div class="container why-layout"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p></div><div class="why-list">${section.items.map(([title, text], index) => `<article${reveal(index)}><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div></div></section>`;
  }
  if (section.type === "proof") {
    return `<section class="section proof-section band"${id}><div class="container"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p></div><div class="proof-grid">${caseStudies.map((study, index) => `<a class="proof-card" href="${study.route}"${reveal(index)}><p class="mini-label">${esc(study.topic)}</p><h3>${esc(study.h1)}</h3><div class="outcome-row"><strong>Problem</strong><p>${esc(study.problem)}</p></div><div class="outcome-row"><strong>What changed</strong><p>${esc(study.changed)}</p></div><div class="outcome-row"><strong>Outcome</strong><p>${esc(study.outcome)}</p></div><span class="text-link">Read case study</span></a>`).join("")}</div></div></section>`;
  }
  if (section.type === "resources") {
    return `<section class="section resource-section"${id}><div class="container"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p></div><div class="resource-grid">${blogPosts.slice(0, 3).map((post, index) => `<a class="resource-card" href="${post.route}"${reveal(index)}><p class="mini-label">${esc(post.topic)}</p><h3>${esc(post.h1)}</h3><p>${esc(post.description)}</p><span class="text-link">Read post</span></a>`).join("")}</div></div></section>`;
  }
  if (section.type === "faq") {
    const sectionId = section.id || "faq";
    const headingId = `${sectionId}-heading`;
    return `<section class="section faq-section" id="${sectionId}" aria-labelledby="${headingId}"><div class="container split"><div${reveal()}><h2 id="${headingId}">${esc(section.title)}</h2><p class="section-copy">Straight answers before you choose a service path.</p></div><div class="faq">${section.items.map(([question, answer], index) => {
      const answerId = `${sectionId}-faq-answer-${index + 1}`;
      return `<article class="faq-item"${reveal(index)}><h3><button class="faq-button" type="button" data-faq-button aria-expanded="false" aria-controls="${answerId}">${esc(question)}</button></h3><div class="faq-panel" id="${answerId}" role="region" aria-label="${esc(question)}"><p>${esc(answer)}</p></div></article>`;
    }).join("")}</div></div></section>`;
  }
  if (section.type === "blogGrid") {
    return `<section class="section"${id}><div class="container"><div class="section-heading"${reveal()}><h2>${esc(section.title)}</h2></div><div class="card-grid">${blogPosts.map((post, index) => `<a class="card" href="${post.route}"${reveal(index)}><p class="mini-label">${esc(post.topic)}</p><h3>${esc(post.h1)}</h3><p>${esc(post.description)}</p><span class="text-link">Read article</span></a>`).join("")}</div></div></section>`;
  }
  if (section.type === "contact") {
    return `<section class="section" id="contact-form"><div class="container contact-layout"><form class="card form" data-contact-form${reveal()}><div class="field"><label for="name">Full name <span aria-hidden="true">*</span></label><input id="name" name="name" autocomplete="name" placeholder="Your name" required></div><div class="field"><label for="email">Email address <span aria-hidden="true">*</span></label><input id="email" type="email" name="email" autocomplete="email" placeholder="you@company.com" required></div><div class="field"><label for="company">Company / business</label><input id="company" name="company" autocomplete="organization" placeholder="Company name"></div><div class="field"><label for="website">Website</label><input id="website" name="website" type="url" autocomplete="url" placeholder="https://"></div><div class="field"><label for="team_size">Team size</label><select id="team_size" name="team_size"><option value="">Select if useful</option><option>Founder only</option><option>2 to 5 people</option><option>6 to 15 people</option><option>16 or more people</option></select></div><div class="field"><label for="current_tools">Current tools</label><input id="current_tools" name="current_tools" placeholder="CRM, helpdesk, Shopify, docs"></div><div class="field"><label for="priority_timeline">Priority timeline</label><select id="priority_timeline" name="priority_timeline"><option value="">Select if useful</option><option>This month</option><option>Next 30 to 60 days</option><option>This quarter</option><option>Not sure yet</option></select></div><div class="field"><label for="primary_bottleneck">Primary operational bottleneck</label><select id="primary_bottleneck" name="primary_bottleneck"><option value="">Select if useful</option><option>Customer onboarding</option><option>Support operations</option><option>SOP documentation</option><option>CRM visibility</option><option>Shopify or ecommerce support</option><option>Customer handoffs</option></select></div><div class="field"><label for="topic">What do you need help with?</label><select id="topic" name="topic"><option>Operations audit</option><option>Fractional customer success support</option><option>Shopify or ecommerce operations</option><option>Customer onboarding workflows</option><option>SOP or CRM workflow cleanup</option><option>Support operations consulting</option></select></div><div class="field"><label for="budget">Engagement type</label><select id="budget" name="budget"><option>Audit or diagnostic</option><option>Project sprint</option><option>Fractional monthly support</option><option>Not sure yet</option></select></div><div class="field field-full"><label for="message">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" placeholder="Tell me a little about your business and where the friction is..." required></textarea></div><button class="btn btn-primary" type="submit">Send Inquiry</button><p class="form-note" hidden data-form-status aria-live="polite"></p><p class="muted">Your details are only used to respond to your inquiry.</p></form><aside class="contact-card"${reveal(1)}><h2>${esc(section.title)}</h2><p>After you submit the form, I will review the customer success or operations issue you described and reply within one to two business days with the most practical next step.</p><ol><li>I read the context personally.</li><li>I look for the highest-friction workflow.</li><li>I reply with a practical next step.</li></ol><a class="text-link" href="mailto:hello@jeselcura.me">hello@jeselcura.me</a><a class="text-link" href="https://cal.com/jeselcura">Schedule a discovery call</a><a class="text-link" href="https://www.linkedin.com/in/jeselcura">LinkedIn profile</a></aside></div></section>`;
  }
  if (section.type === "raw") return section.html;
  return "";
}

function card(item, index = 0) {
  return `<a class="card service-card" href="${item.href}"${reveal(index)}><span class="service-badge">${esc(item.badge)}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><span class="text-link">View service</span></a>`;
}

function cta(page) {
  return `<section class="section cta-band"><div class="container cta"${reveal()}><div><h2>Ready to make customer operations feel lighter?</h2><p>Bring the messy workflow. Jesel will help you find the practical next step.</p></div><a class="btn btn-primary" href="${page.ctaPrimaryHref || "/contact"}">${esc(page.ctaPrimary || "Book a Discovery Call")}</a></div></section>`;
}

function renderPage(page) {
  const baseSections = page.faqItems?.length ? page.sections.filter((section) => section.type !== "faq") : page.sections;
  const sections = page.faqItems?.length
    ? [...baseSections, { type: "faq", id: "faq", title: "Frequently Asked Questions", items: page.faqItems }]
    : baseSections;
  return `<!doctype html>
<html lang="en">
${head(page)}
<body>
${header(page.route)}
<main id="main">
${hero(page)}
${sections.map(renderSection).join("\n")}
${cta(page)}
</main>
${footer()}
<script src="/assets/js/site.js"></script>
</body>
</html>
`;
}

function renderArticle(page, relatedHref = "/services") {
  const isCaseStudy = page.route.startsWith("/case-studies/");
  const articleBody = isCaseStudy
    ? `<section class="section"><div class="container article-layout"><article class="article-body"><h2>${esc(page.sections[0].title)}</h2><p>${esc(page.sections[0].text)}</p>${page.sections[0].blocks.map(([title, text, bullets = []]) => `<h2>${esc(title)}</h2><p>${esc(text)}</p>${bullets.length ? `<ul>${bullets.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : ""}`).join("")}</article><aside class="article-aside"><h3>Related next steps</h3><a href="${page.route.includes("shopify") ? "/shopify-operations-support" : "/customer-onboarding-workflows"}">Related service</a><a href="/operations-audit">Operations audit</a><a href="/contact">Contact Jesel</a></aside></div></section>`
    : page.sections?.length
    ? page.sections.map(renderSection).join("\n")
    : `<section class="section"><div class="container article-layout"><article class="article-body"><p class="article-meta"><time datetime="${page.datePublished || publicationDate}">${page.datePublished || publicationDate}</time></p><div class="author-block"><p>Written by Jesel Cura</p><p>Fractional Customer Success &amp; Operations Consultant</p><a class="text-link" href="/about">Author profile</a></div><p>${esc(page.intro)}</p><h2>Where to focus first</h2><p>Start with the places where customers wait, teams repeat the same explanation, or founders keep stepping in because the workflow has no clear owner.</p><h2>What to document</h2><p>Capture the trigger, owner, tool, customer message, internal note, exception path, and next step. A useful workflow is clear enough to repeat and light enough to maintain.</p><h2>How this connects to customer experience</h2><p>Cleaner operations make customers feel less friction. They also help teams improve what happens before support problems become urgent.</p><div class="article-cta"><a class="btn btn-primary" href="/contact">Get Your Workflow Reviewed</a></div></article><aside class="article-aside"><h3>Related next steps</h3><a href="${relatedHref}">Explore related resources</a><a href="/operations-audit">Start with an operations audit</a><a href="/contact">Get Your Workflow Reviewed</a></aside></div></section>`;
  const caseLinks = isCaseStudy ? `<section class="section"><div class="container article-layout"><article class="article-body"><div class="article-cta"><a class="btn btn-primary" href="/contact">Discuss a Similar Workflow Challenge</a><a class="btn btn-secondary" href="/operations-audit">Book a Customer Success Operations Audit</a></div></article><aside class="article-aside"><h3>Related next steps</h3><a href="${page.route.includes("shopify") ? "/shopify-operations-support" : "/customer-onboarding-workflows"}">Related service</a><a href="/operations-audit">Operations audit</a><a href="/contact">Contact Jesel</a></aside></div></section>` : "";
  return renderPage({ ...page, articleType: isCaseStudy ? "Article" : "BlogPosting", sections: [{ type: "raw", html: articleBody + caseLinks }] });
}

function write(route, html) {
  const file = routeFile(route);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function routeFile(route) {
  return route === "/" ? path.join(root, "index.html") : path.join(root, route.slice(1), "index.html");
}

function removeIfExists(target) {
  fs.rmSync(path.join(root, target), { recursive: true, force: true });
}

function writeStaticAssets() {
  fs.mkdirSync(path.join(root, "assets/css"), { recursive: true });
  fs.mkdirSync(path.join(root, "assets/js"), { recursive: true });
  fs.mkdirSync(path.join(root, "assets/images"), { recursive: true });
  fs.writeFileSync(path.join(root, "assets/css/styles.css"), css);
  fs.writeFileSync(path.join(root, "assets/js/site.js"), js);
  fs.writeFileSync(path.join(root, "favicon.svg"), favicon);
  fs.writeFileSync(path.join(root, "jesel-cura-wordmark.svg"), wordmark);
  fs.writeFileSync(path.join(root, "jesel-cura-monogram.svg"), monogram);
  fs.writeFileSync(path.join(root, "assets/og-image.svg"), ogImage);
}

function writeSitemap() {
  const urls = sitemapRoutes.map((route) => `  <url>\n    <loc>${canonical(route)}</loc>\n  </url>`).join("\n");
  fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
}

function writeRedirects() {
  const redirects = [
    ["/services/fractional-customer-success-consulting", "/fractional-customer-success-manager"],
    ["/services/shopify-ecommerce-operations-support", "/shopify-operations-support"],
    ["/services/operations-audit", "/operations-audit"],
    ["/services/support-operations-consulting", "/support-operations-consulting"],
    ["/services/sop-consulting", "/sop-consulting"],
    ["/services/customer-onboarding-consulting", "/customer-onboarding-workflows"],
    ["/services/customer-retention-consulting", "/fractional-customer-success-manager"],
    ["/fractional-customer-success-consultant", "/fractional-customer-success-manager"],
    ["/shopify-ecommerce-operations-support", "/shopify-operations-support"],
    ["/resources", "/blog"],
    ["/services/virtual-assistant-services", "/services"],
    ["/services/operations-support-services", "/services"],
    ["/services/customer-support-services", "/support-operations-consulting"],
    ["/services/real-estate-property-management-support", "/services"],
    ["/services/lead-generation-sales-support", "/services"],
  ];
  fs.writeFileSync(path.join(root, "vercel.json"), JSON.stringify({
    cleanUrls: true,
    trailingSlash: false,
    headers: [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; form-action 'self' mailto:; frame-ancestors 'none'; base-uri 'self'" },
        ],
      },
    ],
    redirects: redirects.map(([source, destination]) => ({ source, destination, permanent: true })),
  }, null, 2) + "\n");
}

function writeLlms() {
  fs.writeFileSync(path.join(root, "llms.txt"), `# Jesel Cura\n\nFractional customer success and operations consulting for SaaS, Shopify, and ecommerce teams.\n\nCanonical pages:\n${sitemapRoutes.map((route) => `- ${canonical(route)}`).join("\n")}\n`);
}

const css = `:root {
  color-scheme: light;
  --background: #fbf7ee;
  --foreground: #272820;
  --card: #fffdf8;
  --muted: #565b4e;
  --accent: #879372;
  --accent-strong: #5f684f;
  --gold: #b79255;
  --stone: #d5c9b8;
  --sage-mist: #e8eddf;
  --cream: #f3eadc;
  --border: rgba(76, 72, 61, 0.18);
  --shadow: 0 28px 78px rgba(92, 82, 65, 0.15);
  --radius: 16px;
  --radius-sm: 10px;
  --max: 1320px;
  --font-serif: Georgia, "Times New Roman", serif;
  --font-sans: Manrope, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}
body.nav-open { overflow: hidden; }
img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible {
  outline: 3px solid rgba(135, 147, 114, 0.58);
  outline-offset: 3px;
}
.skip-link {
  position: absolute;
  top: -4rem;
  left: 1rem;
  z-index: 1000;
  background: var(--foreground);
  color: var(--background);
  padding: .75rem 1rem;
  border-radius: var(--radius-sm);
}
.skip-link:focus { top: 1rem; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(251, 247, 238, .88);
  backdrop-filter: blur(18px) saturate(130%);
  -webkit-backdrop-filter: blur(18px) saturate(130%);
  border-bottom: 1px solid var(--border);
  transition: background .24s ease, box-shadow .24s ease;
}
.site-header.is-scrolled {
  background: rgba(255, 253, 248, .94);
  box-shadow: 0 10px 30px rgba(92, 82, 65, .08);
}
.nav {
  width: min(var(--max), calc(100% - 32px));
  min-height: 78px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.brand img { width: min(328px, 58vw); height: auto; border-radius: 10px; background: #fffdf8; padding: .46rem .7rem; box-shadow: 0 12px 30px rgba(92,82,65,.11); }
.footer-brand img { width: 252px; height: auto; border-radius: 10px; background: #fffaf0; padding: .42rem .65rem; }
.nav-links { display: flex; align-items: center; gap: 1.18rem; font-size: 1.02rem; font-weight: 800; }
.nav-links a:not(.btn) { color: rgba(39,40,32,.76); transition: color .2s ease; }
.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--foreground); }
.nav-toggle { display: none; width: 44px; height: 44px; border: 1px solid var(--border); background: var(--card); border-radius: var(--radius-sm); }
.nav-toggle span { width: 19px; height: 2px; margin: 4px auto; background: var(--foreground); display: block; }
.container { width: min(var(--max), calc(100% - 32px)); margin: 0 auto; }
.hero {
  padding: clamp(62px, 7vw, 88px) 0 clamp(58px, 7vw, 86px);
  overflow: hidden;
  background:
    radial-gradient(circle at 88% 8%, rgba(232, 237, 223, .95), transparent 34%),
    linear-gradient(180deg, #fffdf8 0%, #fbf7ee 78%);
}
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.18fr) minmax(360px, 450px); gap: clamp(2rem, 3.6vw, 3.2rem); align-items: center; }
.kicker, .mini-label {
  margin: 0 0 1rem;
  color: var(--accent-strong);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}
h1, h2, h3 { margin: 0; font-family: var(--font-serif); font-weight: 500; line-height: 1.08; letter-spacing: 0; }
h1 { max-width: 940px; font-size: clamp(3.15rem, 4.05vw, 4.85rem); line-height: 1.02; }
h2 { font-size: clamp(2.25rem, 3.8vw, 3.55rem); }
h3 { font-size: clamp(1.36rem, 2.1vw, 1.86rem); }
p { margin: 0; }
.lead { max-width: 720px; margin-top: 1.55rem; color: var(--muted); font-size: clamp(1.2rem, 1.52vw, 1.4rem); line-height: 1.64; }
.button-row { display: flex; flex-wrap: wrap; gap: 1.05rem; margin-top: 2.35rem; }
.btn {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  min-width: max-content;
  border-radius: 999px;
  padding: 1.05rem 1.72rem;
  white-space: nowrap;
  border: 1px solid transparent;
  font-size: 1.04rem;
  font-weight: 850;
  box-shadow: 0 12px 30px rgba(92, 82, 65, .12);
  transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease, color .2s ease;
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(92, 82, 65, .14); }
.btn:active { transform: translateY(1px); }
.btn-primary { background: var(--foreground); color: #fffdf8; }
.btn-secondary { background: transparent; color: var(--foreground); border-color: var(--border); }
.hero-visual, .hero-panel {
  margin: 0;
  justify-self: end;
  width: 100%;
  max-width: 450px;
  position: relative;
  isolation: isolate;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: .8rem;
}
.hero-visual::before {
  content: "";
  position: absolute;
  inset: -18px;
  z-index: -1;
  border-radius: calc(var(--radius) + 12px);
  background:
    linear-gradient(135deg, rgba(135,147,114,.26), rgba(183,146,85,.16)),
    #f4ead8;
}
.hero-visual::after {
  content: "";
  position: absolute;
  right: -18px;
  bottom: 22px;
  width: 112px;
  height: 112px;
  border-radius: 999px;
  border: 1px solid rgba(183,146,85,.36);
  background: rgba(255,253,248,.74);
  z-index: -1;
}
.hero-visual img { width: 100%; height: clamp(550px, 46vw, 632px); object-fit: cover; object-position: center top; display: block; border-radius: calc(var(--radius) - 7px); }
.section { padding: clamp(90px, 9vw, 142px) 0; }
.band { background: linear-gradient(180deg, rgba(232,237,223,.68), rgba(243,234,220,.58)); }
.section-heading { max-width: 850px; margin-bottom: clamp(2.35rem, 4vw, 4.25rem); }
.section-heading p, .section-copy { margin-top: 1.1rem; max-width: 68ch; color: var(--muted); font-size: 1.18rem; line-height: 1.7; }
.trust-strip { padding: 34px 0 26px; background: #fffdf8; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.trust-chips { display: flex; flex-wrap: wrap; align-items: center; gap: .86rem; }
.trust-chips span {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: .56rem 1rem;
  border-radius: 999px;
  background: var(--sage-mist);
  color: var(--accent-strong);
  border: 1px solid rgba(95,104,79,.16);
  font-size: 1rem;
  font-weight: 850;
}
.proof-strip { padding: clamp(52px, 5vw, 78px) 0; background: linear-gradient(180deg, #fff9ee, #f2e6d5); border-top: 1px solid rgba(76,72,61,.1); border-bottom: 1px solid var(--border); }
.proof-strip-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.25rem;
}
.proof-strip-grid article {
  grid-column: span 2;
  min-height: 188px;
  padding: 1.55rem;
  border-radius: calc(var(--radius) + 2px);
  background:
    linear-gradient(180deg, rgba(255,253,248,.98), rgba(248,239,227,.96)),
    var(--card);
  border: 1px solid rgba(76,72,61,.2);
  box-shadow: 0 18px 48px rgba(92,82,65,.1);
  position: relative;
  overflow: hidden;
}
.proof-strip-grid article:nth-child(4),
.proof-strip-grid article:nth-child(5) {
  grid-column: span 3;
}
.proof-strip-grid article::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(180deg, var(--accent), var(--gold));
}
.proof-strip-grid h2 {
  font-family: var(--font-sans);
  font-size: 1.22rem;
  line-height: 1.25;
  font-weight: 900;
}
.proof-strip-grid p {
  margin-top: .85rem;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.62;
}
.service-grid, .card-grid, .proof-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.35rem; }
.card, .process-card, .contact-card, .audience-card, .proof-card, .resource-card {
  display: block;
  min-height: 100%;
  padding: clamp(1.55rem, 2.7vw, 2.35rem);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 14px 42px rgba(92,82,65,.07);
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease, background .22s ease;
}
.card:hover, .process-card:hover, .audience-card:hover, .proof-card:hover, .resource-card:hover {
  transform: translateY(-4px);
  border-color: rgba(135, 147, 114, .42);
  box-shadow: 0 24px 62px rgba(92,82,65,.16);
}
.card p, .process-card p, .audience-card p, .proof-card p, .resource-card p, .why-list p { margin-top: .95rem; color: var(--muted); font-size: 1.1rem; line-height: 1.68; }
.service-card { display: flex; flex-direction: column; min-height: 352px; position: relative; overflow: hidden; }
.service-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 5px;
  background: linear-gradient(90deg, var(--accent), var(--gold));
  opacity: .62;
}
.service-card h3 { margin-top: 1.2rem; font-size: clamp(1.48rem, 2.25vw, 2rem); }
.service-card .text-link {
  margin-top: auto;
  padding: .72rem .95rem;
  align-self: flex-start;
  border-radius: 999px;
  background: rgba(95,104,79,.1);
  border: 1px solid rgba(95,104,79,.22);
  font-size: 1.08rem;
}
.service-badge {
  display: inline-flex;
  align-self: flex-start;
  border-radius: 999px;
  padding: .52rem .88rem;
  background: rgba(135,147,114,.14);
  color: var(--accent-strong);
  border: 1px solid rgba(95,104,79,.18);
  font-size: .9rem;
  font-weight: 900;
}
.service-card:nth-child(2), .service-card:nth-child(5) { background: var(--sage-mist); }
.service-card:nth-child(3), .service-card:nth-child(7) { background: #f5ecdf; }
.service-card:hover { background: #fffdf8; border-color: rgba(183,146,85,.46); }
.service-card:hover::before { opacity: 1; }
.text-link { display: inline-flex; margin-top: 1.1rem; color: var(--accent-strong); font-weight: 900; transition: transform .2s ease, color .2s ease; }
.card:hover .text-link, .proof-card:hover .text-link, .resource-card:hover .text-link { transform: translateX(4px); color: #8a672f; }
.split { display: grid; grid-template-columns: minmax(0, .9fr) minmax(280px, .7fr); gap: clamp(2.4rem, 5vw, 5.5rem); align-items: start; }
.feature-list { margin: 0; padding: 0; list-style: none; display: grid; gap: 1rem; }
.feature-list li { padding: 1.2rem 1.3rem; background: rgba(251,248,242,.82); border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 1.04rem; }
.audience-layout, .why-layout { display: grid; gap: clamp(2.4rem, 5vw, 4.5rem); }
.audience-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.25rem; }
.why-section { background: linear-gradient(180deg, #fbf7ee 0%, #f6eddf 100%); }
.why-list { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.35rem; }
.why-list article {
  padding: clamp(1.75rem, 2.8vw, 2.55rem);
  border-radius: var(--radius);
  background:
    linear-gradient(180deg, rgba(255,253,248,.98), rgba(248,239,227,.94)),
    var(--card);
  border: 1px solid rgba(76,72,61,.2);
  box-shadow: 0 18px 48px rgba(92,82,65,.09);
  position: relative;
}
.why-list article::before {
  content: "";
  display: block;
  width: 56px;
  height: 4px;
  margin-bottom: 1.25rem;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--gold));
}
.process-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.35rem; }
.process-card { background: linear-gradient(180deg, #fffdf8, #f8efe4); }
.process-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  margin-bottom: 1.55rem;
  border-radius: 999px;
  background: #efe0c9;
  color: var(--accent-strong);
  font-size: 1.05rem;
  font-weight: 950;
}
.proof-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.proof-card { display: grid; gap: 1.15rem; background: linear-gradient(180deg, #fffdf8, #f7efe4); }
.outcome-row {
  display: grid;
  gap: .42rem;
  padding-top: 1.05rem;
  border-top: 1px solid rgba(76,72,61,.13);
}
.outcome-row strong {
  color: var(--foreground);
  font-size: .94rem;
  font-weight: 900;
}
.outcome-row p { margin-top: 0; }
.resource-section { background: linear-gradient(180deg, #fbf7ee, #fff9ee); }
.resource-grid { display: grid; grid-template-columns: 1.18fr .91fr .91fr; gap: 1.25rem; align-items: stretch; }
.resource-card {
  min-height: 360px;
  background: linear-gradient(180deg, #fffdf8, #f8efe4);
}
.resource-card:first-child {
  background:
    linear-gradient(135deg, rgba(232,237,223,.94), rgba(255,253,248,.96)),
    var(--card);
}
.resource-card h3 { font-size: clamp(1.48rem, 2vw, 2.08rem); }
.cta-band { background: linear-gradient(135deg, #eadcc7 0%, #e8eddf 52%, #f5eadb 100%); color: var(--foreground); }
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 5vw, 4rem);
  padding: clamp(2.65rem, 5.8vw, 4.25rem);
  border-radius: calc(var(--radius) + 6px);
  background:
    linear-gradient(135deg, rgba(255,253,248,.94), rgba(246,237,223,.88)),
    var(--card);
  border: 1px solid rgba(76,72,61,.2);
  box-shadow: 0 30px 88px rgba(92,82,65,.16);
  position: relative;
  overflow: hidden;
}
.cta::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 6px;
  background: linear-gradient(90deg, var(--accent), var(--gold));
}
.cta h2 { font-size: clamp(2.65rem, 4.8vw, 4.65rem); max-width: 900px; line-height: 1.02; }
.cta p { margin-top: 1.12rem; color: var(--muted); font-size: 1.24rem; line-height: 1.66; max-width: 670px; }
.cta .btn-primary { background: var(--foreground); color: #fffdf8; }
.cta .btn { min-width: 184px; min-height: 60px; }
.footer { padding: 92px 0 38px; background: #f3eadc; border-top: 1px solid var(--border); }
.footer-grid { display: grid; grid-template-columns: 1.35fr .9fr 1.12fr .95fr; gap: 3.6rem; }
.footer h3 { margin: 0 0 1.2rem; font-family: var(--font-sans); font-size: 1rem; text-transform: uppercase; letter-spacing: .12em; color: var(--foreground); }
.footer a { display: block; margin: .78rem 0; color: var(--muted); font-size: 1.1rem; font-weight: 800; transition: color .2s ease, transform .2s ease; }
.footer a:hover { color: var(--foreground); transform: translateX(2px); }
.footer p { max-width: 420px; margin-top: 1.35rem; color: var(--muted); font-size: 1.12rem; line-height: 1.72; }
.footer-bottom { display: flex; justify-content: space-between; gap: 1rem; margin-top: 3.6rem; padding-top: 1.6rem; border-top: 1px solid var(--border); color: var(--muted); font-size: 1rem; }
.faq { display: grid; gap: .75rem; }
.faq-item h3 { margin: 0; font-family: var(--font-sans); font-size: 1.05rem; line-height: 1.3; }
.faq-button { width: 100%; text-align: left; padding: 1rem 1.1rem; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--foreground); font-weight: 800; cursor: pointer; }
.faq-panel {
  max-height: 0;
  overflow: hidden;
  padding: 0 1.1rem;
  color: var(--muted);
  opacity: .01;
  transition: max-height .24s ease, padding .24s ease, opacity .24s ease;
}
.faq-panel.open {
  max-height: 420px;
  padding: 1rem 1.1rem 1.25rem;
  opacity: 1;
}
.faq-panel[hidden] { display: block; }
.content-block-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
.content-block { padding: clamp(1.55rem, 2.4vw, 2rem); border-radius: var(--radius); background: var(--card); border: 1px solid var(--border); box-shadow: 0 14px 42px rgba(92,82,65,.07); }
.content-block p { margin-top: .95rem; color: var(--muted); font-size: 1.08rem; line-height: 1.68; }
.compact-list { margin-top: 1.2rem; gap: .7rem; }
.compact-list li { padding: .82rem .95rem; font-size: .98rem; }
.contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, .45fr); gap: 1.5rem; align-items: start; }
.form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.field, .field-full { display: grid; gap: .45rem; }
.field-full { grid-column: 1 / -1; }
label { font-weight: 800; }
input, textarea, select {
  width: 100%;
  min-height: 48px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(45,45,45,.22);
  background: #fffaf0;
  color: var(--foreground);
  padding: .85rem .95rem;
  font: inherit;
}
textarea { min-height: 150px; resize: vertical; }
.form-note { grid-column: 1 / -1; color: var(--accent-strong); font-weight: 800; }
.article-layout { display: grid; grid-template-columns: minmax(0, 1fr) 280px; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.article-body { max-width: 72ch; }
.article-body p { margin-top: 1rem; color: var(--muted); font-size: 1.06rem; }
.article-body h2 { margin-top: 2.5rem; font-size: clamp(1.7rem, 3vw, 2.4rem); }
.article-body ul { color: var(--muted); line-height: 1.7; }
.author-block, .article-cta { margin: 1.2rem 0 1.6rem; padding: 1rem 1.1rem; border: 1px solid var(--border); border-radius: var(--radius-sm); background: #fffaf0; }
.author-block p { margin-top: .2rem; }
.article-cta { display: flex; flex-wrap: wrap; gap: .9rem; }
.article-aside { position: sticky; top: 96px; padding: 1.2rem; border-radius: var(--radius); background: var(--card); border: 1px solid var(--border); }
.article-aside a { display: block; margin-top: .8rem; color: var(--accent-strong); font-weight: 800; }
@media (prefers-reduced-motion: no-preference) {
  [data-reveal] {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity .62s cubic-bezier(.16, 1, .3, 1), transform .62s cubic-bezier(.16, 1, .3, 1);
    transition-delay: calc(var(--reveal-index, 0) * 70ms);
    will-change: opacity, transform;
  }
  [data-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
  [data-reveal] { opacity: 1 !important; transform: none !important; }
}
@media (max-width: 1120px) {
  .nav { min-height: 68px; }
  .nav-toggle { display: block; }
  .nav-links {
    position: fixed;
    inset: 68px 16px auto;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }
  .nav-links.open { display: flex; }
  .nav-cta { width: 100%; }
  .hero-grid, .split, .contact-layout, .article-layout, .why-list, .content-block-grid { grid-template-columns: 1fr; }
  .hero-visual { justify-self: start; width: min(100%, 520px); }
  .hero-visual img { height: clamp(460px, 72vw, 620px); }
  .service-grid, .card-grid, .audience-grid, .process-grid, .proof-strip-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .proof-strip-grid article,
  .proof-strip-grid article:nth-child(4),
  .proof-strip-grid article:nth-child(5) { grid-column: span 1; }
  .resource-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .article-aside { position: static; }
}
@media (max-width: 680px) {
  body { font-size: 16px; }
  .container, .nav { width: min(100% - 24px, var(--max)); }
  .hero { padding: 56px 0 48px; }
  h1 { font-size: clamp(2.25rem, 10vw, 3.35rem); }
  .hero-visual img { height: min(118vw, 500px); }
  .service-grid, .card-grid, .process-grid, .form, .footer-grid, .audience-grid, .proof-grid, .proof-strip-grid { grid-template-columns: 1fr; }
  .proof-strip-grid article,
  .proof-strip-grid article:nth-child(4),
  .proof-strip-grid article:nth-child(5) { grid-column: span 1; }
  .service-card, .resource-card { min-height: auto; }
  .cta, .footer-bottom { align-items: flex-start; flex-direction: column; }
  .btn { width: 100%; }
}
`;

const js = `const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");
if (revealItems.length) {
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.16 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

const header = document.querySelector("[data-header]");
const hero = document.querySelector(".hero");
if (header && hero && "IntersectionObserver" in window) {
  const headerObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle("is-scrolled", entry.intersectionRatio < 0.92);
  }, { threshold: [0, 0.92, 1] });
  headerObserver.observe(hero);
}

document.querySelectorAll("[data-faq-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    if (panel) panel.classList.toggle("open", !expanded);
  });
});

const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) {
      if (!form.checkValidity()) {
        status.textContent = "Please complete the required fields.";
        status.hidden = false;
        form.reportValidity();
        return;
      }
      status.textContent = "Sending...";
      status.hidden = false;
      window.setTimeout(() => {
        status.textContent = "Thanks. Your inquiry is ready to send to Jesel.";
      }, 500);
    }
  });
}
`;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-labelledby="title desc">
  <title id="title">Jesel Cura favicon</title>
  <desc id="desc">Black, cream, and gold JC monogram favicon for Jesel Cura.</desc>
  <rect width="512" height="512" rx="96" fill="#0f0f0f"/>
  <circle cx="256" cy="256" r="186" fill="#16120f"/>
  <circle cx="256" cy="256" r="156" fill="none" stroke="#c7b299" stroke-width="18" stroke-dasharray="520 150" stroke-linecap="round" transform="rotate(-24 256 256)"/>
  <path fill="#f6f1e8" d="M224 126c0-26-22-38-58-40h170c-36 2-58 14-58 40v208c0 72-42 112-104 112-46 0-86-24-106-62 22 28 52 42 88 42 42 0 68-28 68-90V126Z"/>
  <path fill="#d6b77a" d="M282 202c58 8 106 52 122 112h-38c-15-38-46-66-84-74v-38Z"/>
  <path fill="#d6b77a" d="M398 332c-18 66-76 114-148 114-48 0-90-22-118-56h52c20 14 43 22 68 22 50 0 92-32 108-80h38Z"/>
</svg>
`;

const monogram = favicon;

const wordmark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 180" role="img" aria-labelledby="title desc">
  <title id="title">Jesel Cura official logo</title>
  <desc id="desc">Official Jesel Cura logo with JC monogram and Fractional Customer Success Operations tagline.</desc>
  <g transform="translate(10 10) scale(.62)">
    <path d="M152 61c26 6 48 26 57 52" fill="none" stroke="#c7b299" stroke-width="12" stroke-linecap="butt"/>
    <path d="M210 145c-8 32-37 56-72 56-27 0-51-15-64-37" fill="none" stroke="#c7b299" stroke-width="12" stroke-linecap="butt"/>
    <path d="M74 164c-15 24-48 21-62 0" fill="none" stroke="#111111" stroke-width="9" stroke-linecap="round"/>
    <path d="M99 43c0-14-11-21-29-22h78c-18 1-29 8-29 22v104c0 37-22 58-54 58-23 0-43-12-53-31 11 14 26 21 44 21 26 0 43-18 43-50V43Z" fill="#111111"/>
  </g>
  <line x1="182" y1="25" x2="182" y2="155" stroke="#d6c9b8" stroke-width="2"/>
  <text x="235" y="80" fill="#111111" font-family="Poppins, Manrope, Arial, sans-serif" font-size="48" letter-spacing="22">JESEL CURA</text>
  <line x1="338" y1="112" x2="440" y2="112" stroke="#b08d57" stroke-width="2"/>
  <circle cx="462" cy="112" r="4" fill="#b08d57"/>
  <line x1="485" y1="112" x2="590" y2="112" stroke="#b08d57" stroke-width="2"/>
  <text x="250" y="145" fill="#111111" font-family="Poppins, Manrope, Arial, sans-serif" font-size="12" letter-spacing="4">FRACTIONAL CUSTOMER SUCCESS OPERATIONS</text>
</svg>
`;

const ogImage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">Jesel Cura Open Graph image</title>
  <desc id="desc">Jesel Cura, Fractional Customer Success and Operations Consultant for SaaS and Shopify teams.</desc>
  <rect width="1200" height="630" fill="#f6f2ea"/>
  <rect x="70" y="70" width="1060" height="490" rx="28" fill="#fbf8f2" stroke="#cfc5b8" stroke-width="2"/>
  <circle cx="975" cy="132" r="190" fill="#8e987b" opacity=".18"/>
  <circle cx="146" cy="516" r="150" fill="#b08d57" opacity=".16"/>
  <text x="120" y="210" fill="#2d2d2d" font-family="Georgia, serif" font-size="86" font-weight="700">Jesel Cura</text>
  <text x="120" y="310" fill="#687255" font-family="Arial, sans-serif" font-size="44" font-weight="700">Fractional Customer Success &amp;</text>
  <text x="120" y="365" fill="#687255" font-family="Arial, sans-serif" font-size="44" font-weight="700">Operations Consultant</text>
  <text x="120" y="455" fill="#4a4a42" font-family="Arial, sans-serif" font-size="34">For SaaS, Shopify, and Ecommerce Teams</text>
  <text x="120" y="510" fill="#8a672f" font-family="Arial, sans-serif" font-size="24" letter-spacing="3">JESELCURA.ME</text>
</svg>
`;

removeIfExists("resources");
removeIfExists("services/virtual-assistant-services");
removeIfExists("services/operations-support-services");
removeIfExists("services/customer-support-services");
removeIfExists("services/real-estate-property-management-support");
removeIfExists("services/lead-generation-sales-support");
removeIfExists("customer-retention-consultant");
removeIfExists("customer-onboarding-consultant");

writeStaticAssets();
for (const page of [...pages, ...extraPages]) write(page.route, renderPage(page));
for (const post of blogPosts) write(post.route, renderArticle({ ...post, sections: [], jsonType: "Article" }, "/blog"));
for (const study of caseStudies) write(study.route, renderArticle({ ...study, jsonType: "Article" }, "/case-studies"));
writeSitemap();
writeRedirects();
writeLlms();

console.log("Jesel Cura static site generated");
