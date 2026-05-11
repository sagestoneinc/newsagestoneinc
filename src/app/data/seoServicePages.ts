export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoServicePage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  heroSummary: string;
  intro: string;
  highlights: string[];
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  faqs: SeoFaq[];
  related: Array<{
    label: string;
    path: string;
  }>;
}

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "virtual-assistant-services",
    title: "Virtual Assistant Services | SageStone Inc",
    metaDescription:
      "Managed virtual assistant services for admin, customer support, e-commerce, marketing, and operations tasks.",
    h1: "Virtual Assistant Services for Growing Businesses",
    eyebrow: "Virtual Assistant Services",
    heroSummary:
      "Delegate recurring administrative, customer support, e-commerce, marketing, and operations work to a dependable remote support partner.",
    intro:
      "SageStone Inc provides managed virtual assistant services for businesses that need organized execution without hiring full-time staff. We align support around your tools, priorities, and communication standards so routine work stays visible and accountable.",
    highlights: [
      "Administrative and operations support",
      "Customer communication assistance",
      "E-commerce and order support",
      "Marketing coordination and reporting",
    ],
    sections: [
      {
        heading: "Benefits",
        body:
          "Add reliable capacity for recurring work while keeping your internal team focused on customers, revenue, and strategic priorities.",
        bullets: ["Flexible remote support", "Documented workflows", "U.S.-managed oversight", "Clear onboarding and communication"],
      },
      {
        heading: "Use cases",
        body:
          "Virtual assistants can support inbox triage, calendars, CRM updates, data entry, research, reporting, vendor follow-up, customer messages, and marketing task coordination.",
      },
      {
        heading: "Who this is for",
        body:
          "This service fits founders, operators, agencies, real estate teams, e-commerce brands, consultants, and small businesses that need consistent help with repeatable tasks.",
      },
      {
        heading: "Process",
        body:
          "We start with a discovery call, map the tasks and tools, document the first workflows, launch support, then refine priorities through check-ins and reporting.",
      },
    ],
    faqs: [
      {
        question: "What can a SageStone virtual assistant handle?",
        answer:
          "A SageStone virtual assistant can help with scheduling, inboxes, CRM updates, reporting, research, customer support, order support, documentation, and recurring admin tasks.",
      },
      {
        question: "Do you support ongoing monthly work?",
        answer:
          "Yes. Most engagements are built around recurring weekly or monthly workflows so support becomes predictable and easier to manage.",
      },
      {
        question: "Can you work inside our current tools?",
        answer:
          "Yes. We align with your existing systems, communication channels, task boards, inboxes, CRMs, and approval processes whenever possible.",
      },
      {
        question: "How quickly can support begin?",
        answer:
          "Timing depends on scope and access requirements, but we focus on a clear onboarding plan so priority tasks can move forward quickly.",
      },
    ],
    related: [
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
      { label: "ecommerce customer support outsourcing", path: "/ecommerce-customer-support-outsourcing" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
  {
    slug: "real-estate-virtual-assistant-services",
    title: "Real Estate VA Services | SageStone Inc",
    metaDescription:
      "Real estate virtual assistant services for agents needing admin, CRM, listing, calendar, and client follow-up support.",
    h1: "Real Estate Virtual Assistant Services",
    eyebrow: "Real Estate VA Support",
    heroSummary:
      "Give agents, teams, and brokerages dependable real estate admin support for CRM updates, listings, scheduling, and client follow-up.",
    intro:
      "SageStone Inc provides real estate virtual assistant services for busy professionals who need help keeping transactions, leads, and daily admin organized. A remote assistant for realtors can support your back office while you focus on appointments, relationships, and closings.",
    highlights: ["CRM and lead updates", "Listing coordination", "Calendar and inbox support", "Client follow-up tasks"],
    sections: [
      {
        heading: "Benefits",
        body:
          "Reduce administrative bottlenecks, improve follow-through with prospects and clients, and keep important real estate details from slipping through the cracks.",
        bullets: ["More consistent lead follow-up", "Cleaner CRM records", "Less manual admin for agents", "Organized listing and document tasks"],
      },
      {
        heading: "Use cases",
        body:
          "Use support for database cleanup, showing coordination, listing checklist updates, transaction task tracking, vendor follow-up, open house prep, and email organization.",
      },
      {
        heading: "Who this is for",
        body:
          "This service is built for solo agents, real estate teams, brokerages, property professionals, and realtors who need structured admin help without another full-time hire.",
      },
      {
        heading: "Process",
        body:
          "We review your market, tools, lead sources, listing workflow, and communication preferences, then create a support plan with clear tasks, access, and escalation rules.",
      },
    ],
    faqs: [
      {
        question: "What real estate admin support can you provide?",
        answer:
          "Support may include CRM updates, lead list maintenance, calendar help, listing coordination, client follow-up, document organization, and recurring task tracking.",
      },
      {
        question: "Can a virtual assistant for real estate agents manage my CRM?",
        answer:
          "Yes. We can help update contact records, add notes, organize leads, flag follow-ups, and keep pipeline information cleaner based on your process.",
      },
      {
        question: "Do you support listing coordination tasks?",
        answer:
          "Yes. We can help coordinate checklists, draft update requests, organize assets, track vendor items, and keep listing tasks visible.",
      },
      {
        question: "Is this service only for large real estate teams?",
        answer:
          "No. We support solo agents, small teams, and growing brokerages that need dependable remote assistant support.",
      },
      {
        question: "How do we start real estate VA support?",
        answer:
          "Book a consultation so we can review your current workflow, tools, lead volume, and the tasks that should be delegated first.",
      },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
    ],
  },
  {
    slug: "ecommerce-customer-support-outsourcing",
    title: "Ecommerce Support Outsourcing | SageStone Inc",
    metaDescription:
      "Ecommerce customer support outsourcing for Shopify stores needing inbox, live chat, returns, and order management support.",
    h1: "Ecommerce Customer Support Outsourcing",
    eyebrow: "E-Commerce Support",
    heroSummary:
      "Support online shoppers with organized inbox coverage, Shopify customer support, order management support, returns coordination, and reporting.",
    intro:
      "SageStone Inc helps online stores manage customer conversations and operational follow-through. Our ecommerce customer support outsourcing gives your team a practical way to handle tickets, order questions, returns, and updates without overwhelming internal staff.",
    highlights: ["Shopify customer support", "Order management support", "Returns and exchanges help", "Product and inbox task support"],
    sections: [
      {
        heading: "Benefits",
        body:
          "Improve response consistency, reduce support backlog, and keep order-related questions moving with trained remote support aligned to your policies.",
        bullets: ["Faster customer follow-up", "Cleaner ticket organization", "Better order visibility", "Scalable support during busy seasons"],
      },
      {
        heading: "Use cases",
        body:
          "Use an ecommerce virtual assistant for order status replies, returns coordination, product questions, customer inbox triage, review follow-up, and basic catalog update requests.",
      },
      {
        heading: "Who this is for",
        body:
          "This service fits Shopify stores, DTC brands, marketplace sellers, subscription businesses, and e-commerce teams that need flexible support coverage.",
      },
      {
        heading: "Process",
        body:
          "We document support channels, response rules, refund and return policies, escalation paths, reporting needs, and store access before support begins.",
      },
    ],
    faqs: [
      {
        question: "Do you provide Shopify customer support?",
        answer:
          "Yes. We can help with Shopify-related customer inquiries, order status checks, returns coordination, product questions, and support inbox organization.",
      },
      {
        question: "Can you help with order management support?",
        answer:
          "Yes. We can monitor order issues, organize fulfillment follow-ups, update trackers, route exceptions, and prepare customer communication based on your policies.",
      },
      {
        question: "Is ecommerce support available during seasonal spikes?",
        answer:
          "Yes. Support can be structured for ongoing needs or busier periods when ticket volume, returns, and customer questions increase.",
      },
      {
        question: "Can you follow our brand voice?",
        answer:
          "Yes. We use your templates, examples, tone guidelines, and escalation rules to keep customer communication consistent.",
      },
      {
        question: "How do you protect quality?",
        answer:
          "We establish workflows, approved responses, escalation standards, and reporting so support tasks remain visible and reviewable.",
      },
    ],
    related: [
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
      { label: "web design and maintenance services", path: "/web-design-maintenance-services" },
    ],
  },
  {
    slug: "customer-support-outsourcing",
    title: "Customer Support Outsourcing | SageStone Inc",
    metaDescription:
      "Customer support outsourcing for email, live chat, tickets, follow-ups, and small business service workflows.",
    h1: "Customer Support Outsourcing Services",
    eyebrow: "Customer Support Outsourcing",
    heroSummary:
      "Improve customer response workflows with email support outsourcing, live chat support outsourcing, ticket organization, and escalation support.",
    intro:
      "SageStone Inc provides outsourced customer service for small business teams that need professional communication support without building a full internal department. We help organize requests, route urgent issues, and maintain clear service standards.",
    highlights: ["Email support outsourcing", "Live chat support workflows", "Ticket organization", "Escalation and reporting"],
    sections: [
      {
        heading: "Benefits",
        body:
          "Keep customer conversations organized, improve response consistency, and free your team from repetitive support work while maintaining visibility into common issues.",
        bullets: ["More reliable inbox coverage", "Clear escalation rules", "Reduced support backlog", "Better reporting on recurring questions"],
      },
      {
        heading: "Use cases",
        body:
          "Use support for shared inboxes, live chat triage, help desk queues, follow-up reminders, customer updates, review requests, and support documentation.",
      },
      {
        heading: "Who this is for",
        body:
          "This service is a fit for small businesses, service companies, agencies, e-commerce brands, and growing teams that need dependable customer communication support.",
      },
      {
        heading: "Process",
        body:
          "We review your channels, FAQs, response templates, tone, escalation path, and reporting needs before launching a support workflow your team can monitor.",
      },
    ],
    faqs: [
      {
        question: "What channels can you support?",
        answer:
          "We can help with email support outsourcing, live chat support outsourcing workflows, help desk tickets, contact forms, and customer follow-up tasks.",
      },
      {
        question: "Can you serve as outsourced customer service for small business?",
        answer:
          "Yes. We help small businesses create reliable support coverage without the overhead of building a larger internal team right away.",
      },
      {
        question: "How are escalations handled?",
        answer:
          "We document what can be answered directly, what requires approval, and what should be routed to your internal team for urgent review.",
      },
      {
        question: "Will customers know support is outsourced?",
        answer:
          "Support can follow your brand voice, templates, and preferred sender or help desk setup so communication feels consistent with your business.",
      },
      {
        question: "Can you report on support trends?",
        answer:
          "Yes. We can summarize recurring questions, unresolved items, backlog status, and opportunities to improve customer support workflows.",
      },
    ],
    related: [
      { label: "ecommerce customer support outsourcing", path: "/ecommerce-customer-support-outsourcing" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
  {
    slug: "business-operations-support",
    title: "Business Operations Support | SageStone Inc",
    metaDescription:
      "Business operations support for admin operations, back office services, documentation, reporting, and team coordination.",
    h1: "Business Operations Support Services",
    eyebrow: "Operations Support",
    heroSummary:
      "Strengthen daily execution with remote operations assistant support for admin operations, back office workflows, documentation, and reporting.",
    intro:
      "SageStone Inc provides business operations support for teams that need repeatable execution behind the scenes. We help organize admin operations support, back office support services, process documentation, and coordination so work moves forward between meetings.",
    highlights: ["Remote operations assistant support", "Admin operations support", "Back office support services", "Documentation and reporting"],
    sections: [
      {
        heading: "Benefits",
        body:
          "Create more operational consistency, reduce dropped tasks, and give leaders better visibility into recurring work without adding unnecessary management complexity.",
        bullets: ["Cleaner back-office workflows", "Better task ownership", "Organized documentation", "Recurring reporting and follow-up"],
      },
      {
        heading: "Use cases",
        body:
          "Use operations support for SOP updates, CRM hygiene, trackers, internal reporting, invoice or document routing, vendor follow-up, meeting notes, and project coordination.",
      },
      {
        heading: "Who this is for",
        body:
          "This service fits founders, operations managers, agencies, consultants, professional services firms, and small businesses with recurring operational work.",
      },
      {
        heading: "Process",
        body:
          "We identify bottlenecks, define recurring tasks, document workflows, assign communication routines, launch support, and refine the process with practical reporting.",
      },
    ],
    faqs: [
      {
        question: "What does business operations support include?",
        answer:
          "It can include admin operations support, back office support services, documentation, reporting, CRM updates, team follow-up, and workflow coordination.",
      },
      {
        question: "Can you act as a remote operations assistant?",
        answer:
          "Yes. We can support recurring operational tasks, help organize priorities, maintain trackers, and keep follow-ups moving across your team.",
      },
      {
        question: "Can you help document SOPs?",
        answer:
          "Yes. We can help turn recurring work into checklists, templates, process notes, and standard operating procedures your team can reuse.",
      },
      {
        question: "Is this different from general virtual assistant support?",
        answer:
          "Operations support is more focused on workflows, coordination, reporting, and back-office systems, while general VA support may include a wider range of admin tasks.",
      },
      {
        question: "How do we choose the first operations tasks?",
        answer:
          "We start with high-frequency, repeatable tasks that consume time, create delays, or need better documentation and ownership.",
      },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
      { label: "real estate virtual assistant services", path: "/real-estate-virtual-assistant-services" },
      { label: "web design and maintenance services", path: "/web-design-maintenance-services" },
    ],
  },
  {
    slug: "web-design-maintenance-services",
    title: "Web Design Maintenance Services | SageStone Inc",
    metaDescription:
      "Web design and maintenance services for small business website updates, WordPress maintenance, landing pages, and QA.",
    h1: "Web Design and Maintenance Services",
    eyebrow: "Website Support",
    heroSummary:
      "Keep your website current with website maintenance for small business teams, content updates, WordPress maintenance support, and landing page help.",
    intro:
      "SageStone Inc provides web design and maintenance services for businesses that need dependable website updates support without slowing down internal teams. We help coordinate edits, QA, content changes, and ongoing web operations.",
    highlights: ["Website updates support", "WordPress maintenance support", "Landing page updates", "Content and QA coordination"],
    sections: [
      {
        heading: "Benefits",
        body:
          "Keep your site accurate, campaign-ready, and easier to manage with ongoing support for practical web updates and maintenance coordination.",
        bullets: ["Faster content updates", "Cleaner landing pages", "Routine QA checks", "Organized website request tracking"],
      },
      {
        heading: "Use cases",
        body:
          "Use support for service page edits, landing page updates, image swaps, form checks, broken-link reviews, WordPress maintenance support tasks, and publishing coordination.",
      },
      {
        heading: "Who this is for",
        body:
          "This service fits small businesses, consultants, agencies, e-commerce teams, and service companies that need website updates support but not a full-time web team.",
      },
      {
        heading: "Process",
        body:
          "We review your platform, update backlog, approvals, brand standards, access needs, and priority pages, then create a clear workflow for requests and QA.",
      },
    ],
    faqs: [
      {
        question: "Do you offer website maintenance for small business?",
        answer:
          "Yes. We support small business websites with content changes, page updates, routine QA, request tracking, and maintenance coordination.",
      },
      {
        question: "Can you provide WordPress maintenance support?",
        answer:
          "Yes. We can help coordinate WordPress content edits, routine checks, plugin-related task tracking, QA, and update documentation based on your setup.",
      },
      {
        question: "Can you update landing pages?",
        answer:
          "Yes. We can support landing page edits, calls-to-action, copy updates, image changes, form checks, and publishing QA.",
      },
      {
        question: "Do you handle one-time or ongoing web support?",
        answer:
          "Support can be scoped around a defined update backlog or recurring maintenance needs, depending on your website and business priorities.",
      },
      {
        question: "Can web support connect with operations support?",
        answer:
          "Yes. Website updates often connect with marketing, customer support, e-commerce, and business operations workflows.",
      },
    ],
    related: [
      { label: "business operations support", path: "/business-operations-support" },
      { label: "ecommerce customer support outsourcing", path: "/ecommerce-customer-support-outsourcing" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
    ],
  },
  {
    slug: "social-media-management-services",
    title: "Social Media Support | SageStone Inc",
    metaDescription:
      "Social media management support for scheduling, engagement tracking, reporting, and marketing coordination.",
    h1: "Social Media Management Services",
    eyebrow: "Marketing Support",
    heroSummary:
      "Keep content calendars, scheduling, engagement tracking, and marketing follow-through organized with remote support.",
    intro:
      "SageStone Inc helps businesses keep social media execution consistent by supporting content calendars, asset coordination, scheduling, engagement tracking, and reporting tasks.",
    highlights: ["Content scheduling", "Asset coordination", "Engagement tracking", "Marketing task follow-up"],
    sections: [
      {
        heading: "Benefits",
        body:
          "Create a more consistent publishing rhythm and reduce the operational drag that makes marketing tasks fall behind.",
        bullets: ["Organized calendars", "Clear approvals", "Consistent scheduling", "Simple reporting"],
      },
      {
        heading: "Use cases",
        body:
          "Use support for content calendars, post scheduling, campaign checklists, asset gathering, comment tracking, and weekly marketing updates.",
      },
      {
        heading: "Who this is for",
        body:
          "This service fits small businesses, consultants, agencies, and teams that need execution support for approved marketing plans.",
      },
      {
        heading: "Process",
        body:
          "We clarify platforms, brand guidelines, approval steps, content cadence, reporting needs, and recurring tasks before launching support.",
      },
    ],
    faqs: [
      {
        question: "Can you create social media strategy?",
        answer:
          "Our support is focused on execution, coordination, scheduling, and reporting based on your goals, content direction, and approvals.",
      },
      {
        question: "Can you schedule approved content?",
        answer: "Yes. We can schedule approved content, organize assets, and help maintain your publishing calendar.",
      },
      {
        question: "Can social media support connect with website updates?",
        answer: "Yes. We can coordinate marketing tasks with website updates, landing page changes, and broader operations support.",
      },
      {
        question: "How do we get started?",
        answer: "Contact SageStone Inc to review your platforms, cadence, approvals, assets, and recurring marketing support needs.",
      },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "web design and maintenance services", path: "/web-design-maintenance-services" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
];

export function getSeoServicePage(slug: string | undefined) {
  return seoServicePages.find((page) => page.slug === slug);
}
