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
    e.recipes.create.mixing(
	    [Item.of("create:crimsite"), Item.of("create:crimsite").withChance(0.2)],
    	[Item.of("create:crimsite"), Item.of("minecraft:blackstone")],
    ).heated().processingTime(400);
    
    e.recipes.create.mixing(
	    [Item.of("create:asurine"), Item.of("create:asurine").withChance(0.2)],
    	[Item.of("create:asurine"), Item.of("minecraft:cobbled_deepslate")],
    ).heated().processingTime(400);
    
    e.recipes.create.mixing(
	    [Item.of("create:veridium"), Item.of("create:veridium").withChance(0.2)],
    	[Item.of("create:veridium"), Item.of("minecraft:mossy_cobblestone")],
    ).heated().processingTime(400);
    
    e.recipes.create.mixing(
	    [Item.of("create:ochrum"), Item.of("create:ochrum").withChance(0.2)],
    	[Item.of("create:ochrum"), Item.of("minecraft:sandstone")],
    ).heated().processingTime(400);
    
    e.recipes.create.mixing(
        [Fluid.of("farwater:liquid_rubber", 50*81)],
        [Item.of("farwater:rubber_log", 1)],
    ).heated().processingTime(500);
    
    addMixingRecipe(
        e,
        [Item.of("minecraft:blaze_powder", 1)],
        [Fluid.of("farwater:blazing_blood", 150*81)],
        "heated",
        500
    );
});
