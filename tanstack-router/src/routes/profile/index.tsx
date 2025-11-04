import { createRoute, Outlet } from "@tanstack/react-router";
import { rootRoute } from "../root";

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'profile',
  component: () => <>
    <p>Profile page</p>
    <Outlet />
  </>,
});
