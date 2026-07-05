import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const checkedFiles = [
  "index.html",
  "public/llms.txt",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/assets/og-image.svg",
  "scripts/prerender-seo.mjs",
  "src/app/data/site.ts",
  "src/app/hooks/usePageMeta.ts",
  "src/app/pages/Home.tsx",
  "src/app/pages/JeselSeoPage.tsx",
  "src/app/data/seoServicePages.ts",
  "src/app/data/solutionPages.ts",
  "src/app/pages/Solutions.tsx",
  "src/app/pages/About.tsx",
];

const failures = [];

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

for (const file of checkedFiles) {
  const content = read(file);
  assert(!/jeselcura\.me/i.test(content), `${file} still references jeselcura.me`);
  assert(!/Jesel Cura/.test(content), `${file} still references Jesel Cura`);
  assert(!/Fractional Customer Success Manager/i.test(content), `${file} still targets fractional customer success`);
}

const sitemap = read("public/sitemap.xml");
assert(sitemap.includes("<loc>https://www.sagestoneinc.com/</loc>"), "sitemap is missing the SageStone homepage");
assert(sitemap.includes("<loc>https://www.sagestoneinc.com/virtual-assistant-services/</loc>"), "sitemap is missing virtual assistant services");
assert(sitemap.includes("<loc>https://www.sagestoneinc.com/customer-support-outsourcing/</loc>"), "sitemap is missing customer support outsourcing");
assert(sitemap.includes("<loc>https://www.sagestoneinc.com/services/</loc>"), "sitemap should preserve the legacy /services URL");
assert(sitemap.includes("<loc>https://www.sagestoneinc.com/experience/</loc>"), "sitemap should preserve the legacy /experience URL");

const robots = read("public/robots.txt");
assert(robots.includes("Sitemap: https://www.sagestoneinc.com/sitemap.xml"), "robots.txt does not point at the SageStone sitemap");

const siteData = read("src/app/data/site.ts");
assert(siteData.includes('export const SITE_URL = "https://www.sagestoneinc.com";'), "SITE_URL is not SageStone");
assert(siteData.includes('export const SITE_NAME = "SageStone Inc";'), "SITE_NAME is not SageStone Inc");
assert(siteData.includes("Virtual Assistant Services & Business Operations Support"), "homepage title does not target SageStone services");

const proofFiles = [
  "src/app/data/seoServicePages.ts",
  "src/app/data/solutionPages.ts",
  "src/app/pages/Solutions.tsx",
  "src/app/pages/About.tsx",
];

for (const file of proofFiles) {
  const content = read(file);
  assert(!/space for testimonials|client logos/i.test(content), `${file} still contains placeholder proof language`);
  assert(!/\b\d+(?:\.\d+)?\s?%/.test(content), `${file} still contains percentage proof claims`);
  assert(!/\b(?:guarantee|guaranteed)\b/i.test(content), `${file} still contains guarantee language`);
}

if (failures.length) {
  console.error("SEO invariant failures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("SEO invariants passed.");
