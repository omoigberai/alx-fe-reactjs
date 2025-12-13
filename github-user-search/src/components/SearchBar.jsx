import { useState } from "react";
import { searchUsers } from "../services/githubService";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setResults([]);

    try {
      const data = await searchUsers(username, location, minRepos);

      setResults(data.items || []);
      setStatus("done");
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Advanced GitHub User Search
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Location (e.g. Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Status Messages */}
      {status === "loading" && <p className="mt-4 text-center">Searching...</p>}
      {status === "error" && (
        <p className="mt-4 text-center text-red-600">
          Something went wrong. Try again!
        </p>
      )}

      {/* Display Results */}
      {status === "done" && (
        <div className="mt-6 space-y-4">
          {results.length === 0 ? (
            <p className="text-center">No users found.</p>
          ) : (
            results.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-4 p-3 border rounded"
              >
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
