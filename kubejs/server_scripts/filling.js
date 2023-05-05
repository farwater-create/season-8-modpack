// priority: 1

function addFillingRecipe(
  e,
  ingredients,
  results
) {
  return e.recipes.create.filling({
    ingredients: ingredients.map((o) => o.toJson()),
    results: results.map((o) => o.toJson()),
  });
}

ServerEvents.recipes((e) => {
  addFillingRecipe(
    e,
    [Item.of("minecraft:string", 1), Fluid.of("farwater:liquid_rubber", 300*81)],
    [Item.of("farwater:rubber_string", 1)],
  );
    
  addFillingRecipe(
    e,
    [Item.of("minecraft:leather_boots", 1), Fluid.of("farwater:liquid_rubber", 1000*81)],
    [Item.of("farwater:rubber_boots", 1)],
  );
});
