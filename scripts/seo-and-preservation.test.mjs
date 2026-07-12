import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteBase = "https://www.jeselcura.me";

const canonicalRoutes = [
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
  "/customer-success-operations-consultant",
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

const nestedRedirects = new Map([
  ["/services/fractional-customer-success-consulting", "/fractional-customer-success-manager"],
  ["/services/shopify-ecommerce-operations-support", "/shopify-operations-support"],
  ["/services/operations-audit", "/operations-audit"],
  ["/services/support-operations-consulting", "/support-operations-consulting"],
  ["/services/sop-consulting", "/sop-consulting"],
  ["/services/customer-onboarding-consulting", "/customer-onboarding-workflows"],
  ["/services/customer-retention-consulting", "/fractional-customer-success-manager"],
]);

const faqRoutes = [
  "/faq",
  "/services",
  "/operations-audit",
  "/fractional-customer-success-manager",
  "/customer-success-operations-consultant",
  "/shopify-operations-support",
  "/customer-onboarding-workflows",
  "/sop-consulting",
  "/crm-workflow-cleanup",
  "/support-operations-consulting",
  "/ecommerce-operations-consultant",
];

const ctaByRoute = new Map([
  ["/", "Book a Discovery Call"],
  ["/services", "Explore the Right Engagement"],
  ["/operations-audit", "Book a Customer Success Operations Audit"],
  ["/fractional-customer-success-manager", "Discuss Fractional Customer Success Support"],
  ["/customer-success-operations-consultant", "Review Your Customer Success Operations"],
  ["/shopify-operations-support", "Review Your Shopify Support Workflow"],
  ["/customer-onboarding-workflows", "Review Your Customer Onboarding Workflow"],
  ["/sop-consulting", "Discuss Your SOP Documentation"],
  ["/crm-workflow-cleanup", "Review Your CRM Workflow"],
  ["/support-operations-consulting", "Improve Your Support Operations"],
  ["/ecommerce-operations-consultant", "Discuss Your Ecommerce Operations"],
  ["/case-studies", "Discuss a Similar Workflow Challenge"],
  ["/faq", "Still Have Questions? Book a Discovery Call"],
  ["/blog", "Get Your Workflow Reviewed"],
]);

function routeFile(route) {
  return route === "/"
    ? path.join(root, "index.html")
    : path.join(root, route.slice(1), "index.html");
}

function readRoute(route) {
  return fs.readFileSync(routeFile(route), "utf8");
}

function getTag(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

function getLinks(html) {
  return [...html.matchAll(/\bhref="([^"]+)"/g)].map((match) => match[1]);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    const relative = path.relative(root, full);
    if (
      relative.startsWith(".git") ||
      relative.startsWith(".agents") ||
      relative.startsWith("seo-output-") ||
      relative.startsWith("node_modules")
    ) {
      return [];
    }
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(
  sitemapUrls,
  canonicalRoutes.map((route) => `${siteBase}${route === "/" ? "/" : route}`),
  "sitemap must contain only the approved canonical root-level live routes"
);
assert.doesNotMatch(sitemap, /<(changefreq|priority)>/, "sitemap must not use deprecated priority or changefreq tags");

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
assert.match(robots, /User-agent:\s*\*\s*Allow:\s*\//, "robots.txt must keep Allow: / behavior");
assert.match(robots, new RegExp(`Sitemap:\\s*${siteBase.replace(/\./g, "\\.")}/sitemap\\.xml`));

for (const route of canonicalRoutes) {
  assert.ok(fs.existsSync(routeFile(route)), `${route} must have a static index.html`);
  const html = readRoute(route);
  assert.match(html, /<title>[^<]+<\/title>/, `${route} must have a title`);
  assert.match(html, /<meta name="description" content="[^"]+">/, `${route} must have a meta description`);
  assert.match(html, /<h1\b[^>]*>[\s\S]*?<\/h1>/, `${route} must have an H1`);
  assert.match(html, new RegExp(`<link rel="canonical" href="${siteBase.replace(/\./g, "\\.")}${route === "/" ? "/" : route}">`), `${route} canonical must match route`);
  assert.match(html, /<meta property="og:title" content="[^"]+">/, `${route} must have OG title`);
  assert.match(html, /<meta property="og:description" content="[^"]+">/, `${route} must have OG description`);
  assert.match(html, new RegExp(`<meta property="og:url" content="${siteBase.replace(/\./g, "\\.")}${route === "/" ? "/" : route}">`), `${route} must have OG URL`);
  assert.match(html, /<meta property="og:image" content="https:\/\/www\.jeselcura\.me\/[^"]+">/, `${route} must have OG image`);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image">/, `${route} must use summary_large_image`);
  assert.match(html, /<meta name="twitter:title" content="[^"]+">/, `${route} must have Twitter title`);
  assert.match(html, /<meta name="twitter:description" content="[^"]+">/, `${route} must have Twitter description`);
  assert.match(html, /<meta name="twitter:image" content="https:\/\/www\.jeselcura\.me\/[^"]+">/, `${route} must have Twitter image`);
  assert.doesNotMatch(html, /SageStone|sagestoneinc/i, `${route} must not contain old SageStone brand copy`);
  for (const href of getLinks(html)) {
    assert.ok(
      !href.startsWith("/services/"),
      `${route} must link directly to canonical root-level routes, not nested service route ${href}`
    );
  }
}

assert.match(readRoute("/operations-audit"), /<title>Customer Success Operations Audit for SaaS &amp; Ecommerce \| Jesel Cura<\/title>/, "operations audit title must match the approved SEO title");

for (const [route, cta] of ctaByRoute) {
  assert.match(readRoute(route), new RegExp(`>${cta.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<`), `${route} must use contextual CTA text`);
}

const titles = canonicalRoutes.map((route) => getTag(readRoute(route), /<title>([^<]+)<\/title>/));
assert.equal(new Set(titles).size, titles.length, "canonical pages must have unique titles");

const vercel = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
for (const [source, destination] of nestedRedirects) {
  assert.ok(
    vercel.redirects?.some((redirect) => redirect.source === source && redirect.destination === destination && redirect.permanent === true),
    `${source} must 301 redirect to ${destination}`
  );
}

const contact = readRoute("/contact");
for (const name of ["name", "email", "company", "website", "topic", "budget", "message"]) {
  assert.match(contact, new RegExp(`\\bname="${name}"`), `contact form must preserve field name ${name}`);
}
for (const name of ["team_size", "current_tools", "priority_timeline", "primary_bottleneck"]) {
  assert.match(contact, new RegExp(`\\bname="${name}"`), `contact form must include optional qualification field ${name}`);
}
assert.match(contact, /reply within one to two business days/, "contact page must set response expectations");
assert.match(contact, /aria-live="polite"/, "contact form success and error status must be announced");

const home = readRoute("/");
for (const label of ["Home", "Services", "Case Studies", "About Jesel", "Resources", "Contact"]) {
  assert.match(home, new RegExp(`>${label}<`), `primary nav must include ${label}`);
}

for (const sectionId of [
  "trust-chips",
  "proof-strip",
  "service-discovery",
  "who-this-is-for",
  "why-this-works",
  "how-work-starts",
  "proof-preview",
  "insight-preview",
]) {
  assert.match(home, new RegExp(`id="${sectionId}"`), `home must include approved section ${sectionId}`);
}

for (const chip of ["SaaS", "Shopify", "Ecommerce", "Customer success", "Support operations"]) {
  assert.match(home, new RegExp(`>${chip}<`), `home must include trust chip ${chip}`);
}

for (const phrase of [
  "Founder-led teams",
  "Diagnose friction",
  "Clean up workflows",
  "Case study preview",
  "Identify the bottleneck",
  "SOPs and handoffs",
  "Problem",
  "What changed",
  "Outcome",
  "Latest resources",
]) {
  assert.match(home, new RegExp(phrase), `home must include trust-first copy cue: ${phrase}`);
}

assert.match(home, /\bproof-strip-grid\b/, "home must include a polished non-numeric proof strip");
assert.match(home, /class="service-badge"/, "service cards must include scannable badge treatment");
assert.match(home, /class="resource-card"/, "home must include Omega-inspired resource preview cards");
assert.match(home, /class="outcome-row"/, "case study preview must use structured outcome rows");
assert.doesNotMatch(home, /omega-nextjsshop|21st\.dev|@21st|pricing plan|testimonial/i, "home must not copy external template or paid component content");

const css = fs.readFileSync(path.join(root, "assets/css/styles.css"), "utf8");
assert.match(css, /--background:\s*#fbf7ee/, "theme must use a lighter warm ivory background");
assert.match(css, /\[data-reveal\]/, "CSS must define reveal motion hooks");
assert.match(css, /prefers-reduced-motion:\s*reduce/, "CSS must support reduced motion");
assert.match(css, /transform/, "motion CSS must use transform where possible");
assert.doesNotMatch(css, /--background:\s*#191817/, "site must not default to a black-dominant dark luxury theme");
assert.match(css, /\.hero-visual::before/, "portrait treatment must be integrated with brand accents");
assert.match(css, /\.service-card:hover/, "service card hover state must be polished");
assert.match(css, /\.resource-card/, "resource preview cards must have dedicated styling");
assert.match(css, /--max:\s*1320px/, "desktop content max-width must feel more premium and confident");
assert.match(css, /font-size:\s*18px/, "base body readability must be increased on desktop");
assert.match(css, /min-height:\s*78px/, "desktop header/nav must not feel miniature");
assert.match(css, /h1\s*\{[^}]*4\.85rem/s, "hero H1 must be scaled up for stronger desktop confidence");
assert.match(css, /\.btn\s*\{[^}]*min-height:\s*58px/s, "CTA buttons must be larger and more tactile");
assert.match(css, /\.proof-strip-grid article\s*\{[^}]*min-height:\s*188px/s, "proof strip cards must feel like real premium components");
assert.match(css, /\.service-card\s*\{[^}]*min-height:\s*352px/s, "service cards must have more premium scale and consistent height");
assert.match(css, /\.cta\s*\{[^}]*4\.25rem/s, "final CTA must have stronger section impact");
assert.doesNotMatch(css, /omega-nextjsshop|21st\.dev|@21st/i, "CSS must not depend on external paid template or component references");
assert.doesNotMatch(css, /\.faq-panel\s*\{[^}]*display:\s*none/s, "FAQ answers must stay in the initial accessible DOM instead of display none");
assert.match(css, /\.faq-panel\[hidden\]/, "FAQ panels must use an accessible hidden-state selector that can be overridden for no-JS rendering");

for (const route of faqRoutes) {
  const html = readRoute(route);
  assert.match(html, /<section[^>]+aria-labelledby="[^"]*faq[^"]*"/, `${route} must render a labeled FAQ section`);
  assert.match(html, /<h3[^>]*>\s*<button[^>]+data-faq-button[^>]+aria-expanded="false"[^>]+aria-controls="[^"]+"/, `${route} FAQ questions must be h3-wrapped accordion buttons`);
  assert.match(html, /<div[^>]+id="[^"]*faq-answer-[^"]+"[^>]*>/, `${route} FAQ answers must have stable unique IDs`);
  const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .flatMap((schema) => Array.isArray(schema["@graph"]) ? schema["@graph"] : [schema])
    .find((schema) => schema["@type"] === "FAQPage");
  assert.ok(faqSchema, `${route} must include FAQPage schema because visible FAQ content exists`);
  const visibleQuestions = [...html.matchAll(/<button[^>]+data-faq-button[^>]*>([\s\S]*?)<\/button>/g)].map((match) => match[1].replace(/<[^>]+>/g, "").trim());
  const schemaQuestions = faqSchema.mainEntity.map((item) => item.name);
  assert.deepEqual(schemaQuestions, visibleQuestions, `${route} FAQ schema questions must match visible questions`);
}

for (const route of canonicalRoutes.filter((item) => item.startsWith("/blog/"))) {
  const html = readRoute(route);
  assert.match(html, /Written by Jesel Cura/, `${route} must include a visible author block`);
  assert.match(html, /Fractional Customer Success &amp; Operations Consultant/, `${route} must identify the author role`);
  assert.match(html, /<time datetime="\d{4}-\d{2}-\d{2}"/, `${route} must include a stable visible publication date`);
  assert.match(html, /"@type":"BlogPosting"/, `${route} must use BlogPosting schema`);
  assert.match(html, /"datePublished":"\d{4}-\d{2}-\d{2}"/, `${route} must include datePublished schema`);
  assert.match(html, /"author":\{"@type":"Person","name":"Jesel Cura","url":"https:\/\/www\.jeselcura\.me\/about"\}/, `${route} must link article author schema to /about`);
}

for (const route of canonicalRoutes.filter((item) => item.startsWith("/case-studies/"))) {
  const html = readRoute(route);
  for (const heading of ["Client context", "Operational challenge", "Gaps identified", "What changed", "Deliverables", "Outcome", "Related service"]) {
    assert.match(html, new RegExp(`<h2[^>]*>${heading}</h2>`), `${route} must include case-study section ${heading}`);
  }
  assert.match(html, /Client details and examples may be anonymized to protect confidentiality\./, `${route} must include the privacy statement`);
  assert.match(html, /href="\/operations-audit"/, `${route} must link to operations audit`);
  assert.match(html, /href="\/contact"/, `${route} must link to contact`);
}

const about = readRoute("/about");
for (const phrase of ["What I Help Teams Improve", "Relevant Experience", "How I Work", "Industries and Team Types", "Remote Collaboration", "Professional Profile"]) {
  assert.match(about, new RegExp(phrase), `/about must include ${phrase}`);
}
assert.match(about, /https:\/\/www\.linkedin\.com\/in\/jeselcura/, "/about must link the verified LinkedIn profile");

const experience = readRoute("/experience");
for (const phrase of ["Professional Overview", "Core Experience Areas", "Representative Responsibilities", "Tools and Platforms", "Selected Project Types"]) {
  assert.match(experience, new RegExp(phrase), `/experience must include ${phrase}`);
}
assert.match(experience, /Tools and platforms are only listed here when they are explicitly documented/, "/experience must avoid invented tool lists");

const personSchemas = [...about.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((match) => JSON.parse(match[1]))
  .flatMap((schema) => Array.isArray(schema["@graph"]) ? schema["@graph"] : [schema])
  .filter((schema) => schema["@type"] === "Person");
assert.ok(personSchemas.some((schema) => schema.knowsAbout?.includes("Customer Success Operations")), "Person schema must include relevant knowsAbout values");

const js = fs.readFileSync(path.join(root, "assets/js/site.js"), "utf8");
assert.match(js, /IntersectionObserver/, "motion layer must use IntersectionObserver for scroll reveal");
assert.match(js, /data-reveal/, "motion layer must target data-reveal elements");
assert.doesNotMatch(js, /window\.addEventListener\(\s*["']scroll/, "motion layer must not use scroll event listeners");

const generatedStaticFiles = [
  ...canonicalRoutes.map(routeFile),
  path.join(root, "assets/css/styles.css"),
  path.join(root, "assets/js/site.js"),
  path.join(root, "robots.txt"),
  path.join(root, "sitemap.xml"),
  path.join(root, "llms.txt"),
  path.join(root, "vercel.json"),
  path.join(root, "scripts/build-jesel-site.mjs"),
];

for (const file of generatedStaticFiles) {
  const text = fs.readFileSync(file, "utf8");
  assert.doesNotMatch(text, /[\u2014\u2013]/, `${path.relative(root, file)} must not contain em or en dashes`);
}

console.log("SEO and preservation checks passed");
