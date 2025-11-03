import { profileRouteSearchSchema } from '@/schemas/routes/profile/profile-route-search-schema'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/$id')({
  component: ProfilePage,
  validateSearch: (search) => profileRouteSearchSchema.parse(search),
})

function ProfilePage() {
  const { id } = Route.useParams();
  const { name } = Route.useSearch()
  
  return (
    <>
      <h1>Profile Page</h1>
      <p>User ID: {id}</p>
      {name && <p>User Name: {name}</p>}
    </>
  );
}