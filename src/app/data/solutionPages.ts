export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionPageData {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  h1: string;
  heroSubtitle: string;
  introParagraph: string;
  ctaPrimary: string;
  ctaSecondary: string;
  faqs: SolutionFaq[];
  jsonLdServiceName: string;
  jsonLdServiceDescription: string;
}

export const solutionPagesData: SolutionPageData[] = [
  // ─── 1. Virtual Operations & Admin ───────────────────────────────
  {
    slug: "virtual-operations-admin",
    seoTitle: "Virtual Administrative Assistant Services",
    seoDescription:
      "Reclaim your schedule with a dedicated virtual administrative assistant. SageStone provides outsourced admin support, calendar management, and workflow automation.",
    seoKeywords:
      "virtual administrative assistant, outsourced admin support, remote executive assistant, virtual office management, calendar management virtual assistant, workflow automation assistant",
    h1: "Virtual Operations & Admin Support",
    heroSubtitle:
      "Free yourself from day-to-day admin tasks so you can focus on the strategic work that grows your business.",
    introParagraph:
      "Running a business means wearing a dozen hats, but administrative overload should not slow you down. SageStone's virtual administrative assistants step in as a structured extension of your team, handling everything from inbox management and calendar coordination to travel booking and document preparation. Our remote executive assistants are trained in the tools you already use, so onboarding is practical and organized. Whether you need a few hours a week or fuller coverage, we tailor outsourced admin support to match your workflow and keep operations running smoothly.",
    ctaPrimary: "Get Started with Operations Support",
    ctaSecondary: "Schedule a Free Consultation",
    faqs: [
      {
        question: "What tasks can I delegate to a virtual administrative assistant?",
        answer:
          "You can offload calendar management, email triage, travel arrangements, data entry, document formatting, meeting coordination, and basic research. If a task lives in a browser or a standard business application, there's a strong chance our team can handle it for you.",
      },
      {
        question: "How many hours per week can I expect to save?",
        answer:
          "Clients often reclaim meaningful focus once recurring administrative work is clearly delegated. The exact impact depends on the volume and complexity of delegated tasks, but even partial delegation can create more room for revenue-generating activities.",
      },
      {
        question: "What tools and platforms do your assistants use?",
        answer:
          "Our assistants are proficient in Google Workspace, Microsoft 365, Slack, Zoom, Asana, Trello, Monday.com, and many other popular platforms. If you rely on a specialized tool, we'll train your assistant on it during the onboarding phase at no extra cost.",
      },
      {
        question: "How long does onboarding typically take?",
        answer:
          "Most engagements reach full productivity within five to seven business days. During the first week we map your workflows, document standard procedures, and run supervised task cycles so your assistant understands your preferences before working independently.",
      },
      {
        question: "What are your assistants' working hours?",
        answer:
          "We offer flexible scheduling aligned to your time zone, including standard business hours and extended coverage. If you need after-hours or weekend availability, we can arrange overlapping shifts to ensure nothing falls through the cracks.",
      },
      {
        question: "How do you ensure quality and accuracy?",
        answer:
          "Every assistant follows documented SOPs tailored to your business. We also perform regular quality audits, collect your feedback through structured check-ins, and provide a dedicated account manager who monitors performance metrics on your behalf.",
      },
      {
        question: "How is SageStone different from a temp staffing agency?",
        answer:
          "Temp agencies fill seats; we build operational partnerships. Our assistants receive ongoing training, follow your custom playbooks, and are backed by a support team that ensures continuity if your primary assistant is unavailable. You get consistency, not a revolving door.",
      },
      {
        question: "How do I get started with virtual admin support?",
        answer:
          "Simply schedule a free consultation through our website. We'll discuss your current workload, identify the highest-impact tasks to delegate, match you with a vetted assistant, and build a practical onboarding path.",
      },
    ],
    jsonLdServiceName: "Virtual Operations & Admin Support",
    jsonLdServiceDescription:
      "Dedicated virtual administrative assistants providing calendar management, inbox organization, workflow automation, and remote office support for growing businesses.",
  },

  // ─── 2. Real Estate Virtual Assistant ────────────────────────────
  {
    slug: "real-estate-virtual-assistant",
    seoTitle: "Real Estate Virtual Assistant Services",
    seoDescription:
      "Close more deals with a real estate virtual assistant from SageStone. We handle transaction coordination, MLS listings, CRM management, and daily admin for agents and teams.",
    seoKeywords:
      "real estate virtual assistant, real estate transaction coordinator, MLS listing assistant, real estate CRM management, virtual assistant for realtors, property management virtual assistant",
    h1: "Real Estate Virtual Assistant Services",
    heroSubtitle:
      "Spend more time with clients and less time on paperwork. Our real estate VAs handle the details behind each workflow.",
    introParagraph:
      "Real estate moves fast, and strong follow-up matters. SageStone's real estate virtual assistants manage transaction coordination, MLS listing updates, CRM upkeep, and client follow-ups so you can focus on showings and closings. Whether you're a solo agent scaling your pipeline or a team leader managing active deals, our assistants integrate with the platforms you already use, from Dotloop and Skyslope to Follow Up Boss and kvCORE, keeping transaction tasks easier to see and manage.",
    ctaPrimary: "Get Started with Real Estate VA Support",
    ctaSecondary: "Schedule a Free Consultation",
    faqs: [
      {
        question: "How can a virtual assistant help me close more deals?",
        answer:
          "By taking transaction paperwork, CRM follow-ups, and listing updates off your plate, you reclaim hours each week for prospecting and client meetings. More face time with buyers and sellers translates directly into more signed contracts and faster closings.",
      },
      {
        question: "Which MLS platforms do your assistants support?",
        answer:
          "Our team has experience with major MLS systems including Bright MLS, CRMLS, Stellar MLS, and many regional platforms. If your MLS isn't one we've worked with before, we ramp up quickly because the core workflows are similar across systems.",
      },
      {
        question: "What does transaction coordination include?",
        answer:
          "Our assistants manage timelines, ensure documents are signed and submitted on schedule, coordinate with title companies and lenders, track contingencies, and keep all parties informed. The goal is a smooth path from ratified contract to settlement with nothing overlooked.",
      },
      {
        question: "Which CRM tools do you support?",
        answer:
          "We work with Follow Up Boss, kvCORE, LionDesk, Wise Agent, BoomTown, Salesforce, and many others. Your assistant will manage contact records, set up drip campaigns, log interactions, and ensure no lead goes cold due to missed follow-up.",
      },
      {
        question: "Can your VAs assist with open house preparation?",
        answer:
          "Absolutely. Our assistants handle pre-event marketing, schedule social media posts, prepare sign-in sheets, send reminder emails to prospects, and follow up with attendees afterward. You focus on hosting while we manage the logistics around it.",
      },
      {
        question: "How do you protect confidential client data?",
        answer:
          "All assistants sign non-disclosure agreements and operate under strict data-handling protocols. We use encrypted communication channels and limit access to sensitive documents on a need-to-know basis, so your clients' personal and financial information stays secure.",
      },
      {
        question: "Do you support solo agents as well as larger teams?",
        answer:
          "Yes. Solo agents often start with part-time support and scale as their business grows. For teams, we can assign multiple assistants who share a unified workflow, ensuring consistent service across every team member's pipeline.",
      },
      {
        question: "How does the cost compare to hiring an in-house assistant?",
        answer:
          "Virtual assistant support can reduce the overhead of recruiting, training, benefits, office space, and direct employee management. The right model depends on your workload, approval needs, and preferred level of internal control.",
      },
    ],
    jsonLdServiceName: "Real Estate Virtual Assistant",
    jsonLdServiceDescription:
      "Virtual assistants for real estate professionals offering transaction coordination, MLS listing management, CRM upkeep, and client communication support.",
  },

  // ─── 3. Bookkeeping Support ──────────────────────────────────────
  {
    slug: "bookkeeping-support",
    seoTitle: "Virtual Bookkeeping Support Services",
    seoDescription:
      "Keep your books accurate and up to date with SageStone's virtual bookkeeping support. We handle reconciliation, invoicing, and expense tracking in QuickBooks and more.",
    seoKeywords:
      "virtual bookkeeping support, outsourced bookkeeping services, QuickBooks virtual assistant, remote bookkeeping assistant, small business bookkeeping support, accounts payable virtual assistant",
    h1: "Bookkeeping Support Services",
    heroSubtitle:
      "Accurate books, organized consistently. Our virtual bookkeeping assistants keep your records easier to review so you can make informed decisions.",
    introParagraph:
      "Falling behind on bookkeeping creates a ripple effect: late invoices, missed deductions, and decisions based on stale numbers. SageStone's virtual bookkeeping assistants maintain your records, handling bank reconciliations, accounts payable and receivable, expense categorization, and monthly reporting. We work inside your preferred platform, including QuickBooks Online, Xero, FreshBooks, or Wave, and support clean, organized books you and your CPA can review. Please note that our services focus on bookkeeping support; we do not provide CPA, tax advisory, or certified accounting services.",
    ctaPrimary: "Get Started with Bookkeeping Support",
    ctaSecondary: "Schedule a Free Consultation",
    faqs: [
      {
        question: "Which bookkeeping platforms do you support?",
        answer:
          "We work with QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Wave, and Zoho Books. If you use a different platform, let us know. Our team can learn new tools during the onboarding process.",
      },
      {
        question: "Is this the same as hiring a CPA or accountant?",
        answer:
          "No. Our bookkeeping assistants handle day-to-day transaction recording, reconciliation, and reporting. We do not provide tax preparation, audit services, or certified accounting advice. We recommend working with a licensed CPA for those needs, and we'll keep your books CPA-ready.",
      },
      {
        question: "How often are bank accounts reconciled?",
        answer:
          "We reconcile accounts on a weekly or monthly cadence based on your preference and transaction volume. Weekly reconciliation is ideal for businesses with high transaction counts, while monthly works well for smaller operations. Either way, discrepancies are flagged immediately.",
      },
      {
        question: "Do you handle payroll processing?",
        answer:
          "We can assist with payroll data preparation, timesheet review, and inputting figures into your payroll platform. However, we do not act as a payroll processor or tax withholding agent. We complement your existing payroll provider by keeping the supporting data accurate.",
      },
      {
        question: "How do you secure our financial data?",
        answer:
          "We use encrypted connections, role-based access controls, and secure password management tools. Assistants access your books through your authorized platform only, and all team members sign confidentiality agreements before engagement. Your financial records are never stored locally.",
      },
      {
        question: "What monthly reports will I receive?",
        answer:
          "Standard deliverables include a profit-and-loss statement, balance sheet, cash-flow summary, and an accounts-aging report. We can customize reporting to include KPIs or departmental breakdowns your CPA or leadership team requires for decision-making.",
      },
      {
        question: "What does the onboarding process look like?",
        answer:
          "We start with a discovery call to understand your chart of accounts, transaction volume, and reporting needs. Then we request platform access, review historical data, document your workflows, and establish a processing cadence.",
      },
      {
        question: "How do I transition my existing books to your team?",
        answer:
          "We perform a thorough review of your current records, identify and correct any discrepancies, and establish a clean starting point. If your books need cleanup before ongoing maintenance begins, we'll scope that as a one-time project so you know the cost upfront.",
      },
    ],
    jsonLdServiceName: "Virtual Bookkeeping Support",
    jsonLdServiceDescription:
      "Remote bookkeeping assistants providing bank reconciliation, invoicing, expense tracking, and monthly financial reporting for small and mid-size businesses.",
  },

  // ─── 4. Social Media Marketing Support ───────────────────────────
  {
    slug: "social-media-marketing-support",
    seoTitle: "Social Media Marketing Assistant Services",
    seoDescription:
      "Grow your brand online with a social media virtual assistant from SageStone. We manage content creation, scheduling, community engagement, and performance analytics.",
    seoKeywords:
      "social media virtual assistant, social media management assistant, content creation virtual assistant, social media scheduling service, community management support, influencer outreach assistant",
    h1: "Social Media Marketing Support",
    heroSubtitle:
      "Consistent, on-brand content across every platform without adding another full-time role to your payroll.",
    introParagraph:
      "A strong social media presence demands daily attention: creating scroll-stopping content, responding to comments, analyzing what's working, and adjusting strategy in real time. SageStone's social media virtual assistants handle it all so your brand stays active and engaging without consuming your calendar. From content ideation and graphic creation to scheduling, community management, and monthly analytics reporting, our team ensures every post aligns with your brand voice and business goals. We work across Instagram, Facebook, LinkedIn, TikTok, X, and Pinterest to meet your audience wherever they spend their time.",
    ctaPrimary: "Get Started with Social Media Support",
    ctaSecondary: "Schedule a Free Consultation",
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer:
          "We manage Instagram, Facebook, LinkedIn, TikTok, X (formerly Twitter), Pinterest, and YouTube community tabs. If you're active on a niche platform, we'll evaluate it and build a workflow so you have consistent coverage across every channel that matters to your audience.",
      },
      {
        question: "What's included in content creation?",
        answer:
          "Our team writes captions, designs static graphics and carousels, edits short-form video clips, and creates story templates. We work from your brand guidelines and content pillars, and every piece goes through an approval process before publishing.",
      },
      {
        question: "How often will you post on my accounts?",
        answer:
          "Posting frequency is tailored to your strategy and budget. Most clients start with three to five posts per platform per week, plus daily stories or community engagement. We'll recommend a cadence during onboarding based on your goals and audience behavior.",
      },
      {
        question: "Do you provide analytics and performance reports?",
        answer:
          "Yes. You'll receive a monthly analytics report covering reach, engagement rate, follower growth, top-performing content, and recommendations for the upcoming month. We also provide mid-month check-ins if your plan includes paid campaigns or product launches.",
      },
      {
        question: "How do you maintain my brand voice across platforms?",
        answer:
          "During onboarding we create a brand voice guide that documents your tone, vocabulary preferences, visual style, and messaging dos and don'ts. Every team member references this guide, and your approval workflow ensures nothing publishes that doesn't sound like you.",
      },
      {
        question: "Will you develop a hashtag strategy for my brand?",
        answer:
          "Absolutely. We research industry-specific, trending, and branded hashtags to maximize discoverability. The strategy is reviewed monthly and updated based on performance data so your posts continue to reach new audiences organically.",
      },
      {
        question: "Can you handle influencer outreach on my behalf?",
        answer:
          "Yes. Our team identifies relevant creators, drafts outreach messages, negotiates collaboration terms, and manages communication throughout the partnership. We track deliverables and report on campaign performance so you see a clear return on every collaboration.",
      },
      {
        question: "What's the typical turnaround time for content?",
        answer:
          "Standard content batches are scheduled around your review process before the publish date. Rush requests for timely or reactive content can be scoped based on complexity, approvals, and design requirements.",
      },
    ],
    jsonLdServiceName: "Social Media Marketing Support",
    jsonLdServiceDescription:
      "Virtual assistants for social media management including content creation, post scheduling, community engagement, analytics reporting, and influencer outreach.",
  },

  // ─── 5. Lead Generation Support ──────────────────────────────────
  {
    slug: "lead-generation-support",
    seoTitle: "Lead Generation Virtual Assistant Services",
    seoDescription:
      "Fill your pipeline with qualified prospects. SageStone's lead generation virtual assistants handle B2B outreach, LinkedIn prospecting, appointment setting, and CRM management.",
    seoKeywords:
      "lead generation virtual assistant, B2B lead generation assistant, cold email outreach assistant, LinkedIn prospecting service, appointment setting virtual assistant, CRM data entry assistant",
    h1: "Lead Generation Support Services",
    heroSubtitle:
      "Structured prospecting support so your sales team can spend more time on qualified conversations.",
    introParagraph:
      "Growth stalls when your pipeline runs dry, but building it yourself pulls you away from high-value conversations. SageStone's lead generation virtual assistants support targeted B2B outreach, LinkedIn engagement, cold email campaigns, and appointment-setting workflows. Every campaign is designed with compliance in mind, including CAN-SPAM and applicable privacy requirements. Our assistants research ideal prospects, enrich contact data, draft personalized messages, and coordinate qualified meetings based on your criteria. Combined with disciplined CRM data entry, you have clearer visibility into pipeline activity.",
    ctaPrimary: "Get Started with Lead Generation",
    ctaSecondary: "Schedule a Free Consultation",
    faqs: [
      {
        question: "How do you ensure outreach complies with CAN-SPAM and GDPR?",
        answer:
          "Every campaign includes proper opt-out mechanisms, accurate sender identification, and lawful basis documentation where GDPR applies. We stay current with evolving regulations, audit our processes regularly, and never purchase or scrape data from non-compliant sources. Your brand's reputation is always protected.",
      },
      {
        question: "How do you qualify leads before booking meetings?",
        answer:
          "We work with you to define an ideal customer profile and qualification criteria, such as company size, industry, budget range, and decision-making authority. Prospects who match those criteria move to the meeting-booking stage, so your sales team's time is used with more intention.",
      },
      {
        question: "Which CRM tools do your assistants use?",
        answer:
          "We support HubSpot, Salesforce, Pipedrive, Zoho CRM, Close, and many others. Your assistant logs every interaction, updates deal stages, and keeps contact records clean so your pipeline data is reliable and your sales reporting stays accurate.",
      },
      {
        question: "What lead volume can I expect each month?",
        answer:
          "Volume depends on your target market, outreach channels, and offer. Most B2B clients see 30 to 80 qualified leads per month after the first 60 days of campaign optimization. We set realistic benchmarks during onboarding and refine as data comes in.",
      },
      {
        question: "Do you use cold email, LinkedIn outreach, or both?",
        answer:
          "We recommend a multi-channel approach for best results. Cold email casts a wider net while LinkedIn builds personal connections. Your assistant tailors messaging for each channel and coordinates timing so prospects receive a cohesive experience without feeling spammed.",
      },
      {
        question: "Where does prospect data come from?",
        answer:
          "We use reputable data providers such as Apollo, ZoomInfo, and LinkedIn Sales Navigator, supplemented by manual web research. Every record is verified before outreach begins, and we never use purchased lists from unverified or non-compliant sources.",
      },
      {
        question: "How does the appointment setting process work?",
        answer:
          "Once a prospect expresses interest, your assistant confirms fit against your qualification criteria, proposes available time slots via your scheduling tool, and sends calendar invitations with meeting agendas. You receive a pre-call brief so you're prepared before every conversation.",
      },
      {
        question: "How do we measure ROI on lead generation efforts?",
        answer:
          "We track metrics including outreach volume, response rate, qualified lead count, meetings booked, and pipeline value generated. Monthly reports tie these numbers back to your investment so you can clearly see cost-per-lead and cost-per-meeting trends over time.",
      },
    ],
    jsonLdServiceName: "Lead Generation Support",
    jsonLdServiceDescription:
      "Virtual assistants for B2B lead generation including prospecting, cold email outreach, LinkedIn engagement, appointment setting, and CRM data management.",
  },

  // ─── 6. Graphic Design Support ───────────────────────────────────
  {
    slug: "graphic-design-support",
    seoTitle: "Virtual Graphic Design Assistant Services",
    seoDescription:
      "Professional graphic design on demand. SageStone's virtual graphic design assistants create social media graphics, presentations, marketing collateral, and brand assets.",
    seoKeywords:
      "virtual graphic design assistant, outsourced graphic design service, social media graphics assistant, brand design virtual assistant, presentation design service, marketing collateral design",
    h1: "Graphic Design Support Services",
    heroSubtitle:
      "Polished visuals that strengthen your brand without the overhead of an in-house designer.",
    introParagraph:
      "Great design builds trust before a single word is read. SageStone's virtual graphic design assistants produce polished visuals for every channel, including social media graphics, pitch decks, email banners, trade-show materials, and brand identity assets. Each project starts with your brand guidelines, and our designers deliver files in the formats you need for digital or print. Whether you have a one-off request or need ongoing creative support, our flexible plans let you scale design capacity with less long-term overhead. The result is a consistent, professional look across recurring assets.",
    ctaPrimary: "Get Started with Design Support",
    ctaSecondary: "Schedule a Free Consultation",
    faqs: [
      {
        question: "What design tools does your team use?",
        answer:
          "Our designers work in Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, and Canva Pro. Tool selection depends on project requirements. Vector illustrations call for Illustrator, while rapid social assets may use Canva. We match the tool to the deliverable.",
      },
      {
        question: "How many revisions are included per project?",
        answer:
          "Every project includes two rounds of revisions at no additional cost. Most designs are approved within that cycle. If further adjustments are needed, we'll discuss scope and provide transparent pricing before proceeding so there are no surprises.",
      },
      {
        question: "How do you ensure designs follow our brand guidelines?",
        answer:
          "We request your brand kit, including logos, color codes, typography, and any style guides, at the start of the engagement. Designers reference these assets for every project, and an internal review step checks consistency before anything is sent to you for approval.",
      },
      {
        question: "What are your typical turnaround times?",
        answer:
          "Standard projects such as social media graphics are delivered within two to three business days. More complex work like multi-page presentations or brochures typically takes five to seven business days. Rush delivery is available upon request for time-sensitive needs.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "We deliver files in the formats your workflow requires, including PNG, JPEG, SVG, PDF, AI, PSD, and FIGMA source files. If a project spans print and digital, you'll receive properly formatted versions for each medium with correct color profiles.",
      },
      {
        question: "What types of design work can I request?",
        answer:
          "Our scope includes social media graphics, infographics, email templates, slide decks, business cards, flyers, trade-show banners, eBook layouts, and logo refinements. If your request falls outside standard deliverables, we'll let you know during the briefing stage.",
      },
      {
        question: "Do you handle both print and digital design?",
        answer:
          "Yes. For digital work we optimize for screen resolution and platform-specific dimensions. For print we prepare files with proper bleed, trim marks, and CMYK color profiles so your printer receives production-ready artwork without extra back-and-forth.",
      },
      {
        question: "What's the best way to share feedback on designs?",
        answer:
          "We provide a simple review link where you can leave comments directly on the design. You can also share feedback via email or a quick video walkthrough. Specific, annotated comments help us implement changes accurately in fewer revision cycles.",
      },
    ],
    jsonLdServiceName: "Graphic Design Support",
    jsonLdServiceDescription:
      "On-demand virtual graphic design assistants creating social media visuals, presentations, marketing collateral, and brand assets for businesses of all sizes.",
  },

  // ─── 7. Data Entry & Web Research ────────────────────────────────
  {
    slug: "data-entry-web-research",
    seoTitle: "Data Entry & Web Research Assistant Services",
    seoDescription:
      "Accurate data entry and in-depth web research from SageStone's virtual assistants. We handle database management, data cleansing, market research, and competitive analysis.",
    seoKeywords:
      "data entry virtual assistant, web research assistant, database management virtual assistant, data cleansing service, market research virtual assistant, competitive analysis assistant",
    h1: "Data Entry & Web Research Services",
    heroSubtitle:
      "Clean data and actionable research delivered with reviewable documentation.",
    introParagraph:
      "Decisions are only as good as the data behind them, yet data entry backlogs and shallow research slow organizations down every day. SageStone's virtual assistants support careful data entry, database management, data cleansing, and structured web research. Whether you need records migrated into a new CRM, a competitive landscape report, or ongoing market intelligence, our team delivers organized results on a predictable schedule. We use quality-control steps, including review checks and source cross-referencing, so the information flowing into your dashboards and strategy sessions is easier to trust.",
    ctaPrimary: "Get Started with Data & Research Support",
    ctaSecondary: "Schedule a Free Consultation",
    faqs: [
      {
        question: "How do you review data entry quality?",
        answer:
          "We use double-entry verification, automated validation checks when appropriate, and manual review before delivery. We can also provide error logs so you have visibility into the quality-control process.",
      },
      {
        question: "How do you keep our data secure?",
        answer:
          "Assistants work on encrypted connections with role-based access limited to the platforms you authorize. We sign non-disclosure agreements, follow industry-standard data-handling practices, and never store client data on personal devices. Security audits are conducted regularly.",
      },
      {
        question: "What types of web research do you conduct?",
        answer:
          "Our services include market research, competitive analysis, lead list building, pricing studies, industry trend reports, and product comparisons. We deliver findings in structured formats such as spreadsheets, slide decks, or written briefs tailored to your decision-making needs.",
      },
      {
        question: "Which tools and databases do your researchers use?",
        answer:
          "We use a combination of public databases, industry publications, LinkedIn Sales Navigator, Crunchbase, Statista, government data portals, and advanced search operators. Tool selection depends on the research scope, and we document every source for full traceability.",
      },
      {
        question: "What's the turnaround time for large data projects?",
        answer:
          "Timelines depend on volume and complexity. A dataset of 5,000 records typically takes three to five business days, while larger migrations or research projects are scoped with milestone deliveries. We provide a detailed timeline before work begins so expectations are clear.",
      },
      {
        question: "How do you handle sensitive or confidential data?",
        answer:
          "Sensitive projects are assigned to vetted team members who operate under enhanced security protocols, including VPN-only access and restricted file-sharing channels. All confidentiality terms are formalized in our service agreement before any data is shared.",
      },
      {
        question: "Can you deliver data in different formats and structures?",
        answer:
          "Absolutely. We deliver in CSV, Excel, Google Sheets, JSON, PDF, or directly into your CRM or database. If you need a custom schema or specific field mapping, we'll configure it during onboarding so every deliverable is plug-and-play for your systems.",
      },
      {
        question: "Can you scale up quickly for large or urgent datasets?",
        answer:
          "Yes. Our team model allows us to add trained assistants to a project within 48 hours. For planned large-scale efforts we build a resource plan in advance, and for urgent needs we shift capacity to meet your deadline without sacrificing accuracy.",
      },
    ],
    jsonLdServiceName: "Data Entry & Web Research Services",
    jsonLdServiceDescription:
      "Virtual assistants providing accurate data entry, database management, data cleansing, market research, and competitive analysis for data-driven businesses.",
  },
];
