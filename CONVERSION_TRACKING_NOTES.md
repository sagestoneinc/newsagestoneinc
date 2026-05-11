# Conversion Tracking Notes

## Events implemented

- `generate_lead`: fires after the contact form receives a successful response from the current `/api/contact` submission flow.
- `cta_click`: fires for general CTA buttons and banners.
- `service_cta_click`: fires for service-page hero, intro/body, and final CTA clicks.
- `blog_to_service_click`: fires when users click markdown-style contextual internal links inside blog article bodies.
- `case_study_to_service_click`: fires when users click service links on case-study pages.
- `contact_intent_click`: fires for header and footer consultation/contact CTAs.
- `email_click`: fires for visible email links in the contact page and footer.
- `phone_click`: fires for visible phone links in the contact page and footer.

## Where events fire

- Homepage hero CTA, services CTA, and bottom CTA.
- Navigation “Book a Free Consultation” CTA on desktop and mobile.
- Footer contact CTA, email link, and phone link.
- Service-page hero CTAs, intro CTA, resource links, related service links, and final CTA.
- Blog article contextual links and end CTA.
- Case-study service links and end CTA.
- Contact form successful submission.

## Parameters used

Common non-PII parameters include:

- `location`
- `page_path`
- `cta_text`
- `target_url`
- `service`
- `content_type`
- `content_title`
- `form_name`

## PII policy

No personal form data is sent to analytics. Do not send names, email addresses, phone numbers, business names, message content, or free-form field values to GA4, PostHog, or other analytics tools.

## GA4 setup reminder

- Ensure the GA4 tag is installed on production.
- Mark `generate_lead` as a key event/conversion in GA4.
- Test events in GA4 DebugView and Realtime reports after deployment.

## Search Console reminder

- Use URL Inspection for the new pages.
- Submit the updated sitemap in Google Search Console.
- Submit the updated sitemap in Bing Webmaster Tools.

## QA checklist

- CTAs still navigate correctly.
- Contact form still works.
- No JavaScript errors appear on click.
- Events appear in analytics after deployment.
- New pages are indexable and included in the sitemap.
- New pages are linked from crawlable pages.
