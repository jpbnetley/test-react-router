import { createRoute, Outlet } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { unknownProfileRoute } from "./unknown";
import { profileIdRoute } from "./profile-id";

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'profile',
  component: () => <>
    <p>Profile page</p>
    <Outlet />
  </>,
});


export default [profileRoute, unknownProfileRoute, profileIdRoute];