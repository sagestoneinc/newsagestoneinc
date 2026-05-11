export type AnalyticsParams = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
    posthog?: {
      capture?: (eventName: string, params?: Record<string, unknown>) => void;
    };
  }
}

function cleanParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

function pagePath() {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const eventParams = cleanParams({ page_path: pagePath(), ...params });

  try {
    window.gtag?.("event", eventName, eventParams);
  } catch {
    // Analytics must never block navigation or user actions.
  }

  try {
    window.posthog?.capture?.(eventName, eventParams);
  } catch {
    // Analytics must fail silently if PostHog is unavailable.
  }
}

export function trackLead(params: AnalyticsParams = {}) {
  trackEvent("generate_lead", params);
}

export function trackCtaClick(params: AnalyticsParams = {}) {
  const { event_name: eventName, ...eventParams } = params;
  trackEvent(typeof eventName === "string" ? eventName : "cta_click", eventParams);
}

export function trackInternalLinkClick(params: AnalyticsParams = {}) {
  trackEvent("internal_link_click", params);
}
