import { Header, StandardCard } from "lib";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <Header text="About Page" />
  <StandardCard title="About Us" content="This is the about page content." />
  </>;
}
