import { createFileRoute } from '@tanstack/react-router'
import { Header } from 'lib'

export const Route = createFileRoute('/profile/unknown')({
  component: UnknownProfilePage,
})

function UnknownProfilePage() {
  return <Header text="Unknown Profile Page" />
}