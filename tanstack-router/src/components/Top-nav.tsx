import { Link } from "@tanstack/react-router";

const activeProps = {
  className:
    "text-cyan-600",
}

export function TopNav() {
  return (
    <>
      <Link to="/" activeProps={activeProps}>Home</Link>
      <Link to="/about" activeProps={activeProps}>About</Link>
      <Link to="/profile" activeProps={activeProps}>Profile</Link>
      <Link to="/profile/$id" params={{ id: '22'}} activeProps={activeProps}>With Id and name</Link>
      <Link to="/profile/$id" params={{ id: '22'}} search={{ name: 'searcher' }} activeProps={activeProps}>With Id and name search params</Link>
      <Link to="/profile/unknown" activeProps={activeProps}>Unknown Profile</Link>
    </>
    )
  }