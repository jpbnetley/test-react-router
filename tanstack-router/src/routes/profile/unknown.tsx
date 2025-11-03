import { createRoute } from "@tanstack/react-router";
import { profileRoute } from ".";

export const unknownProfileRoute = createRoute({
  getParentRoute: () => profileRoute,
  path: 'unknown',
  component: UnknownProfilePage,
});

function UnknownProfilePage() {
  return <h1>Unknown Profile Page</h1>;
}