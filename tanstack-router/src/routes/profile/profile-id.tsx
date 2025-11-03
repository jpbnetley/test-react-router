import { profileRouteSearchSchema } from "@/schemas/routes/profile/profile-route-search-schema";
import { createRoute } from "@tanstack/react-router";
import { profileRoute } from ".";

export const profileIdRoute = createRoute({
  getParentRoute: () => profileRoute,
  path: '$id',
  component: ProfilePage,
  validateSearch: (search) => profileRouteSearchSchema.parse(search),
});

function ProfilePage() {
  const { id } = profileIdRoute.useParams();
  const { name } = profileIdRoute.useSearch()
  
  return (
    <>
      <p>User ID: {id}</p>
      {name && <p>User Name: {name}</p>}
    </>
  );
}