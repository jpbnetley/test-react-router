import { Route } from "@/routes/profile/$id";

export function ProfilePage() {
  const { id } = Route.useParams();
  const { name } = Route.useSearch()
  
  return (
    <>
      <h1>Profile Page</h1>
      <p>User ID: {id}</p>
      {name && <p>User Name: {name}</p>}
    </>
  );
}