import { Link } from "react-router-dom"

export function TopNav() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}