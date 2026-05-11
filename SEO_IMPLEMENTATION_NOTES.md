# SEO Implementation Notes

## Summary of changes made

- Updated the site to use `https://www.sagestoneinc.com` as the canonical production domain in page metadata, sitemap entries, robots references, structured data, and server-side redirect logic.
- Added dedicated SEO service pages for key SageStone Inc offerings and linked them from the homepage, header, footer, and related-service sections.
- Updated homepage title, meta description, Open Graph, Twitter/X metadata, H1 positioning, service links, and conversion calls-to-action.
- Added JSON-LD structured data for the homepage and service pages, including Organization, WebSite, ProfessionalService, Service, FAQPage, and BreadcrumbList schema where appropriate.
- Updated `/sitemap.xml` and `/robots.txt` for crawlability and indexability.
- Removed references to a missing default OG image URL so the site does not publish broken social preview image metadata.
- Removed placeholder social links from the footer because no verified company social URLs were available in the codebase.

## New URLs added

- `https://www.sagestoneinc.com/virtual-assistant-services/`
- `https://www.sagestoneinc.com/customer-support-outsourcing/`
- `https://www.sagestoneinc.com/ecommerce-virtual-assistant/`
- `https://www.sagestoneinc.com/real-estate-virtual-assistant/`
- `https://www.sagestoneinc.com/social-media-management-services/`
- `https://www.sagestoneinc.com/business-operations-support/`
- `https://www.sagestoneinc.com/web-design-maintenance/`

## Metadata added or updated

- Homepage title: `Virtual Assistant Services, Customer Support & Business Operations | SageStone Inc`
- Homepage meta description: `SageStone Inc helps businesses scale with virtual assistants, customer support, e-commerce operations, social media support, web maintenance, and business operations services.`
- Each new service page has a unique title, meta description, H1, canonical URL, Open Graph metadata, and Twitter/X metadata generated through the app metadata hook.
- Canonical URLs now use the `https://www.sagestoneinc.com` host and trailing slash format for public pages.

## Structured data added

- Homepage:
  - Organization
  - WebSite
  - ProfessionalService
- Service pages:
  - Service
  - FAQPage for visible FAQ content
  - BreadcrumbList

## Redirect assumptions

- Cloudflare Pages `_redirects` has been updated with host-level rules intended to redirect these variants to `https://www.sagestoneinc.com`:
  - `http://sagestoneinc.com/*`
  - `http://www.sagestoneinc.com/*`
  - `https://sagestoneinc.com/*`
- The Express server also includes canonical redirect middleware for deployments that route requests through `server.js`.
- If Cloudflare Pages does not apply host-specific `_redirects` in the active hosting configuration, implement equivalent 301 redirects in Cloudflare dashboard rules, DNS/hosting settings, or edge worker configuration.

## Required external actions

- Verify Google Search Console for `https://www.sagestoneinc.com`.
- Verify Bing Webmaster Tools for `https://www.sagestoneinc.com`.
- Submit `https://www.sagestoneinc.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Confirm the canonical domain in hosting/DNS so all non-www and HTTP variants redirect to `https://www.sagestoneinc.com`.
- Add a production-ready 1200x630 Open Graph image if social preview imagery is desired. No OG image URL was added because no suitable existing social preview image was found in `public/`.
- Track rankings and impressions for target keyword groups such as virtual assistant services, customer support outsourcing, e-commerce virtual assistant services, real estate virtual assistant support, social media management services, business operations support, and website maintenance services.

## Unresolved technical limitations

- Metadata is managed client-side for routed React pages. The static `index.html` contains improved default homepage metadata, but fully rendered per-route metadata for crawlers would require server-side rendering, prerendering, or static HTML generation.
- Host-level redirects may need confirmation in the live Cloudflare Pages configuration because some redirect behavior is controlled outside the repository.
- No verified company LinkedIn, Instagram, or other company social profile was available in the repository, so `sameAs` remains empty and placeholder footer links were removed.
