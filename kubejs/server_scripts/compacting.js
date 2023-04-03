// priority: 1

function addRecipe(e, ingredients, results) {
 	return e.recipes.create.compacting({
        ingredients: ingredients.map(o => o.toJson()),
        results: results.map(o => o.toJson()),
    });
}


ServerEvents.recipes(e => {
   	addRecipe(e,
		[Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), 
         Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"),Item.of("minecraft:cobblestone"), Item.of("minecraft:cobblestone"), 
         Item.of("minecraft:cobblestone"), Fluid.of("minecraft:lava", 4050)],
        [Item.of("minecraft:cobbled_deepslate", 1)],
	);
})