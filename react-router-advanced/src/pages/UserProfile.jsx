import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing profile for user ID: {userId}</p>
    </div>
  );
}
