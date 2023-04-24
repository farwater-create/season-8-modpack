// priority: 1

function addMixingRecipe(
  e,
  ingredients,
  results,
  heatRequirement,
  processingTime
) {
  return e.recipes.create.mixing({
    ingredients: ingredients.map((o) => o.toJson()),
    results: results.map((o) => o.toJson()),
    heatRequirement: heatRequirement,
    processingTime: processingTime,
  });
}

ServerEvents.recipes((e) => {
  addMixingRecipe(
    e,
    [Item.of("create:crimsite", 1), Item.of("minecraft:blackstone", 1)],
    [Item.of("create:crimsite").withChance(0.5)],
    "heated",
    100
  );

  addMixingRecipe(
    e,
    [Item.of("create:asurine", 1), Item.of("minecraft:cobbled_deepslate", 1)],
    [Item.of("create:asurine").withChance(0.5)],
    "heated",
    100
  );

  addMixingRecipe(
    e,
    [Item.of("create:ochrum", 1), Item.of("minecraft:sandstone", 1)],
    [Item.of("create:ochrum").withChance(0.5)],
    "heated",
    100
  );

  addMixingRecipe(
    e,
    [Item.of("create:veridium", 1), Item.of("minecraft:mossy_cobblestone", 1)],
    [Item.of("create:veridium").withChance(0.5)],
    "heated",
    100
  );

  addMixingRecipe(
    e,
    [Item.of("minecraft:blaze_powder", 1)],
    [Fluid.of("farwater:blazing_blood", 150*81)],
    "heated",
    500
  );

  addMixingRecipe(
    e,
    [Item.of("farwater:rubber_log", 1)],
    [Fluid.of("farwater:liquid_rubber", 50*81)],
    "heated",
    500
  );
});
