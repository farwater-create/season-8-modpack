// priority: 1

function addCrushingRecipe(
  e,
  ingredients,
  results,
  processingTime
) {
  return e.recipes.create.crushing({
    ingredients: ingredients.map((o) => o.toJson()),
    results: results.map((o) => o.toJson()),
    processingTime: processingTime,
  });
}

ServerEvents.recipes((e) => {

 
  
});

