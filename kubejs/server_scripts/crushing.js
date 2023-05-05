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
    addCrushingRecipe(
        e,
        [Ingredient.of('#minecraft:logs')],
        [Item.of("indrev:sawdust", 1).withChance(0.75), Item.of("indrev:sawdust", 1).withChance(0.5), Item.of("indrev:sawdust", 1).withChance(0.5),
        Item.of("minecraft:stick", 1).withChance(0.5), Item.of("minecraft:stick", 1).withChance(0.5)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:bronze_ingot')],
        [Item.of("indrev:bronze_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('minecraft:coal')],
        [Item.of("indrev:coal_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('minecraft:copper_ingot')],
        [Item.of("indrev:copper_dust", 2)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('minecraft:diamond')],
        [Item.of("indrev:diamond_dust", 1), Item.of("createaddition:diamond_grit", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:electrum_ingot')],
        [Item.of("indrev:electrum_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('minecraft:gold_ingot')],
        [Item.of("indrev:gold_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('minecraft:iron_ingot')],
        [Item.of("indrev:iron_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:lead_ingot')],
        [Item.of("indrev:lead_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('minecraft:ancient_debris')],
        [Item.of("indrev:netherite_scrap_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Ingredient.of('#indrev:nikolite_ores')],
        [Item.of("indrev:nikolite_dust", 7)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:silver_ingot')],
        [Item.of("indrev:silver_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:steel_ingot')],
        [Item.of("indrev:steel_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('minecraft:gunpowder')],
        [Item.of("indrev:sulfur_dust", 1)],
        200
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:sulfur_crystal')],
        [Item.of("indrev:sulfur_dust", 2)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:tin_ingot')],
        [Item.of("indrev:tin_dust", 1)],
        500
     );
    
    addCrushingRecipe(
        e,
        [Item.of('indrev:tungsten_ingot')],
        [Item.of("indrev:tungsten_dust", 1)],
        500
     );
});

