import { profileIdRoute } from "@/routes/profile";

export function ProfilePage() {
  const { id } = profileIdRoute.useParams();
  const { name } = profileIdRoute.useSearch()
  
  return (
    <>
      <p>User ID: {id}</p>
      {name && <p>User Name: {name}</p>}
    </>
  );
}