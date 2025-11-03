import { createFileRoute } from '@tanstack/react-router'
import { Header } from 'lib'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
   <Header text="Home Page" />
  )
}
