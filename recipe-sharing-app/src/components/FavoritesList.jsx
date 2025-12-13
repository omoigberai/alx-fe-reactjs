import { useRecipeStore } from "./recipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>

      {recipes.length === 0 && <p>No recipes available.</p>}

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
