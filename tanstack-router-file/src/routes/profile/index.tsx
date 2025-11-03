import { createFileRoute } from '@tanstack/react-router'
import { Header } from "lib";

export const Route = createFileRoute('/profile/')({
  component: HomePage
})

function HomePage() {
  return <Header text="Profile Home Page" />;
}
