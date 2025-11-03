import { createFileRoute } from '@tanstack/react-router'
import { Header } from "lib";

export const Route = createFileRoute('/profile/')({
  component: RouteComponent
})

function RouteComponent() {
  return <Header text="Profile Home Page" />;
}
