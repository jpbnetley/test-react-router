import { useParams } from "react-router";

export function ProfilePage() {
  const { id } = useParams();
  const name = new URLSearchParams(window.location.search).get("name");
  return (
    <>
      <h1>Profile Page</h1>
      <p>User ID: {id}</p>
      {name && <p>User Name: {name}</p>}
    </>
  );
}