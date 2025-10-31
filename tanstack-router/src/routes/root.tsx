import { TopNav } from "@/components/Top-nav";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MainLayout } from "lib";

export const rootRoute = createRootRoute({
  component: () => (
    <MainLayout topNav={<TopNav />}>
      <Outlet />
      <TanStackRouterDevtools />
    </MainLayout>
  ),
})