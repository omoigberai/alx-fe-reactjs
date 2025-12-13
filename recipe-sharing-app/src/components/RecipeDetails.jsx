import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../components/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
      <br />
      <br />

      <DeleteRecipeButton recipeId={recipe.id} />

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
