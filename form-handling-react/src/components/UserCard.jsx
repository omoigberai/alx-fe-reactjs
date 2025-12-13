const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} width="120" />

      <h3>{user.name || "No name available"}</h3>
      <p>@{user.login}</p>

      <p>{user.bio || "No bio available"}</p>

      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
};

export default UserCard;
