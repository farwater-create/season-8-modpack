// priority: 1

function addCompactingRecipe(e, ingredients, results) {
 	return e.recipes.create.compacting({
        ingredients: ingredients.map(o => o.toJson()),
        results: results.map(o => o.toJson()),
    });
}


ServerEvents.recipes(e => {
   	addCompactingRecipe(e,
		[Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), 
         Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"),Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), 
         Item.of("minecraft:cobblestone"), Fluid.of("minecraft:lava", 100 * 81)],
        [Item.of("minecraft:cobbled_deepslate", 1)],
	);
    
     addCompactingRecipe(e,
		[Fluid.of("farwater:liquid_rubber", 1000 * 81)],
        [Item.of("create:belt_connector", 1)],
	);
})