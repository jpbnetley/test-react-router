import { Header } from "lib";
import { createRoute, createRouter } from "@tanstack/react-router"
import { aboutRoute } from "./about"
import profileRoutes from "./profile"
import { rootRoute } from "./root"

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

function HomePage() {
  return <Header text="Home Page" />;
}


const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, ...profileRoutes])

export const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}