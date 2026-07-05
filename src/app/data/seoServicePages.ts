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
    title: "Virtual Assistant Services for Small Businesses | SageStone Inc",
    metaDescription: "Delegate admin, inbox, CRM, research, and operations tasks with flexible virtual assistant services from SageStone Inc.",
    h1: "Virtual Assistant Services for Small Businesses",
    eyebrow: "Virtual Assistant Services",
    heroSummary: "Flexible virtual assistant services for founders, agencies, startups, real estate teams, and e-commerce brands that need dependable execution without adding payroll.",
    intro: "SageStone Inc provides managed virtual assistant services for growing teams that are running out of time, focus, and administrative bandwidth. Instead of asking owners, managers, or revenue teams to keep handling inboxes, calendars, CRM updates, research, follow-ups, reports, and recurring coordination, SageStone helps turn those tasks into clear workflows a trained remote assistant can own. Support is designed around your current tools, priorities, communication style, and approval process so delegation feels structured rather than risky. This service is useful when the work is important enough to be done consistently but not strategic enough to keep sitting on a leader's desk. We help clients define the right starting tasks, document expectations, launch with practical checkpoints, and refine support as the business grows.",
    highlights: ["Inbox, calendar, and administrative support", "CRM updates, research, reporting, and documentation", "Part-time or ongoing remote assistant capacity", "Process-driven onboarding tailored to your tools"],
    sections: [
      { heading: "Who this service is for", body: "Virtual assistant services are a strong fit for small businesses, founders, consultants, agencies, startups, real estate teams, and e-commerce operators that need recurring help but are not ready to hire, train, and manage another full-time employee. It is especially helpful when important admin work is creating delays, customer follow-up is inconsistent, or leadership time is being pulled into low-leverage tasks.", bullets: ["Growing teams with repeatable admin work", "Owners who need more time for sales and strategy", "Agencies and service firms managing many client tasks", "Teams that want flexible support before hiring internally"] },
      { heading: "Tasks included", body: "A SageStone virtual assistant can help with inbox triage, calendar scheduling, meeting notes, CRM hygiene, data entry, list building, web research, document formatting, reporting prep, vendor follow-up, customer message routing, file organization, travel coordination, and project task updates. We also support light marketing, e-commerce, real estate, and operations workflows when clear instructions and approval rules are in place.", bullets: ["Email, calendar, and scheduling", "CRM, spreadsheets, and reporting", "Research, documentation, and SOP updates", "Customer, vendor, and team follow-up"] },
      { heading: "Benefits", body: "The goal is not just to get more tasks done. The goal is to create more predictable capacity. SageStone helps reduce administrative bottlenecks, improve response discipline, protect leadership focus, and make recurring work easier to see and manage. With documented workflows and regular feedback, support can become a dependable extension of your operating rhythm.", bullets: ["More time for leadership and revenue work", "Cleaner tools and better follow-through", "Flexible support aligned to workload", "Less context lost between tasks and people"] },
      { heading: "How onboarding works", body: "Onboarding starts with a consultation to identify the highest-value tasks to delegate first. We map tools, access needs, communication channels, examples, quality standards, and escalation rules. From there, we document the initial workflow, launch with a focused task list, review early outputs, and improve the process through check-ins. Most clients begin with a narrow set of repeatable tasks before expanding into broader operations support.", bullets: ["Discovery and workflow mapping", "Tool access and SOP setup", "Focused launch with priority tasks", "Ongoing check-ins and workflow refinement"] },
      { heading: "Why Businesses Choose SageStone", body: "Businesses choose SageStone for dedicated virtual assistant support, flexible remote capacity, experience across admin, customer support, e-commerce, real estate, social media, web maintenance, and operations tasks, plus a process-driven onboarding approach. We tailor support to your tools and workflows so quality is not left to guesswork.", bullets: ["Dedicated virtual assistant support", "Support tailored to client tools and workflows", "Experience across several operating functions", "Clear workflow examples and practical operating guidance"] },
    ],
    faqs: [
      { question: "What tasks can a virtual assistant handle?", answer: "A virtual assistant can handle inbox triage, scheduling, CRM updates, research, data entry, reporting prep, customer follow-up, documentation, and many recurring admin tasks." },
      { question: "How quickly can I onboard a virtual assistant?", answer: "Timing depends on task complexity and access needs, but a focused workflow can often begin after discovery, access setup, and documentation of the first priorities." },
      { question: "Do you offer part-time or full-time virtual assistants?", answer: "Support can be scoped around flexible recurring needs. We help determine whether part-time, ongoing, or expanded support makes sense for your workload." },
      { question: "Can your virtual assistants work with my CRM or project management tools?", answer: "Yes. We work inside common tools such as Google Workspace, Microsoft, Slack, Asana, ClickUp, HubSpot, Shopify, and other systems when access and instructions are provided." },
      { question: "How do you train and manage virtual assistants?", answer: "We use onboarding notes, SOPs, examples, quality standards, escalation rules, and feedback loops so support aligns with your process and improves over time." },
    ],
    related: [
      { label: "business operations support", path: "/business-operations-support" },
      { label: "customer support outsourcing services", path: "/customer-support-outsourcing" },
      { label: "real estate virtual assistant services", path: "/real-estate-virtual-assistant" },
    ],
  },
  {
    slug: "customer-support-outsourcing",
    title: "Customer Support Outsourcing Services | SageStone Inc",
    metaDescription: "Outsource email, chat, ticket, and customer follow-up support with SageStone Inc. Flexible support for startups, agencies, and e-commerce teams.",
    h1: "Customer Support Outsourcing Services",
    eyebrow: "Customer Support Outsourcing",
    heroSummary: "Outsource email, chat, ticket triage, customer follow-up, and escalation workflows while keeping your brand voice and service standards clear.",
    intro: "SageStone Inc helps growing businesses create reliable customer support coverage without rushing into a full internal support department. We support shared inboxes, live chat workflows, help desk queues, customer follow-ups, order questions, review requests, and escalation routing. The service is built for teams that care about quality and visibility, not just cheaper labor. We learn your products, policies, tone, templates, and approval rules so customers receive helpful, consistent communication. For startups, agencies, service businesses, and e-commerce brands, outsourced support can reduce backlog, improve response consistency, and give internal teams more time to focus on complex issues and growth.",
    highlights: ["Email, chat, and help desk support", "Ticket triage and escalation rules", "Customer follow-up and review requests", "Reporting on recurring support themes"],
    sections: [
      { heading: "Who this service is for", body: "Customer support outsourcing is ideal for startups, agencies, e-commerce brands, service providers, and small businesses that receive more customer messages than the internal team can handle consistently. It is also useful when founders or account managers are spending too much time answering repeat questions instead of solving higher-value problems.", bullets: ["Teams with growing support volume", "E-commerce stores with order and return questions", "Agencies managing client or customer inquiries", "Businesses that need coverage without building a department"] },
      { heading: "Tasks included", body: "Support may include email support, live chat triage, ticket labeling, FAQ-based replies, order status follow-up, appointment or account updates, review request follow-up, refund or return routing, customer records updates, and daily or weekly support summaries. We can work from your scripts and templates while flagging issues that require internal approval.", bullets: ["Email, chat, contact form, and help desk queues", "Ticket tagging, routing, and status updates", "Scripted replies and customer follow-up", "Backlog, trend, and escalation reporting"] },
      { heading: "Benefits", body: "A clear outsourced support workflow helps customers receive faster responses, reduces missed messages, protects your team from reactive work, and creates better visibility into common questions or friction points. SageStone helps keep the process organized so support quality can be reviewed and improved.", bullets: ["More reliable response coverage", "Reduced backlog and missed follow-ups", "Clear escalation paths", "Better insight into recurring customer issues"] },
      { heading: "How onboarding works", body: "We start by reviewing your support channels, help desk setup, customer types, common questions, brand tone, policies, templates, and escalation rules. Then we define what can be answered directly, what needs approval, what should be tracked, and how quality will be reviewed. A focused launch lets us test the workflow before expanding coverage.", bullets: ["Channel and policy review", "Scripts, macros, and tone guidance", "Escalation and QA standards", "Launch, reporting, and refinement"] },
      { heading: "Why Businesses Choose SageStone", body: "Businesses choose SageStone because we combine flexible remote support with process discipline. We can support admin, customer support, e-commerce, and operations tasks, and we tailor customer communication to your tools and workflows so support remains organized, reviewable, and aligned with your standards.", bullets: ["Flexible remote support for growing teams", "Process-driven onboarding", "Support tailored to your help desk and brand voice", "Practical reporting and industry-aware examples"] },
    ],
    faqs: [
      { question: "Can SageStone handle email and chat support?", answer: "Yes. SageStone can support email inboxes, live chat workflows, help desk tickets, contact form inquiries, and customer follow-up tasks." },
      { question: "Do you support Shopify or e-commerce customer service?", answer: "Yes. We can support Shopify and e-commerce workflows such as order questions, returns, exchanges, shipping updates, and product inquiries." },
      { question: "Can you follow our existing support scripts?", answer: "Yes. We can use your scripts, macros, templates, tone guidelines, and escalation policies to keep responses consistent." },
      { question: "How do you measure support quality?", answer: "Quality can be reviewed through response accuracy, escalation handling, backlog status, recurring issue reports, and client feedback on sampled conversations." },
      { question: "Can we start with a small support workload?", answer: "Yes. Many clients start with a narrow queue or defined set of repeat questions before expanding coverage." },
    ],
    related: [
      { label: "e-commerce virtual assistant services", path: "/ecommerce-virtual-assistant" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
  {
    slug: "ecommerce-customer-support-outsourcing",
    title: "Ecommerce Customer Support Outsourcing | SageStone Inc",
    metaDescription: "Outsource ecommerce customer support for order questions, returns, tickets, approved replies, escalation paths, and consistent customer follow-up.",
    h1: "Ecommerce Customer Support Outsourcing",
    eyebrow: "E-Commerce Customer Support",
    heroSummary: "Customer support coverage for online brands that need faster responses, cleaner ticket handling, and more consistent follow-through.",
    intro: "SageStone Inc helps ecommerce teams outsource the customer service work that slows internal momentum. When support is scattered across inboxes, helpdesk queues, social messages, and order-related threads, it becomes harder to maintain response quality and easier for small issues to snowball. We build support workflows around your policies, tone, templates, and escalation rules so customer conversations stay organized and reviewable. This service is a strong fit when you need customer support outsourcing that is specific to ecommerce operations rather than a general admin resource.",
    highlights: ["Email, chat, and helpdesk support", "Order questions and return routing", "Approved responses and escalation paths", "Recurrence tracking and support summaries"],
    sections: [
      { heading: "Who this service is for", body: "This service is for Shopify stores, DTC brands, marketplace sellers, and ecommerce teams that receive enough customer questions to need structured support, but not yet a full internal customer service department. It is especially helpful during launches, seasonal spikes, or periods when the support inbox is affecting the rest of the team.", bullets: ["Online stores with rising ticket volume", "Teams that need support coverage without adding payroll", "Brands that want better response consistency", "Operators who need clearer queue ownership"] },
      { heading: "Tasks included", body: "Ecommerce customer support outsourcing can include inbox triage, ticket labeling, response drafting from approved templates, order status checks, return and exchange routing, customer record updates, review requests, and escalation handoffs. When the work overlaps with store admin, it can connect with ecommerce virtual assistant support.", bullets: ["Order, shipping, and return follow-up", "Customer ticket organization and routing", "Response drafting from approved guidance", "Reporting on recurring customer issues"] },
      { heading: "Operational problems this solves", body: "Support bottlenecks often show up as slower replies, inconsistent answers, missed follow-ups, and repeated questions that never make it back to leadership. A structured support workflow helps protect response quality while making recurring issues easier to spot and improve.", bullets: ["Less backlog and fewer missed messages", "Clearer escalation rules", "More consistent customer communication", "Better visibility into recurring issues"] },
      { heading: "How onboarding works", body: "We start by reviewing channels, policies, common questions, tone, and access needs. Then we define what the assistant can answer directly, what should be drafted for review, what needs escalation, and how support should be summarized back to the team. A focused launch helps keep the process calm and controlled.", bullets: ["Support channel and policy review", "Template, macro, and tone setup", "Escalation rules and QA expectations", "Ongoing review and refinement"] },
      { heading: "Why Businesses Choose SageStone", body: "Businesses choose SageStone for managed support that keeps customer communication organized without sounding robotic or generic. We pair process discipline with practical ecommerce awareness so the workflow reflects how your store actually operates.", bullets: ["Managed support with clear workflow ownership", "Tailored to ecommerce tools and policies", "Support that keeps brand voice intact", "Built for steady operations, not noise"] },
    ],
    faqs: [
      { question: "What does ecommerce customer support outsourcing include?", answer: "It can include inbox and helpdesk triage, order questions, return routing, approved reply drafting, escalation handling, and support reporting." },
      { question: "Can SageStone support Shopify customer service?", answer: "Yes. We can support Shopify customer communication when the store provides access, policies, examples, and escalation rules." },
      { question: "Can you help with returns and exchanges?", answer: "Yes. We can route return and exchange requests according to your policy and prepare the right follow-up for approval or action." },
      { question: "How does this differ from ecommerce virtual assistant services?", answer: "Ecommerce virtual assistant services usually focus on store operations and admin support, while this page is centered on customer communication, tickets, and service workflows." },
      { question: "Can the support workflow scale during busy seasons?", answer: "Yes. Support can be structured around seasonal demand, launches, and periods where response volume increases." },
    ],
    related: [
      { label: "e-commerce virtual assistant services", path: "/ecommerce-virtual-assistant" },
      { label: "customer support outsourcing", path: "/customer-support-outsourcing" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
  {
    slug: "ecommerce-virtual-assistant",
    title: "E-Commerce Virtual Assistant Services | SageStone Inc",
    metaDescription: "Get e-commerce virtual assistant help for Shopify support, product updates, orders, returns, inboxes, and store operations.",
    h1: "E-Commerce Virtual Assistant Services",
    eyebrow: "E-Commerce VA Services",
    heroSummary: "Remote e-commerce support for Shopify stores, DTC brands, marketplace sellers, and online teams that need help with orders, customers, products, and operations.",
    intro: "SageStone Inc provides e-commerce virtual assistant services for online brands that need reliable help behind the scenes. Running an online store creates a constant stream of order questions, returns, product updates, customer messages, inventory coordination, review follow-up, promotions, and reporting needs. When those tasks pile up, founders and managers get pulled away from merchandising, marketing, supplier relationships, and growth. SageStone helps organize repeatable store operations into clear workflows so a remote assistant can support the day-to-day details. We work with your store platform, inbox, policies, brand voice, and approval process to keep execution consistent.",
    highlights: ["Shopify and store admin support", "Order, return, and customer message coordination", "Product data and catalog update assistance", "Internal links to support and web maintenance workflows"],
    sections: [
      { heading: "Who this service is for", body: "This service is built for Shopify stores, DTC brands, marketplace sellers, subscription businesses, e-commerce agencies, and lean operations teams that need dependable support for recurring store tasks. It is especially useful during seasonal spikes, product launches, or periods when customer support and backend updates are stretching the team.", bullets: ["Shopify and e-commerce store owners", "DTC and marketplace brands", "Teams managing seasonal ticket spikes", "Operators who need store admin coverage"] },
      { heading: "Tasks included", body: "An e-commerce virtual assistant can help with order status checks, return and exchange coordination, inbox triage, product data updates, catalog QA, review follow-up, inventory tracker updates, vendor communication, promo checklist support, and reporting prep. For more complex customer queues, this service can connect with customer support outsourcing services.", bullets: ["Order, return, and exchange support", "Product uploads and catalog QA", "Customer inbox triage and review follow-up", "Store operations trackers and reporting"] },
      { heading: "Benefits", body: "E-commerce support helps reduce response delays, keep product and order details organized, improve launch readiness, and give internal teams more room to focus on growth. It also helps document recurring store processes so operations are not dependent on memory or last-minute fixes.", bullets: ["Faster customer and order follow-up", "Cleaner product and operations data", "More consistent launch and promo support", "Scalable help during busy seasons"] },
      { heading: "How onboarding works", body: "We review your store platform, support inbox, order policies, return rules, product catalog process, brand voice, tools, and reporting needs. Then we define the first tasks to delegate, document the steps, create escalation rules, and launch with a focused set of responsibilities before expanding into broader e-commerce operations.", bullets: ["Store, inbox, and policy review", "Workflow and access setup", "Focused launch for priority tasks", "Ongoing QA and reporting"] },
      { heading: "Why Businesses Choose SageStone", body: "Businesses choose SageStone for flexible e-commerce support that can connect customer support, admin, web maintenance, and operations. We tailor support to your tools and workflows so customer, product, and store operations stay easier to review.", bullets: ["Experience with customer, product, and operations tasks", "Support tailored to store workflows", "Process-driven onboarding", "Flexible remote support for growing brands"] },
    ],
    faqs: [
      { question: "What can an e-commerce virtual assistant do?", answer: "An e-commerce virtual assistant can help with order checks, returns, product updates, inbox triage, review follow-up, vendor coordination, reporting, and store admin tasks." },
      { question: "Can you support Shopify stores?", answer: "Yes. SageStone can support Shopify workflows when the store provides access, policies, examples, and clear approval rules." },
      { question: "Can you help with customer service for an online store?", answer: "Yes. We can help with common customer questions and can connect the workflow to customer support outsourcing services for deeper coverage." },
      { question: "Can support scale during busy seasons?", answer: "Support can be planned around seasonal spikes, product launches, promotional campaigns, or recurring store operations needs." },
      { question: "Do you update product listings?", answer: "We can help with product data updates, image or copy upload coordination, catalog checks, and publishing support based on your platform and approval process." },
    ],
    related: [
      { label: "customer support outsourcing services", path: "/customer-support-outsourcing" },
      { label: "web maintenance support", path: "/web-maintenance-support" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
    ],
  },
  {
    slug: "real-estate-virtual-assistant",
    title: "Real Estate Virtual Assistant Services | SageStone Inc",
    metaDescription: "Real estate virtual assistant services for CRM updates, listings, scheduling, lead follow-up, transaction tasks, and admin support.",
    h1: "Real Estate Virtual Assistant Services",
    eyebrow: "Real Estate VA Services",
    heroSummary: "Administrative and operations support for real estate agents, teams, brokerages, and property professionals that need cleaner follow-up and smoother coordination.",
    intro: "SageStone Inc provides real estate virtual assistant services for busy agents, teams, brokerages, and property professionals that need dependable administrative support. Real estate work depends on timing, follow-up, organized records, accurate listings, vendor coordination, client communication, and transaction task visibility. When those details are scattered, opportunities and client experience suffer. SageStone helps turn recurring real estate admin into clear workflows a trained remote assistant can support. We can help with CRM updates, lead routing, listing checklists, calendar coordination, document organization, vendor follow-up, and client communication support so agents can spend more time on relationships, showings, negotiations, and closings.",
    highlights: ["CRM, lead, and pipeline updates", "Listing and transaction coordination support", "Calendar, inbox, and client follow-up", "Related virtual assistant and operations support"],
    sections: [
      { heading: "Who this service is for", body: "This service is for solo agents, real estate teams, brokerages, property managers, investor teams, and real estate service providers that need better administrative follow-through. It is especially helpful when leads are not being updated quickly, listing tasks are scattered, or agents are spending too much time managing paperwork and reminders.", bullets: ["Solo real estate agents", "Growing real estate teams and brokerages", "Property management and investor teams", "Professionals with recurring client follow-up"] },
      { heading: "Tasks included", body: "A real estate virtual assistant can help with CRM hygiene, lead list updates, calendar coordination, inbox organization, showing reminders, listing checklist updates, transaction task tracking, vendor follow-up, open house prep, database cleanup, client follow-up drafts, document organization, and reporting. For broader admin needs, this service can connect to virtual assistant services.", bullets: ["CRM updates and lead follow-up", "Listing checklists and transaction tracking", "Scheduling, inbox, and document organization", "Vendor and client communication support"] },
      { heading: "Benefits", body: "Structured real estate support helps improve lead follow-through, reduce dropped administrative tasks, keep client details organized, and make agent time more productive. With a clearer workflow, teams can respond faster, prepare more consistently, and avoid depending on memory for important next steps.", bullets: ["Cleaner CRM and pipeline visibility", "More consistent lead and client follow-up", "Less administrative pressure on agents", "Better organization around listings and transactions"] },
      { heading: "How onboarding works", body: "We review your market, services, lead sources, CRM, transaction tools, listing process, communication preferences, and approval rules. Then we identify the highest-value tasks to delegate first, document recurring steps, establish reporting expectations, and refine the workflow as the assistant learns your business rhythm.", bullets: ["Workflow and tool discovery", "Access, examples, and checklist setup", "Focused launch with priority tasks", "Weekly refinement and reporting"] },
      { heading: "Why Businesses Choose SageStone", body: "Real estate teams choose SageStone for flexible remote support, process-driven onboarding, and experience with admin, customer communication, operations, and property-related tasks. We tailor support to your CRM, calendars, inboxes, forms, and workflows so routine coordination is easier to manage.", bullets: ["Dedicated real estate virtual assistant support", "Support tailored to real estate tools and workflows", "Experience with admin and operations tasks", "Industry-specific workflow examples"] },
    ],
    faqs: [
      { question: "What tasks can a real estate virtual assistant handle?", answer: "A real estate virtual assistant can support CRM updates, lead follow-up, scheduling, listing checklists, transaction tasks, document organization, vendor follow-up, and inbox management." },
      { question: "Can you work with my real estate CRM?", answer: "Yes. We can work inside your CRM when access, instructions, fields, and follow-up rules are clearly provided." },
      { question: "Do you support listing coordination?", answer: "Yes. We can help manage listing checklists, assets, vendor follow-up, status updates, and task reminders." },
      { question: "Is this only for large teams?", answer: "No. SageStone can support solo agents, small teams, brokerages, and property professionals with flexible support needs." },
      { question: "How do we get started?", answer: "Start with a consultation to identify your highest-friction admin tasks, tools, lead sources, and support priorities." },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
      { label: "customer support outsourcing services", path: "/customer-support-outsourcing" },
    ],
  },
  {
    slug: "business-operations-support",
    title: "Business Operations Support Services | SageStone Inc",
    metaDescription: "Improve back-office workflows with business operations support for SOPs, reporting, admin coordination, CRM updates, and follow-up.",
    h1: "Business Operations Support Services",
    eyebrow: "Business Operations Support",
    heroSummary: "Remote operations support for growing teams that need cleaner workflows, better follow-through, documented processes, and more predictable execution.",
    intro: "SageStone Inc provides business operations support for companies that have outgrown informal systems but are not ready to add more management overhead. As teams grow, small coordination gaps become expensive: tasks sit between owners, reports are late, CRMs get messy, SOPs are outdated, invoices or documents wait for routing, and leaders spend too much time chasing updates. SageStone helps organize recurring operational work into practical workflows with clear ownership, documentation, communication rhythms, and reporting. The result is not a generic assistant dropped into a messy system; it is flexible operations capacity shaped around how your business actually runs.",
    highlights: ["SOPs, documentation, and workflow coordination", "CRM, reporting, and back-office support", "Meeting notes, trackers, and follow-up", "Related virtual assistant and web support"],
    sections: [
      { heading: "Who this service is for", body: "Business operations support is ideal for founders, COOs, operations managers, agencies, professional services firms, startups, consultants, and small businesses with recurring coordination work. It is useful when tasks need more structure than general admin support but do not yet justify another internal operations hire.", bullets: ["Founders and operators with recurring bottlenecks", "Agencies and professional services teams", "Startups building repeatable processes", "Businesses that need back-office follow-through"] },
      { heading: "Tasks included", body: "Support can include SOP documentation, workflow checklists, CRM hygiene, reporting prep, meeting notes, action item tracking, vendor follow-up, invoice or document routing, project coordination, onboarding checklist updates, database cleanup, internal trackers, and recurring operations reviews. This service pairs well with virtual assistant services when admin capacity is also needed.", bullets: ["SOPs, checklists, and documentation", "CRM cleanup and reporting prep", "Meeting notes and action item tracking", "Vendor, document, and project coordination"] },
      { heading: "Benefits", body: "Operations support helps reduce dropped tasks, make ownership clearer, improve tool hygiene, and give leaders better visibility into recurring work. It also creates process memory so work is less dependent on one person's inbox, memory, or availability.", bullets: ["Cleaner back-office workflows", "More consistent follow-through", "Better documentation and reporting", "Improved visibility for leadership"] },
      { heading: "How onboarding works", body: "We begin with a workflow assessment to identify bottlenecks and repeatable tasks. Then we define priorities, map tools and handoffs, document the first processes, establish communication rhythms, and launch support with practical reporting. Over time, we refine the workflow and expand support where it creates measurable leverage.", bullets: ["Bottleneck and workflow review", "Priority task and tool mapping", "Process documentation and launch", "Check-ins, reporting, and continuous improvement"] },
      { heading: "Why Businesses Choose SageStone", body: "Businesses choose SageStone because we combine dedicated support with process-driven onboarding and cross-functional experience in admin, customer support, e-commerce, real estate, web maintenance, and operations tasks. Support is tailored to client tools and workflows so recurring work has clearer ownership and review points.", bullets: ["Dedicated operations support", "Flexible remote capacity", "Experience across admin and operational workflows", "Support adapted to your tools and operating rhythm"] },
    ],
    faqs: [
      { question: "What does business operations support include?", answer: "It can include SOPs, documentation, CRM updates, reporting prep, trackers, meeting notes, project coordination, vendor follow-up, and back-office admin workflows." },
      { question: "Is this different from virtual assistant services?", answer: "Yes. Virtual assistant services often focus on admin execution, while business operations support focuses more on workflows, documentation, reporting, coordination, and process discipline." },
      { question: "Can you help document SOPs?", answer: "Yes. SageStone can turn recurring tasks into checklists, process notes, templates, and SOPs that make delegation and quality control easier." },
      { question: "Can operations support work with our existing tools?", answer: "Yes. We tailor support to the tools your team already uses, including CRMs, task boards, spreadsheets, inboxes, and communication platforms." },
      { question: "How do we decide what to delegate first?", answer: "We look for repeatable, time-consuming, high-friction tasks that create delays, require follow-up, or need better documentation." },
    ],
    related: [
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "web maintenance support", path: "/web-maintenance-support" },
      { label: "customer support outsourcing services", path: "/customer-support-outsourcing" },
    ],
  },
  {
    slug: "social-media-virtual-assistant",
    title: "Social Media Virtual Assistant Services | SageStone Inc",
    metaDescription: "Get social media virtual assistant help for scheduling, content calendars, engagement tracking, asset organization, and reporting.",
    h1: "Social Media Virtual Assistant Services",
    eyebrow: "Social Media VA Services",
    heroSummary: "Execution support for social media calendars, scheduling, engagement tracking, asset organization, reporting, and marketing follow-through.",
    intro: "SageStone Inc provides social media virtual assistant services for businesses that have a marketing strategy but need more consistent execution. Social media often falls behind because assets are scattered, approvals are unclear, posts are not scheduled, comments are not tracked, and campaign tasks compete with daily operations. SageStone helps organize the operational side of social media so your team can publish more consistently and understand what needs attention. We can support content calendars, approved post scheduling, asset uploads, engagement monitoring, reporting prep, campaign checklists, and coordination between marketing, website, and operations tasks.",
    highlights: ["Content calendar and scheduling support", "Asset organization and upload coordination", "Engagement tracking and reporting prep", "Marketing operations follow-through"],
    sections: [
      { heading: "Who this service is for", body: "This service is for small businesses, agencies, consultants, founders, e-commerce brands, and teams that need help executing an existing social media plan. It is best for businesses that have direction, brand standards, or approved content ideas but need a dependable assistant to manage scheduling and recurring coordination.", bullets: ["Small businesses with inconsistent posting", "Agencies needing marketing task support", "E-commerce brands managing launches and promos", "Teams with approved content but limited execution time"] },
      { heading: "Tasks included", body: "A social media virtual assistant can help maintain content calendars, schedule approved posts, organize creative assets, upload captions and images, track comments or messages for review, prepare basic performance summaries, manage campaign checklists, coordinate approvals, and connect social tasks with web maintenance support when landing pages or links need updates.", bullets: ["Calendar updates and post scheduling", "Asset folders, captions, and upload coordination", "Engagement monitoring and routing", "Weekly reporting and campaign task tracking"] },
      { heading: "Benefits", body: "Social media VA support helps create a steadier publishing rhythm, fewer missed campaign tasks, cleaner approvals, and more organized reporting. It also frees internal marketers and owners from repetitive execution details while preserving oversight of voice, strategy, and final approvals.", bullets: ["More consistent publishing", "Cleaner asset and approval workflows", "Better visibility into campaign tasks", "Less repetitive execution work for your team"] },
      { heading: "How onboarding works", body: "We review your platforms, brand guidelines, content workflow, approval process, assets, scheduling tools, cadence, and reporting needs. Then we define what the assistant can publish, what requires approval, how engagement should be routed, and how weekly updates will be shared.", bullets: ["Platform and brand workflow review", "Scheduling and approval setup", "Launch with an approved calendar", "Reporting and refinement"] },
      { heading: "Why Businesses Choose SageStone", body: "Businesses choose SageStone for flexible remote marketing support that connects with admin, web maintenance, and business operations workflows. We tailor support to your tools, content process, and approval style so recurring marketing tasks are easier to coordinate.", bullets: ["Dedicated social media virtual assistant support", "Process-driven onboarding", "Support tailored to your content workflow", "Experience with admin, marketing, and operations coordination"] },
    ],
    faqs: [
      { question: "What social media tasks can SageStone support?", answer: "SageStone can support content calendars, approved post scheduling, caption and asset organization, engagement monitoring, reporting, and campaign coordination." },
      { question: "Can you schedule posts and manage content calendars?", answer: "Yes. We can schedule approved posts, organize captions and assets, and help maintain your content calendar." },
      { question: "Can you respond to comments and messages?", answer: "We can track engagement, flag comments or messages for review, and route items based on your response rules." },
      { question: "Can you help repurpose content?", answer: "Yes. We can turn approved long-form content, offers, blog posts, and campaign assets into organized social post drafts for your review." },
      { question: "Which social media platforms do you support?", answer: "We can support common platforms such as LinkedIn, Instagram, Facebook, TikTok, YouTube, Pinterest, and scheduling tools based on your workflow." },
    ],
    related: [
      { label: "web maintenance support", path: "/web-maintenance-support" },
      { label: "virtual assistant services", path: "/virtual-assistant-services" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
  {
    slug: "web-maintenance-support",
    title: "Website Maintenance Support Services | SageStone Inc",
    metaDescription: "Keep your website updated with support for content edits, page QA, links, forms, landing pages, image swaps, and routine maintenance.",
    h1: "Website Maintenance Support Services",
    eyebrow: "Website Maintenance Support",
    heroSummary: "Ongoing website support for small businesses, agencies, e-commerce brands, and service teams that need updates completed accurately and on time.",
    intro: "SageStone Inc provides website maintenance support for businesses that need their website to stay current without pulling internal teams into every small update. Websites need regular attention: service pages change, team details need updates, forms must be checked, landing pages need edits, images and links break, campaigns require new content, and e-commerce stores need product or policy updates. SageStone helps organize website requests, coordinate edits, perform QA checks, and keep stakeholders informed. This service is ideal for teams that do not need a full-time web employee but want a dependable process for content updates and routine site maintenance.",
    highlights: ["Website content updates and QA", "Landing page, form, and link checks", "WordPress and small business site support", "Connections to e-commerce and operations workflows"],
    sections: [
      { heading: "Who this service is for", body: "Website maintenance support is a fit for small businesses, consultants, agencies, e-commerce teams, real estate teams, and service companies that need recurring site updates. It is especially useful when marketing requests are delayed, web edits are scattered across email threads, or nobody owns routine checks after pages go live.", bullets: ["Small businesses without a full web team", "Agencies and consultants with recurring edits", "E-commerce brands needing product or policy updates", "Teams launching campaigns and landing pages"] },
      { heading: "Tasks included", body: "Support can include content edits, image swaps, landing page updates, blog formatting, service page updates, form checks, link checks, page QA, WordPress content support, request tracking, publishing coordination, and update documentation. For store-related updates, this can connect with e-commerce virtual assistant services.", bullets: ["Content, image, and page updates", "Forms, links, and QA checks", "Landing page and campaign edit support", "Request tracking and publishing coordination"] },
      { heading: "Benefits", body: "A structured website maintenance workflow helps keep your site accurate, conversion-focused, and easier to manage. It reduces delays, prevents small issues from lingering, and creates a clear path for teams to request, approve, and verify updates.", bullets: ["Faster website updates", "More accurate service and campaign pages", "Cleaner QA and request tracking", "Less operational drag for marketing teams"] },
      { heading: "How onboarding works", body: "We review your website platform, access needs, update backlog, approval process, brand standards, analytics priorities, and QA checklist. Then we establish a request workflow, launch with the most important edits, and provide updates so your team knows what changed and what still needs attention.", bullets: ["Platform and access review", "Backlog and priority mapping", "Request workflow and QA checklist", "Ongoing updates and reporting"] },
      { heading: "Why Businesses Choose SageStone", body: "Businesses choose SageStone for flexible remote support that connects website maintenance with operations, social media, customer support, and e-commerce workflows. Support is tailored to your tools and approval process so site updates are tracked, reviewed, and completed with less operational drag.", bullets: ["Dedicated website maintenance support", "Support tailored to your CMS and workflow", "Process-driven onboarding", "Experience with web, admin, e-commerce, and operations tasks"] },
    ],
    faqs: [
      { question: "What website maintenance tasks can SageStone handle?", answer: "It can include content edits, image swaps, landing page updates, form checks, link checks, page QA, WordPress content support, request tracking, and publishing coordination." },
      { question: "Can you help with basic WordPress maintenance?", answer: "Yes. SageStone can support basic WordPress content updates and routine maintenance coordination when access, instructions, and approval rules are provided." },
      { question: "Can you update website content?", answer: "Yes. We can help update page copy, images, CTAs, forms, links, campaign details, blog formatting, and other approved website content." },
      { question: "Can you monitor broken links or page issues?", answer: "Yes. We can monitor broken links, form issues, formatting problems, mobile display issues, and other routine QA items." },
      { question: "Can you coordinate with developers for larger fixes?", answer: "Yes. We can document issues, gather examples, coordinate priorities, and communicate with developers for larger fixes that require technical implementation." },
    ],
    related: [
      { label: "social media virtual assistant services", path: "/social-media-virtual-assistant" },
      { label: "e-commerce virtual assistant services", path: "/ecommerce-virtual-assistant" },
      { label: "business operations support", path: "/business-operations-support" },
    ],
  },
];

const servicePageAliases: Array<{ from: string; to: string; title?: string; metaDescription?: string; h1?: string; eyebrow?: string }> = [
  { from: "customer-support", to: "customer-support-outsourcing", title: "Customer Support Services | SageStone Inc", h1: "Customer Support Services for Growing Teams", eyebrow: "Customer Support" },
  { from: "customer-support-virtual-assistant", to: "customer-support-outsourcing", title: "Customer Support Virtual Assistant Services | SageStone Inc", h1: "Customer Support Virtual Assistant Services", eyebrow: "Customer Support VA" },
  { from: "ecommerce-operations-support", to: "ecommerce-virtual-assistant", title: "E-Commerce Operations Support | SageStone Inc", h1: "E-Commerce Operations Support", eyebrow: "E-Commerce Operations" },
  { from: "real-estate-virtual-assistant-services", to: "real-estate-virtual-assistant" },
  { from: "crm-admin-support", to: "business-operations-support", title: "CRM & Admin Support | SageStone Inc", h1: "CRM & Admin Support", eyebrow: "CRM & Admin" },
  { from: "gohighlevel-virtual-assistant", to: "business-operations-support", title: "GoHighLevel Virtual Assistant Support | SageStone Inc", h1: "GoHighLevel Virtual Assistant Support", eyebrow: "GoHighLevel Support" },
  { from: "social-media-management-services", to: "social-media-virtual-assistant", title: "Social Media Management Support | SageStone Inc", h1: "Social Media Management Services", eyebrow: "Social Media Support" },
  { from: "social-media-support", to: "social-media-virtual-assistant", title: "Social Media Support | SageStone Inc", h1: "Social Media Support", eyebrow: "Social Media Support" },
  { from: "web-design-maintenance-services", to: "web-maintenance-support", title: "Web Design and Maintenance Services | SageStone Inc", h1: "Web Design and Maintenance Services", eyebrow: "Website Support" },
  { from: "web-maintenance-services", to: "web-maintenance-support", title: "Web Maintenance Services | SageStone Inc", h1: "Web Maintenance Services", eyebrow: "Web Maintenance" },
];

servicePageAliases.forEach((alias) => {
  const source = seoServicePages.find((page) => page.slug === alias.to);
  if (source && !seoServicePages.some((page) => page.slug === alias.from)) {
    seoServicePages.push({
      ...source,
      slug: alias.from,
      title: alias.title ?? source.title,
      metaDescription: alias.metaDescription ?? source.metaDescription,
      h1: alias.h1 ?? source.h1,
      eyebrow: alias.eyebrow ?? source.eyebrow,
      related: source.related.map((item) => ({ ...item })),
      sections: source.sections.map((section) => ({ ...section, bullets: section.bullets ? [...section.bullets] : undefined })),
      faqs: source.faqs.map((faq) => ({ ...faq })),
      highlights: [...source.highlights],
    });
  }
});

export function getSeoServicePage(slug: string | undefined) {
  return seoServicePages.find((page) => page.slug === slug);
}
