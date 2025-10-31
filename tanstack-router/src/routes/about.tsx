import { AboutPage } from "@/pages/about";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'about',
  component: AboutPage
})