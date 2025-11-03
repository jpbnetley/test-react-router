import { Header, StandardCard } from "lib";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return <>
  <Header text="About Page" />
  <StandardCard title="About Us" content="This is the about page content." />
  </>;
}
