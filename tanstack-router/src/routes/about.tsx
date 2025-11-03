
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { Header, StandardCard } from "lib";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'about',
  component: AboutPage
})



function AboutPage() {
  return <>
  <Header text="About Page" />
  <StandardCard title="About Us" content="This is the about page content." />
  </>;
}
