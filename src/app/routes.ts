import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import WhySageStone from "./pages/WhySageStone";
import Solutions from "./pages/Solutions";
import Faqs from "./pages/Faqs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "why-sagestone", Component: WhySageStone },
      { path: "solutions", Component: Solutions },
      { path: "faqs", Component: Faqs },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
