import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-4 text-blue-600 p-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-b-lg"
        />
        <div className="p-4">
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-700">{recipe.summary}</p>
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients
                ? recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
                : ["No ingredients listed"]}
            </ul>
          </section>
          <section className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <p className="text-gray-700">{recipe.instructions || "No instructions provided"}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
