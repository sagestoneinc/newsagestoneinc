import { createElement, lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhySageStone from "./pages/WhySageStone";
import Solutions from "./pages/Solutions";
import SolutionPage from "./pages/SolutionPage";
import Faqs from "./pages/Faqs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import SeoServicePage from "./pages/SeoServicePage";
import VirtualAssistantVsInHouseAdmin from "./pages/VirtualAssistantVsInHouseAdmin";
import OutsourcedSupportForSmallBusinesses from "./pages/OutsourcedSupportForSmallBusinesses";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import WorkflowAssessment from "./pages/WorkflowAssessment";
import { canonicalRoutes } from "./data/site";
const JeselSeoPage = lazy(() => import("./pages/JeselSeoPage"));
const LazyJeselSeoPage = () => createElement(Suspense, { fallback: createElement("div", { className: "min-h-screen" }) }, createElement(JeselSeoPage));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "expertise", element: createElement(Navigate, { to: "/services", replace: true }) },
      { path: "work/:slug", element: createElement(Navigate, { to: "/case-studies/:slug", replace: true }) },
      ...canonicalRoutes.filter((route) => route.path !== "/" && !["/about", "/contact", "/blog", "/case-studies"].includes(route.path)).map((route) => ({ path: route.path.slice(1), Component: LazyJeselSeoPage })),
      // { path: "team", Component: Team }, // Temporarily disabled
      { path: "why-sagestone", Component: WhySageStone },
      { path: "solutions", Component: Solutions },
      { path: "solutions/:slug", Component: SolutionPage },
      { path: "virtual-assistant-services", Component: SeoServicePage },
      { path: "customer-support-outsourcing", Component: SeoServicePage },
      { path: "customer-support", Component: SeoServicePage },
      { path: "customer-support-virtual-assistant", Component: SeoServicePage },
      { path: "ecommerce-customer-support-outsourcing", Component: SeoServicePage },
      { path: "ecommerce-operations-support", Component: SeoServicePage },
      { path: "ecommerce-virtual-assistant", Component: SeoServicePage },
      { path: "real-estate-virtual-assistant-services", Component: SeoServicePage },
      { path: "real-estate-virtual-assistant", Component: SeoServicePage },
      { path: "social-media-management-services", Component: SeoServicePage },
      { path: "social-media-support", Component: SeoServicePage },
      { path: "social-media-virtual-assistant", Component: SeoServicePage },
      { path: "business-operations-support", Component: SeoServicePage },
      { path: "crm-admin-support", Component: SeoServicePage },
      { path: "gohighlevel-virtual-assistant", Component: SeoServicePage },
      { path: "web-design-maintenance-services", Component: SeoServicePage },
      { path: "web-maintenance-support", Component: SeoServicePage },
      { path: "web-maintenance-services", Component: SeoServicePage },
      { path: "web-design-maintenance", element: createElement(Navigate, { to: "/web-design-maintenance-services", replace: true }) },
      { path: "virtual-assistant-vs-in-house-admin", Component: VirtualAssistantVsInHouseAdmin },
      { path: "outsourced-support-for-small-businesses", Component: OutsourcedSupportForSmallBusinesses },
      { path: "industries-we-serve", Component: IndustriesWeServe },
      { path: "faqs", Component: Faqs },
      { path: "faq", Component: LazyJeselSeoPage },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "case-studies", Component: CaseStudies },
      { path: "case-studies/:slug", Component: CaseStudy },
      { path: "free-workflow-assessment", Component: WorkflowAssessment },
      { path: "contact", Component: Contact },
      { path: "thank-you", Component: ThankYou },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
