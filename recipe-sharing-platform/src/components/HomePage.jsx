import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // import Link
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); // Load mock data into state
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Recipe Sharing Platform
      </h1>

      {/* Link to Add Recipe Form */}
      <Link
        to="/add"
        className="inline-block mb-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Add New Recipe
      </Link>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
