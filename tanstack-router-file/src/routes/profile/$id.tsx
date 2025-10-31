import { ProfilePage } from '@/pages/profile'
import { profileRouteSearchSchema } from '@/schemas/routes/profile/profile-route-search-schema'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/$id')({
  component: ProfilePage,
  validateSearch: (search) => profileRouteSearchSchema.parse(search),
})
