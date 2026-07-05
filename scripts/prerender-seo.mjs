import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE_URL = "https://www.sagestoneinc.com";
const SITE_NAME = "SageStone Inc";
const OG_IMAGE = `${SITE_URL}/assets/og-image.jpg`;
const LASTMOD = "2026-07-05";

const routes = [
  ["/", "Virtual Assistant Services & Business Operations Support | SageStone Inc", "SageStone Inc provides virtual assistant services, customer support outsourcing, business operations support, inbox management, calendar support, CRM organization, and back-office support for growing teams."],
  ["/services", "Virtual Assistant & Operations Support Services | SageStone Inc", "Explore SageStone Inc services for virtual assistance, customer support outsourcing, ecommerce operations, CRM organization, inbox management, calendar support, and back-office workflows."],
  ["/about", "About SageStone Inc | Virtual Assistant & Operations Support", "Learn how SageStone Inc provides calm, reliable virtual assistant services and business operations support for founders, small businesses, agencies, ecommerce brands, and growing teams."],
  ["/experience", "Operations Support Experience | SageStone Inc", "Explore SageStone Inc experience across virtual assistance, customer support outsourcing, CRM organization, ecommerce support, calendar management, inbox management, and operational workflows."],
  ["/faq", "Virtual Assistant Services FAQ | SageStone Inc", "Answers to common questions about SageStone Inc virtual assistant services, customer support outsourcing, ecommerce support, business operations support, and back-office workflows."],
  ["/contact", "Contact SageStone Inc | Virtual Assistant & Operations Support", "Contact SageStone Inc to discuss virtual assistant services, customer support outsourcing, inbox management, calendar support, CRM organization, ecommerce support, or business operations support."],
  ["/case-studies", "Virtual Assistant & Operations Case Studies | SageStone Inc", "Read SageStone Inc case studies showing how organized virtual assistant support, customer support workflows, ecommerce operations, and business operations support can improve daily execution."],
  ["/operations-audit", "Operations Audit for Growing Teams | SageStone Inc", "A focused operations audit for founders and growing teams that need clearer handoffs, SOPs, CRM hygiene, inbox workflows, customer support processes, and back-office support."],
  ["/blog", "Virtual Assistant & Operations Support Blog | SageStone Inc", "Practical articles on virtual assistant services, customer support outsourcing, ecommerce support, SOPs, CRM organization, inbox management, calendar support, and business operations."],
  ["/virtual-assistant-services", "Virtual Assistant Services for Small Businesses | SageStone Inc", "Delegate admin, inbox, calendar, CRM, research, reporting, and operations tasks with flexible virtual assistant services from SageStone Inc."],
  ["/customer-support-outsourcing", "Customer Support Outsourcing Services | SageStone Inc", "Outsource email, chat, ticket triage, customer follow-up, and escalation workflows with SageStone Inc customer support outsourcing services."],
  ["/ecommerce-customer-support-outsourcing", "Ecommerce Customer Support Outsourcing | SageStone Inc", "Ecommerce customer support outsourcing for order questions, returns, customer inboxes, product inquiries, escalation workflows, and recurring support reporting."],
  ["/ecommerce-virtual-assistant", "E-Commerce Virtual Assistant Services | SageStone Inc", "Get ecommerce virtual assistant help for Shopify support, product updates, orders, returns, inboxes, customer communication, and store operations."],
  ["/real-estate-virtual-assistant", "Real Estate Virtual Assistant Services | SageStone Inc", "Real estate virtual assistant services for CRM updates, listings, scheduling, lead follow-up, transaction tasks, and admin support."],
  ["/social-media-virtual-assistant", "Social Media Virtual Assistant Services | SageStone Inc", "Get social media virtual assistant help for scheduling, content calendars, engagement tracking, asset organization, and reporting."],
  ["/business-operations-support", "Business Operations Support Services | SageStone Inc", "Improve back-office workflows with business operations support for SOPs, reporting, admin coordination, CRM updates, follow-up, and recurring operating rhythms."],
  ["/web-maintenance-support", "Website Maintenance Support Services | SageStone Inc", "Keep your website updated with support for content edits, page QA, links, forms, landing pages, image swaps, and routine maintenance."],
  ["/virtual-assistant-vs-in-house-admin", "Virtual Assistant vs In-House Admin | SageStone Inc", "Compare virtual assistant services and in-house admin hiring so your team can choose the right support model for recurring operations work."],
  ["/outsourced-support-for-small-businesses", "Outsourced Support for Small Businesses | SageStone Inc", "Outsourced support for small businesses that need help with admin, customer communication, inboxes, CRM updates, reporting, and operations workflows."],
  ["/industries-we-serve", "Industries We Serve | SageStone Inc", "SageStone Inc supports founders, small businesses, ecommerce brands, agencies, startups, real estate teams, and growing teams with virtual assistant services."],
  ["/solutions", "Virtual Assistant Services & Solutions | SageStone Inc", "Explore SageStone Inc virtual assistant services for admin, operations, real estate, bookkeeping support, social media, lead generation, design, and data research."],
  ["/solutions/virtual-operations-admin", "Virtual Administrative Assistant Services | SageStone Inc", "Reclaim your schedule with virtual administrative assistant support for inbox management, calendar management, admin coordination, and workflow documentation."],
  ["/solutions/real-estate-virtual-assistant", "Real Estate Virtual Assistant Services | SageStone Inc", "Real estate virtual assistant support for CRM updates, listings, scheduling, transaction coordination, lead follow-up, and admin support."],
  ["/solutions/bookkeeping-support", "Virtual Bookkeeping Support Services | SageStone Inc", "Virtual bookkeeping support for reconciliation, invoicing, expense tracking, transaction organization, and monthly financial record preparation."],
  ["/solutions/social-media-marketing-support", "Social Media Marketing Assistant Services | SageStone Inc", "Social media virtual assistant support for content calendars, scheduling, community monitoring, reporting, and marketing follow-through."],
  ["/solutions/lead-generation-support", "Lead Generation Virtual Assistant Services | SageStone Inc", "Lead generation virtual assistant support for prospect research, list building, CRM updates, outreach coordination, and appointment-setting workflows."],
  ["/solutions/graphic-design-support", "Virtual Graphic Design Assistant Services | SageStone Inc", "Graphic design support for social graphics, templates, presentations, email banners, brand assets, and recurring creative production."],
  ["/solutions/data-entry-web-research", "Data Entry & Web Research Assistant Services | SageStone Inc", "Data entry and web research support for database updates, data cleanup, market research, list building, spreadsheets, and structured reporting."],
  ["/blog/virtual-assistant-tasks-for-small-business", "What Tasks Can a Virtual Assistant Handle for a Small Business? | SageStone Inc", "See practical virtual assistant tasks for small business owners, from inbox and calendar support to CRM updates, reporting, research, and follow-up."],
  ["/blog/how-to-outsource-customer-support-without-losing-quality", "How to Outsource Customer Support Without Losing Quality | SageStone Inc", "Learn how to outsource customer support with scripts, escalation rules, QA, reporting, and onboarding that protect the customer experience."],
  ["/blog/ecommerce-virtual-assistant-20-tasks-you-can-delegate", "E-Commerce Virtual Assistant: Tasks You Can Delegate | SageStone Inc", "Explore ecommerce virtual assistant tasks for Shopify stores and online brands, including orders, returns, products, customers, and reporting."],
  ["/blog/virtual-assistant-tasks-to-delegate", "Virtual Assistant Tasks to Delegate First | SageStone Inc", "Learn which virtual assistant tasks to delegate first, including inbox management, scheduling, CRM updates, reporting, customer support, and admin workflows."],
  ["/blog/customer-support-outsourcing-checklist", "Customer Support Outsourcing Checklist for Growing Businesses | SageStone Inc", "Use this customer support outsourcing checklist to prepare workflows, channels, escalation rules, QA standards, reporting, and onboarding for outsourced support."],
  ["/blog/ecommerce-customer-support-best-practices", "E-Commerce Customer Support Best Practices | SageStone Inc", "Improve ecommerce customer support with better order updates, return workflows, product inquiry handling, response standards, reporting, and support operations."],
  ["/blog/how-to-create-sops-for-virtual-assistants", "How to Create SOPs for Virtual Assistants | SageStone Inc", "Learn how to create SOPs for virtual assistants with clear steps, tools, checklists, examples, quality standards, and review cycles."],
  ["/blog/how-to-hire-a-virtual-assistant", "How to Hire a Virtual Assistant for Your Business | SageStone Inc", "Learn how to hire a virtual assistant, what tasks to delegate, what to look for, and how SageStone Inc helps businesses build reliable support systems."],
  ["/blog/when-to-outsource-customer-support", "When Should a Business Outsource Customer Support? | SageStone Inc", "Learn when to outsource customer support, what workflows to prepare, and how outsourced support can help growing businesses improve coverage and consistency."],
  ["/blog/what-does-an-ecommerce-virtual-assistant-do", "What Does an E-Commerce Virtual Assistant Do? | SageStone Inc", "Discover what an ecommerce virtual assistant can handle, including order support, customer inquiries, product updates, CRM tasks, and operational reporting."],
  ["/blog/business-operations-support-guide", "Business Operations Support: What It Includes and When You Need It | SageStone Inc", "Learn what business operations support includes, when to use it, and how SageStone Inc helps businesses streamline workflows, reporting, admin, and back-office tasks."],
  ["/blog/improve-saas-customer-onboarding", "How to Improve Customer Onboarding Workflows | SageStone Inc", "A practical guide to improving customer onboarding with clearer milestones, handoffs, customer education, CRM visibility, and recurring workflow support."],
  ["/blog/shopify-customer-support-workflow-checklist", "Shopify Customer Support Workflow Checklist | SageStone Inc", "A Shopify support workflow checklist for customer inquiries, order questions, returns, macros, escalation rules, and recurring ecommerce support improvements."],
  ["/case-studies/ecommerce-support-response-times", "E-Commerce Support Response Time Case Study | SageStone Inc", "See how structured ecommerce support can help improve response workflows, customer communication, and daily operations for growing online stores."],
  ["/case-studies/real-estate-operations-support", "Real Estate Operations Support Case Study | SageStone Inc", "See how real estate virtual assistant support can help teams manage leads, CRM updates, listing coordination, scheduling, and client communication."],
  ["/case-studies/saas-onboarding-workflow-case-study", "Customer Onboarding Workflow Case Study | SageStone Inc", "A case study showing how onboarding workflows can be clarified with better handoffs, milestones, SOPs, and customer communication visibility."],
  ["/case-studies/shopify-support-operations-case-study", "Shopify Support Operations Case Study | SageStone Inc", "A case study showing how Shopify support operations can be improved with clearer queues, SOPs, templates, and escalation workflows."],
  ["/free-workflow-assessment", "Free Workflow Assessment | SageStone Inc", "Request a workflow assessment from SageStone Inc to identify the admin, support, CRM, inbox, and operations work your team can delegate first."],
  ["/terms", "Terms of Service | SageStone Inc", "Terms of Service for SageStone Inc virtual assistant services and business operations support."],
  ["/privacy", "Privacy Policy | SageStone Inc", "Privacy Policy for SageStone Inc virtual assistant services and business operations support."],
];

function canonicalUrl(path) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
}

function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function inject(html, [path, title, description]) {
  const canonical = canonicalUrl(path);
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttribute(description)}" />`)
    .replace(/<meta name="author" content="[^"]*" \/>/, `<meta name="author" content="${SITE_NAME}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttribute(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttribute(description)}" />`)
    .replace(/<meta property="og:site_name" content="[^"]*" \/>/, `<meta property="og:site_name" content="${SITE_NAME}" />`)
    .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${OG_IMAGE}" />`)
    .replace(/<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${SITE_NAME} social preview" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttribute(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeAttribute(description)}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${OG_IMAGE}" />`)
    .replace(/<meta name="twitter:image:alt" content="[^"]*" \/>/, `<meta name="twitter:image:alt" content="${SITE_NAME} social preview" />`);
}

const template = readFileSync("dist/index.html", "utf8");

for (const route of routes) {
  const target = route[0] === "/" ? "dist/index.html" : join("dist", route[0], "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, inject(template, route));
}

writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(([path]) => `  <url><loc>${canonicalUrl(path)}</loc><lastmod>${LASTMOD}</lastmod><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`)
    .join("\n")}\n</urlset>\n`,
);

if (existsSync("public/robots.txt")) copyFileSync("public/robots.txt", "dist/robots.txt");
