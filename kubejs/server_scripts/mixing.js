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
    [Fluid.of("farwater:blazing_blood", 16200)],
    "heated",
    500
  );

  // addMixingRecipe(
  //   e,
  //   [Item.of("techreborn:rubber", 1),Fluid.of("createaddition:seed_oil", 200*81)],
  //   [Fluid.of("farwater:rubber", 800*81)],
  //   "heated",
  //   200
  // );
  addMixingRecipe(
    e,
    [Item.of("minecraft:slime_ball", 1),Fluid.of("createaddition:seed_oil", 200*81)],
    [Fluid.of("farwater:rubber", 400*81)],
    "heated",
    500
  );
  addMixingRecipe(
    e,
    [Item.of("minecraft:slime_ball", 1),Fluid.of("minecraft:water", 200*81)],
    [Fluid.of("farwater:rubber", 200*81)],
    "heated",
    500
  );
  // addMixingRecipe(
  //   e,
  //   [Item.of("techreborn:rubber", 1),Fluid.of("minecraft:water", 200*81)],
  //   [Fluid.of("farwater:rubber", 400*81)],
  //   "heated",
  //   200
  // );
});
