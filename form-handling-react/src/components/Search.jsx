import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-3 rounded"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Search
        </button>
      </form>

      <div className="mt-6 text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {user && (
          <div className="bg-white shadow p-4 rounded-lg mt-4">
            <img
              src={user.avatar_url}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="mt-2 text-xl font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-600 underline"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
