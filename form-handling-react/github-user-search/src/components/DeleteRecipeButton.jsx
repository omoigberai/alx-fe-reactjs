import { useRecipeStore } from "../stores/recipeStore";

export default function DeleteRecipeButton({ recipeId, onDelete }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDelete) onDelete();
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}
