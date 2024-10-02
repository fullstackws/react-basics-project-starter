import { useState } from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import React from "react";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const onSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const onBackToList = () => {
    setSelectedRecipe(null); // Reset selection to go back to the list
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={onBackToList} />
      ) : (
        <RecipeListPage onSelectRecipe={onSelectRecipe} />
      )}
    </div>
  );
};

export default App;
