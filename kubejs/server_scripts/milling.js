// priority: 1

function addMillingRecipe(
  e,
  input,
  results
) {
  return e.recipes.create.milling({
    ingredients: [input].map((o) => o.toJson()),
    results: results.map((o) => o.toJson())
  });
}

ServerEvents.recipes((e) => {
  addMillingRecipe(
    e,
    Item.of("minecraft:diorite", 1),
    [Item.of("minecraft:white_dye",4),Item.of("minecraft:white_dye",2).withChance(0.5)]
  );
  addMillingRecipe(
    e,
    Item.of("minecraft:kelp", 1),
    [Item.of("minecraft:green_dye",1),Item.of("minecraft:green_dye",1).withChance(0.5)]
  );
});
