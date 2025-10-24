import { Link } from "react-router-dom"

export function TopNav() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile/22?name=John">With Id and name</Link>
      <Link to="/profile/unknown">Unknown</Link>
    </>
  );
}