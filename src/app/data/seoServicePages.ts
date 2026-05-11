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

const genericBusinesses =
  "SageStone Inc supports small businesses, e-commerce brands, real estate teams, agencies, startups, and growing companies that need reliable operational support.";

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "virtual-assistant-services",
    title: "Virtual Assistant Services for Growing Businesses | SageStone Inc",
    metaDescription:
      "Delegate administrative, operational, customer support, e-commerce, and marketing tasks to reliable virtual assistants from SageStone Inc.",
    h1: "Virtual Assistant Services for Growing Businesses",
    eyebrow: "Virtual Assistant Services",
    heroSummary:
      "Delegate recurring administrative, operational, customer support, e-commerce, and marketing work to a reliable support partner.",
    intro:
      "SageStone Inc helps growing teams create dependable support capacity without adding unnecessary complexity. Our virtual assistant services are built around your current tools, priorities, and workflows so routine work stays organized and accountable.",
    highlights: [
      "Administrative and operations support",
      "Customer support assistance",
      "E-commerce and order support",
      "Social media and marketing coordination",
    ],
    sections: [
      {
        heading: "What our virtual assistants can handle",
        body:
          "Virtual assistants can help keep daily work moving by managing repeatable tasks, organizing information, coordinating follow-ups, and supporting the systems your team already uses.",
        bullets: ["Inbox and calendar management", "CRM updates and task tracking", "Research, reporting, and documentation", "Customer and vendor follow-up"],
      },
      {
        heading: "Who this service is for",
        body:
          "This service is a fit for founders, operators, agencies, real estate professionals, and e-commerce teams that need dependable execution but are not ready to hire a full internal support team.",
      },
      {
        heading: "Administrative and operations support",
        body:
          "SageStone Inc can support scheduling, data entry, file organization, process documentation, meeting preparation, and other back-office workflows that help teams stay focused.",
      },
      {
        heading: "Customer support assistance",
        body:
          "Virtual assistants can help monitor inboxes, organize tickets, draft responses, route urgent issues, and keep customer communication consistent with your standards.",
      },
      {
        heading: "E-commerce and order support",
        body:
          "For online stores, support can include order checks, fulfillment coordination, product update assistance, CRM tasks, customer inquiries, and reporting support.",
      },
      {
        heading: "Social media and marketing support",
        body:
          "SageStone Inc can assist with content scheduling, asset coordination, engagement tracking, campaign task lists, and marketing operations follow-through.",
      },
      {
        heading: "Why choose SageStone Inc",
        body:
          "Our approach focuses on clear onboarding, documented workflows, practical communication, and flexible support that can adapt as your business needs change.",
      },
    ],
    faqs: [
      { question: "What types of businesses does SageStone Inc support?", answer: genericBusinesses },
      {
        question: "Can SageStone Inc support ongoing monthly work?",
        answer:
          "Yes. SageStone Inc can support ongoing administrative, customer support, marketing, e-commerce, and operations tasks depending on business needs.",
      },
      {
        question: "What tasks can a virtual assistant handle?",
        answer:
          "Virtual assistants can help with inbox management, scheduling, customer support, CRM updates, order support, research, reporting, documentation, and social media coordination.",
      },
      {
        question: "How do we get started?",
        answer:
          "Start by contacting SageStone Inc to discuss your goals, current workflow, required support, and the best way to structure the engagement.",
      },
    ],
    related: [
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
      { label: "e-commerce virtual assistant services", path: "/ecommerce-virtual-assistant" },
      { label: "business operations support", path: "/business-operations-support" },
      { label: "social media management services", path: "/social-media-management-services" },
    ],
  },
  {
    slug: "customer-support-outsourcing",
    title: "Customer Support Outsourcing Services | SageStone Inc",
    metaDescription:
      "SageStone Inc provides outsourced customer support services to help businesses improve response times, manage tickets, and support customers with care.",
    h1: "Customer Support Outsourcing Services",
    eyebrow: "Customer Support Outsourcing",
    heroSummary:
      "Improve customer communication with organized ticket handling, inbox support, escalation workflows, and reporting.",
    intro:
      "SageStone Inc helps teams manage customer conversations with consistency and care. Our outsourced customer support services are designed to keep messages organized, response workflows clear, and service quality visible.",
    highlights: ["Inbox and ticket support", "Customer follow-up", "Escalation routing", "Support reporting"],
    sections: [
      { heading: "Reliable customer support for growing teams", body: "When customer volume increases, a dependable support workflow helps protect response quality and internal focus. SageStone Inc can support day-to-day customer operations while your team manages strategy and higher-priority issues." },
      { heading: "Channels supported", body: "Support can be structured around email, help desk tickets, chat workflows, social inboxes, CRM tasks, and other customer communication channels already used by your business." },
      { heading: "Ticket management", body: "We can help categorize, prioritize, assign, update, and close tickets according to your documented process so customer requests do not get lost." },
      { heading: "Response time and quality control", body: "Clear response templates, escalation rules, and review loops help maintain professional communication and consistent customer care." },
      { heading: "Escalation workflows", body: "Urgent, sensitive, or technical issues can be routed to the right internal owner with the context needed for faster resolution." },
      { heading: "Reporting and performance tracking", body: "SageStone Inc can help summarize ticket volume, response patterns, recurring issues, and operational insights for your team." },
    ],
    faqs: [
      { question: "What types of businesses does SageStone Inc support?", answer: genericBusinesses },
      { question: "Can you work inside our existing help desk?", answer: "Yes. SageStone Inc can support workflows inside many common help desk, inbox, CRM, and collaboration tools after onboarding and access setup." },
      { question: "How are complex customer issues handled?", answer: "Complex or sensitive issues are escalated according to your rules, with notes and context so your internal team can respond efficiently." },
      { question: "How do we get started?", answer: "Start by contacting SageStone Inc to review your support volume, current channels, escalation needs, and quality expectations." },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "e-commerce virtual assistant services", path: "/ecommerce-virtual-assistant" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
  {
    slug: "ecommerce-virtual-assistant",
    title: "E-Commerce Virtual Assistant Services | SageStone Inc",
    metaDescription:
      "Get e-commerce virtual assistant support for order management, customer inquiries, product updates, CRM tasks, and back-office operations.",
    h1: "E-Commerce Virtual Assistant Services",
    eyebrow: "E-Commerce Support",
    heroSummary:
      "Keep online store operations organized with support for orders, customer inquiries, catalog tasks, CRM updates, and reporting.",
    intro:
      "E-commerce teams often need consistent help with the operational details behind every order and customer conversation. SageStone Inc provides virtual assistant support that helps your store stay organized as workload changes.",
    highlights: ["Order and fulfillment support", "Customer inquiries", "Product listing assistance", "CRM and reporting support"],
    sections: [
      { heading: "Support for e-commerce operations", body: "SageStone Inc can help with repeatable store operations, customer communication, administrative follow-up, and back-office work that keeps online sales moving." },
      { heading: "Order and fulfillment support", body: "Support may include checking order details, coordinating fulfillment updates, flagging exceptions, and documenting recurring issues for review." },
      { heading: "Customer inquiries and ticket support", body: "We can help organize customer messages, draft responses, update ticket statuses, and route issues that need internal attention." },
      { heading: "Product listing and catalog assistance", body: "Virtual assistants can help coordinate product descriptions, images, inventory notes, categorization, and catalog updates according to your workflow." },
      { heading: "CRM and reporting support", body: "SageStone Inc can assist with CRM updates, customer notes, sales operations reporting, and administrative tasks tied to your store data." },
      { heading: "Tools and platforms supported", body: "Support can be adapted to common e-commerce, help desk, CRM, spreadsheet, and collaboration tools after onboarding." },
    ],
    faqs: [
      { question: "What e-commerce tasks can SageStone Inc support?", answer: "SageStone Inc can support order checks, fulfillment coordination, customer inquiries, product updates, CRM tasks, reporting, and back-office operations." },
      { question: "Can SageStone Inc support ongoing monthly work?", answer: "Yes. Ongoing support can be structured around recurring store operations, customer support, catalog updates, and reporting needs." },
      { question: "Can you help during busy seasons?", answer: "SageStone Inc can discuss flexible support needs for launches, sales periods, or recurring workload increases based on scope and availability." },
      { question: "How do we get started?", answer: "Contact SageStone Inc to review your store workflow, tools, task volume, and the support structure that best fits your operations." },
    ],
    related: [
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
  {
    slug: "real-estate-virtual-assistant",
    title: "Real Estate Virtual Assistant Services | SageStone Inc",
    metaDescription:
      "SageStone Inc helps real estate professionals with administrative support, lead management, CRM updates, listing coordination, and client communication.",
    h1: "Real Estate Virtual Assistant Services",
    eyebrow: "Real Estate VA Support",
    heroSummary:
      "Support real estate operations with help for leads, CRM updates, listings, calendars, inboxes, and client communication.",
    intro:
      "Real estate professionals need organized follow-up and accurate administrative support to keep opportunities moving. SageStone Inc helps agents, teams, and operators manage the recurring work behind client service and transaction activity.",
    highlights: ["Lead follow-up", "CRM updates", "Listing coordination", "Calendar and inbox management"],
    sections: [
      { heading: "Virtual assistant support for real estate teams", body: "SageStone Inc can provide administrative and coordination support for real estate professionals who need reliable help with daily operational tasks." },
      { heading: "Lead management and follow-up", body: "Support can include organizing lead information, sending follow-up reminders, updating notes, and helping maintain consistent communication workflows." },
      { heading: "CRM updates", body: "Virtual assistants can help keep contact records, notes, tasks, and pipeline stages current so your team has cleaner visibility." },
      { heading: "Listing coordination", body: "We can assist with listing checklists, document organization, schedule coordination, and communication tasks tied to property marketing workflows." },
      { heading: "Calendar and inbox management", body: "SageStone Inc can help manage appointments, reminders, inbox triage, and recurring administrative follow-ups." },
      { heading: "Client communication support", body: "Support can include drafting routine updates, organizing client requests, and routing questions that require licensed or internal expertise." },
    ],
    faqs: [
      { question: "Who can use real estate virtual assistant support?", answer: "Real estate agents, teams, brokers, property managers, and operations staff can use SageStone Inc for recurring administrative and coordination support." },
      { question: "Can SageStone Inc manage CRM updates?", answer: "Yes. SageStone Inc can help update CRM records, notes, tasks, reminders, and lead statuses based on your workflow." },
      { question: "Can a virtual assistant communicate with clients?", answer: "Yes, for routine communication and coordination. Questions that require licensed advice or internal approval should be escalated to your team." },
      { question: "How do we get started?", answer: "Contact SageStone Inc to discuss your real estate workflow, communication needs, CRM setup, and recurring support tasks." },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
    ],
  },
  {
    slug: "social-media-management-services",
    title: "Social Media Management Services | SageStone Inc",
    metaDescription:
      "SageStone Inc supports businesses with social media scheduling, content coordination, engagement tracking, and marketing operations.",
    h1: "Social Media Management Services",
    eyebrow: "Social Media Support",
    heroSummary:
      "Coordinate social media tasks with support for scheduling, content organization, community engagement, and reporting.",
    intro:
      "Consistent social media execution requires planning, organization, and follow-through. SageStone Inc supports busy teams with practical marketing operations assistance that helps content move from idea to published post.",
    highlights: ["Content scheduling", "Community engagement support", "Reporting coordination", "Platform support"],
    sections: [
      { heading: "Social media support for busy teams", body: "SageStone Inc helps businesses stay organized with recurring social media tasks, content coordination, publishing calendars, and campaign follow-up." },
      { heading: "Content scheduling", body: "Support can include preparing content calendars, organizing assets, scheduling approved posts, and checking that publishing tasks are completed." },
      { heading: "Community engagement support", body: "Virtual support can help monitor comments, track engagement, organize responses, and route sensitive messages for internal review." },
      { heading: "Reporting and coordination", body: "SageStone Inc can help gather performance notes, prepare recurring reports, and coordinate action items with your team." },
      { heading: "Platform support", body: "Support can be adapted to the social platforms, scheduling tools, shared drives, and project management systems your team already uses." },
    ],
    faqs: [
      { question: "What social media tasks can SageStone Inc support?", answer: "SageStone Inc can help with content scheduling, asset coordination, engagement tracking, reporting, and marketing operations tasks." },
      { question: "Do you create a full marketing strategy?", answer: "SageStone Inc focuses on support and execution. Strategic planning can be coordinated around your internal direction, existing brand guidelines, and approved campaigns." },
      { question: "Can SageStone Inc support ongoing monthly work?", answer: "Yes. Ongoing social media support can be structured around recurring scheduling, reporting, coordination, and engagement tasks." },
      { question: "How do we get started?", answer: "Contact SageStone Inc to discuss your platforms, approval process, publishing cadence, and the support needed to keep marketing operations moving." },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
      { label: "website maintenance services", path: "/web-design-maintenance" },
    ],
  },
  {
    slug: "business-operations-support",
    title: "Business Operations Support Services | SageStone Inc",
    metaDescription:
      "SageStone Inc helps companies streamline back-office work, documentation, reporting, workflows, customer operations, and administrative processes.",
    h1: "Business Operations Support Services",
    eyebrow: "Operations Support",
    heroSummary:
      "Streamline back-office workflows, documentation, reporting, coordination, and customer operations with dependable support.",
    intro:
      "Growing businesses need reliable operational follow-through. SageStone Inc supports the recurring administrative and coordination work that helps teams stay organized, responsive, and ready to scale.",
    highlights: ["Admin and back-office workflows", "Process documentation", "Reporting and coordination", "Team support"],
    sections: [
      { heading: "Operational support for growing businesses", body: "SageStone Inc helps teams manage day-to-day execution across administrative, customer, reporting, and workflow coordination tasks." },
      { heading: "Admin and back-office workflows", body: "Support can include inbox management, data entry, file organization, recurring checklists, customer operations tasks, and internal coordination." },
      { heading: "Process documentation", body: "Clear documentation helps work become repeatable. SageStone Inc can help organize SOPs, checklists, templates, and workflow notes." },
      { heading: "Reporting and coordination", body: "We can help collect updates, maintain trackers, prepare summaries, and coordinate recurring action items across your team." },
      { heading: "Team support", body: "Operations support can help founders, managers, and internal teams reduce administrative drag and keep work moving between meetings." },
    ],
    faqs: [
      { question: "What operations tasks can SageStone Inc support?", answer: "SageStone Inc can support back-office workflows, documentation, reporting, customer operations, administrative processes, and team coordination." },
      { question: "Can SageStone Inc document our processes?", answer: "Yes. SageStone Inc can help organize SOPs, recurring checklists, workflow notes, templates, and supporting documentation." },
      { question: "Can SageStone Inc support ongoing monthly work?", answer: "Yes. Ongoing operations support can be structured around recurring workflows, reporting needs, documentation, and administrative tasks." },
      { question: "How do we get started?", answer: "Contact SageStone Inc to discuss your current workflows, bottlenecks, recurring tasks, and the best way to structure support." },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
      { label: "e-commerce virtual assistant services", path: "/ecommerce-virtual-assistant" },
      { label: "website maintenance services", path: "/web-design-maintenance" },
    ],
  },
  {
    slug: "web-design-maintenance",
    title: "Web Design and Website Maintenance Services | SageStone Inc",
    metaDescription:
      "SageStone Inc provides website design, content updates, maintenance support, and ongoing web operations for growing businesses.",
    h1: "Web Design and Website Maintenance Services",
    eyebrow: "Website Support",
    heroSummary:
      "Keep your website current with support for design updates, content changes, landing pages, maintenance, and web operations.",
    intro:
      "Your website needs regular updates to stay useful for customers and internal teams. SageStone Inc provides practical web design and maintenance support for growing businesses that need dependable web operations help.",
    highlights: ["Design and content updates", "Maintenance and monitoring", "Landing page support", "Website operations"],
    sections: [
      { heading: "Website support for business teams", body: "SageStone Inc helps businesses coordinate website updates, routine maintenance tasks, content changes, and web operations without overloading internal teams." },
      { heading: "Design and content updates", body: "Support can include updating website copy, images, layouts, forms, calls-to-action, and other content based on your approved direction." },
      { heading: "Maintenance and monitoring", body: "SageStone Inc can help with recurring checks, plugin or platform task coordination, broken-link review, content QA, and maintenance documentation." },
      { heading: "Landing page support", body: "We can support landing page updates for campaigns, service pages, offers, and conversion-focused content improvements." },
      { heading: "Website operations", body: "Website operations support may include coordinating edits, organizing requests, checking published changes, and keeping site tasks documented." },
    ],
    faqs: [
      { question: "What website tasks can SageStone Inc support?", answer: "SageStone Inc can support website design updates, content changes, landing page updates, maintenance coordination, QA checks, and web operations tasks." },
      { question: "Can SageStone Inc provide ongoing website maintenance?", answer: "Yes. Ongoing website maintenance support can be structured around recurring updates, monitoring, content changes, and operational needs." },
      { question: "Can website support connect with marketing tasks?", answer: "Yes. Website support can be coordinated with social media, content scheduling, campaign updates, and broader business operations support." },
      { question: "How do we get started?", answer: "Contact SageStone Inc to review your website platform, update needs, approval process, and the support structure that fits your team." },
    ],
    related: [
      { label: "social media management services", path: "/social-media-management-services" },
      { label: "business operations support", path: "/business-operations-support" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
    ],
  },
];

export function getSeoServicePage(slug: string | undefined) {
  return seoServicePages.find((page) => page.slug === slug);
}
