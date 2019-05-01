

var recipeCard = {
    title: "Hey",
    servings: 2,
    ingredients: ["Flour", "Eye"]
};

fill(26, 26, 26);
textSize(20);
text(recipeCard.title, 10, 23);
text("Serves: " + recipeCard.servings, 10, 55);
text("Ingredients: " + recipeCard.ingredients, 10, 85);
