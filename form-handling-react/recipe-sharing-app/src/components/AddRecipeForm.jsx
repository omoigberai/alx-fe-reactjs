import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !instructions.trim()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      instructions,
    };

    addRecipe(newRecipe);

    // Clear inputs
    setTitle("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>

      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </div>

      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
