import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhySageStone from "./pages/WhySageStone";
import Solutions from "./pages/Solutions";
import SolutionPage from "./pages/SolutionPage";
import Faqs from "./pages/Faqs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import SeoServicePage from "./pages/SeoServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      // { path: "team", Component: Team }, // Temporarily disabled
      { path: "why-sagestone", Component: WhySageStone },
      { path: "solutions", Component: Solutions },
      { path: "solutions/:slug", Component: SolutionPage },
      { path: "virtual-assistant-services", Component: SeoServicePage },
      { path: "customer-support-outsourcing", Component: SeoServicePage },
      { path: "ecommerce-virtual-assistant", Component: SeoServicePage },
      { path: "real-estate-virtual-assistant", Component: SeoServicePage },
      { path: "social-media-management-services", Component: SeoServicePage },
      { path: "business-operations-support", Component: SeoServicePage },
      { path: "web-design-maintenance", Component: SeoServicePage },
      { path: "faqs", Component: Faqs },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
