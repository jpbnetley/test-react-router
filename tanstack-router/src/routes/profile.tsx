import { ProfilePage } from "@/pages/profile";
import { UnknownProfilePage } from "@/pages/unknown-profile";
import { createRoute, Outlet } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { profileRouteSearchSchema } from "@/schemas/routes/profile/profile-route-search-schema";

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'profile',
  component: () => <>
    <p>Profile page</p>
    <Outlet />
  </>,
});

export const unknownProfileRoute = createRoute({
  getParentRoute: () => profileRoute,
  path: 'unknown',
  component: UnknownProfilePage,
});

export const profileIdRoute = createRoute({
  getParentRoute: () => profileRoute,
  path: '$id',
  component: ProfilePage,
  validateSearch: (search) => profileRouteSearchSchema.parse(search),
});

export default [profileRoute, unknownProfileRoute, profileIdRoute];