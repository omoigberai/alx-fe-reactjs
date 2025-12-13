import axios from "axios";

export const advancedSearchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build GitHub advanced query
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(
      query.trim()
    )}`;

    const response = await axios.get(url);
    return response.data.items; // GitHub returns results inside .items
  } catch (err) {
    throw new Error("Advanced search failed");
  }
};
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (err) {
    throw new Error("User not found");
  }
};
