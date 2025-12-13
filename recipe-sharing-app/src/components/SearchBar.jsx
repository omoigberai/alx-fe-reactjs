import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(); // run filtering
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{ padding: "8px", width: "100%", marginBottom: "15px" }}
    />
  );
};

export default SearchBar;
